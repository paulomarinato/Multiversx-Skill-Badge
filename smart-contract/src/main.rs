#![no_std]

multiversx_sc::imports!();
multiversx_sc::derive_imports!();

#[multiversx_sc::contract]
pub trait SkillBadge {
    #[init]
    fn init(&self) {}

    #[endpoint(mintBadge)]
    fn mint_badge(&self, badge_code: ManagedBuffer) {
        let caller = self.blockchain().get_caller();
        let valid_code = ManagedBuffer::from("ZKBOOTCAMP");

        require!(badge_code == valid_code, "Código inválido");

        let token_name = ManagedBuffer::from("ZK Bootcamp Badge");
        let token_uri = ManagedBuffer::from("https://ipfs.io/ipfs/seu-json-aqui.json");

        self.send().esdt_nft_create(
            &TokenIdentifier::from("SKILLBADGE-nft"),
            &BigUint::from(1u32),
            &ManagedBuffer::from("Badge"),
            &token_uri,
        );
    }
}
