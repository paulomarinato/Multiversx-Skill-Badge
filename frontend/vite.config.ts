import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  optimizeDeps: {
    exclude: [
      '@multiversx/sdk-dapp',
      '@multiversx/sdk-core',
      '@multiversx/sdk-extension-provider',
      '@multiversx/sdk-wallet-connect-provider'
    ]
  },
  build: {
    rollupOptions: {
      external: [
        '@multiversx/sdk-core/out/transaction',
        '@multiversx/sdk-core/out/signature'
      ]
    }
  },
  server: {
    port: 5173
  }
});
