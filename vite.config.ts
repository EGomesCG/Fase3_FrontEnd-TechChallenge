import { defineConfig as defineVitestConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

export default defineVitestConfig({
  plugins: [react()],
  test:{
    globals:true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,
  },
})
