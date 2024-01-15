<script setup lang="ts">
// Importing necessary Vue composition API functions and external libraries
import { onMounted, watch, reactive } from "vue";
import { debounce } from "lodash-es";
import { Canvg } from "canvg";
import downloadURI from "@/utils/downloadURI";

// Import custom type definitions and components
import LabelDataType from "@/types/LabelData";
import Label from "@/components/Label.vue";

// Reactive state for label configuration
let configData = reactive<LabelDataType>({
  // Initial values for label text and colour properties
  text: {
    brand: "Brand",
    type: "Type",
    diameter: "? mm",
    length: "? m",
    temp: "?",
    weight: "? kg",
    code: "?",
    colour_name: "?",
  },
  colour: {
    background: "#FFFFFF",
    text: "#2D2D2D",
    outline: "#A5AAA9",
    filament: "#06AE42",
  },
});

// Create a debounced function to update URL parameters for performance optimization
const debouncedUpdateURLParameters = debounce(updateURLParameters, 500);

// Function to update URL parameters based on configData
function updateURLParameters() {
  try {
    const params = new URLSearchParams();

    // Loop through text and colour properties to set them as URL parameters
    for (const [key, value] of Object.entries(configData.text)) {
      params.set(`text.${key}`, value);
    }
    for (const [key, value] of Object.entries(configData.colour)) {
      params.set(`colour.${key}`, value);
    }

    // Update the browser URL without reloading the page
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
  } catch (error) {
    console.error("Error updating URL parameters:", error);
  }
}

// Function to parse URL parameters and update configData accordingly
function parseURLParameters() {
  try {
    const params = new URLSearchParams(window.location.search);

    // Update text and colour properties from URL parameters if available
    for (const [key] of Object.entries(configData.text)) {
      const paramValue = params.get(`text.${key}`);
      if (paramValue !== null) {
        configData.text[key] = paramValue;
      }
    }
    for (const [key] of Object.entries(configData.colour)) {
      const paramValue = params.get(`colour.${key}`);
      if (paramValue !== null) {
        configData.colour[key] = paramValue;
      }
    }
  } catch (error) {
    console.error("Error parsing URL parameters:", error);
  }
}

// Watch for changes in configData and update URL parameters using the debounced function
watch(configData, debouncedUpdateURLParameters, { deep: true });

// Parse URL parameters when the component is mounted
onMounted(parseURLParameters);

// Function to download the label as a PNG file
async function downloadLabel(e: Event) {
  // Select the SVG element and its dimensions
  const svgElement = document.querySelector(
    "#full-sized-label"
  ) as SVGSVGElement;
  const { width, height } = svgElement.viewBox.baseVal;

  // Set up a canvas and its context for rendering
  const canvas = document.querySelector("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  canvas.width = width;
  canvas.height = height;

  // Convert SVG to Canvas using Canvg library
  const v = await Canvg.from(ctx, svgElement.outerHTML);
  v.render();

  // Trigger download of the rendered image
  downloadURI(canvas.toDataURL("image/png"), "Label.png");
}
</script>

<template>
  <!-- Input fields for label text configuration with data binding to reactive state -->
  <input type="text" placeholder="Brand" v-model="configData.text.brand" />
  <input type="text" placeholder="Type" v-model="configData.text.type" />
  <input
    type="text"
    placeholder="Diameter"
    v-model="configData.text.diameter"
  />
  <input type="text" placeholder="Length" v-model="configData.text.length" />
  <input type="text" placeholder="Temp" v-model="configData.text.temp" />
  <input type="text" placeholder="Weight" v-model="configData.text.weight" />
  <input type="text" placeholder="Code" v-model="configData.text.code" />
  <input
    type="text"
    placeholder="Filament colour"
    v-model="configData.text.colour_name"
  />

  <br /><br />

  <!-- Input fields for label colour configuration -->
  <input type="color" v-model="configData.colour.filament" />
  <input type="color" v-model="configData.colour.text" />
  <input type="color" v-model="configData.colour.outline" />
  <input type="color" v-model="configData.colour.background" />

  <br /><br /><br /><br />

  <!-- Label preview section -->
  <div style="text-align: center">
    <Label
      v-model:data="configData"
      height="245"
      style="outline: 1rem solid black"
    />

    <br /><br /><br />

    <button @click="downloadLabel" style="text-align: center">
      Download Label
    </button>
  </div>

  <!-- Hidden section for full-sized label used in download -->
  <div style="display: none">
    <canvas id="canvas"></canvas>
    <Label id="full-sized-label" v-model:data="configData" />
  </div>
</template>

<style scoped>
/* Scoped CSS styles (if any) go here */
</style>
