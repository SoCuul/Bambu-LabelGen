<script setup lang="ts">
    // Colour picker
    import { ColorPicker } from 'vue-color-kit'
    import 'vue-color-kit/dist/vue-color-kit.css'

    // Component model
    const model = defineModel<string>()

    // Colour picker default values
    const defaultColourValues = [
        '#fffffe',
        '#45f0ff',
        '#78f4dc',
        '#3acb09',
        '#477706',
        '#84610c',
        '#9fe20d',
        '#f4d976',
        '#f9a747',
        '#e04f28',
        '#883044',
        '#f63ca0',
        '#f930f4',
        '#ddb1d5',
        '#725dfa',
        '#2423f8',
        '#004b7c',
        '#358cfa',
        '#d6ecfc',
        '#a3c5d3',
        '#3279af',
        '#888988',
        '#bdbcbc',
        '#171616'
    ]
</script>

<template>
    <AMenu persist="content">
        <ColorPicker theme="dark" style="width: 220px;" :colors-default="defaultColourValues" :color="model" @changeColor="model = $event.hex"/>
    </AMenu>
</template>