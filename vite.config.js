import  {  createVuePlugin  }  from  'vite-plugin-vue2'
import { injectHtml } from 'vite-plugin-html'
const lifecycle = process.env.npm_lifecycle_event;
//console.log(lifecycle)
//console.log(1111111111111111111)

export default {
  plugins: [
    createVuePlugin(),
    injectHtml({
      injectData: {
        title: "开始学习"
      }
    })
  ],
  base: './',
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  build:{
    minify: 'terser',
    terserOptions: {
        compress: {
            //生产环境时移除console
            drop_console: true,
            drop_debugger: true,
        },
    },
    output: {
      chunkFileNames: 'js/[name]-[hash].js',
      entryFileNames: 'js/[name]-[hash].js',
      assetFileNames: '[ext]/[name]-[hash].[ext]',
    },
  }
}