import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },

  // ensure prop-types is pre-bundled
  optimizeDeps: {
    include: ['prop-types']
  },

  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  define: {
    'process.env': {}
  },
  envPrefix: 'VITE_',
});
