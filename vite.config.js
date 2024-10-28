import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  
    configureServer: (server) => {
      server.middlewares.use((req, res, next) => {
        res.setHeader('Permissions-Policy', 'camera=(self)');
        next();
      });
    },
  },
});