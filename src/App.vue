<script setup lang="ts">
    import { reactive, onMounted, watch } from 'vue'
    import { downloadLabel } from '@/utils/downloadLabel'
    import { toast } from 'vue3-toastify'
    import objectMerge from 'lodash.merge'
    import jsurl from 'jsurl'

    // Imported label data
    import presets from '@/data/presets'
    import logos from '@/data/logos'

    // Types
    import LabelDataType from '@/types/LabelData'
    import { FilamentColourTypes } from '@/types/FilamentColourTypes'

    // Components
    import GeneratedLabel from '@/components/GeneratedLabel.vue'
    import FilamentColourTypeSelect from '@/components/FilamentColourTypeSelect.vue'

    // Customizable data
    const configData = reactive(
        {
            text: {
                brand: '',
                type: '',
                diameter: '',
                length: '',
                temp: '',
                weight: '',
                code: '',
                colour_name: ''
            },
            sizing: {
                brand_font_percent: '100',
                type_font_percent: '100',
                fil_info_font_percent: '100',
                fil_colour_name_font_percent: '100'
            },
            colour: {
                filament: '#06AE42',
                filament2: '#87ceeb',
                filament3: '#7289DA',
                text: '#2D2D2D',
                outline: '#A5AAA9',
                background: '#FFFFFF'
            },
            graphics: {
                logo: 'Bambu Lab'
            },
            extra: {
                colourType: FilamentColourTypes.Single,
                showSpool: true
            }
        } as LabelDataType
    )

    // URL State (decode on page load)
    onMounted(() => {
        // Decode data url parameter
        const encodedData = new URLSearchParams(window.location.search).get('data')
        if (!encodedData) return

        // Log for debug
        console.log('Received url param data:')
        console.log(jsurl.parse(encodedData))

        // Apply decoded data to current config state
        objectMerge(configData, jsurl.parse(encodedData))
    })

    // URL State (encode on config data change)
    watch(configData, (newData) => {
        // Set url parameter to encoded data
        window.history.replaceState(
            {},
            '',
            `${window.location.pathname}?data=${jsurl.stringify(newData)}`
        )
    }, { deep: true })

    // Apply presets
    const applyPreset = (preset: string) => {
        // Check if selected option is a spacer value
        if (preset === 'spacer') return

        // Get data for selected preset
        const presetData = presets[preset]

        // Apply preset values to current config state
        objectMerge(configData, presetData)
    }

    // Copy label link
    const copyLink = () => {
        try {
            navigator.clipboard.writeText(window.location.toString())
            toast.info('Copied label link to your clipboard', { autoClose: 3000 })
        }
        catch (error) {
            console.log(error)

            toast.error('Could not copy link to clipboard.\nCheck your browser settings.', { autoClose: 10000 })
        }
    }
</script>

