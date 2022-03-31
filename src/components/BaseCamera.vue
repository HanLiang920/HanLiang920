<script setup>
import { ref,onMounted } from 'vue'
const camera = ref(null)
onMounted(() => {
    setTimeout(()=>{
        console.log(camera.value.object3DMap.camera);
        camera.value.object3DMap.camera.position.set(5, 0, 10);
    },0)
})
</script>

<template>
  <a-camera ref='camera'></a-camera>
</template>
