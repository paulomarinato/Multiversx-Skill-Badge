import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { DappProvider } from '@multiversx/sdk-dapp/wrappers';
import { getNetworkConfig } from '@multiversx/sdk-dapp/utils';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <DappProvider
      environment="testnet"
      customNetworkConfig={getNetworkConfig()}
    >
      <App />
    </DappProvider>
  </React.StrictMode>
);
