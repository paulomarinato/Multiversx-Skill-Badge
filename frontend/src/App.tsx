import React from "react";
import MintForm from "./components/MintForm";

export default function App(): JSX.Element {
  const [isConnected, setIsConnected] = React.useState(false);

  const handleConnectWallet = () => {
    // Simulação da conexão (substituir pela integração real depois)
    setIsConnected(true);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f3f4f6',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>MultiversX Skill Badge</h1>
      <p style={{ marginBottom: '2rem', textAlign: 'center', maxWidth: '400px' }}>
        Conecte sua carteira MultiversX e mint seu NFT Soulbound como prova de experiência na testnet.
      </p>

      {!isConnected ? (
        <button
          onClick={handleConnectWallet}
          style={{
            backgroundColor: '#1e40af',
            color: '#fff',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            marginBottom: '2rem'
          }}
        >
          Conectar Carteira
        </button>
      ) : (
        <>
          <p style={{ color: '#16a34a', marginBottom: '1rem' }}>Carteira conectada com sucesso!</p>
          <MintForm />
        </>
      )}
    </div>
  );
}
