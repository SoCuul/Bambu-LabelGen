import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { AnuComponentResolver } from 'anu-vue'

import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        svgLoader(),
        Unocss(),
        Components({
            resolvers: [
                AnuComponentResolver()
            ],
            dts: true
        })
    ],

    build: {
        outDir: 'dist',
        emptyOutDir: true
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, './src')
            }
        ]
    }
})