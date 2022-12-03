import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === 'serve') {
    return {
      // dev specific config
      plugins: [react()]
    }
  } else {
    // command === 'build'
    return {
      server: {
        base: "runes/"
      },
      base: "runes/",
      plugins: [react()]
    }
  }
})

