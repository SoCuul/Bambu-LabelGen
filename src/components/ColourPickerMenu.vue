<script setup lang="ts">
    // Colour picker
    import { ColorPicker } from 'vue-color-kit'
    import 'vue-color-kit/dist/vue-color-kit.css'

    // Component props
    defineProps<{ colourVar: string }>()

    // Component emits
    const emit = defineEmits([ 'changedColour' ])

    // Colour picker default values
    const defaultColourValues = [
        ''
    ]

    // Colour change data
    interface ColourChangeDataType {
        rgba: {
            r: string
            g: string
            b: string
            a: string
        }
        hsv: {
            h: string
            s: string
            v: string
        }
        hex: string
    }

    const handleColourChange = (data: ColourChangeDataType): void => {
        emit('changedColour', data.hex)
    }
</script>

<template>
    <AMenu persist="content">
        <ColorPicker theme="dark" style="width: 220px;" :colors-default="defaultColourValues" :color="colourVar" @changeColor="handleColourChange"/>
    </AMenu>
</template>