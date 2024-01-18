import { presetAnu, presetIconExtraProperties } from 'anu-vue'
import { presetThemeDefault } from '@anu-vue/preset-theme-default'
import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons({
            scale: 1.2,
            extraProperties: presetIconExtraProperties
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