#![no_std]

multiversx_sc::contract! {
    pub trait SkillBadgeContract {
        #[init]
        fn init(&self) {}

        #[endpoint]
        fn mintBadge(&self) {
            let caller = self.blockchain().get_caller();

            self.send().esdt_nft_create(
                &caller,
                &TokenIdentifier::from_esdt("SKILLBADGE-123456"),
                &BigUint::from(1u32),
                &BigUint::zero(), // no royalties
                b"MultiversX Skill Badge".to_vec(),
                b"Soulbound badge NFT".to_vec(),
                &[],
            );
        }
    }
}
use multiversx_sc::imports::*;
use multiversx_sc::types::TokenIdentifier;  
use multiversx_sc::types::BigUint;
use multiversx_sc::api::BlockchainApi;
use multiversx_sc::api::SendApi;
use multiversx_sc::api::SmartContractApi;
use multiversx_sc::api::SmartContractContext;
use multiversx_sc::api::SmartContractContextTrait;
use multiversx_sc::api::SendContext;
