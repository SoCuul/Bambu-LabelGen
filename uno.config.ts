import { presetAnu, presetIconExtraProperties } from 'anu-vue'
import { presetThemeDefault } from '@anu-vue/preset-theme-default'
import { defineConfig, presetUno, presetIcons, presetWebFonts } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons({
            scale: 1.2,
            extraProperties: presetIconExtraProperties
        }),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: 'Inter:100,200,300,400,500,600,700'
            }
        }),

        // anu-vue preset
        presetAnu({
            // Custom anu colours
            colors: [
                'accent',
                'lighterGrey'
            ]
        }),

        // default theme preset
        presetThemeDefault()
    ],
    content: {
        pipeline: {
            include: [
                /.*\/anu-vue\.js(.*)?$/,
                './**/*.vue',
                './**/*.md'
            ]
        }
    }
})