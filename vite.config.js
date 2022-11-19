
import { defineConfig } from 'vite'
import  {  createVuePlugin  }  from  'vite-plugin-vue2'
import { injectHtml } from 'vite-plugin-html'
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import requireTransform from 'vite-plugin-require-transform';

import OptimizationPersist from 'vite-plugin-optimize-persist';
import PkgConfig from 'vite-plugin-package-config';
import path from 'path';
const lifecycle = process.env.npm_lifecycle_event;

export default defineConfig(({ command }) => {
  let requireTransformConfig = '';

  if (command === 'serve') { // 开发环境
      requireTransformConfig = {
          fileRegex: /.js$|.vue$/
      };
  }
  if (command === 'build') { // 生产环境
      requireTransformConfig = `/.js$|.vue$/, '_vite_plugin_require_transform_'`;
  }

  return {
    css: {
      postCss: {
          plugins: [
              postcssImport, // @import
              autoprefixer // css3
          ]
        }
    },
    plugins: [
      createVuePlugin(), // 兼容vue2
      PkgConfig(), // 提高速度
      OptimizationPersist(), // 提高速度
      injectHtml({
        injectData: {
          title: "开始学习"
        }
      }),
      requireTransform(requireTransformConfig) // 支持require
    ],
    resolve: {
      extensions: ['.vue', '.js', '.scss'],
      alias: {
          '@': path.resolve(__dirname, './src')
      }
    },
    build:{
      outDir: lifecycle == 'dev' ? "dev" : "dist", // 根据命令打包
      minify: 'terser',
      terserOptions: {
          compress: {
              //生产环境时移除console
              drop_console: lifecycle === 'build',
              drop_debugger: lifecycle === 'build'
          },
      },
      output: {
        manualChunks: {
          lodash: ['lodash'],
          echarts: ['echarts']
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
    }
  }
})