<script setup lang="ts">
    // Imported label data
    import logos from '@/data/logos'

    // Types
    import LabelDataType from '@/types/LabelData'
    import { FilamentColourTypes } from '@/types/FilamentColourTypes'

    // Component props
    defineProps<{ data: LabelDataType }>()
</script>

<template>
    <svg viewBox="0 0 1960 1470" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">

        <defs>
            <!-- Dual colour filament gradients -->
            <linearGradient id="filament-colour-dual" x1="0" x2="1" y1="0" y2="0">
                <stop offset="50%" :stop-color="data.colour.filament" />
                <stop offset="50%" :stop-color="data.colour.filament2" />
            </linearGradient>
            
            <linearGradient id="filament-colour-dual-gradientlinear" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" :stop-color="data.colour.filament" />
                <stop offset="100%" :stop-color="data.colour.filament2" />
            </linearGradient>

            <radialGradient id="filament-colour-dual-gradientradial" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" :stop-color="data.colour.filament2" />
                <stop offset="100%" :stop-color="data.colour.filament" />
            </radialGradient>

            <!-- Triple colour filament gradients -->
            <linearGradient id="filament-colour-triple" x1="0" x2="1" y1="0" y2="0">
                <stop offset="33.3%" :stop-color="data.colour.filament" />

                <stop offset="33.4%" :stop-color="data.colour.filament2" />
                <stop offset="66.6%" :stop-color="data.colour.filament2" />
                
                <stop offset="66.7%" :stop-color="data.colour.filament3" />
            </linearGradient>

            <linearGradient id="filament-colour-triple-gradientlinear" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" :stop-color="data.colour.filament" />
                <stop offset="50%" :stop-color="data.colour.filament2" />
                <stop offset="100%" :stop-color="data.colour.filament3" />
            </linearGradient>

            <radialGradient id="filament-colour-triple-gradientradial" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" :stop-color="data.colour.filament3" />
                <stop offset="50%" :stop-color="data.colour.filament2" />
                <stop offset="100%" :stop-color="data.colour.filament" />
            </radialGradient>
        </defs>

        <!-- Background -->
        <path :style="`fill: ${data.colour.background}`" transform="matrix(1.01977 0 0 .98525 -720.978 -503.465)" d="M707 511h1922v1492H707z" />

        <!-- Filament Info -->
        <g>

            <!-- Brand Name -->
            <text v-if="data.text.brand" x="1105.34" y="950.001"
                :style="`
                    font-family: 'Inter-Bold', 'Inter';
                    font-weight: 700;
                    font-size: ${12 * (Number(data.sizing.brand_font_percent) / 100)}px;
                    fill: ${data.colour.text}
                `"
                transform="translate(-6024.82 -5079.143) scale(5.56281)">{{ data.text.brand }}</text>

            <!-- Filament Type -->
            <text v-if="data.text.type" x="1105.34" y="950.001"
                :style="`
                    font-family: 'Inter-Bold', 'Inter';
                    font-weight: 700;
                    font-size: ${12 * (Number(data.sizing.type_font_percent) / 100)}px;
                    fill: ${data.colour.text}
                `"
                transform="translate(-16980.334 -14295.626) scale(15.46726)">{{ data.text.type }}</text>

            <!-- General Info -->
            <g>
                <text v-if="data.text.diameter" x="1105.34" y="950.001" :style="`font-family: 'Inter-Bold', 'Inter'; font-weight: 700; font-size: ${12 * (Number(data.sizing.fil_info_font_percent) / 100)}px; fill: ${data.colour.text}`" transform="translate(-5759.657 -4468.44) scale(5.32225)">
                    Diameter <tspan x="1196px 1196.31px 1206.25px" y="950.001px 950.001px 950.001px">: {{ data.text.diameter }}</tspan>
                </text>

                <text v-if="data.text.length" x="1105.34" y="967.433" :style="`font-family: 'Inter-Bold', 'Inter'; font-weight: 700; font-size: ${12 * (Number(data.sizing.fil_info_font_percent) / 100)}px; fill: ${data.colour.text}`" transform="translate(-5759.657 -4468.44) scale(5.32225)">
                    Length<tspan x="1196px 1196.31px 1206.25px" y="967.433px 967.433px 967.433px">: {{ data.text.length }}</tspan>
                </text>

                <text v-if="data.text.temp" x="1105.34" y="984.866" :style="`font-family: 'Inter-Bold', 'Inter'; font-weight: 700; font-size: ${12 * (Number(data.sizing.fil_info_font_percent) / 100)}px; fill: ${data.colour.text}`" transform="translate(-5759.657 -4468.44) scale(5.32225)">
                    Printing Temp<tspan x="1196px 1196.31px 1206.25px" y="984.866px 984.866px 984.866px">: {{ data.text.temp }} ºC</tspan>
                </text>

                <text v-if="data.text.weight" x="1105.34" y="1002.298" :style="`font-family: 'Inter-Bold', 'Inter'; font-weight: 700; font-size: ${12 * (Number(data.sizing.fil_info_font_percent) / 100)}px; fill: ${data.colour.text}`" transform="translate(-5759.657 -4468.44) scale(5.32225)">
                    Net Weight<tspan x="1196px 1196.31px 1206.25px" y="1002.298px 1002.298px 1002.298px">: {{ data.text.weight }}</tspan>
                </text>

                <text v-if="data.text.code" x="1105.34" y="1019.73" :style="`font-family: 'Inter-Bold', 'Inter'; font-weight: 700; font-size: ${12 * (Number(data.sizing.fil_info_font_percent) / 100)}px; fill: ${data.colour.text}`" transform="translate(-5759.657 -4468.44) scale(5.32225)">
                    Filament Code<tspan x="1196px 1196.31px 1206.25px" y="1019.73px 1019.73px 1019.73px">: {{ data.text.code }}</tspan>
                </text>

                <!-- <text x="1105.34" y="1022.16" :style="`font-family: 'Inter-Bold', 'Inter'; font-weight: 700; font-size: ${12 * (Number(data.sizing.fil_info_font_percent) / 100)}px; fill: ${data.colour.text}`" transform="translate(-5759.657 -4468.44) scale(5.32225)">
                    Made In China
                </text> -->
            </g>

            <!-- Brand Logo -->
            <g :style="`fill:${data.colour.text}`" v-if="logos?.[data.graphics.logo]" v-html="logos?.[data.graphics.logo]"></g>

        </g>

        <!-- Spool Info -->
        <g transform="translate(-2288.122 -1207.29) scale(1.68735)">
            <!-- Basic Spool -->
            <g v-if="data.extra.showSpool">
                <!-- Outer Ring -->
                <circle cx="2291.47" cy="917.043" r="65.731" 
                    :style="`fill: ${data.colour.outline}`" transform="translate(-2469.49 -988.288) scale(2.07769)" />

                <!-- Spool Background -->
                <circle cx="2291.47" cy="917.043" r="65.731" :style="`fill: ${data.colour.background}`" transform="translate(-2162.23 -865.325) scale(1.9436)" />

                <!-- Inner Ring -->
                <circle cx="2291.47" cy="917.043" r="65.731" :style="`fill: ${data.colour.outline}`" transform="translate(-306.417 -122.628) scale(1.13372)" />

                <!-- Labels -->
                <path d="M2464.41 875.54v1.958c0 3.696-3.31 6.696-7.39 6.696h-31.32c-4.08 0-7.39-3-7.39-6.696v-1.958c0-3.696 3.31-6.696 7.39-6.696h31.32c4.08 0 7.39 3 7.39 6.696Z" :style="`fill: ${data.colour.outline}`" transform="matrix(.59508 0 0 .65685 936.963 341.305)" />
                <path d="M2298.25 1049.34v11.14c0 1.45-1.22 2.63-2.71 2.63h-64.1c-1.5 0-2.72-1.18-2.72-2.63v-11.14c0-1.45 1.22-2.63 2.72-2.63h64.1c1.49 0 2.71 1.18 2.71 2.63Z" :style="`fill: ${data.colour.outline}`" transform="matrix(.60824 0 0 .6273 914.723 360.705)" />
            </g>

            <!-- Filament Colour Name -->
            <text v-if="data.text.colour_name" x="1124.25" y="950.001"
                :style="`
                    font-family: 'Inter-Bold', 'Inter';
                    font-weight: 700;
                    text-anchor: middle;
                    font-size: ${12 * (Number(data.sizing.fil_colour_name_font_percent) / 100)}px;
                    fill: ${data.colour.text};
                `"
                transform="translate(-1208.87 -1854.12) scale(3.11344)">{{ data.text.colour_name }}</text>

            <!-- Filament Colour Swatch -->
            <g>

                <!-- Single -->
                <g v-if="data.extra.colourType === FilamentColourTypes.Single">
                    <circle cx="2291.47" cy="917.043" r="65.731" :style="`fill: ${data.colour.filament}`" />
                </g>

                <!-- Dual -->
                <g v-else-if="data.extra.colourType === FilamentColourTypes.Dual">
                    <circle cx="2291.47" cy="917.043" r="65.731" style="fill: url('#filament-colour-dual')" />
                </g>
                <!-- Dual (Linear Gradient) -->
                <g v-else-if="data.extra.colourType === FilamentColourTypes.DualGradientLinear">
                    <circle cx="2291.47" cy="917.043" r="65.731" style="fill: url('#filament-colour-dual-gradientlinear')" />
                </g>
                <!-- Dual (Radial Gradient) -->
                <g v-else-if="data.extra.colourType === FilamentColourTypes.DualGradientRadial">
                    <circle cx="2291.47" cy="917.043" r="65.731" style="fill: url('#filament-colour-dual-gradientradial')" />
                </g>
                <!-- Dual (Concentric) -->
                <g v-else-if="data.extra.colourType === FilamentColourTypes.DualConcentric">
                    <!-- Outer -->
                    <circle cx="2291.47" cy="917.043" r="65.731" :style="`fill: ${data.colour.filament}`" />

                    <!-- Inner -->
                    <circle cx="2291.47" cy="917.043" r="35.731" :style="`fill: ${data.colour.filament2}`" />
                </g>

                <!-- Dual -->
                <g v-else-if="data.extra.colourType === FilamentColourTypes.Triple">
                    <circle cx="2291.47" cy="917.043" r="65.731" style="fill: url('#filament-colour-triple')" />
                </g>
                <!-- Triple (Linear Gradient) -->
                <g v-else-if="data.extra.colourType === FilamentColourTypes.TripleGradientLinear">
                    <circle cx="2291.47" cy="917.043" r="65.731" style="fill: url('#filament-colour-triple-gradientlinear')" />
                </g>
                <!-- Triple (Radial Gradient) -->
                <g v-else-if="data.extra.colourType === FilamentColourTypes.TripleGradientRadial">
                    <circle cx="2291.47" cy="917.043" r="65.731" style="fill: url('#filament-colour-triple-gradientradial')" />
                </g>

            </g>
        </g>

    </svg>
</template>