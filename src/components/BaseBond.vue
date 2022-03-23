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
    const x = (x1 + x2) / 2,
        y = (y1 + y2) / 2,
        z = (z1 + z2) / 2,
        length = Math.pow(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2) + Math.pow((z1 - z2), 2), 0.5),
        length2 = Math.pow(Math.pow((x1 - x), 2) + Math.pow((y1 - y), 2) + Math.pow((z1 - z), 2), 0.5)
     // 270 270 30 330
    return {
        position: `${x} ${y} ${z}`,
        length,
        rotation: `0 ${getAngle2([x,z], [x1,z1], length2)} ${getAngle2([x,y], [x1,y1], length2)}`
    }
});


function getAngle2([x1,y1],[x2, y2] , r) {
    const angle = Math.asin((y2 - y1) / r) * 180 / Math.PI
    if(x2>=x1) return 90 +  angle
    return 270 - angle
    
}

function getAngle([x1, y1], [x2, y2], r) {
    console.log(Math.pow(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2), 0.5),[x1, y1], [x2, y2],r);
    y2 = y2 - r
    if (y1 === y2) return 0
    x1 = x2 + r
    const length = Math.pow(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2), 0.5) / 2
    const angle = Math.asin(length / r) * 180 / Math.PI *2
    console.log(angle);
    return x1 > x2 ? angle : -angle
}

</script>
 
<template>
    <a-entity
        :position="bondInfo.position"
        :scale="`1 ${bondInfo.length / 0.2} 1`"
        :rotation="bondInfo.rotation"
        
    >
        <a-cylinder
            :color="bondAtom1Info.color"
            :height="0.1"
            radius="0.05"
            position="0 -0.05 0"
        ></a-cylinder>
        <a-cylinder
            :color="bondAtom2Info.color"
            :height="0.1"
            radius="0.05"
            position="0 0.05 0"
        ></a-cylinder>
    </a-entity>
</template>

<style scoped>
</style>
