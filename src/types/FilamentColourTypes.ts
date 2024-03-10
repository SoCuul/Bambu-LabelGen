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
    DualConcentric = 4
}

export const filamentColourTypesNames = [
    'Single',
    'Dual',
    'Dual (Linear Gradient)',
    'Dual (Radial Gradient)',
    'Dual (Concentric)'
]