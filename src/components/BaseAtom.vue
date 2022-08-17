<script setup>
import { ref, computed } from "vue";

const { symbol, opacity, x,y,z } = defineProps({
  symbol: String,
  opacity: { type: Number, default: 1 },
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
    :material="`color: ${atomInfo.color};roughness: 0.25; metalness: 0.2;opacity: ${opacity}`"
    :position="position"
  >
  </a-entity>
  
</template>

<style scoped>
</style>
