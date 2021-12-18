#!/usr/bin/python3

import argparse
import json
import os
import platform
import shutil
import subprocess
import sys
import tarfile


# Make sure requests is installed
try:
    import requests
except ImportError:
    print('Please install required libraires using the following command:')
    print(' - python3 -m pip install requests')

    sys.exit(0)


import requests


OVMF_URL = 'https://github.com/rust-osdev/ovmf-prebuilt/releases/latest/download'
LIMINE_URL = 'https://github.com/limine-bootloader/limine'

BUILD_DIR = 'build'
BUNDLED_DIR = 'bundled'
OVMF_FILES = ['OVMF-pure-efi.fd']

LIMINE_TEMPLATE = """
TIMEOUT=0
VERBOSE=yes

:aero
PROTOCOL=stivale2
KERNEL_PATH=boot:///aero.elf
CMDLINE=term-background=background theme-background=0x50000000

MODULE_PATH=boot:///term_background.bmp
MODULE_STRING=background

MODULE_PATH=boot:///initramfs.cpio
MODULE_STRING=initramfs
"""


def remove_prefix(string: str, prefix: str):
    if string.startswith(prefix):
        return string[len(prefix):]
    else:
        return string[:]


def parse_args():
    parser = argparse.ArgumentParser(
        description="utility used to build aero kernel and userland")

    check_test = parser.add_mutually_exclusive_group()

    check_test.add_argument('--clean',
                            default=False,
                            action='store_true',
                            help='removes the build artifacts')

    check_test.add_argument('--check',
                            default=False,
                            action='store_true',
                            help='checks if aero builds correctly without packaging and running it')

    check_test.add_argument('--test',
                            default=False,
                            action='store_true',
                            help='runs the aero test suite')

    check_test.add_argument('--document',
                            default=False,
                            action='store_true',
                            help='generates the documentation for the aero kernel')

    parser.add_argument('--release',
                        default=False,
                        action='store_true',
                        help='builds the kernel and userland in release mode')

    parser.add_argument('--no-run',
                        default=False,
                        action='store_true',
                        help='doesn\'t run the built image in emulator when applicable')

    parser.add_argument('--bios',
                        type=str,
                        default='legacy',
                        choices=['legacy', 'uefi'],
                        help='run aero using the selected BIOS')

    parser.add_argument('--features',
                        type=lambda x: x.split(','),
                        default=[],
                        help='additional features to build the kernel with')

    parser.add_argument('--target',
                        default='x86_64-aero_os',
                        help='override the target triple the kernel will be built for')

    parser.add_argument('--la57',
                        default=False,
                        action='store_true',
                        help='run emulator with 5 level paging support')

    parser.add_argument('remaining',
                        nargs=argparse.REMAINDER,
                        help='additional arguments to pass as the emulator')

    return parser.parse_args()


def run_command(args, **kwargs):
    output = subprocess.run(args, **kwargs)

    return output.returncode, output.stdout, output.stderr


def download_bundled():
    if not os.path.exists(BUNDLED_DIR):
        os.makedirs(BUNDLED_DIR)

    ovmf_path = os.path.join(BUNDLED_DIR, 'ovmf')
    limine_path = os.path.join(BUNDLED_DIR, 'limine')

    if not os.path.exists(ovmf_path):
        os.makedirs(ovmf_path)

    for ovmf_file in OVMF_FILES:
        file_path = os.path.join(ovmf_path, ovmf_file)

        if not os.path.exists(file_path):
            with open(file_path, 'wb') as file:
                response = requests.get(f'{OVMF_URL}/{ovmf_file}')

                file.write(response.content)

    if not os.path.exists(limine_path):
        run_command(['git', 'clone', '--branch', 'latest-binary',
                    '--depth', '1', LIMINE_URL, limine_path])


def extract_artifacts(stdout):
    result = []
    lines = stdout.splitlines()

    for line in lines:
        info = json.loads(line)
        executable = info['executable'] if 'executable' in info else None

        if executable:
            result.append(info['executable'])

    return result


def build_cargo_workspace(cwd, command, args):
    code, _, _ = run_command(['cargo', command, *args], cwd=cwd)

    if code != 0:
        return None

    _, stdout, _ = run_command(['cargo', command, *args, '--message-format=json'],
                               stdout=subprocess.PIPE,
                               stderr=subprocess.DEVNULL,
                               cwd=cwd)

    return extract_artifacts(stdout)


def build_kernel(args):
    command = 'build'
    cmd_args = ['--package', 'aero_kernel',
                '--target', f'.cargo/{args.target}.json']

    if args.release:
        cmd_args += ['--release']

    if args.test:
        command = 'test'
        cmd_args += ['--no-run']
    elif args.check:
        command = 'check'
    elif args.document:
        command = 'doc'

    if args.features:
        cmd_args += ['--features', ','.join(args.features)]

    return build_cargo_workspace('src', command, cmd_args)


def build_userland(args):
    command = 'build'
    cmd_args = []

    if args.release:
        cmd_args += ['--release']

    if args.check:
        command = 'check'

    # TODO: Add support for userland tests?
    # if args.test:
    #     command = 'test'
    #     cmd_args += ['--no-run']
    # elif args.check:
    #     command = 'check'

    return build_cargo_workspace('userland', command, cmd_args)


