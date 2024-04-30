import LabelData from '@/types/LabelData'

export default interface LabelPreset {
    text: {
        brand: LabelData['text']['brand'],
        type: LabelData['text']['type'],
        diameter: LabelData['text']['diameter'],
        temp: LabelData['text']['temp'],
    },
    graphics: {
        logo: LabelData['graphics']['logo']
    }
}