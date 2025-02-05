import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Binds to all interfaces
    port: 5173,  // Ensure this matches the port in the Docker setup
  },
})
