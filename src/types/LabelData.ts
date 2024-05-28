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
    sizing: {
        brand_font_percent: string,
        type_font_percent: string,
        fil_info_font_percent: string,
        fil_colour_name_font_percent: string
    },
    colour: {
        filament: string,
        filament2: string,
        filament3: string,
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