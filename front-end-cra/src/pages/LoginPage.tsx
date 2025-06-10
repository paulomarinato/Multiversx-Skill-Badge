
import React from 'react';
import {
  useGetLoginInfo,
  useGetAccount
} from '@multiversx/sdk-dapp/hooks';

import { useLogin } from '@multiversx/sdk-dapp/hooks/login';
import { logout } from '@multiversx/sdk-dapp/utils/logout';
import { LoginMethodsEnum } from '@multiversx/sdk-dapp/types';

export const LoginPage = () => {
  const { login } = useLogin();
  const { isLoggedIn } = useGetLoginInfo();
  const { address } = useGetAccount();

  const handleLogin = () => {
    login({
      loginMethod: LoginMethodsEnum.extension // Pode trocar para walletconnect ou wallet
    });
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="p-4">
      {isLoggedIn ? (
        <div>
          <p>Conectado como: <strong>{address}</strong></p>
          <button onClick={handleLogout} className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
            Sair
          </button>
        </div>
      ) : (
        <div>
          <p>Conecte sua carteira MultiversX:</p>
          <button onClick={handleLogin} className="mt-2 bg-green-600 text-white px-4 py-2 rounded">
            Login com Extension
          </button>
        </div>
      )}
    </div>
  );
};
