// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: Apache-2.0

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//! Asset Rewards pallet benchmarking.

use super::*;
use crate::Pallet as AssetRewards;
use frame_benchmarking::{v2::*, whitelisted_caller};
use frame_support::{
	assert_ok,
	traits::{
		fungible::NativeOrWithId,
		fungibles::{Create, Inspect, Mutate},
	},
};
use frame_system::RawOrigin as SystemOrigin;
use sp_runtime::traits::One;
use sp_std::prelude::*;

/// Benchmark Helper
pub trait BenchmarkHelper<AssetId, AccountId> {
	/// When a specific asset, such as the native asset, is required in every pool, it should be
	/// returned for each odd-numbered seed.
	fn to_asset_id(seed: NativeOrWithId<u32>) -> AssetId;
	fn to_account_id(seed: u32) -> AccountId;
}

impl<AssetId, AccountId> BenchmarkHelper<AssetId, AccountId> for ()
where
	AssetId: From<NativeOrWithId<u32>>,
	AccountId: From<u32>,
{
	fn to_asset_id(seed: NativeOrWithId<u32>) -> AssetId {
		seed.into()
	}
	fn to_account_id(seed: u32) -> AccountId {
		seed.into()
	}
}

/// Create the `asset` and mint the `amount` for the `caller`.
fn create_asset<T: Config>(caller: &T::AccountId, asset: &T::AssetId, amount: T::Balance)
where
	T::Assets: Create<T::AccountId> + Mutate<T::AccountId>,
{
	if !T::Assets::asset_exists(asset.clone()) {
		assert_ok!(T::Assets::create(asset.clone(), caller.clone(), true, T::Balance::one()));
	}
	assert_ok!(T::Assets::mint_into(
		asset.clone(),
		&caller,
		amount + T::Assets::minimum_balance(asset.clone())
	));
}

fn assert_last_event<T: Config>(generic_event: <T as Config>::RuntimeEvent) {
	let events = frame_system::Pallet::<T>::events();
	let system_event: <T as frame_system::Config>::RuntimeEvent = generic_event.into();
	// compare to the last event record
	let frame_system::EventRecord { event, .. } = &events[events.len() - 1];
	assert_eq!(event, &system_event);
}

#[benchmarks(where T::Assets: Create<T::AccountId> + Mutate<T::AccountId>)]
mod benchmarks {
	use super::*;

	#[benchmark]
	fn create_pool() {
		use super::*;

		let admin = T::BenchmarkHelper::to_account_id(1);
		let staked_asset = T::BenchmarkHelper::to_asset_id(NativeOrWithId::WithId(1));
		let reward_asset = T::BenchmarkHelper::to_asset_id(NativeOrWithId::Native);
		create_asset::<T>(&admin, &staked_asset, T::Assets::minimum_balance(staked_asset.clone()));
		create_asset::<T>(&admin, &reward_asset, T::Assets::minimum_balance(reward_asset.clone()));

		#[extrinsic_call]
		_(
			SystemOrigin::Signed(admin.clone()),
			Box::new(staked_asset.clone()),
			Box::new(reward_asset.clone()),
			100u32.into(),
			200u32.into(),
			None,
		);

		assert_last_event::<T>(
			Event::PoolCreated {
				creator: admin.clone(),
				admin,
				staked_asset_id: staked_asset,
				reward_asset_id: reward_asset,
				reward_rate_per_block: 100u32.into(),
				expiry_block: 200u32.into(),
				pool_id: 0u32.into(),
			}
			.into(),
		);
	}

	#[benchmark]
	fn stake() {
		use super::*;

		let admin = T::BenchmarkHelper::to_account_id(1);
		let staker = T::BenchmarkHelper::to_account_id(2);
		let staked_asset = T::BenchmarkHelper::to_asset_id(NativeOrWithId::WithId(1));
		let reward_asset = T::BenchmarkHelper::to_asset_id(NativeOrWithId::Native);
		create_asset::<T>(&staker, &staked_asset, T::Assets::minimum_balance(staked_asset.clone()));
		create_asset::<T>(&admin, &reward_asset, T::Assets::minimum_balance(reward_asset.clone()));

		assert_ok!(AssetRewards::<T>::create_pool(
			SystemOrigin::Signed(admin.clone()).into(),
			Box::new(staked_asset.clone()),
			Box::new(reward_asset.clone()),
			100u32.into(),
			200u32.into(),
			None,
		));

		#[extrinsic_call]
		_(SystemOrigin::Signed(staker.clone()), 0u32.into(), 100u32.into());

		assert_last_event::<T>(
			Event::Staked { who: staker, pool_id: 0u32.into(), amount: 100u32.into() }.into(),
		);
	}

