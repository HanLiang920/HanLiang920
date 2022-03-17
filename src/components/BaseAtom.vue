<script setup>
const atomInfos = {
  C: {
    radius: 0.86,
    color: "black",
  },
  H: {
    radius: 0.78,
    color: "white",
  },
};
import { ref, computed } from "vue";

const { symbol, cartCoords } = defineProps({
  symbol: String,
  cartCoords: String,
});

const atomInfo = computed(() => {
  return atomInfos[symbol];
});
console.log(atomInfo, cartCoords);
const position = computed(() => {
 const [x,y,z] =cartCoords.split(" ");
  return ;
});
</script>

<template>
  <a-entity :geometry="`primitive: sphere; radius: ${atomInfo.radius}`"
            :material="`color: ${atomInfo.color}`"
            :position="cartCoords"></a-entity>
</template>

<style scoped>
</style>
