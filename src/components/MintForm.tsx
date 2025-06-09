import React, { useState } from 'react';
import {
  ExtensionLoginButton,
  WalletConnectLoginButton,
  useGetLoginInfo,
  useGetAccountInfo,
  sendTransactions,
  refreshAccount
} from '@multiversx/sdk-dapp';

const MintForm: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useGetLoginInfo();
  const { address } = useGetAccountInfo();

  const contractAddress = 'erd1qqqqqqqqqqqqqpgqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv6k2sn'; // substitua pelo endereço real do contrato

  const handleMint = async () => {
    if (!isLoggedIn) {
      setStatus('❗ Por favor, conecte sua carteira antes de mintar.');
      return;
    }

    try {
      setLoading(true);
      setStatus(null);

      const tx = {
        value: '0',
        data: 'mintBadge',
        receiver: contractAddress,
        gasLimit: 50000000
      };

      const { sessionId } = await sendTransactions({
        transactions: [tx],
        transactionsDisplayInfo: {
          processingMessage: 'Mintando seu NFT...',
          errorMessage: 'Erro ao mintar NFT.',
          successMessage: '✅ NFT Skill Badge mintado com sucesso!'
        },
        redirectAfterSign: false
      });

      refreshAccount();
      setStatus(`✅ Transação enviada! ID: ${sessionId}`);
    } catch (error) {
      console.error(error);
      setStatus('❌ Erro ao mintar NFT. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <div className="flex flex-col items-center gap-2">
        <ExtensionLoginButton
          callbackRoute="/"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-700"
        >
          Conectar com Extension
        </ExtensionLoginButton>

        <WalletConnectLoginButton
          callbackRoute="/"
          className="bg-purple-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-purple-700"
        >
          Conectar com WalletConnect
        </WalletConnectLoginButton>
      </div>

      <button
        onClick={handleMint}
        disabled={loading || !isLoggedIn}
        className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg mt-6 hover:bg-green-600 disabled:opacity-50"
      >
        {loading ? 'Mintando...' : 'Mintar Skill Badge'}
      </button>

      {status && <p className="mt-4 text-gray-800">{status}</p>}
    </div>
  );
};

export default MintForm;
