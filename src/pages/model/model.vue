<template>
  <a-scene ref="scene" embedded device-orientation-permission-ui="enabled: false" renderer="antialias: true;
                   colorManagement: true;
                   sortObjects: true;
                   physicallyCorrectLights: true;
                   logarithmicDepthBuffer: true;
                   maxCanvasWidth: -1;
                   maxCanvasHeight: -1;" vr-mode-ui="enabled: false" :style="{
                        background: showBackground?'linear-gradient(200deg, #f4efef, #e3eeff)':''
                   }">


    <showContent v-if="currentModel[0]" :type="currentModel[0]" :showAxes="showAxes" :key="currentModel[0]" />
    <a-plane shadow-material height="100" width="100" rotation="-90 0 0" shadow="cast:false;receive: true;"></a-plane>
    <a-entity camera look-controls="enabled: false" object-controls="target: 0 0.6 -0.5; initialPosition: 0 1.6 5">
    </a-entity>

    <a-entity light="type: ambient; intensity: 1.8;"></a-entity>
    <a-entity light="type: directional;
                   castShadow: true;
                   intensity: 1.6;" position="-5 8 1.5"></a-entity>

  </a-scene>
</template>

<script setup>
import showContent from "../../components/showContent.vue";
import {ref ,onMounted } from "vue";
const currentModel = ref([...top.currentModel.value])
const showBackground = ref(top.showBackground.value)
const showAxes = ref(top.showAxes.value)
const scene = ref()
onMounted(()=>{
  scene.value.addEventListener('loaded', ()=>{
    const main = parent.window.document.getElementsByClassName('main')[0]
    if (main) main.parentNode.removeChild(main)
  });
})
 window.addEventListener('message', (event) => {
      if(!event.data || event.data.type==="webpackOk") return
      const {currentModel:val,showBackground:showBackground1,showAxes:showAxes1} = event.data
      if(val) currentModel.value = [val]
      showBackground.value = showBackground1
      showAxes.value = showAxes1
    })
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

