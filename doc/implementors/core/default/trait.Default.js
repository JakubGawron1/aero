(function() {var implementors = {};
implementors["aero_kernel"] = [{"text":"impl Default for <a class=\"struct\" href=\"aero_kernel/arch/x86_64/task/struct.Context.html\" title=\"struct aero_kernel::arch::x86_64::task::Context\">Context</a>","synthetic":false,"types":["aero_kernel::arch::x86_64::task::Context"]},{"text":"impl Default for <a class=\"struct\" href=\"aero_kernel/drivers/mouse/struct.MouseFlags.html\" title=\"struct aero_kernel::drivers::mouse::MouseFlags\">MouseFlags</a>","synthetic":false,"types":["aero_kernel::drivers::mouse::MouseFlags"]},{"text":"impl Default for <a class=\"enum\" href=\"aero_kernel/fs/inode/enum.FileContents.html\" title=\"enum aero_kernel::fs::inode::FileContents\">FileContents</a>","synthetic":false,"types":["aero_kernel::fs::inode::FileContents"]},{"text":"impl Default for <a class=\"enum\" href=\"aero_kernel/fs/inode/enum.FileType.html\" title=\"enum aero_kernel::fs::inode::FileType\">FileType</a>","synthetic":false,"types":["aero_kernel::fs::inode::FileType"]},{"text":"impl Default for <a class=\"struct\" href=\"aero_kernel/fs/ramfs/struct.RamINode.html\" title=\"struct aero_kernel::fs::ramfs::RamINode\">RamINode</a>","synthetic":false,"types":["aero_kernel::fs::ramfs::RamINode"]},{"text":"impl Default for <a class=\"struct\" href=\"aero_kernel/mem/paging/page_table/struct.PageTable.html\" title=\"struct aero_kernel::mem::paging::page_table::PageTable\">PageTable</a>","synthetic":false,"types":["aero_kernel::mem::paging::page_table::PageTable"]},{"text":"impl Default for <a class=\"struct\" href=\"aero_kernel/userland/task/struct.TaskAdapter.html\" title=\"struct aero_kernel::userland::task::TaskAdapter\">TaskAdapter</a>","synthetic":false,"types":["aero_kernel::userland::task::TaskAdapter"]}];
implementors["ahash"] = [{"text":"impl Default for <a class=\"struct\" href=\"ahash/struct.RandomState.html\" title=\"struct ahash::RandomState\">RandomState</a>","synthetic":false,"types":["ahash::random_state::RandomState"]},{"text":"impl Default for <a class=\"struct\" href=\"ahash/struct.AHasher.html\" title=\"struct ahash::AHasher\">AHasher</a>","synthetic":false,"types":["ahash::fallback_hash::AHasher"]}];
implementors["font8x8"] = [{"text":"impl Default for <a class=\"struct\" href=\"font8x8/unicode/struct.BasicFonts.html\" title=\"struct font8x8::unicode::BasicFonts\">BasicFonts</a>","synthetic":false,"types":["font8x8::basic::BasicFonts"]},{"text":"impl Default for <a class=\"struct\" href=\"font8x8/unicode/struct.BlockFonts.html\" title=\"struct font8x8::unicode::BlockFonts\">BlockFonts</a>","synthetic":false,"types":["font8x8::block::BlockFonts"]},{"text":"impl Default for <a class=\"struct\" href=\"font8x8/unicode/struct.BoxFonts.html\" title=\"struct font8x8::unicode::BoxFonts\">BoxFonts</a>","synthetic":false,"types":["font8x8::box_chars::BoxFonts"]},{"text":"impl Default for <a class=\"struct\" href=\"font8x8/unicode/struct.GreekFonts.html\" title=\"struct font8x8::unicode::GreekFonts\">GreekFonts</a>","synthetic":false,"types":["font8x8::greek::GreekFonts"]},{"text":"impl Default for <a class=\"struct\" href=\"font8x8/unicode/struct.HiraganaFonts.html\" title=\"struct font8x8::unicode::HiraganaFonts\">HiraganaFonts</a>","synthetic":false,"types":["font8x8::hiragana::HiraganaFonts"]},{"text":"impl Default for <a class=\"struct\" href=\"font8x8/unicode/struct.LatinFonts.html\" title=\"struct font8x8::unicode::LatinFonts\">LatinFonts</a>","synthetic":false,"types":["font8x8::latin::LatinFonts"]},{"text":"impl Default for <a class=\"struct\" href=\"font8x8/unicode/struct.MiscFonts.html\" title=\"struct font8x8::unicode::MiscFonts\">MiscFonts</a>","synthetic":false,"types":["font8x8::misc::MiscFonts"]},{"text":"impl Default for <a class=\"struct\" href=\"font8x8/unicode/struct.SgaFonts.html\" title=\"struct font8x8::unicode::SgaFonts\">SgaFonts</a>","synthetic":false,"types":["font8x8::sga::SgaFonts"]}];
implementors["hashbrown"] = [{"text":"impl&lt;K, V, S, A&gt; Default for <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Default,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Default + Allocator + Clone,&nbsp;</span>","synthetic":false,"types":["hashbrown::map::HashMap"]},{"text":"impl&lt;T, S, A&gt; Default for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Default,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Default + Allocator + Clone,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::HashSet"]}];
implementors["intrusive_collections"] = [{"text":"impl&lt;Pointer&gt; Default for <a class=\"struct\" href=\"intrusive_collections/struct.DefaultPointerOps.html\" title=\"struct intrusive_collections::DefaultPointerOps\">DefaultPointerOps</a>&lt;Pointer&gt;","synthetic":false,"types":["intrusive_collections::pointer_ops::DefaultPointerOps"]},{"text":"impl Default for <a class=\"struct\" href=\"intrusive_collections/linked_list/struct.Link.html\" title=\"struct intrusive_collections::linked_list::Link\">Link</a>","synthetic":false,"types":["intrusive_collections::linked_list::Link"]},{"text":"impl Default for <a class=\"struct\" href=\"intrusive_collections/linked_list/struct.LinkOps.html\" title=\"struct intrusive_collections::linked_list::LinkOps\">LinkOps</a>","synthetic":false,"types":["intrusive_collections::linked_list::LinkOps"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a> + Default&gt; Default for <a class=\"struct\" href=\"intrusive_collections/linked_list/struct.LinkedList.html\" title=\"struct intrusive_collections::linked_list::LinkedList\">LinkedList</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a>: <a class=\"trait\" href=\"intrusive_collections/linked_list/trait.LinkedListOps.html\" title=\"trait intrusive_collections::linked_list::LinkedListOps\">LinkedListOps</a>,&nbsp;</span>","synthetic":false,"types":["intrusive_collections::linked_list::LinkedList"]},{"text":"impl Default for <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.Link.html\" title=\"struct intrusive_collections::rbtree::Link\">Link</a>","synthetic":false,"types":["intrusive_collections::rbtree::Link"]},{"text":"impl Default for <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.LinkOps.html\" title=\"struct intrusive_collections::rbtree::LinkOps\">LinkOps</a>","synthetic":false,"types":["intrusive_collections::rbtree::LinkOps"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a> + Default&gt; Default for <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.RBTree.html\" title=\"struct intrusive_collections::rbtree::RBTree\">RBTree</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a>: <a class=\"trait\" href=\"intrusive_collections/rbtree/trait.RBTreeOps.html\" title=\"trait intrusive_collections::rbtree::RBTreeOps\">RBTreeOps</a>,&nbsp;</span>","synthetic":false,"types":["intrusive_collections::rbtree::RBTree"]},{"text":"impl Default for <a class=\"struct\" href=\"intrusive_collections/singly_linked_list/struct.Link.html\" title=\"struct intrusive_collections::singly_linked_list::Link\">Link</a>","synthetic":false,"types":["intrusive_collections::singly_linked_list::Link"]},{"text":"impl Default for <a class=\"struct\" href=\"intrusive_collections/singly_linked_list/struct.LinkOps.html\" title=\"struct intrusive_collections::singly_linked_list::LinkOps\">LinkOps</a>","synthetic":false,"types":["intrusive_collections::singly_linked_list::LinkOps"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a> + Default&gt; Default for <a class=\"struct\" href=\"intrusive_collections/singly_linked_list/struct.SinglyLinkedList.html\" title=\"struct intrusive_collections::singly_linked_list::SinglyLinkedList\">SinglyLinkedList</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a>: <a class=\"trait\" href=\"intrusive_collections/singly_linked_list/trait.SinglyLinkedListOps.html\" title=\"trait intrusive_collections::singly_linked_list::SinglyLinkedListOps\">SinglyLinkedListOps</a>,&nbsp;</span>","synthetic":false,"types":["intrusive_collections::singly_linked_list::SinglyLinkedList"]},{"text":"impl Default for <a class=\"struct\" href=\"intrusive_collections/xor_linked_list/struct.Link.html\" title=\"struct intrusive_collections::xor_linked_list::Link\">Link</a>","synthetic":false,"types":["intrusive_collections::xor_linked_list::Link"]},{"text":"impl Default for <a class=\"struct\" href=\"intrusive_collections/xor_linked_list/struct.LinkOps.html\" title=\"struct intrusive_collections::xor_linked_list::LinkOps\">LinkOps</a>","synthetic":false,"types":["intrusive_collections::xor_linked_list::LinkOps"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a> + Default&gt; Default for <a class=\"struct\" href=\"intrusive_collections/xor_linked_list/struct.XorLinkedList.html\" title=\"struct intrusive_collections::xor_linked_list::XorLinkedList\">XorLinkedList</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a>: <a class=\"trait\" href=\"intrusive_collections/xor_linked_list/trait.XorLinkedListOps.html\" title=\"trait intrusive_collections::xor_linked_list::XorLinkedListOps\">XorLinkedListOps</a>,&nbsp;</span>","synthetic":false,"types":["intrusive_collections::xor_linked_list::XorLinkedList"]}];
implementors["lock_api"] = [{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a>, T:&nbsp;?Sized + Default&gt; Default for <a class=\"struct\" href=\"lock_api/struct.Mutex.html\" title=\"struct lock_api::Mutex\">Mutex</a>&lt;R, T&gt;","synthetic":false,"types":["lock_api::mutex::Mutex"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a>, G:&nbsp;<a class=\"trait\" href=\"lock_api/trait.GetThreadId.html\" title=\"trait lock_api::GetThreadId\">GetThreadId</a>, T:&nbsp;?Sized + Default&gt; Default for <a class=\"struct\" href=\"lock_api/struct.ReentrantMutex.html\" title=\"struct lock_api::ReentrantMutex\">ReentrantMutex</a>&lt;R, G, T&gt;","synthetic":false,"types":["lock_api::remutex::ReentrantMutex"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a>, T:&nbsp;?Sized + Default&gt; Default for <a class=\"struct\" href=\"lock_api/struct.RwLock.html\" title=\"struct lock_api::RwLock\">RwLock</a>&lt;R, T&gt;","synthetic":false,"types":["lock_api::rwlock::RwLock"]}];
implementors["raw_cpuid"] = [{"text":"impl Default for <a class=\"struct\" href=\"raw_cpuid/struct.CpuId.html\" title=\"struct raw_cpuid::CpuId\">CpuId</a>","synthetic":false,"types":["raw_cpuid::CpuId"]}];
implementors["spin"] = [{"text":"impl&lt;T:&nbsp;Default, R&gt; Default for <a class=\"struct\" href=\"spin/lazy/struct.Lazy.html\" title=\"struct spin::lazy::Lazy\">Lazy</a>&lt;T, fn() -&gt; T, R&gt;","synthetic":false,"types":["spin::lazy::Lazy"]},{"text":"impl&lt;T:&nbsp;?Sized + Default, R&gt; Default for <a class=\"struct\" href=\"spin/mutex/spin/struct.SpinMutex.html\" title=\"struct spin::mutex::spin::SpinMutex\">SpinMutex</a>&lt;T, R&gt;","synthetic":false,"types":["spin::mutex::spin::SpinMutex"]},{"text":"impl&lt;T:&nbsp;?Sized + Default, R&gt; Default for <a class=\"struct\" href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\">Mutex</a>&lt;T, R&gt;","synthetic":false,"types":["spin::mutex::Mutex"]},{"text":"impl&lt;T:&nbsp;?Sized + Default, R&gt; Default for <a class=\"struct\" href=\"spin/rwlock/struct.RwLock.html\" title=\"struct spin::rwlock::RwLock\">RwLock</a>&lt;T, R&gt;","synthetic":false,"types":["spin::rwlock::RwLock"]}];
implementors["xmas_elf"] = [{"text":"impl Default for <a class=\"struct\" href=\"xmas_elf/program/struct.ProgramHeader32.html\" title=\"struct xmas_elf::program::ProgramHeader32\">ProgramHeader32</a>","synthetic":false,"types":["xmas_elf::program::ProgramHeader32"]},{"text":"impl Default for <a class=\"struct\" href=\"xmas_elf/program/struct.ProgramHeader64.html\" title=\"struct xmas_elf::program::ProgramHeader64\">ProgramHeader64</a>","synthetic":false,"types":["xmas_elf::program::ProgramHeader64"]},{"text":"impl Default for <a class=\"struct\" href=\"xmas_elf/program/struct.Flags.html\" title=\"struct xmas_elf::program::Flags\">Flags</a>","synthetic":false,"types":["xmas_elf::program::Flags"]},{"text":"impl Default for <a class=\"struct\" href=\"xmas_elf/program/struct.Type_.html\" title=\"struct xmas_elf::program::Type_\">Type_</a>","synthetic":false,"types":["xmas_elf::program::Type_"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()