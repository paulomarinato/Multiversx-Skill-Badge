import { useState } from 'react';

export default function MintForm() {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('');

  const handleMint = async () => {
    setStatus('Enviando transação...');
    if (code === 'ZKBOOTCAMP') {
      setTimeout(() => setStatus('✅ NFT mintado com sucesso!'), 1000);
    } else {
      setStatus('❌ Código inválido. Tente novamente.');
    }
  };

  return (
    <div style={{ marginTop: '1.5rem' }}>
      <input
        type="text"
        placeholder="Digite o código"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleMint}>Mintar</button>
      {status && (
        <p className={status.includes('sucesso') ? 'success' : 'error'}>{status}</p>
      )}
    </div>
  );
}