<script setup>
import { ref, computed } from "vue";



const { bondAtom1, bondAtom2, bondOrderType, bondOrder } = defineProps({
    bondAtom1: Object,
    bondAtom2: Object,
    bondOrderType: String,
    bondOrder: String,
});
const bondAtom1Info = computed(() => {
    return window.atomInfos[bondAtom1.symbol]
});
const bondAtom2Info = computed(() => {
    return window.atomInfos[bondAtom2.symbol]
});
const bondInfo = computed(() => {
    const { x: x1, y: y1, z: z1 } = bondAtom1
    const { x: x2, y: y2, z: z2 } = bondAtom2
    const r1 = bondAtom1Info.value.radius
    const r2 = bondAtom2Info.value.radius
    return {
        position: `${(x1 + x2 + r1 - r2) / 2} ${(y1 + y2 + r1 - r2) / 2} ${(z1 + z2 + r1 - r2) / 2}`,
        length: Math.pow(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2) + Math.pow((z1 - z2), 2), 0.5) - r1 - r2,
        rotation: `0 ${Math.atan((y2 - y1) / (x2 - x1)) * 180 / Math.PI} 0`
    }
});


</script>
 
<template>
    <a-entity
        :position="bondInfo.position"
        :scale="`1 ${bondInfo.length / 0.2} 1`"
        :rotation="bondInfo.rotation"
    >
        <a-cylinder
            :color="bondAtom1Info.color"
            :height="0.1 * (1 - (1 - bondAtom1Info.radius / bondAtom2Info.radius) / 2)"
            radius="0.05"
            position="0 -0.05 0"
        ></a-cylinder>
        <a-cylinder
            :color="bondAtom2Info.color"
            :height="0.1 * (1 + (1 - bondAtom1Info.radius / bondAtom2Info.radius) / 2)"
            radius="0.05"
            position="0 0.05 0"
        ></a-cylinder>
    </a-entity>
</template>

<style scoped>
</style>
