<script setup>
import { ref, computed } from "vue";
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

</script>

<template>
  <a-entity :position="position" :rotation="rotation" scale="0.6 0.6 0.6">
    <a-entity :key="id" position="0 -1.91 0" geometry="primitive: electronPair;" material="color: #114ccf;roughness: 0.25; metalness: 0.2;opacity:1"></a-entity>
  </a-entity>
</template>

<style scoped>
</style>