def generate_docs(args):
    doc_dir = os.path.join('src', 'target', args.target, 'doc')
    out_dir = os.path.join(BUILD_DIR, 'web')

    if os.path.exists(out_dir):
        shutil.rmtree(out_dir)

    shutil.copytree('web', out_dir, dirs_exist_ok=True)
    shutil.copytree(doc_dir, out_dir, dirs_exist_ok=True)


def prepare_iso(args, kernel_bin, user_bins):
    if not os.path.exists(BUILD_DIR):
        os.makedirs(BUILD_DIR)

    iso_path = os.path.join(BUILD_DIR, 'aero.iso')
    iso_root = os.path.join(BUILD_DIR, 'iso_root')
    limine_path = os.path.join(BUNDLED_DIR, 'limine')

    if os.path.exists(iso_root):
        shutil.rmtree(iso_root)

    os.makedirs(iso_root)

    shutil.copy(kernel_bin, os.path.join(iso_root, 'aero.elf'))
    shutil.copy(os.path.join('src', '.cargo', 'term_background.bmp'), iso_root)
    shutil.copy(os.path.join(limine_path, 'limine.sys'), iso_root)
    shutil.copy(os.path.join(limine_path, 'limine-cd.bin'), iso_root)
    shutil.copy(os.path.join(limine_path, 'limine-eltorito-efi.bin'), iso_root)

    initramfs_root = os.path.join(BUILD_DIR, 'initramfs_root')
    initramfs_bin = os.path.join(initramfs_root, 'bin')

    if os.path.exists(initramfs_root):
        shutil.rmtree(initramfs_root)

    os.makedirs(initramfs_root)
    os.makedirs(initramfs_bin)

    for file in user_bins:
        bin_name = os.path.basename(file)

        shutil.copy(file, os.path.join(initramfs_bin, f'{bin_name}.elf'))

    _, find_output, _ = run_command(['find', '.', '-type', 'f'],
                                    cwd=initramfs_root,
                                    stdout=subprocess.PIPE)

    files_without_dot = filter(
        lambda x: x != '.', find_output.decode('utf-8').splitlines())
    files_without_prefix = map(
        lambda x: remove_prefix(x, './'), files_without_dot)
    files = list(files_without_prefix)

    with open(os.path.join(iso_root, 'initramfs.cpio'), 'wb') as initramfs:
        cpio_input = '\n'.join(files)
        code, _, _ = run_command(['cpio', '-o', '-v'],
                                 cwd=initramfs_root,
                                 stdout=initramfs,
                                 stderr=subprocess.PIPE,
                                 input=cpio_input.encode('utf-8'))

    with open(os.path.join(iso_root, 'limine.cfg'), 'w') as limine_cfg:
        limine_cfg.write(LIMINE_TEMPLATE)

    code, _, xorriso_stderr = run_command([
        'xorriso', '-as', 'mkisofs', '-b', 'limine-cd.bin', '-no-emul-boot', '-boot-load-size', '4',
        '-boot-info-table', '--efi-boot', 'limine-eltorito-efi.bin', '-efi-boot-part',
        '--efi-boot-image', '--protective-msdos-label', iso_root, '-o', iso_path
    ], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    if code != 0:
        print('Failed to create the ISO image')
        print(xorriso_stderr)

        return None

    limine_install = None

    if platform.system() == 'Windows':
        limine_install = 'limine-install-win32.exe'
    elif platform.system() == 'Linux':
        limine_install = 'limine-install-linux-x86_64'

    limine_install = os.path.join(limine_path, limine_install)

    code, _, limine_install_stderr = run_command([limine_install, iso_path],
                                                 stdout=subprocess.PIPE,
                                                 stderr=subprocess.PIPE)

    if code != 0:
        print('Failed to install Limine')
        print(limine_install_stderr)

        return None

    return iso_path


def run_in_emulator(args, iso_path):
    qemu_args = ['-cdrom', iso_path,
                 '-cpu', 'qemu64,+la57' if args.la57 else 'qemu64',
                 '-qmp', 'unix:build/qmp-sock,server,nowait',
                 '-M', 'q35',
                 '-m', '2G',
                 '-smp', '1',
                 '-serial', 'stdio']

    if args.bios == 'uefi':
        qemu_args += ['-bios', 'bundled/ovmf/OVMF-pure-efi.fd']

    cmdline = args.remaining

    if '--' in cmdline:
        cmdline.remove('--')

    if cmdline:
        qemu_args += cmdline

    try:
        run_command(['qemu-system-x86_64', *qemu_args])
    except KeyboardInterrupt:
        pass


def main():
    args = parse_args()

    download_bundled()

    if args.clean:
        src_target = os.path.join('src', 'target', args.target)
        userland_target = os.path.join('userland', 'target')

        if os.path.exists(src_target):
            shutil.rmtree(src_target)

        if os.path.exists(userland_target):
            shutil.rmtree(userland_target)
    elif args.document:
        build_kernel(args)

        generate_docs(args)
    else:
        user_bins = build_userland(args)

        if not user_bins:
            return

        kernel_bin = build_kernel(args)

        if not kernel_bin or args.check:
            return

        kernel_bin = kernel_bin[0]
        iso_path = prepare_iso(args, kernel_bin, user_bins)

        if not args.no_run:
            run_in_emulator(args, iso_path)


if __name__ == '__main__':
    main()
