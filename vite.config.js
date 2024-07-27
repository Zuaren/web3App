import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: ''
})

// So I have plugins here, I put react because I am using react here.
// how to deply website to your arweave

// add this your package.json <"deploy": "yarn build && arweave deploy-dir dist --key-file wallet.json">