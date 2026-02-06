import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves at https://<user>.github.io/creative-garden/
export default defineConfig({
  plugins: [react()],
  base: '/creative-garden/',
})
