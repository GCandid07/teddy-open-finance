/// <reference types="node" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
const AUTH_URL = process.env.VITE_AUTH_URL || 'http://localhost:5002/assets/remoteEntry.js'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'dashboard',
      filename: "remoteEntry.js",
      exposes: {
        './pages/Dashboard': './src/pages/Dashboard.tsx',
        './pages/SavedClients': './src/pages/SavedClients.tsx',
        './components/ui/button': './src/components/ui/button.tsx',
        './components/ui/input': './src/components/ui/input.tsx',
        './layout/PrivateLayout': './src/components/layout/PrivateLayout/index.tsx',
        './utils/clients': './src/utils/clients.ts',
      },
      remotes: {
        'auth': AUTH_URL,
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
