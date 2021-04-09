cargo build --package aero_boot --target x86_64-unknown-uefi -Z build-std=core,compiler_builtins,alloc -Z build-std-features=compiler-builtins-mem
mkdir build\efi\boot\
mkdir build\efi\kernel\
echo y | xcopy target\x86_64-unknown-uefi\debug\aero_boot.efi build\efi\boot\aero_boot.efi
qemu-system-x86_64 -drive format=raw,file=fat:rw:build/ -L "C:\Program Files\qemu" -drive if=pflash,format=raw,file=bundled/ovmf/OVMF_CODE.fd -drive if=pflash,format=raw,file=bundled/ovmf/OVMF_VARS.fd