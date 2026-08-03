import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // ES2019 keeps the bundle parseable by react-snap's headless Chromium
    // while remaining compatible with all modern browsers (ES2019 covers ~97% of global usage).
    target: 'es2019',
    cssTarget: 'chrome88',
  },
})
