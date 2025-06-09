import React from 'react';
import MintForm from './components/MintForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">
          MultiversX Skill Badge
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Conecte sua carteira MultiversX e mint seu NFT Soulbound como prova de experiência.
        </p>
        <MintForm />
      </div>
    </div>
  );
};

export default App;

