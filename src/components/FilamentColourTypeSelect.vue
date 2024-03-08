<script setup lang="ts">
    import { computed } from 'vue'

    // Types
    import LabelData from '@/types/LabelData'
    import { filamentColourTypesNames } from '@/types/FilamentColourTypes'

    // Component props
    const props = defineProps<{
        configData: LabelData
    }>()

    // Filament colour type using name
    const filamentColourTypeUsingName = computed({
        get () {
            return filamentColourTypesNames[props.configData.extra.colourType]
        },
        set (newValue) {
            props.configData.extra.colourType = filamentColourTypesNames.indexOf(newValue)
        }
    })
</script>

<template>
    <ASelect type="text" label="Filament colour type" :options="filamentColourTypesNames" v-model="filamentColourTypeUsingName" inputWrapperAttrs=""></ASelect>
</template>