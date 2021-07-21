(function() {var implementors = {};
implementors["aero_kernel"] = [{"text":"impl Extend&lt;<a class=\"struct\" href=\"aero_kernel/arch/x86_64/controlregs/struct.Cr3Flags.html\" title=\"struct aero_kernel::arch::x86_64::controlregs::Cr3Flags\">Cr3Flags</a>&gt; for <a class=\"struct\" href=\"aero_kernel/arch/x86_64/controlregs/struct.Cr3Flags.html\" title=\"struct aero_kernel::arch::x86_64::controlregs::Cr3Flags\">Cr3Flags</a>","synthetic":false,"types":["aero_kernel::arch::x86_64::controlregs::Cr3Flags"]},{"text":"impl Extend&lt;<a class=\"struct\" href=\"aero_kernel/arch/x86_64/controlregs/struct.Cr4Flags.html\" title=\"struct aero_kernel::arch::x86_64::controlregs::Cr4Flags\">Cr4Flags</a>&gt; for <a class=\"struct\" href=\"aero_kernel/arch/x86_64/controlregs/struct.Cr4Flags.html\" title=\"struct aero_kernel::arch::x86_64::controlregs::Cr4Flags\">Cr4Flags</a>","synthetic":false,"types":["aero_kernel::arch::x86_64::controlregs::Cr4Flags"]},{"text":"impl Extend&lt;<a class=\"struct\" href=\"aero_kernel/arch/x86_64/gdt/struct.SegmentSelector.html\" title=\"struct aero_kernel::arch::x86_64::gdt::SegmentSelector\">SegmentSelector</a>&gt; for <a class=\"struct\" href=\"aero_kernel/arch/x86_64/gdt/struct.SegmentSelector.html\" title=\"struct aero_kernel::arch::x86_64::gdt::SegmentSelector\">SegmentSelector</a>","synthetic":false,"types":["aero_kernel::arch::x86_64::gdt::SegmentSelector"]},{"text":"impl Extend&lt;<a class=\"struct\" href=\"aero_kernel/arch/x86_64/gdt/struct.GdtEntryFlags.html\" title=\"struct aero_kernel::arch::x86_64::gdt::GdtEntryFlags\">GdtEntryFlags</a>&gt; for <a class=\"struct\" href=\"aero_kernel/arch/x86_64/gdt/struct.GdtEntryFlags.html\" title=\"struct aero_kernel::arch::x86_64::gdt::GdtEntryFlags\">GdtEntryFlags</a>","synthetic":false,"types":["aero_kernel::arch::x86_64::gdt::GdtEntryFlags"]},{"text":"impl Extend&lt;<a class=\"struct\" href=\"aero_kernel/arch/x86_64/interrupts/idt/struct.IDTFlags.html\" title=\"struct aero_kernel::arch::x86_64::interrupts::idt::IDTFlags\">IDTFlags</a>&gt; for <a class=\"struct\" href=\"aero_kernel/arch/x86_64/interrupts/idt/struct.IDTFlags.html\" title=\"struct aero_kernel::arch::x86_64::interrupts::idt::IDTFlags\">IDTFlags</a>","synthetic":false,"types":["aero_kernel::arch::x86_64::interrupts::idt::IDTFlags"]},{"text":"impl Extend&lt;<a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.HBACapabilities.html\" title=\"struct aero_kernel::drivers::ahci::HBACapabilities\">HBACapabilities</a>&gt; for <a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.HBACapabilities.html\" title=\"struct aero_kernel::drivers::ahci::HBACapabilities\">HBACapabilities</a>","synthetic":false,"types":["aero_kernel::drivers::ahci::HBACapabilities"]},{"text":"impl Extend&lt;<a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.GlobalHBAControl.html\" title=\"struct aero_kernel::drivers::ahci::GlobalHBAControl\">GlobalHBAControl</a>&gt; for <a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.GlobalHBAControl.html\" title=\"struct aero_kernel::drivers::ahci::GlobalHBAControl\">GlobalHBAControl</a>","synthetic":false,"types":["aero_kernel::drivers::ahci::GlobalHBAControl"]},{"text":"impl Extend&lt;<a class=\"struct\" href=\"aero_kernel/drivers/mouse/struct.MouseFlags.html\" title=\"struct aero_kernel::drivers::mouse::MouseFlags\">MouseFlags</a>&gt; for <a class=\"struct\" href=\"aero_kernel/drivers/mouse/struct.MouseFlags.html\" title=\"struct aero_kernel::drivers::mouse::MouseFlags\">MouseFlags</a>","synthetic":false,"types":["aero_kernel::drivers::mouse::MouseFlags"]},{"text":"impl Extend&lt;<a class=\"struct\" href=\"aero_kernel/drivers/uart_16550/struct.InterruptEnable.html\" title=\"struct aero_kernel::drivers::uart_16550::InterruptEnable\">InterruptEnable</a>&gt; for <a class=\"struct\" href=\"aero_kernel/drivers/uart_16550/struct.InterruptEnable.html\" title=\"struct aero_kernel::drivers::uart_16550::InterruptEnable\">InterruptEnable</a>","synthetic":false,"types":["aero_kernel::drivers::uart_16550::InterruptEnable"]},{"text":"impl Extend&lt;<a class=\"struct\" href=\"aero_kernel/drivers/uart_16550/struct.LineStatus.html\" title=\"struct aero_kernel::drivers::uart_16550::LineStatus\">LineStatus</a>&gt; for <a class=\"struct\" href=\"aero_kernel/drivers/uart_16550/struct.LineStatus.html\" title=\"struct aero_kernel::drivers::uart_16550::LineStatus\">LineStatus</a>","synthetic":false,"types":["aero_kernel::drivers::uart_16550::LineStatus"]},{"text":"impl Extend&lt;<a class=\"struct\" href=\"aero_kernel/mem/paging/page_table/struct.PageTableFlags.html\" title=\"struct aero_kernel::mem::paging::page_table::PageTableFlags\">PageTableFlags</a>&gt; for <a class=\"struct\" href=\"aero_kernel/mem/paging/page_table/struct.PageTableFlags.html\" title=\"struct aero_kernel::mem::paging::page_table::PageTableFlags\">PageTableFlags</a>","synthetic":false,"types":["aero_kernel::mem::paging::page_table::PageTableFlags"]},{"text":"impl Extend&lt;<a class=\"struct\" href=\"aero_kernel/mem/paging/struct.PageFaultErrorCode.html\" title=\"struct aero_kernel::mem::paging::PageFaultErrorCode\">PageFaultErrorCode</a>&gt; for <a class=\"struct\" href=\"aero_kernel/mem/paging/struct.PageFaultErrorCode.html\" title=\"struct aero_kernel::mem::paging::PageFaultErrorCode\">PageFaultErrorCode</a>","synthetic":false,"types":["aero_kernel::mem::paging::PageFaultErrorCode"]}];
implementors["hashbrown"] = [{"text":"impl&lt;K, V, S, A&gt; Extend&lt;(K, V)&gt; for <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Allocator + Clone,&nbsp;</span>","synthetic":false,"types":["hashbrown::map::HashMap"]},{"text":"impl&lt;'a, K, V, S, A&gt; Extend&lt;(&amp;'a K, &amp;'a V)&gt; for <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Eq + Hash + Copy,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Copy,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Allocator + Clone,&nbsp;</span>","synthetic":false,"types":["hashbrown::map::HashMap"]},{"text":"impl&lt;T, S, A&gt; Extend&lt;T&gt; for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Allocator + Clone,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::HashSet"]},{"text":"impl&lt;'a, T, S, A&gt; Extend&lt;&amp;'a T&gt; for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + Eq + Hash + Copy,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Allocator + Clone,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::HashSet"]}];
implementors["stivale_boot"] = [{"text":"impl Extend&lt;<a class=\"struct\" href=\"stivale_boot/v1/struct.StivaleHeaderFlags.html\" title=\"struct stivale_boot::v1::StivaleHeaderFlags\">StivaleHeaderFlags</a>&gt; for <a class=\"struct\" href=\"stivale_boot/v1/struct.StivaleHeaderFlags.html\" title=\"struct stivale_boot::v1::StivaleHeaderFlags\">StivaleHeaderFlags</a>","synthetic":false,"types":["stivale_boot::v1::StivaleHeaderFlags"]},{"text":"impl Extend&lt;<a class=\"struct\" href=\"stivale_boot/v2/struct.StivaleSmpHeaderTagFlags.html\" title=\"struct stivale_boot::v2::StivaleSmpHeaderTagFlags\">StivaleSmpHeaderTagFlags</a>&gt; for <a class=\"struct\" href=\"stivale_boot/v2/struct.StivaleSmpHeaderTagFlags.html\" title=\"struct stivale_boot::v2::StivaleSmpHeaderTagFlags\">StivaleSmpHeaderTagFlags</a>","synthetic":false,"types":["stivale_boot::v2::header::StivaleSmpHeaderTagFlags"]},{"text":"impl Extend&lt;<a class=\"struct\" href=\"stivale_boot/v2/struct.StivaleFirmwareTagFlags.html\" title=\"struct stivale_boot::v2::StivaleFirmwareTagFlags\">StivaleFirmwareTagFlags</a>&gt; for <a class=\"struct\" href=\"stivale_boot/v2/struct.StivaleFirmwareTagFlags.html\" title=\"struct stivale_boot::v2::StivaleFirmwareTagFlags\">StivaleFirmwareTagFlags</a>","synthetic":false,"types":["stivale_boot::v2::tag::StivaleFirmwareTagFlags"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()