import { defineConfig, loadEnv,ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv)=>{
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [vue()],
    server: {
      // 允许IP访问
      host: "0.0.0.0",
      // 应用端口 (默认:3000)
      port: Number(3000),
      // 运行是否自动打开浏览器
      open: true,
      proxy: {
        /** 代理前缀为 /dev-api 的请求  */
        [env.VITE_APP_API]: {
          changeOrigin: true,
          // 接口地址
          target: env.VITE_APP_API_URL,
          rewrite: (path) =>
            path.replace(new RegExp("^" + env.VITE_APP_API), ""),
        },
      },
    },
    resolve:{
      alias:{
        '@':resolve(__dirname, 'src')
      }
    }
  }
})


