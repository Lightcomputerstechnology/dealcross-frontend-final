// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // Base public path when served (ensure this is “/” for root deployments)
  base: '/',

  // Vite plugins
  plugins: [
    react({
      // Optional: you can enable React Fast Refresh here if you like
      // fastRefresh: true
    })
  ],

  // Path aliases so you can import "@/components/Avatar" instead of "../../components/Avatar"
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

  // When you run `vite build`, files will go into `dist/` by default
  build: {
    outDir: 'dist',
    // You can tweak other build options here if needed (e.g. sourcemaps, minify settings)
  },

  // CSS / PostCSS config is picked up automatically from tailwind.config.js & postcss.config.js
})
