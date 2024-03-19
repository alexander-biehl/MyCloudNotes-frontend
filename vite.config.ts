import type { ConfigEnv } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default ({ command, mode }: ConfigEnv) => {
  const currentEnv = loadEnv(mode, process.cwd())
  console.log('Current Mode: ', command)
  console.log('Current environment configuration: ', currentEnv)
  return defineConfig({
    plugins: [react()],
    base: currentEnv.PUBLIC_PATH,
    mode: mode,
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@views': resolve(__dirname, './src/views'),
        '@assets': resolve(__dirname, './src/assets'),
        '@types': resolve(__dirname, './src/types'),
        '@components': resolve(__dirname, './src/components'),
        '@network': resolve(__dirname, './src/network'),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    // css: {
    //   preprocessorOptions: {
    //     sass: {}
    //   },
    // },
    build: {
      sourcemap: mode != 'production',
    },
  })
}
