import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/staccato2011/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});