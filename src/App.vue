<script setup lang="ts">
    import { reactive, ref } from 'vue'
    import { downloadLabel } from '@/utils/downloadLabel'

    // Types
    import LabelDataType from '@/types/LabelData'

    // Label base template
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
            }
        } as LabelDataType
    )

    const selectedPreset = ref('')
</script>

<template>
    <div class="grid-row sm:grid-cols-2 place-items-stretch">
        <!-- Configurable options -->
        <ACard class="large-card">
            <div class="a-card-body a-card-spacer">

                <!-- Presets -->
                <ACard variant="light" color="lighterGrey">
                    <div class="a-card-body a-card-spacer">
                        
                        <h1 class="a-title option-card-title">Presets</h1>
                        
                        <ASelect type="text" placeholder="Click to select a preset" v-model="selectedPreset"></ASelect>
                        
                    </div>
                </ACard>

                <!-- Filament type -->
                <ACard variant="light" color="lighterGrey">
                    <div class="a-card-body a-card-spacer">
                        
                        <h1 class="a-title option-card-title">Filament type</h1>
                        
                        <div class="grid-row sm:grid-cols-2 place-items-stretch">
                            <AInput type="text" label="Brand" placeholder="Bambu" v-model="configData.text.brand"></AInput>
                            <AInput type="text" label="Type" placeholder="PLA" v-model="configData.text.type"></AInput>
                        </div>
                        
                    </div>
                </ACard>
                
                <!-- Filament info -->
                <ACard variant="light" color="lighterGrey">
                    <div class="a-card-body a-card-spacer">
                        
                        <h1 class="a-title option-card-title">Filament info</h1>
                        
                        <div class="grid-row sm:grid-cols-2 place-items-stretch">
                            <AInput type="text" label="Diameter" placeholder="1.75 ± 0.03mm" v-model="configData.text.diameter"></AInput>
                            <AInput type="text" label="Length" placeholder="330m" v-model="configData.text.length"></AInput>
                            <AInput type="text" label="Temp" placeholder="190-220" v-model="configData.text.temp"></AInput>
                            <AInput type="text" label="Weight" placeholder="1kg" v-model="configData.text.weight"></AInput>
                            <AInput type="text" label="Code" placeholder="12345" v-model="configData.text.code"></AInput>
                            <AInput type="text" label="Filament colour" placeholder="White" v-model="configData.text.colour_name"></AInput>
                        </div>
                        
                    </div>
                </ACard>
                
                <!-- Colours -->
                <ACard variant="light" color="lighterGrey">
                    <div class="a-card-body a-card-spacer">
                        
                        <h1 class="a-title option-card-title">Colours</h1>
                        
                        <div class="grid-row sm:grid-cols-2 place-items-stretch">

                            <ABtn variant="light" :style="`width: 220px; background: ${configData.colour.filament}`">
                                Filament Colour
                                <ColourPickerMenu v-bind:colourVar="configData.colour.filament" @changedColour="configData.colour.filament = $event"/>
                            </ABtn>
                            <ABtn variant="light" :style="`width: 220px; background: ${configData.colour.text}`">
                                Text Colour
                                <ColourPickerMenu v-bind:colourVar="configData.colour.text" @changedColour="configData.colour.text = $event"/>
                            </ABtn>
                            <ABtn variant="light" :style="`width: 220px; background: ${configData.colour.outline}`">
                                Outline Colour
                                <ColourPickerMenu v-bind:colourVar="configData.colour.outline" @changedColour="configData.colour.outline = $event"/>
                            </ABtn>
                            <ABtn variant="light" :style="`width: 220px; background: ${configData.colour.background}`">
                                Background Colour
                                <ColourPickerMenu v-bind:colourVar="configData.colour.background" @changedColour="configData.colour.background = $event"/>
                            </ABtn>

                        </div>
                        
                    </div>
                </ACard>

            </div>

        </ACard>

        <!-- Preview and download -->
        <div class="grid-row sm:grid-cols-1 place-items-stretch" style="justify-items: center;">
            <br>

            <GeneratedLabel v-model:data="configData" height="245" />
            
            <ABtn color="success" variant="fill" @click="downloadLabel" class="text-xl" style="width: 27.5%;">Download Label</ABtn>

            <br>
        </div>
    </div>

    <!-- Full sized label -->
    <div style="display: none">
        <canvas id="canvas"></canvas>
        <GeneratedLabel id="full-sized-label" v-model:data="configData" />
    </div>
</template>

<style scoped>
    .large-card {
        margin: var(--a-card-padding);
    }

    .option-card-title {
        color: lightGrey;
    }
</style>