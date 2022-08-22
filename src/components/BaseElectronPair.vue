<script setup>
import { ref, computed, onMounted } from "vue";
import { getRotation } from '../utils'
const { bondAtom1, bondAtom2,id} = defineProps({
    bondAtom1: Object,
    bondAtom2: Object,
    id:String
});
const rotation = computed(() => {
    const { x: x1, y: y1, z: z1 } = bondAtom1
    const { x: x2, y: y2, z: z2 } = bondAtom2

    return getRotation([x2, y2, z2], [x1, y1, z1])
});

const position = computed(() => {
    const { x, y, z } = bondAtom2
    return `${x} ${y} ${z}`
});

const sphere1 = ref()
const sphere2 = ref()
onMounted(() => {
  sphere1.value.object3D.position.set(0.3, -1.25, 0);
  sphere2.value.object3D.position.set(-0.3, -1.25, 0);
})

</script>

<template>
  <a-entity :position="position" :rotation="rotation" scale="0.6 0.6 0.6" >
    <a-entity :key="id" position="0 -1.91 0" geometry="primitive: electronPair;" material="color: yellow;roughness: 0.25; metalness: 0.2;opacity:0.5"></a-entity>
    <a-entity animation="property: rotation; to: 0 360 0; loop: true; dur: 10000;easing: linear">
      <a-sphere ref="sphere1" color="red" radius="0.13" roughness="0.25" metalness="0.2"></a-sphere>
      <a-sphere ref="sphere2" color="red" radius="0.13" roughness="0.25" metalness="0.2"></a-sphere>
    </a-entity>
  </a-entity>
  
</template>

<style scoped>
</style>
