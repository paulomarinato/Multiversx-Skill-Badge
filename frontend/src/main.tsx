import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { DappProvider } from '@multiversx/sdk-dapp/wrappers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DappProvider
      environment="devnet"
      customNetworkConfig={{
        name: "devnet",
        apiTimeout: 6000,
        apiAddress: "https://devnet-api.multiversx.com",
        explorerAddress: "https://devnet-explorer.multiversx.com"
      }}
    >
      <App />
    </DappProvider>
  </React.StrictMode>
);
