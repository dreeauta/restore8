import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // Same as `@` — used by composables shared with 2026-portfolio (`@er/...` imports).
      '@er': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // For embedding in 2026-portfolio: VITE_BASE=/european-remodeling/ npm run build
  base: process.env.VITE_BASE || '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: fileURLToPath(new URL('./index.html', import.meta.url)),
    },
  },
})
