<template>
  <a-scene embedded
           device-orientation-permission-ui="enabled: false"
           renderer="antialias: true;
                   colorManagement: true;
                   sortObjects: true;
                   physicallyCorrectLights: true;
                   logarithmicDepthBuffer: true;
                   maxCanvasWidth: -1;
                   maxCanvasHeight: -1;"
           vr-mode-ui="enabled: false">
<a-box color="tomato" depth="2" height="4" width="0.5"></a-box>
  </a-scene>
</template>

<script setup>
import fragment from "../../components/fragment.vue";
import { ref } from "vue";
const currentModel = ref(["2+1"]);
</script>

<style lang="scss">
* {
  font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji", sans-serif;
}

#app {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>

