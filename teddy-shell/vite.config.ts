/// <reference types="node" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'
import path from 'path'

// https://vite.dev/config/
const DASHBOARD_URL = process.env.VITE_DASHBOARD_URL || 'http://localhost:5001/assets/remoteEntry.js'
const AUTH_URL = process.env.VITE_AUTH_URL || 'http://localhost:5002/assets/remoteEntry.js'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'shell',
      remotes: {
        dashboard: DASHBOARD_URL,
        auth: AUTH_URL,
      },
      shared: [
        'react',
        'react-dom',
        'react-router-dom',
        'react-hook-form',
        '@hookform/resolvers',
        'zod',
        'react-hot-toast',
      ],
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
