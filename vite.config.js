import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/*.stories.{js,jsx,ts,tsx}' // Excluye archivos de Storybook
    ],
    include: ['**/*.{test,spec}.{js,jsx,ts,tsx}'] // Solo incluye tests
  }
})