<template>
    <!-- Header -->
    <header>
        <h1 class="a-title mt-6 mb-2 mx-6 ws-normal text-center text-4xl">Bambu Lab Label Generator</h1>
    </header>

    <main class="grid-row sm:grid-cols-2 place-items-start">
        <!-- Configurable options -->
        <ACard class="large-card" color="" title="" subtitle="" text="">
            <div class="a-card-body a-card-spacer">

                <!-- Presets -->
                <ACard variant="light" color="lighterGrey" title="" subtitle="" text="">
                    <div class="a-card-body a-card-spacer">
                        
                        <!-- Card Title -->
                        <h1 class="a-title option-card-title">Presets</h1>
                        
                        <!-- Card Body -->
                        <ASelect type="text" placeholder="Click to select a preset" :options="Object.keys(presets)" @change="applyPreset" label="" inputWrapperAttrs=""></ASelect>
                        
                    </div>
                </ACard>

                <!-- Filament type -->
                <ACard variant="light" color="lighterGrey" title="" subtitle="" text="">
                    <div class="a-card-body a-card-spacer">
                        
                        <!-- Card Title -->
                        <h1 class="a-title option-card-title">Filament type</h1>
                        
                        <!-- Card Body -->
                        <div class="grid-row sm:grid-cols-2 place-items-stretch">
                            <AInput type="text" label="Brand" placeholder="Eg. Bambu" v-model="configData.text.brand" inputWrapperAttrs=""></AInput>
                            
                            <AInput type="text" label="Type" placeholder="Eg. PLA" v-model="configData.text.type" inputWrapperAttrs=""></AInput>

                            <ASelect type="text" label="Brand Logo" placeholder="No logo" :options="Object.keys(logos)" v-model="configData.graphics.logo" inputWrapperAttrs=""></ASelect>
                        </div>
                        
                    </div>
                </ACard>
                
                <!-- Filament info -->
                <ACard variant="light" color="lighterGrey" title="" subtitle="" text="">
                    <div class="a-card-body a-card-spacer">
                        
                        <!-- Card Title -->
                        <h1 class="a-title option-card-title">Filament info</h1>
                        
                        <!-- Card Body - Section 1 -->
                        <div class="grid-row sm:grid-cols-2 place-items-stretch !mb-5">
                            <AInput type="text" label="Diameter" placeholder="Eg. 1.75 ± 0.03mm" v-model="configData.text.diameter" inputWrapperAttrs=""></AInput>
                            
                            <AInput type="text" label="Length" placeholder="Eg .330m" v-model="configData.text.length" inputWrapperAttrs=""></AInput>
                            
                            <AInput type="text" label="Temp" placeholder="Eg. 190-220" v-model="configData.text.temp" inputWrapperAttrs=""></AInput>
                            
                            <AInput type="text" label="Weight" placeholder="Eg. 1kg" v-model="configData.text.weight" inputWrapperAttrs=""></AInput>
                            
                            <AInput type="text" label="Filament Code" placeholder="Eg. 12345" v-model="configData.text.code" inputWrapperAttrs=""></AInput>
                            
                            <AInput type="text" label="Filament colour name" placeholder="Eg. White" v-model="configData.text.colour_name" inputWrapperAttrs=""></AInput>
                        </div>

                        <hr class="!my-7">

                        <!-- Card Body - Section 2 -->
                        <div class="grid-row sm:grid-cols-2 place-items-stretch !mt-5">
                            <FilamentColourTypeSelect :configData/>
                        </div>

                        <hr class="!my-7">

                        <!-- Card Body - Section 3 -->
                        <div class="grid-row sm:grid-cols-2 place-items-stretch !mt-5">
                            <ACheckbox color="accent" label="Display spool icon around colour" v-model="configData.extra.showSpool" checked-value=""></ACheckbox>
                        </div>
                        
                    </div>
                </ACard>

                <!-- Font sizing -->
                <ACard variant="light" color="lighterGrey" title="" subtitle="" text="">
                    <div class="a-card-body a-card-spacer">
                        
                        <!-- Card Title -->
                        <h1 class="a-title option-card-title">Font size scaling</h1>

                        <div class="grid-row sm:grid-cols-3 place-items-stretch !mb-5">
                            <AInput type="text" label="Filament Brand" placeholder="Eg. 12" v-model="configData.sizing.brand_font_percent" append-inner-icon="i-oui-percent" inputWrapperAttrs=""></AInput>
                            
                            <AInput type="text" label="Filament Type" placeholder="Eg. 12" v-model="configData.sizing.type_font_percent" append-inner-icon="i-oui-percent" inputWrapperAttrs=""></AInput>
                            
                            <AInput type="text" label="Filament Info" placeholder="Eg. 12" v-model="configData.sizing.fil_info_font_percent" append-inner-icon="i-oui-percent" inputWrapperAttrs=""></AInput>
                            
                            <AInput type="text" label="Filament Colour Name" placeholder="Eg. 12" v-model="configData.sizing.fil_colour_name_font_percent" append-inner-icon="i-oui-percent" inputWrapperAttrs=""></AInput>
                        </div>
                    </div>
                </ACard>
                
                <!-- Colours -->
                <ACard variant="light" color="lighterGrey" title="" subtitle="" text="">
                    <div class="a-card-body a-card-spacer">
                        
                        <!-- Card Title -->
                        <h1 class="a-title option-card-title">Colours</h1>
                        
                        <!-- Card Body -->
                        <div class="grid-row xl:grid-cols-2 sm:grid-cols-1 place-items-center">
                            <ABtn variant="light" class="colourpicker-btn" :style="`background: ${configData.colour.filament}`" appendIcon="" icon="">
                                Filament Colour

                                <ColourPickerMenu v-model="configData.colour.filament"/>
                            </ABtn>

                            <div v-if="configData.extra.colourType >= FilamentColourTypes.Dual">
                                <ABtn variant="light" class="colourpicker-btn" :style="`background: ${configData.colour.filament2}`" appendIcon="" icon="">
                                    Filament Colour 2

                                    <ColourPickerMenu v-model="configData.colour.filament2"/>
                                </ABtn>
                            </div>

                            <div v-if="configData.extra.colourType >= FilamentColourTypes.Triple">
                                <ABtn variant="light" class="colourpicker-btn" :style="`background: ${configData.colour.filament3}`" appendIcon="" icon="">
                                    Filament Colour 3

                                    <ColourPickerMenu v-model="configData.colour.filament3"/>
                                </ABtn>
                            </div>

                            <ABtn variant="light" class="colourpicker-btn" :style="`background: ${configData.colour.text}`" appendIcon="" icon="">
                                Text Colour

                                <ColourPickerMenu v-model="configData.colour.text"/>
                            </ABtn>

                            <ABtn variant="light" class="colourpicker-btn" :style="`background: ${configData.colour.outline}`" appendIcon="" icon="">
                                Outline Colour

                                <ColourPickerMenu v-model="configData.colour.outline"/>
                            </ABtn>

                            <ABtn variant="light" class="colourpicker-btn" :style="`background: ${configData.colour.background}`" appendIcon="" icon="">
                                Background Colour

                                <ColourPickerMenu v-model="configData.colour.background"/>
                            </ABtn>
                        </div>
                        
                    </div>
                </ACard>

            </div>
        </ACard>

        <!-- Preview and download -->
        <div class="grid-row place-items-center pt-10 pb-17.5">
            <GeneratedLabel v-model:data="configData" height="245" />
            
            <div class="mt-2">
                <ABtn color="success" variant="fill" @click="downloadLabel" class="text-lg labelpreview-btn mr-7" appendIcon="" icon="">Download Label</ABtn>
                <ABtn color="info" variant="fill" @click="copyLink" class="text-lg labelpreview-btn" appendIcon="" icon="">Copy Link</ABtn>
            </div>
        </div>
    </main>

    <!-- Full sized label -->
    <div style="display: none">
        <canvas id="canvas"></canvas>
        <GeneratedLabel id="full-sized-label" v-model:data="configData" />
    </div>
</template>

<style>
    /* Fix readibility of input fields */
    input {
        color: var(--global-cardText) !important;
    }
    input::placeholder {
        color: var(--global-cardInputText) !important;
    }

    .large-card {
        margin: var(--a-card-padding);

        /* Use the correct width to account for the margin */
        width: calc(100% - calc(var(--a-card-padding) * 2));
    }

    .option-card-title {
        color: var(--global-cardText) !important;
    }

    .colourpicker-btn {
        min-width: 220px;
    }

    .labelpreview-btn {
        width: fit-content;
        white-space: normal;
    }
</style>