import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://joshua-gibson.github.io/forodain/',
  plugins: [react({include: ['**/*.tsx']})],
})
