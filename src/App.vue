<script setup lang="ts">
import { reactive } from 'vue'
import { Canvg } from 'canvg'
import downloadURI from '@/utils/downloadURI'

// Types
import LabelDataType from '@/types/LabelData'

// Label base template
import Label from '@/components/Label.vue'

// Customizable data
const configData = reactive(
    {
        text: {
            brand: 'Brand',
            type: 'Type',
            diameter: '? mm',
            length: '? m',
            temp: '?',
            weight: '? kg',
            code: '?',
            colour_name: '?'
        },
        colour: {
            background: '#FFFFFF',
            text: '#2D2D2D',
            outline: '#A5AAA9',
            filament: '#06AE42'
        }
    } as LabelDataType
)

// Download label as png
async function downloadLabel(e: Event) {
    const svgElement = document.querySelector('#full-sized-label') as SVGSVGElement
    const { width, height } = svgElement.viewBox.baseVal

    const canvas = document.querySelector('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    canvas.width = width
    canvas.height = height

    const v = await Canvg.from(ctx, svgElement.outerHTML)
    v.render()

    downloadURI(canvas.toDataURL('image/png'), 'Label.png')
}
</script>

<template>
    <input type="text" placeholder="Brand" v-model="configData.text.brand">
    <input type="text" placeholder="Type" v-model="configData.text.type">
    <input type="text" placeholder="Diameter" v-model="configData.text.diameter">
    <input type="text" placeholder="Length" v-model="configData.text.length">
    <input type="text" placeholder="Temp" v-model="configData.text.temp">
    <input type="text" placeholder="Weight" v-model="configData.text.weight">
    <input type="text" placeholder="Code" v-model="configData.text.code">
    <input type="text" placeholder="Filament colour" v-model="configData.text.colour_name">

    <br><br>

    <input type="color" v-model="configData.colour.filament">
    <input type="color" v-model="configData.colour.text">
    <input type="color" v-model="configData.colour.outline">
    <input type="color" v-model="configData.colour.background">

    <br><br><br><br>

    <!-- Label preview -->
    <div style="text-align: center;">
        <Label v-model:data="configData" height="245" style="outline: 1rem solid black;" />

        <br><br><br>

        <button @click="downloadLabel" style="text-align: center;">Download Label</button>
    </div>

    <!-- Full sized label -->
    <div style="display: none">
        <canvas id="canvas"></canvas>
        <Label id="full-sized-label" v-model:data="configData" />
    </div>
</template>

<style scoped></style>