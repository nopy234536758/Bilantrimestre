import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Changez ceci si votre repo a un nom spécifique
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
