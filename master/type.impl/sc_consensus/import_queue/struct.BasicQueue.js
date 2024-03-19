(function() {var type_impls = {
"sc_consensus":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BasicQueue%3CB%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_consensus/import_queue/basic_queue.rs.html#60-100\">source</a><a href=\"#impl-BasicQueue%3CB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B: BlockT&gt; <a class=\"struct\" href=\"sc_consensus/import_queue/struct.BasicQueue.html\" title=\"struct sc_consensus::import_queue::BasicQueue\">BasicQueue</a>&lt;B&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_consensus/import_queue/basic_queue.rs.html#64-99\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_consensus/import_queue/struct.BasicQueue.html#tymethod.new\" class=\"fn\">new</a>&lt;V: 'static + <a class=\"trait\" href=\"sc_consensus/import_queue/trait.Verifier.html\" title=\"trait sc_consensus::import_queue::Verifier\">Verifier</a>&lt;B&gt;&gt;(\n    verifier: V,\n    block_import: <a class=\"type\" href=\"sc_consensus/import_queue/type.BoxBlockImport.html\" title=\"type sc_consensus::import_queue::BoxBlockImport\">BoxBlockImport</a>&lt;B&gt;,\n    justification_import: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"sc_consensus/import_queue/type.BoxJustificationImport.html\" title=\"type sc_consensus::import_queue::BoxJustificationImport\">BoxJustificationImport</a>&lt;B&gt;&gt;,\n    spawner: &amp;impl SpawnEssentialNamed,\n    prometheus_registry: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;Registry&gt;\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Instantiate a new basic queue, with given verifier.</p>\n<p>This creates a background task, and calls <code>on_start</code> on the justification importer.</p>\n</div></details></div></details>",0,"sc_consensus::import_queue::DefaultImportQueue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-BasicQueue%3CB%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_consensus/import_queue/basic_queue.rs.html#52-58\">source</a><a href=\"#impl-Drop-for-BasicQueue%3CB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B: BlockT&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"sc_consensus/import_queue/struct.BasicQueue.html\" title=\"struct sc_consensus::import_queue::BasicQueue\">BasicQueue</a>&lt;B&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus/import_queue/basic_queue.rs.html#53-57\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","sc_consensus::import_queue::DefaultImportQueue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ImportQueue%3CB%3E-for-BasicQueue%3CB%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_consensus/import_queue/basic_queue.rs.html#166-199\">source</a><a href=\"#impl-ImportQueue%3CB%3E-for-BasicQueue%3CB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B: BlockT&gt; <a class=\"trait\" href=\"sc_consensus/import_queue/trait.ImportQueue.html\" title=\"trait sc_consensus::import_queue::ImportQueue\">ImportQueue</a>&lt;B&gt; for <a class=\"struct\" href=\"sc_consensus/import_queue/struct.BasicQueue.html\" title=\"struct sc_consensus::import_queue::BasicQueue\">BasicQueue</a>&lt;B&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.service\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus/import_queue/basic_queue.rs.html#168-170\">source</a><a href=\"#method.service\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_consensus/import_queue/trait.ImportQueue.html#tymethod.service\" class=\"fn\">service</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"sc_consensus/import_queue/trait.ImportQueueService.html\" title=\"trait sc_consensus::import_queue::ImportQueueService\">ImportQueueService</a>&lt;B&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Get handle to <a href=\"sc_consensus/import_queue/trait.ImportQueueService.html\" title=\"trait sc_consensus::import_queue::ImportQueueService\"><code>ImportQueueService</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.service_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus/import_queue/basic_queue.rs.html#173-175\">source</a><a href=\"#method.service_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_consensus/import_queue/trait.ImportQueue.html#tymethod.service_ref\" class=\"fn\">service_ref</a>(&amp;mut self) -&gt; &amp;mut dyn <a class=\"trait\" href=\"sc_consensus/import_queue/trait.ImportQueueService.html\" title=\"trait sc_consensus::import_queue::ImportQueueService\">ImportQueueService</a>&lt;B&gt;</h4></section></summary><div class=\"docblock\"><p>Get a reference to the handle to <a href=\"sc_consensus/import_queue/trait.ImportQueueService.html\" title=\"trait sc_consensus::import_queue::ImportQueueService\"><code>ImportQueueService</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_actions\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus/import_queue/basic_queue.rs.html#178-185\">source</a><a href=\"#method.poll_actions\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_consensus/import_queue/trait.ImportQueue.html#tymethod.poll_actions\" class=\"fn\">poll_actions</a>(&amp;mut self, cx: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;, link: &amp;mut dyn <a class=\"trait\" href=\"sc_consensus/import_queue/trait.Link.html\" title=\"trait sc_consensus::import_queue::Link\">Link</a>&lt;B&gt;)</h4></section></summary><div class=\"docblock\"><p>Poll actions from network.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.run\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus/import_queue/basic_queue.rs.html#191-198\">source</a><a href=\"#method.run\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_consensus/import_queue/trait.ImportQueue.html#tymethod.run\" class=\"fn\">run</a>&lt;'async_trait&gt;(\n    self,\n    link: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"sc_consensus/import_queue/trait.Link.html\" title=\"trait sc_consensus::import_queue::Link\">Link</a>&lt;B&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    Self: 'async_trait,</span></h4></section></summary><div class=\"docblock\"><p>Start asynchronous runner for import queue.</p>\n<p>Takes an object implementing <a href=\"sc_consensus/import_queue/trait.Link.html\" title=\"trait sc_consensus::import_queue::Link\"><code>Link</code></a> which allows the import queue to\ninfluece the synchronization process.</p>\n</div></details></div></details>","ImportQueue<B>","sc_consensus::import_queue::DefaultImportQueue"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()