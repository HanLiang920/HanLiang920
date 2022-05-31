<script setup>
import { ref, computed } from "vue";
const { bondAtom1, bondAtom2} = defineProps({
    bondAtom1: Object,
    bondAtom2: Object
});
const rotation = computed(() => {
    const { x: x1, y: y1, z: z1 } = bondAtom1
    const { x: x2, y: y2, z: z2 } = bondAtom2

    return getRotation([x2, y2, z2], [x1, y1, z1])
});
function getRotation([x, y, z], [x1, y1, z1]) {
    const length = Math.pow(Math.pow((x1 - x), 2) + Math.pow((y1 - y), 2) + Math.pow((z1 - z), 2), 0.5)
    const roll = Math.asin((y1 - y) / length) * 180 / Math.PI + 90
    const length2 = Math.pow(Math.pow((x1 - x), 2) + Math.pow((z1 - z), 2), 0.5)
    let yaw = Math.asin((z - z1) / length2) * 180 / Math.PI
    if (x >= x1) {
        yaw = 180 - yaw
    }
    return `0 ${yaw} ${roll+180}`
}
</script>

<template>
  <a-entity :rotation="rotation" scale="0.6 0.6 0.6">
    <a-entity position="0 -1.91 0" geometry="primitive: electronPair;" material="color: yellow;roughness: 0.25; metalness: 0.2"></a-entity>
  </a-entity>
</template>

<style scoped>
</style>
