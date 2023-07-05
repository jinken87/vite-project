import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  base:"/",
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vite-project/'
    : '/',
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ]
})
