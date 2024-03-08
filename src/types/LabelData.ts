import { FilamentColourTypes } from '@/types/FilamentColourTypes'

export default interface LabelData {
    text: {
        brand: string,
        type: string,
        diameter: string,
        length: string,
        temp: string,
        weight: string,
        code: string,
        colour_name: string
    },
    colour: {
        filament: string,
        filament2: string,
        text: string,
        outline: string,
        background: string
    },
    graphics: {
        logo: string
    },
    extra: {
        colourType: FilamentColourTypes,
        showSpool: boolean
    }
}