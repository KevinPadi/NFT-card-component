import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: 'https://kevinpadi.github.io/NFT-card-component/'
})