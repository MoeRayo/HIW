// uno.config.ts
import { defineConfig, presetUno  } from 'unocss'
export default defineConfig({
  presets: [
    presetUno(),
  ],
  theme: {
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif']
    }
  }
})