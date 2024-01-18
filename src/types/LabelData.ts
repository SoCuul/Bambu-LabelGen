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
        text: string,
        outline: string,
        background: string
    },
    extra: {
        showSpool: boolean
    }
}