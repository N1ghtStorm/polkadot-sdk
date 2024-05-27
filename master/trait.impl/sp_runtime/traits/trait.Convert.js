(function() {var implementors = {
"assets_common":[["impl&lt;Equivalence, AssetId, L&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;L, <a class=\"enum\" href=\"https://docs.rs/either/1/either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;AssetId, L&gt;&gt; for <a class=\"struct\" href=\"assets_common/local_and_foreign_assets/struct.LocalFromLeft.html\" title=\"struct assets_common::local_and_foreign_assets::LocalFromLeft\">LocalFromLeft</a>&lt;Equivalence, AssetId, L&gt;<div class=\"where\">where\n    Equivalence: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;L, AssetId&gt;,</div>"],["impl&lt;Target: Get&lt;L&gt;, L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;L, <a class=\"enum\" href=\"https://docs.rs/either/1/either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, L&gt;&gt; for <a class=\"struct\" href=\"assets_common/local_and_foreign_assets/struct.TargetFromLeft.html\" title=\"struct assets_common::local_and_foreign_assets::TargetFromLeft\">TargetFromLeft</a>&lt;Target, L&gt;"]],
"bp_kusama":[],
"bp_polkadot":[],
"bp_polkadot_core":[],
"bp_rococo":[],
"bp_westend":[],
"bridge_hub_common":[["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;Id, <a class=\"enum\" href=\"bridge_hub_common/message_queue/enum.AggregateMessageOrigin.html\" title=\"enum bridge_hub_common::message_queue::AggregateMessageOrigin\">AggregateMessageOrigin</a>&gt; for <a class=\"struct\" href=\"bridge_hub_common/message_queue/struct.ParaIdToSibling.html\" title=\"struct bridge_hub_common::message_queue::ParaIdToSibling\">ParaIdToSibling</a>"]],
"collectives_westend_runtime":[["impl&lt;Fungible&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u16.html\">u16</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u128.html\">u128</a>&gt; for <a class=\"struct\" href=\"collectives_westend_runtime/impls/benchmarks/struct.RankToSalary.html\" title=\"struct collectives_westend_runtime::impls::benchmarks::RankToSalary\">RankToSalary</a>&lt;Fungible&gt;<div class=\"where\">where\n    Fungible: <a class=\"trait\" href=\"frame_support/traits/tokens/fungible/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungible::regular::Inspect\">Inspect</a>&lt;<a class=\"type\" href=\"parachains_common/types/type.AccountId.html\" title=\"type parachains_common::types::AccountId\">AccountId</a>, Balance = <a class=\"type\" href=\"parachains_common/types/type.Balance.html\" title=\"type parachains_common::types::Balance\">Balance</a>&gt;,</div>"]],
"frame_support":[["impl&lt;AssetId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;<a class=\"enum\" href=\"frame_support/traits/tokens/fungible/enum.NativeOrWithId.html\" title=\"enum frame_support::traits::tokens::fungible::NativeOrWithId\">NativeOrWithId</a>&lt;AssetId&gt;, <a class=\"enum\" href=\"https://docs.rs/either/1/either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, AssetId&gt;&gt; for <a class=\"struct\" href=\"frame_support/traits/tokens/fungible/struct.NativeFromLeft.html\" title=\"struct frame_support::traits::tokens::fungible::NativeFromLeft\">NativeFromLeft</a>"],["impl&lt;Base, Slope, Balance&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;<a class=\"struct\" href=\"frame_support/traits/struct.Footprint.html\" title=\"struct frame_support::traits::Footprint\">Footprint</a>, Balance&gt; for <a class=\"struct\" href=\"frame_support/traits/struct.LinearStoragePrice.html\" title=\"struct frame_support::traits::LinearStoragePrice\">LinearStoragePrice</a>&lt;Base, Slope, Balance&gt;<div class=\"where\">where\n    Base: <a class=\"trait\" href=\"frame_support/pallet_prelude/trait.Get.html\" title=\"trait frame_support::pallet_prelude::Get\">Get</a>&lt;Balance&gt;,\n    Slope: <a class=\"trait\" href=\"frame_support/pallet_prelude/trait.Get.html\" title=\"trait frame_support::pallet_prelude::Get\">Get</a>&lt;Balance&gt;,\n    Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u64.html\">u64</a>&gt; + <a class=\"trait\" href=\"sp_arithmetic/traits/trait.Saturating.html\" title=\"trait sp_arithmetic::traits::Saturating\">Saturating</a>,</div>"]],
"kitchensink_runtime":[["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;U256, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u128.html\">u128</a>&gt; for <a class=\"struct\" href=\"kitchensink_runtime/struct.U256ToBalance.html\" title=\"struct kitchensink_runtime::U256ToBalance\">U256ToBalance</a>"],["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u128.html\">u128</a>, U256&gt; for <a class=\"struct\" href=\"kitchensink_runtime/struct.BalanceToU256.html\" title=\"struct kitchensink_runtime::BalanceToU256\">BalanceToU256</a>"]],
"pallet_beefy_mmr":[["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;Public, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;&gt; for <a class=\"struct\" href=\"pallet_beefy_mmr/struct.BeefyEcdsaToEthereum.html\" title=\"struct pallet_beefy_mmr::BeefyEcdsaToEthereum\">BeefyEcdsaToEthereum</a>"]],
"pallet_collator_selection":[["impl&lt;T&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;T, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"pallet_collator_selection/pallet/struct.IdentityCollator.html\" title=\"struct pallet_collator_selection::pallet::IdentityCollator\">IdentityCollator</a>"]],
"pallet_contracts":[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u64.html\">u64</a>&gt;&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;<a class=\"struct\" href=\"sp_weights/weight_v2/struct.Weight.html\" title=\"struct sp_weights::weight_v2::Weight\">Weight</a>, T&gt; for <a class=\"struct\" href=\"pallet_contracts/pallet/config_preludes/struct.TestDefaultConfig.html\" title=\"struct pallet_contracts::pallet::config_preludes::TestDefaultConfig\">TestDefaultConfig</a>"]],
"pallet_election_provider_multi_phase":[["impl&lt;Balance, Fixed, Inc&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>, Balance&gt; for <a class=\"struct\" href=\"pallet_election_provider_multi_phase/signed/struct.GeometricDepositBase.html\" title=\"struct pallet_election_provider_multi_phase::signed::GeometricDepositBase\">GeometricDepositBase</a>&lt;Balance, Fixed, Inc&gt;<div class=\"where\">where\n    Balance: <a class=\"trait\" href=\"sp_arithmetic/fixed_point/trait.FixedPointOperand.html\" title=\"trait sp_arithmetic::fixed_point::FixedPointOperand\">FixedPointOperand</a>,\n    Fixed: Get&lt;Balance&gt;,\n    Inc: Get&lt;<a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Percent.html\" title=\"struct sp_arithmetic::per_things::Percent\">Percent</a>&gt;,</div>"]],
"pallet_nis":[["impl&lt;A: TypedGet&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;<a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Perquintill.html\" title=\"struct sp_arithmetic::per_things::Perquintill\">Perquintill</a>, &lt;A as TypedGet&gt;::Type&gt; for <a class=\"struct\" href=\"pallet_nis/struct.WithMaximumOf.html\" title=\"struct pallet_nis::WithMaximumOf\">WithMaximumOf</a>&lt;A&gt;<div class=\"where\">where\n    A::Type: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/sign/trait.Unsigned.html\" title=\"trait num_traits::sign::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u64.html\">u64</a>&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;A::Type&gt;,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;<a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Perquintill.html\" title=\"struct sp_arithmetic::per_things::Perquintill\">Perquintill</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"pallet_nis/struct.NoCounterpart.html\" title=\"struct pallet_nis::NoCounterpart\">NoCounterpart</a>&lt;T&gt;"]],
"pallet_nomination_pools":[["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;U256, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u128.html\">u128</a>&gt; for <a class=\"struct\" href=\"pallet_nomination_pools/mock/struct.U256ToBalance.html\" title=\"struct pallet_nomination_pools::mock::U256ToBalance\">U256ToBalance</a>"],["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u128.html\">u128</a>, U256&gt; for <a class=\"struct\" href=\"pallet_nomination_pools/mock/struct.BalanceToU256.html\" title=\"struct pallet_nomination_pools::mock::BalanceToU256\">BalanceToU256</a>"]],
"pallet_ranked_collective":[["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u16.html\">u16</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"pallet_ranked_collective/struct.Unit.html\" title=\"struct pallet_ranked_collective::Unit\">Unit</a>"],["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u16.html\">u16</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"pallet_ranked_collective/struct.Linear.html\" title=\"struct pallet_ranked_collective::Linear\">Linear</a>"],["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u16.html\">u16</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"pallet_ranked_collective/struct.Geometric.html\" title=\"struct pallet_ranked_collective::Geometric\">Geometric</a>"]],
"pallet_staking":[["impl&lt;T: <a class=\"trait\" href=\"pallet_staking/trait.Config.html\" title=\"trait pallet_staking::Config\">Config</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;&lt;T as Config&gt;::AccountId, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"pallet_staking/struct.Exposure.html\" title=\"struct pallet_staking::Exposure\">Exposure</a>&lt;&lt;T as Config&gt;::AccountId, &lt;T as <a class=\"trait\" href=\"pallet_staking/trait.Config.html\" title=\"trait pallet_staking::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_staking/trait.Config.html#associatedtype.CurrencyBalance\" title=\"type pallet_staking::Config::CurrencyBalance\">CurrencyBalance</a>&gt;&gt;&gt; for <a class=\"struct\" href=\"pallet_staking/struct.ExposureOf.html\" title=\"struct pallet_staking::ExposureOf\">ExposureOf</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"pallet_staking/trait.Config.html\" title=\"trait pallet_staking::Config\">Config</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;&lt;T as Config&gt;::AccountId, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;T as Config&gt;::AccountId&gt;&gt; for <a class=\"struct\" href=\"pallet_staking/struct.StashOf.html\" title=\"struct pallet_staking::StashOf\">StashOf</a>&lt;T&gt;"]],
"pallet_transaction_payment":[["impl&lt;T&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;<a class=\"struct\" href=\"sp_weights/weight_v2/struct.Weight.html\" title=\"struct sp_weights::weight_v2::Weight\">Weight</a>, &lt;&lt;T as <a class=\"trait\" href=\"pallet_transaction_payment/pallet/trait.Config.html\" title=\"trait pallet_transaction_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_transaction_payment/pallet/trait.Config.html#associatedtype.OnChargeTransaction\" title=\"type pallet_transaction_payment::pallet::Config::OnChargeTransaction\">OnChargeTransaction</a> as <a class=\"trait\" href=\"pallet_transaction_payment/trait.OnChargeTransaction.html\" title=\"trait pallet_transaction_payment::OnChargeTransaction\">OnChargeTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_transaction_payment/trait.OnChargeTransaction.html#associatedtype.Balance\" title=\"type pallet_transaction_payment::OnChargeTransaction::Balance\">Balance</a>&gt; for <a class=\"struct\" href=\"pallet_transaction_payment/pallet/struct.Pallet.html\" title=\"struct pallet_transaction_payment::pallet::Pallet\">Pallet</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"pallet_transaction_payment/pallet/trait.Config.html\" title=\"trait pallet_transaction_payment::pallet::Config\">Config</a>,</div>"],["impl&lt;M&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;<a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a>, <a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a>&gt; for <a class=\"struct\" href=\"pallet_transaction_payment/struct.ConstFeeMultiplier.html\" title=\"struct pallet_transaction_payment::ConstFeeMultiplier\">ConstFeeMultiplier</a>&lt;M&gt;<div class=\"where\">where\n    M: Get&lt;<a class=\"type\" href=\"pallet_transaction_payment/type.Multiplier.html\" title=\"type pallet_transaction_payment::Multiplier\">Multiplier</a>&gt;,</div>"],["impl&lt;T, S, V, M, X&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;<a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a>, <a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a>&gt; for <a class=\"struct\" href=\"pallet_transaction_payment/struct.TargetedFeeAdjustment.html\" title=\"struct pallet_transaction_payment::TargetedFeeAdjustment\">TargetedFeeAdjustment</a>&lt;T, S, V, M, X&gt;<div class=\"where\">where\n    T: Config,\n    S: Get&lt;<a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Perquintill.html\" title=\"struct sp_arithmetic::per_things::Perquintill\">Perquintill</a>&gt;,\n    V: Get&lt;<a class=\"type\" href=\"pallet_transaction_payment/type.Multiplier.html\" title=\"type pallet_transaction_payment::Multiplier\">Multiplier</a>&gt;,\n    M: Get&lt;<a class=\"type\" href=\"pallet_transaction_payment/type.Multiplier.html\" title=\"type pallet_transaction_payment::Multiplier\">Multiplier</a>&gt;,\n    X: Get&lt;<a class=\"type\" href=\"pallet_transaction_payment/type.Multiplier.html\" title=\"type pallet_transaction_payment::Multiplier\">Multiplier</a>&gt;,</div>"]],
"parachains_common":[["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;Id, AggregateMessageOrigin&gt; for <a class=\"struct\" href=\"parachains_common/message_queue/struct.ParaIdToSibling.html\" title=\"struct parachains_common::message_queue::ParaIdToSibling\">ParaIdToSibling</a>"]],
"polkadot_runtime_common":[["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u128.html\">u128</a>, U256&gt; for <a class=\"struct\" href=\"polkadot_runtime_common/struct.BalanceToU256.html\" title=\"struct polkadot_runtime_common::BalanceToU256\">BalanceToU256</a>"],["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;U256, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u128.html\">u128</a>&gt; for <a class=\"struct\" href=\"polkadot_runtime_common/struct.U256ToBalance.html\" title=\"struct polkadot_runtime_common::U256ToBalance\">U256ToBalance</a>"]],
"polkadot_sdk_frame":[],
"polkadot_service":[],
"rococo_runtime":[["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;&lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a>&gt;&gt; for <a class=\"struct\" href=\"rococo_runtime/struct.ValidatorIdOf.html\" title=\"struct rococo_runtime::ValidatorIdOf\">ValidatorIdOf</a>"],["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;&lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;&gt; for <a class=\"struct\" href=\"rococo_runtime/struct.FullIdentificationOf.html\" title=\"struct rococo_runtime::FullIdentificationOf\">FullIdentificationOf</a>"]],
"sp_runtime":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()