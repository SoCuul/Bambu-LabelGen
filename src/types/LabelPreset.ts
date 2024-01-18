export default interface LabelPreset {
    text: {
        brand: string,
        type: string,
        diameter: string,
        length: string,
        temp: string,
        weight: string
    },
    extra: {
        disableBambuLogo: boolean
    }
}