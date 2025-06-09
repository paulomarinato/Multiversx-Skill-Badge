import React from 'react';
import { DappProvider } from '@multiversx/sdk-dapp/wrappers';

const MintForm = () => {
  const handleMint = () => {
    alert("Minting Soulbound NFT (simulação)");
  };

  return (
    <DappProvider environment="devnet">
      <div>
        <h2>Mint seu NFT Soulbound</h2>
        <button onClick={handleMint}>Mintar NFT</button>
      </div>
    </DappProvider>
  );
};

export default MintForm;