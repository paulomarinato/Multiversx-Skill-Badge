
import React from 'react';
import { useGetAccountInfo } from './hooks/useGetAccountInfo';

import { useExtensionLogin } from '@multiversx/sdk-dapp/hooks/login/useExtensionLogin';
import { useWalletConnectV2Login } from '@multiversx/sdk-dapp/hooks/login/useWalletConnectV2Login';
import { logout } from '@multiversx/sdk-dapp/utils/logout';
import { LoginMethodsEnum } from '@multiversx/sdk-dapp/types';

function App() {
  const { account } = useGetAccountInfo();
  const { extensionLogin } = useExtensionLogin();
  const { walletConnectLogin } = useWalletConnectV2Login();

  const handleExtensionLogin = () => {
    extensionLogin(LoginMethodsEnum.extension);
  };

  const handleWalletConnectLogin = () => {
    walletConnectLogin();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-multiversx-dark via-gray-900 to-multiversx-dark">
      <div className="container mx-auto px-4 py-16" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
        <div className="text-center mb-16 w-full">
          <h1 className="text-4xl font-bold text-multiversx-primary mb-4">
            MultiversX Skill Badge
          </h1>
          <p className="text-gray-300 text-lg">
            Connect your wallet to get started
          </p>
        </div>

        {/* Connect Wallet Card */}
        <div
          onClick={handleExtensionLogin}
          className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 w-[300px] transform hover:scale-105 hover:bg-gray-700/90 transition-all duration-300 shadow-lg hover:shadow-multiversx flex flex-col items-center justify-center cursor-pointer group border border-gray-700 hover:border-multiversx-primary"
        >
          <div className="w-20 h-20 mb-4 text-multiversx-primary group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-multiversx-primary transition-colors duration-300">Connect Wallet</h3>
          <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300">Link your MultiversX wallet to begin your journey</p>
        </div>

        {/* QR Code Login Card */}
        <div
          onClick={handleWalletConnectLogin}
          className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 w-[300px] transform hover:scale-105 hover:bg-gray-700/90 transition-all duration-300 shadow-lg hover:shadow-multiversx flex flex-col items-center justify-center cursor-pointer group border border-gray-700 hover:border-multiversx-primary"
        >
          <div className="w-20 h-20 mb-4 text-multiversx-primary group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6h6v12H9z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-multiversx-primary transition-colors duration-300">Login via QR</h3>
          <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300">Use o xPortal para escanear e conectar</p>
        </div>

        {/* Badge Card */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 w-[300px] transform hover:scale-105 hover:bg-gray-700/90 transition-all duration-300 shadow-lg hover:shadow-multiversx flex flex-col items-center justify-center cursor-pointer group border border-gray-700 hover:border-multiversx-primary">
          <div className="w-20 h-20 mb-4 text-multiversx-primary group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-multiversx-primary transition-colors duration-300">Earn Badges</h3>
          <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300">Complete challenges to earn unique skill badges</p>
        </div>

        {account?.address && (
          <div className="w-full mt-16 text-center">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto border border-gray-700">
              <h2 className="text-2xl font-bold text-multiversx-primary mb-4">Connected Wallet</h2>
              <p className="text-gray-300 break-all mb-2">{account.address}</p>
              <p className="text-gray-400">Balance: {account?.balance ? account.balance : '0'} EGLD</p>
              <button onClick={handleLogout} className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
