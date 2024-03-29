import LabelPreset from '@/types/LabelPreset'

const presets: { [key: string]: LabelPreset | 'spacer' } = {
    /* Blank/Starter preset */
    'Default': {
        text: {
            brand: '',
            type: '',
            diameter: '',
            length: '',
            temp: '',
            weight: ''
        },
        graphics: {
            logo: 'Bambu Lab'
        }
    },

    /* Bambu Lab */
    '': 'spacer',
    '⸻ Bambu Lab ⸻': 'spacer',
    
    'Bambu PLA Basic': {
        text: {
            brand: 'Bambu',
            type: 'PLA Basic',
            diameter: '1.75 ± 0.03 mm',
            length: '330 m',
            temp: '190-220',
            weight: '1 kg'
        },
        graphics: {
            logo: 'Bambu Lab'
        }
    },
    'Bambu PLA Silk': {
        text: {
            brand: 'Bambu',
            type: 'PLA Silk',
            diameter: '1.75 ± 0.03 mm',
            length: '315 m',
            temp: '210-230',
            weight: '1 kg'
        },
        graphics: {
            logo: 'Bambu Lab'
        }
    },
    'Bambu PETG Basic': {
        text: {
            brand: 'Bambu',
            type: 'PETG Basic',
            diameter: '1.75 ± 0.03 mm',
            length: '330 m',
            temp: '230-260',
            weight: '1 kg'
        },
        graphics: {
            logo: 'Bambu Lab'
        }
    },


    /* SUNLU */
    ' ': 'spacer',
    '⸻ SUNLU ⸻': 'spacer',

    'SUNLU PETG': {
        text: {
            brand: 'SUNLU',
            type: 'PETG',
            diameter: '1.75 ± 0.02 mm',
            length: '325 m',
            temp: '220-250',
            weight: '1 kg'
        },
        graphics: {
            logo: 'SUNLU'
        }
    }
}

export default presets