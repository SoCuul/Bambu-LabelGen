import LabelData from '@/types/LabelData'

export default interface LabelPreset {
    text: {
        brand: LabelData['text']['brand'],
        type: LabelData['text']['type'],
        diameter: LabelData['text']['diameter'],
        length: LabelData['text']['length'],
        temp: LabelData['text']['temp'],
        weight: LabelData['text']['weight']
    },
    graphics: {
        logo: LabelData['graphics']['logo']
    }
}