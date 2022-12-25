import * as path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import manifest from './manifest.json';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: { __SERVER_BACKEND_URL__: JSON.stringify(env.SERVER_BACKEND_URL) },
    plugins: [
      react(),
      VitePWA({
        manifest,
        includeAssets: [
          'favicon.svg',
          'favicon.ico',
          'robots.txt',
          'apple-touch-icon.png',
          'logo/logo-192x192.png',
          'logo/logo-256x256.png',
          'logo/logo-384x384.png',
          'logo/logo-512x512.png',
        ],
        // switch to "true" to enable sw on development
        devOptions: {
          enabled: true,
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}'],
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
