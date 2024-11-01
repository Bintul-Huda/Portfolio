import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',  // Replace 'yourrepository' with your GitHub repository name
  server: {
    port: 3000, // You can specify the port if you prefer; default is 3000
  },
  build: {
    outDir: 'dist',  // The default output folder is 'dist'; no need to change unless necessary
  },
});
