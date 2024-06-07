import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,
    host: true  // Añade esta línea para permitir el acceso desde cualquier host

  }
});
