import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://javarcast.github.io/gh-vue-vite/',
  plugins: [vue()],
})
