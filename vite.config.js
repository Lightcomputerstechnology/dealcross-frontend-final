// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  optimizeDeps: {
    include: ['react-csv'],
    exclude: ['react-feather', 'prop-types'],
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // ✅ enables better stack trace
    minify: false,   // ✅ disable to see readable error lines
    commonjsOptions: {
      include: [/node_modules/, /react-csv/], // ✅ explicitly include
    },
  },
  define: {
    'process.env': {},
    __REACT_DEVTOOLS_GLOBAL_HOOK__: 'true', // ✅ show devtool-based errors
  },
  envPrefix: 'VITE_',
});
