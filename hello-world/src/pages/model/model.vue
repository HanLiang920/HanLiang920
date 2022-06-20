<template>
  <a-scene embedded device-orientation-permission-ui="enabled: false" renderer="antialias: true;
                   colorManagement: true;
                   sortObjects: true;
                   physicallyCorrectLights: true;
                   logarithmicDepthBuffer: true;
                   maxCanvasWidth: -1;
                   maxCanvasHeight: -1;" vr-mode-ui="enabled: false">


    <!-- <fragment v-if="currentModel" :type="currentModel" :key="currentModel" /> -->
    <fragment type="苯"/>
    <a-plane shadow-material  height="100" width="100" rotation="-90 0 0" shadow="cast:false;receive: true;"></a-plane>
    <a-entity camera look-controls="enabled: false" arcball-controls="target: 0 0.6 -0.5; initialPosition: 0 1.6 7"></a-entity>

    <a-entity light="type: ambient; intensity: 1.8;"></a-entity>
    <a-entity light="type: directional;
                   castShadow: true;
                   intensity: 1.6;" position="-5 3 1.5"></a-entity>

  </a-scene>
</template>

<script setup>
import fragment from "../../components/fragment.vue";
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