	#[benchmark]
	fn unstake() {
		use super::*;

		let admin = T::BenchmarkHelper::to_account_id(1);
		let staker = T::BenchmarkHelper::to_account_id(2);
		let staked_asset = T::BenchmarkHelper::to_asset_id(NativeOrWithId::WithId(1));
		let reward_asset = T::BenchmarkHelper::to_asset_id(NativeOrWithId::Native);
		create_asset::<T>(&staker, &staked_asset, T::Assets::minimum_balance(staked_asset.clone()));
		create_asset::<T>(&admin, &reward_asset, T::Assets::minimum_balance(reward_asset.clone()));

		assert_ok!(AssetRewards::<T>::create_pool(
			SystemOrigin::Signed(admin.clone()).into(),
			Box::new(staked_asset.clone()),
			Box::new(reward_asset.clone()),
			100u32.into(),
			200u32.into(),
			None,
		));

		assert_ok!(AssetRewards::<T>::stake(
			SystemOrigin::Signed(staker.clone()).into(),
			0u32.into(),
			100u32.into()
		));

		#[extrinsic_call]
		_(SystemOrigin::Signed(staker.clone()), 0u32.into(), 100u32.into());

		assert_last_event::<T>(
			Event::Unstaked { who: staker, pool_id: 0u32.into(), amount: 100u32.into() }.into(),
		);
	}

	#[benchmark]
	fn harvest_rewards() {
		use super::*;

		let admin = T::BenchmarkHelper::to_account_id(1);
		let staker = T::BenchmarkHelper::to_account_id(2);
		let staked_asset = T::BenchmarkHelper::to_asset_id(NativeOrWithId::WithId(1));
		let reward_asset = T::BenchmarkHelper::to_asset_id(NativeOrWithId::Native);
		create_asset::<T>(&staker, &staked_asset, T::Assets::minimum_balance(staked_asset.clone()));
		create_asset::<T>(&admin, &reward_asset, T::Assets::minimum_balance(reward_asset.clone()));

		assert_ok!(AssetRewards::<T>::create_pool(
			SystemOrigin::Signed(admin.clone()).into(),
			Box::new(staked_asset.clone()),
			Box::new(reward_asset.clone()),
			100u32.into(),
			200u32.into(),
			None,
		));

		assert_ok!(AssetRewards::<T>::stake(
			SystemOrigin::Signed(staker.clone()).into(),
			0u32.into(),
			100u32.into()
		));

		#[extrinsic_call]
		_(SystemOrigin::Signed(staker.clone()), 0u32.into(), None);

		assert_last_event::<T>(
			Event::RewardsHarvested {
				who: staker.clone(),
				staker,
				pool_id: 0u32.into(),
				amount: 0u32.into(),
			}
			.into(),
		);
	}

	#[benchmark]
	fn set_pool_reward_rate_per_block() {
		use super::*;

		let admin = T::BenchmarkHelper::to_account_id(1);
		let staked_asset = T::BenchmarkHelper::to_asset_id(NativeOrWithId::WithId(1));
		let reward_asset = T::BenchmarkHelper::to_asset_id(NativeOrWithId::Native);
		create_asset::<T>(&admin, &staked_asset, T::Assets::minimum_balance(staked_asset.clone()));
		create_asset::<T>(&admin, &reward_asset, T::Assets::minimum_balance(reward_asset.clone()));

		assert_ok!(AssetRewards::<T>::create_pool(
			SystemOrigin::Signed(admin.clone()).into(),
			Box::new(staked_asset.clone()),
			Box::new(reward_asset.clone()),
			100u32.into(),
			200u32.into(),
			None,
		));

		#[extrinsic_call]
		_(SystemOrigin::Signed(admin.clone()), 0u32.into(), 5u32.into());

		assert_last_event::<T>(
			Event::PoolRewardRateModified {
				pool_id: 0u32.into(),
				new_reward_rate_per_block: 5u32.into(),
			}
			.into(),
		);
	}

