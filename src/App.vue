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

    // Components
    import GeneratedLabel from '@/components/GeneratedLabel.vue'

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
            colour: {
                background: '#FFFFFF',
                text: '#2D2D2D',
                outline: '#A5AAA9',
                filament: '#06AE42'
            },
            graphics: {
                logo: 'Bambu Lab'
            },
            extra: {
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
        <h1 class="a-title mt-6 mb-2 ml-6 mr-6 ws-normal text-center text-4xl">Bambu Lab Label Generator</h1>
    </header>

    <main class="grid-row sm:grid-cols-2 place-items-start">
        <!-- Configurable options -->
        <ACard class="large-card">
            <div class="a-card-body a-card-spacer">

                <!-- Presets -->
                <ACard variant="light" color="lighterGrey">
                    <div class="a-card-body a-card-spacer">
                        
                        <!-- Card Title -->
                        <h1 class="a-title option-card-title">Presets</h1>
                        
                        <!-- Card Body -->
                        <ASelect type="text" placeholder="Click to select a preset" :options="Object.keys(presets)" @change="applyPreset"></ASelect>
                        
                    </div>
                </ACard>

                <!-- Filament type -->
                <ACard variant="light" color="lighterGrey">
                    <div class="a-card-body a-card-spacer">
                        
                        <!-- Card Title -->
                        <h1 class="a-title option-card-title">Filament type</h1>
                        
                        <!-- Card Body -->
                        <div class="grid-row sm:grid-cols-2 place-items-stretch">
                            <AInput type="text" label="Brand" placeholder="Eg. Bambu" v-model="configData.text.brand"></AInput>
                            
                            <AInput type="text" label="Type" placeholder="Eg. PLA" v-model="configData.text.type"></AInput>

                            <ASelect type="text" label="Brand Logo" placeholder="No logo" :options="Object.keys(logos)" v-model="configData.graphics.logo"></ASelect>
                        </div>
                        
                    </div>
                </ACard>
                
                <!-- Filament info -->
                <ACard variant="light" color="lighterGrey">
                    <div class="a-card-body a-card-spacer">
                        
                        <!-- Card Title -->
                        <h1 class="a-title option-card-title">Filament info</h1>
                        
                        <!-- Card Body - Section 1 -->
                        <div class="grid-row sm:grid-cols-2 place-items-stretch !mb-5">
                            <AInput type="text" label="Diameter" placeholder="Eg. 1.75 ± 0.03mm" v-model="configData.text.diameter"></AInput>
                            
                            <AInput type="text" label="Length" placeholder="Eg .330m" v-model="configData.text.length"></AInput>
                            
                            <AInput type="text" label="Temp" placeholder="Eg. 190-220" v-model="configData.text.temp"></AInput>
                            
                            <AInput type="text" label="Weight" placeholder="Eg. 1kg" v-model="configData.text.weight"></AInput>
                            
                            <AInput type="text" label="Filament Code" placeholder="Eg. 12345" v-model="configData.text.code"></AInput>
                            
                            <AInput type="text" label="Filament colour name" placeholder="Eg. White" v-model="configData.text.colour_name"></AInput>
                        </div>

                        <hr class="!mt-7 !mb-7">

                        <!-- Card Body - Section 2 -->
                        <div class="grid-row sm:grid-cols-2 place-items-stretch !mt-5">
                            <ACheckbox color="accent" label="Display spool icon around colour" v-model="configData.extra.showSpool"></ACheckbox>
                        </div>
                        
                    </div>
                </ACard>
                
                <!-- Colours -->
                <ACard variant="light" color="lighterGrey">
                    <div class="a-card-body a-card-spacer">
                        
                        <!-- Card Title -->
                        <h1 class="a-title option-card-title">Colours</h1>
                        
                        <!-- Card Body -->
                        <div class="grid-row xl:grid-cols-2 sm:grid-cols-1 place-items-center">
                            <ABtn variant="light" class="colourpicker-btn" :style="`background: ${configData.colour.filament}`">
                                Filament Colour

                                <ColourPickerMenu v-model="configData.colour.filament"/>
                            </ABtn>

                            <ABtn variant="light" class="colourpicker-btn" :style="`background: ${configData.colour.text}`">
                                Text Colour

                                <ColourPickerMenu v-model="configData.colour.text"/>
                            </ABtn>

                            <ABtn variant="light" class="colourpicker-btn" :style="`background: ${configData.colour.outline}`">
                                Outline Colour

                                <ColourPickerMenu v-model="configData.colour.outline"/>
                            </ABtn>

                            <ABtn variant="light" class="colourpicker-btn" :style="`background: ${configData.colour.background}`">
                                Background Colour

                                <ColourPickerMenu v-model="configData.colour.background"/>
                            </ABtn>
                        </div>
                        
                    </div>
                </ACard>

            </div>

        </ACard>

        <!-- Preview and download -->
        <div class="grid-row place-items-center pt-10">
            <GeneratedLabel v-model:data="configData" height="245" />
            
            <div class="mt-2">
                <ABtn color="success" variant="fill" @click="downloadLabel" class="text-lg labelpreview-btn mr-7">Download Label</ABtn>
                <ABtn color="info" variant="fill" @click="copyLink" class="text-lg labelpreview-btn">Copy Link</ABtn>
            </div>
        </div>
    </main>

    <!-- Full sized label -->
    <div style="display: none">
        <canvas id="canvas"></canvas>
        <GeneratedLabel id="full-sized-label" v-model:data="configData" />
    </div>
</template>

<style scoped>
    .large-card {
        margin: var(--a-card-padding);

        /* Use the correct width to account for the margin */
        width: calc(100% - calc(var(--a-card-padding) * 2));
    }

    .option-card-title {
        color: lightGrey;
    }

    .colourpicker-btn {
        min-width: 220px;
    }

    .labelpreview-btn {
        width: fit-content;
        white-space: normal;
    }
</style>