/// <reference types="node" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'
import path from 'path'

// https://vite.dev/config/
const DASHBOARD_URL = process.env.VITE_DASHBOARD_URL || ''

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'auth',
      filename: "remoteEntry.js",
      exposes: {
        './pages/Home': './src/pages/Home.tsx',
        './components/NameInput': './src/components/NameInput/index.tsx',
        './utils/auth': './src/utils/auth.ts',
      },
      remotes: {
        dashboard: DASHBOARD_URL,
      },
      shared: [
        'react',
        'react-dom',
        'react-router-dom',
        'react-hook-form',
        '@hookform/resolvers',
        'zod',
        'react-hot-toast',
      ]
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
