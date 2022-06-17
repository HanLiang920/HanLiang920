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
           arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 4x4_BCH_13_9_3;"
           vr-mode-ui="enabled: false">
    <BaseMarker id="0"
                type="甲烷" />
    <BaseMarker id="1"
                type="乙烷" />

    <a-entity camera></a-entity>
    <a-entity light="type: ambient; intensity: 1.8;"></a-entity>
    <a-entity light="type: directional;
                   castShadow: true;
                   intensity: 1.6;"
              position="-5 3 1.5"></a-entity>

  </a-scene>
</template>

<script setup>
import modeChoose from "../../components/modeChoose.vue";
</script>

<style lang="scss">
* {
  font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji", sans-serif;
}

#app {
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>

