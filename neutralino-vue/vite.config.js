import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5500
  },
  plugins: [
    vue()
  ],
  base: '',
  build: {
  	outDir: 'dist'
  }
});
