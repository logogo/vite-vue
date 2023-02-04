import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import { injectHtml } from 'vite-plugin-html';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import OptimizationPersist from 'vite-plugin-optimize-persist';
import PkgConfig from 'vite-plugin-package-config';

export default defineConfig(ConfigEnv => {
    // console.log(ConfigEnv);{ mode: 'development', command: 'serve', ssrBuild: false }
    const env = loadEnv(ConfigEnv.mode, process.cwd()); // 获取.env.XXX文件
    const { mode } = ConfigEnv;
    return {
        plugins: [
            vue(),
            vueSetupExtend(),
            injectHtml({
                injectData: {
                    title: 'plm'
                }
            }),
            PkgConfig(),
            OptimizationPersist()
        ],
        root: process.cwd(), // html地址
        base: mode.command === 'serve' ? './' : env.VITE_PUBLIC_PATH, // base路径
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)) // @ 定向src
            },
            extensions: ['.vue', '.js']
        },
        server: {
            host: '0.0.0.0',
            port: 8080,
            open: true
        },
        css: {
            // css预处理器
            preprocessorOptions: {
                less: {
                    charset: false
                }
            },
            postCss: {
                plugins: [
                    postcssImport, // @import
                    autoprefixer // css3
                ]
            }
        },
        build: {
            outDir: 'dist',
            sourcemap: false,
            chunkSizeWarningLimit: 1500,
            rollupOptions: {
                output: {
                    entryFileNames: `assets/[name].[hash].js`, // 入口文件拆分模式
                    chunkFileNames: `assets/[name].[hash].js`, // 其他模块
                    assetFileNames: `assets/[name].[hash].[ext]`, // 图片，css等其他资源
                    compact: true,
                    manualChunks: { // 抽出第三方包
                        vue: ['vue', 'vue-router']
                    }
                }
            },
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: process.env.npm_lifecycle_event === 'build',
                    drop_debugger: process.env.npm_lifecycle_event === 'build'
                }
            }
        }
    };
});
