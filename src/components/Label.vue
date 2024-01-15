<template>
    <svg viewBox="0 0 1960 1470" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">

        <!-- Background -->
        <path :style="`fill: ${data.colour.background}`" transform="matrix(1.01977 0 0 .98525 -720.978 -503.465)" d="M707 511h1922v1492H707z" />

        <!-- Filament Info -->
        <g>

            <!-- Brand Name -->
            <text x="1105.34" y="950.001" :style="`font-family:&quot;Inter-Bold&quot;,&quot;Inter&quot;;font-weight:700;font-size:12px;fill:${data.colour.text}`" transform="translate(-6024.82 -5079.143) scale(5.56281)">{{ data.text.brand }}</text>

            <!-- Filament Type -->
            <text x="1105.34" y="950.001" :style="`font-family:&quot;Inter-Bold&quot;,&quot;Inter&quot;;font-weight:700;font-size:12px;fill:${data.colour.text}`" transform="translate(-16980.334 -14295.626) scale(15.46726)">{{ data.text.type }}</text>

            <!-- General Info -->
            <text x="1105.34" y="950.001" :style="`font-family:&quot;Inter-Bold&quot;,&quot;Inter&quot;;font-weight:700;font-size:12px;fill:${data.colour.text}`" transform="translate(-5759.657 -4468.44) scale(5.32225)">Diameter <tspan x="1192.67px 1196.31px 1203.61px" y="950.001px 950.001px 950.001px">: {{ data.text.diameter }}</tspan></text>
            <text x="1105.34" y="964.433" :style="`font-family:&quot;Inter-Bold&quot;,&quot;Inter&quot;;font-weight:700;font-size:12px;fill:${data.colour.text}`" transform="translate(-5759.657 -4468.44) scale(5.32225)">Length<tspan x="1192.67px 1196.31px 1203.61px" y="964.433px 964.433px 964.433px">: {{ data.text.length }}</tspan></text>
            <text x="1105.34" y="978.866" :style="`font-family:&quot;Inter-Bold&quot;,&quot;Inter&quot;;font-weight:700;font-size:12px;fill:${data.colour.text}`" transform="translate(-5759.657 -4468.44) scale(5.32225)">Printing Temp<tspan x="1192.67px 1196.31px 1203.61px" y="978.866px 978.866px 978.866px">: {{ data.text.temp }} ºC</tspan></text>
            <text x="1105.34" y="993.298" :style="`font-family:&quot;Inter-Bold&quot;,&quot;Inter&quot;;font-weight:700;font-size:12px;fill:${data.colour.text}`" transform="translate(-5759.657 -4468.44) scale(5.32225)">Net Weight<tspan x="1192.67px 1196.31px 1203.61px" y="993.298px 993.298px 993.298px">: {{ data.text.weight }}</tspan></text>
            <text x="1105.34" y="1007.73" :style="`font-family:&quot;Inter-Bold&quot;,&quot;Inter&quot;;font-weight:700;font-size:12px;fill:${data.colour.text}`" transform="translate(-5759.657 -4468.44) scale(5.32225)">Filament Code<tspan x="1192.67px 1196.31px 1203.61px" y="1007.73px 1007.73px 1007.73px">: {{ data.text.code }}</tspan></text>
            <!-- <text x="1105.34" y="1022.16" style="font-family:&quot;Inter-Medium&quot;,&quot;Inter&quot;;font-weight:500;font-size:12px;fill:{colour_text}" transform="translate(-5759.657 -4468.44) scale(5.32225)">Made In China</text> -->

            <!-- Brand Logo -->
            <path d="M19.673 2.804V1.543h3.251c.451.007.883.098 1.262.261a2.192 2.192 0 0 1 .968 3.373l-.026.036c.459.384.752.963.752 1.61a2.093 2.093 0 0 1-2.059 2.095l-.033.002-.033-.002H18.07V3.421l1.603-.617Zm0 0V4.55h3.373a.856.856 0 0 0 .365-.081.798.798 0 0 0 .486-.61.874.874 0 0 0-.532-.994.726.726 0 0 0-.286-.061h-3.406Zm3.629 4.884a.94.94 0 0 0 .568-1.69.932.932 0 0 0-.568-.193h-3.629v1.883h3.629Zm7.43 4.644c.862 0 1.561.695 1.561 1.56l-.001 4.107h-6.033a1.564 1.564 0 0 1-1.562-1.566v-.44c0-.864.699-1.566 1.562-1.566h4.569l.002-.719a.157.157 0 0 0-.156-.157h-5.12l-.459-1.219h5.637Zm.096 4.435v-1.116h-4.512a.156.156 0 0 0-.156.156v.803c0 .087.07.157.156.157h4.512Zm8.161-4.435c.862 0 1.562.701 1.562 1.565v2.536c0 .865-.7 1.566-1.562 1.566h-5.282v-7.081h1.603v1.414h3.679Zm-.011 4.28v-2.88a.156.156 0 0 0-.156-.156H35.31v3.192h3.512c.087 0 .156-.07.156-.156ZM44.009 3.25c.863 0 1.562.701 1.562 1.565v4.102h-1.568V4.65a.156.156 0 0 0-.156-.156h-2.078a.156.156 0 0 0-.156.156v4.267h-1.565V4.65a.156.156 0 0 0-.157-.156h-2.107a.156.156 0 0 0-.156.156v4.267H36.07V3.25h7.939Zm16.525 0h1.464v4.101c0 .865-.699 1.566-1.561 1.566h-3.878a1.564 1.564 0 0 1-1.561-1.566V3.25h1.475v4.28c0 .086.07.156.156.156h3.75c.086 0 .155-.07.155-.156V3.25ZM28.622 8.917a1.564 1.564 0 0 1-1.561-1.566v-.44c0-.865.699-1.565 1.561-1.565h4.57l.002-.72a.156.156 0 0 0-.157-.156h-5.119l-.46-1.22h5.637a1.56 1.56 0 0 1 1.562 1.56l-.002 4.107h-6.033Zm-.098-2.192v.804c0 .086.07.156.156.156h4.512V6.569H28.68a.156.156 0 0 0-.156.156Zm23.602-3.479c.862 0 1.561.701 1.561 1.566v2.536c0 .864-.699 1.565-1.561 1.565h-5.282V1.832h1.603v1.414h3.679Zm-.011 4.28v-2.88a.156.156 0 0 0-.156-.156h-3.512v3.192h3.512c.086 0 .156-.07.156-.156ZM7.395 17.999V6.719l6.4 2.527v8.753h-6.4ZM7.395 0h6.4v8.169l-6.4-2.529V0ZM0 0h6.4l.001 8.753L0 11.28V0Zm0 17.997v-5.64l6.401-2.529-.001 8.169H0ZM18.07.629l1.603-.617V1.54l-1.603.618V.629ZM17.998 11h1.639v5.672h3.848L23.998 18h-6v-7Z" :style="`fill:${data.colour.text}`" transform="translate(128.364 1113.674) scale(11.07532)" />

        </g>

        <!-- Spool Info -->
        <g transform="translate(-2288.122 -1207.29) scale(1.68735)">
            <!-- Basic Spool -->
            <g>
                <!-- Outer Ring -->
                <circle cx="2291.47" cy="917.043" r="65.731" :style="`fill: ${data.colour.outline}`" transform="translate(-2469.49 -988.288) scale(2.07769)" />

                <!-- Spool Background -->
                <circle cx="2291.47" cy="917.043" r="65.731" :style="`fill: ${data.colour.background}`" transform="translate(-2162.23 -865.325) scale(1.9436)" />

                <!-- Inner Ring -->
                <circle cx="2291.47" cy="917.043" r="65.731" :style="`fill: ${data.colour.outline}`" transform="translate(-306.417 -122.628) scale(1.13372)" />

                <!-- Labels -->
                <path d="M2464.41 875.54v1.958c0 3.696-3.31 6.696-7.39 6.696h-31.32c-4.08 0-7.39-3-7.39-6.696v-1.958c0-3.696 3.31-6.696 7.39-6.696h31.32c4.08 0 7.39 3 7.39 6.696Z" :style="`fill: ${data.colour.outline}`" transform="matrix(.59508 0 0 .65685 936.963 341.305)" />
                <path d="M2298.25 1049.34v11.14c0 1.45-1.22 2.63-2.71 2.63h-64.1c-1.5 0-2.72-1.18-2.72-2.63v-11.14c0-1.45 1.22-2.63 2.72-2.63h64.1c1.49 0 2.71 1.18 2.71 2.63Z" :style="`fill: ${data.colour.outline}`" transform="matrix(.60824 0 0 .6273 914.723 360.705)" />
            </g>

            <!-- Filament Colour Name -->
            <text x="1124.25" y="950.001" :style="`font-family:&quot;Inter-Bold&quot;,&quot;Inter&quot;;font-weight:700;font-size:12px;fill:${data.colour.text};text-anchor:middle`" transform="translate(-1208.87 -1854.12) scale(3.11344)">{{ data.text.colour_name }}</text>

            <!-- Filament Colour -->
            <circle cx="2291.47" cy="917.043" r="65.731" :style="`fill: ${data.colour.filament}`" />
        </g>

    </svg>
</template>

<script setup lang="ts">
// Types
import LabelDataType from '@/types/LabelData'

// Component props
defineProps<{ data: LabelDataType }>()
</script>