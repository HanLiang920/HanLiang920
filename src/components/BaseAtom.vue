<script setup>
import { ref, computed } from "vue";

const { symbol, x,y,z } = defineProps({
  symbol: String,
  x: Number,
  y: Number,
  z: Number,
});

const atomInfo = computed(() => {
  return window.atomInfos[symbol];
});
const position = computed(() => {
  return `${x} ${y} ${z}`
});
</script>

<template>
  <a-entity
    :geometry="`primitive: sphere; radius: ${atomInfo.radius}`"
    :material="`color: ${atomInfo.color}`"
    :position="position"
  ></a-entity>
</template>

<style scoped>
</style>