	#[benchmark]
	fn set_pool_admin() {
		use super::*;

		let admin = T::BenchmarkHelper::to_account_id(1);
		let new_admin = T::BenchmarkHelper::to_account_id(2);
		let staked_asset = T::BenchmarkHelper::to_asset_id(NativeOrWithId::WithId(1));
		let reward_asset = T::BenchmarkHelper::to_asset_id(NativeOrWithId::Native);
		create_asset::<T>(&admin, &staked_asset, T::Assets::minimum_balance(staked_asset.clone()));
		create_asset::<T>(&admin, &reward_asset, T::Assets::minimum_balance(reward_asset.clone()));

		assert_ok!(AssetRewards::<T>::create_pool(
			SystemOrigin::Signed(admin.clone()).into(),
			Box::new(staked_asset.clone()),
			Box::new(reward_asset.clone()),
			100u32.into(),
			200u32.into(),
			None,
		));

		#[extrinsic_call]
		_(SystemOrigin::Signed(admin.clone()), 0u32.into(), new_admin.clone());

		assert_last_event::<T>(Event::PoolAdminModified { pool_id: 0u32.into(), new_admin }.into());
	}

	#[benchmark]
	fn set_pool_expiry_block() {
		use super::*;

		let admin = T::BenchmarkHelper::to_account_id(1);
		let staked_asset = T::BenchmarkHelper::to_asset_id(NativeOrWithId::WithId(1));
		let reward_asset = T::BenchmarkHelper::to_asset_id(NativeOrWithId::Native);
		create_asset::<T>(&admin, &staked_asset, T::Assets::minimum_balance(staked_asset.clone()));
		create_asset::<T>(&admin, &reward_asset, T::Assets::minimum_balance(reward_asset.clone()));

		assert_ok!(AssetRewards::<T>::create_pool(
			SystemOrigin::Signed(admin.clone()).into(),
			Box::new(staked_asset.clone()),
			Box::new(reward_asset.clone()),
			100u32.into(),
			200u32.into(),
			None,
		));

		#[extrinsic_call]
		_(SystemOrigin::Signed(admin.clone()), 0u32.into(), 1000u32.into());

		assert_last_event::<T>(
			Event::PoolExpiryBlockModified {
				pool_id: 0u32.into(),
				new_expiry_block: 1000u32.into(),
			}
			.into(),
		);
	}

	#[benchmark]
	fn deposit_reward_tokens() {
		use super::*;

		let admin = T::BenchmarkHelper::to_account_id(1);
		let staked_asset = T::BenchmarkHelper::to_asset_id(NativeOrWithId::WithId(1));
		let reward_asset = T::BenchmarkHelper::to_asset_id(NativeOrWithId::Native);
		create_asset::<T>(&admin, &staked_asset, T::Assets::minimum_balance(staked_asset.clone()));
		create_asset::<T>(&admin, &reward_asset, T::Assets::minimum_balance(reward_asset.clone()));

		T::Assets::set_balance(reward_asset.clone(), &admin, 100000u32.into());
		assert_ok!(AssetRewards::<T>::create_pool(
			SystemOrigin::Signed(admin.clone()).into(),
			Box::new(staked_asset.clone()),
			Box::new(reward_asset.clone()),
			100u32.into(),
			200u32.into(),
			None,
		));

		let balance_before = T::Assets::balance(reward_asset.clone(), &admin);

		#[extrinsic_call]
		_(SystemOrigin::Signed(admin.clone()), 0u32.into(), 10u32.into());

		let balance_after = T::Assets::balance(reward_asset.clone(), &admin);

		assert_eq!(balance_after, balance_before - 10u32.into());
	}

	impl_benchmark_test_suite!(AssetRewards, crate::mock::new_test_ext(), crate::mock::MockRuntime);
}
