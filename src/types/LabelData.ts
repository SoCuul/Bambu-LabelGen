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
        brand_font_size: string,
        type_font_size: string,
        fil_info_font_size: string,
        fil_colour_name_font_size: string
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