// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or vue or svelte, etc.

export default defineConfig({
  plugins: [react()],
  base:"/"
  
});
