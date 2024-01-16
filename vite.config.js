import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/FM-clipboard-landing-page',
  plugins: [react()],
  optimizeDeps: {
    include: ['@fortawesome/free-solid-svg-icons'],
  },
});
