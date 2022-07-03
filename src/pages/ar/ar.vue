<template>
  <a-scene embedded
           device-orientation-permission-ui="enabled: false"
           :renderer="`antialias: true;
                   colorManagement: true;
                   sortObjects: true;
                   physicallyCorrectLights: true;
                   logarithmicDepthBuffer: true;
                   maxCanvasWidth: ${width};
                   maxCanvasHeight: ${height};`"
           :arjs="`sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 4x4_BCH_13_9_3;`"
           vr-mode-ui="enabled: false">
    <BaseMarker id="0"
                type="甲烷" />
    <BaseMarker id="1"
                type="乙烷" />
    <a-entity camera look-controls="enabled: false" object-controls="target: 0 0 0; initialPosition: 0 0 0"></a-entity>
    <a-entity light="type: ambient; intensity: 1.8;"></a-entity>
    <a-entity light="type: directional;
                   castShadow: true;
                   intensity: 1.6;"
              position="-5 3 1.5"></a-entity>

  </a-scene>
</template>

<script setup>
import {ref} from "vue";
import BaseMarker from "../../components/BaseMarker.vue";
const width = ref(window.innerWidth);
const height = ref(window.innerHeight);
</script>

<style lang="scss">
* {
  font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji", sans-serif;
}

body{
  overflow: hidden;
}

#app {
  // overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>

