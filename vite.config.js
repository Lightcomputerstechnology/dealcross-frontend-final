import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  optimizeDeps: {
    // force‐include only what we need, skip react-feather
    include: ['prop-types'],
    exclude: ['react-feather']
  },
  build: {
    outDir: 'dist',
    // turn off sourcemaps to reduce memory pressure
    sourcemap: false,
    // use esbuild minifier (lighter than terser)
    minify: 'esbuild',
  },
  define: {
    'process.env': {}
  },
  envPrefix: 'VITE_',
});
