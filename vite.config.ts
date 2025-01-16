import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import path from "path"
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  plugins: [react(), VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'Character Bio Creator',
        short_name: 'Bio Creator',
        description: 'Create character bios easily!',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '72x72',
            type: 'image/svg+xml',
          },
          {
            src: 'favicon.svg',
            sizes: '96x96',
            type: 'image/svg+xml',
          },
          {
            src: 'favicon.svg',
            sizes: '128x128',
            type: 'image/svg+xml',
          },
          {
            src: 'favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: 'favicon.svg',
            sizes: '256x256',
            type: 'image/svg+xml',
          },
          {
            src: 'favicon.svg',
            sizes: '384x384',
            type: 'image/svg+xml',
          },
          {
            src: 'favicon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
          {
            src: 'favicon.svg',
            sizes: '1024x1024',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "\\.css$": path.resolve(__dirname, "./src/empty.js"),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
