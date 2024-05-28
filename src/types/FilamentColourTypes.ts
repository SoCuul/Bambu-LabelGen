export enum FilamentColourTypes {
    /** Single Colour Filament */
    Single = 0,


    /** Dual Colour Filament (Split) */
    Dual = 1,

    /** Dual Colour Filament (Linear Gradient) */
    DualGradientLinear = 2,
    
    /** Dual Colour Filament (Radial Gradient) */
    DualGradientRadial = 3,

    /** Dual Colour Filament (Concentric circles) */
    DualConcentric = 4,

    /** Triple Colour Filament (Split) */
    Triple = 5,

    /** Triple Colour Filament (Linear Gradient) */
    TripleGradientLinear = 6,
    
    /** Triple Colour Filament (Radial Gradient) */
    TripleGradientRadial = 7
}

export const filamentColourTypesNames = [
    'Single',
    'Dual',
    'Dual (Linear Gradient)',
    'Dual (Radial Gradient)',
    'Dual (Concentric)',
    'Triple',
    'Triple (Linear Gradient)',
    'Triple (Radial Gradient)'
]