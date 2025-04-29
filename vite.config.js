// File: vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  optimizeDeps: {
    include: ['react-csv'], // ✅ include explicitly
    exclude: ['react-feather', 'prop-types'],
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    commonjsOptions: {
      include: [/node_modules/, /react-csv/], // ✅ force inclusion for build
    },
  },
  define: {
    'process.env': {},
  },
  envPrefix: 'VITE_',
});
