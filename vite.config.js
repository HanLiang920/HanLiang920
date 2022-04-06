import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [vue(
    {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['a-scene','a-sky','a-entity','a-cylinder','a-camera'].includes(tag)
        }
      }
    }
  )]
})
