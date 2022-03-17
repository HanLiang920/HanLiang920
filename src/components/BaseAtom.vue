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

const {symbol,cartCoords} = defineProps({
  symbol: String,
  cartCoords: String,
});

const atomInfo = computed(() => {
  return atomInfos[symbol];
});
console.log(atomInfo,cartCoords);


</script>

<template>
  <a-entity :geometry="`primitive: sphere; radius: ${atomInfo.radius}`"
            material="color: red"
            :position="cartCoords"></a-entity>
</template>

<style scoped>
</style>
