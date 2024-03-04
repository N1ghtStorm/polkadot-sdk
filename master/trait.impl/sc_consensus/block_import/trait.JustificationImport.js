(function() {var implementors = {
"sc_consensus_grandpa":[["impl&lt;BE, Block: BlockT, Client, SC&gt; JustificationImport&lt;Block&gt; for <a class=\"struct\" href=\"sc_consensus_grandpa/struct.GrandpaBlockImport.html\" title=\"struct sc_consensus_grandpa::GrandpaBlockImport\">GrandpaBlockImport</a>&lt;BE, Block, Client, SC&gt;<span class=\"where fmt-newline\">where\n    NumberFor&lt;Block&gt;: <a class=\"trait\" href=\"sc_consensus_grandpa/trait.BlockNumberOps.html\" title=\"trait sc_consensus_grandpa::BlockNumberOps\">BlockNumberOps</a>,\n    BE: Backend&lt;Block&gt;,\n    Client: <a class=\"trait\" href=\"sc_consensus_grandpa/trait.ClientForGrandpa.html\" title=\"trait sc_consensus_grandpa::ClientForGrandpa\">ClientForGrandpa</a>&lt;Block, BE&gt;,\n    SC: SelectChain&lt;Block&gt;,</span>"]],
"sc_network_test":[["impl <a class=\"trait\" href=\"sc_consensus/block_import/trait.JustificationImport.html\" title=\"trait sc_consensus::block_import::JustificationImport\">JustificationImport</a>&lt;<a class=\"struct\" href=\"sp_runtime/generic/block/struct.Block.html\" title=\"struct sp_runtime::generic::block::Block\">Block</a>&lt;<a class=\"struct\" href=\"sp_runtime/generic/header/struct.Header.html\" title=\"struct sp_runtime::generic::header::Header\">Header</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>, <a class=\"struct\" href=\"sp_runtime/traits/struct.BlakeTwo256.html\" title=\"struct sp_runtime::traits::BlakeTwo256\">BlakeTwo256</a>&gt;, <a class=\"struct\" href=\"sp_runtime/generic/unchecked_extrinsic/struct.UncheckedExtrinsic.html\" title=\"struct sp_runtime::generic::unchecked_extrinsic::UncheckedExtrinsic\">UncheckedExtrinsic</a>&lt;<a class=\"struct\" href=\"sp_core/sr25519/struct.Public.html\" title=\"struct sp_core::sr25519::Public\">Public</a>, RuntimeCall, <a class=\"struct\" href=\"sp_core/sr25519/struct.Signature.html\" title=\"struct sp_core::sr25519::Signature\">Signature</a>, ((<a class=\"struct\" href=\"frame_system/extensions/check_nonce/struct.CheckNonce.html\" title=\"struct frame_system::extensions::check_nonce::CheckNonce\">CheckNonce</a>&lt;Runtime&gt;, <a class=\"struct\" href=\"frame_system/extensions/check_weight/struct.CheckWeight.html\" title=\"struct frame_system::extensions::check_weight::CheckWeight\">CheckWeight</a>&lt;Runtime&gt;), CheckSubstrateCall)&gt;&gt;&gt; for <a class=\"struct\" href=\"sc_network_test/struct.ForceFinalized.html\" title=\"struct sc_network_test::ForceFinalized\">ForceFinalized</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()