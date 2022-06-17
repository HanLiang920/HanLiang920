<template>
  <a-scene embedded device-orientation-permission-ui="enabled: false" renderer="antialias: true;
                   colorManagement: true;
                   sortObjects: true;
                   physicallyCorrectLights: true;
                   logarithmicDepthBuffer: true;
                   maxCanvasWidth: -1;
                   maxCanvasHeight: -1;" vr-mode-ui="enabled: false">


      <!-- <fragment v-if="currentModel" :type="currentModel" :key="currentModel" /> -->
      <fragment type="甲烷"  position="0 0 -9"/>
      <a-sky color="#e8effb"></a-sky>

    <a-entity camera ></a-entity>
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

