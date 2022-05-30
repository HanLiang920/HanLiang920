<script setup>
import { ref, computed } from "vue";
import { storeToRefs } from 'pinia'
import { useStore } from '../stores/index'
const store = useStore()
const { atomInfos } = storeToRefs(store)
const { symbol, x,y,z } = defineProps({
  symbol: String,
  x: Number,
  y: Number,
  z: Number,
});

const atomInfo = computed(() => {
  return atomInfos.value[symbol];
});
const position = computed(() => {
  return `${x} ${y} ${z}`
});
</script>

<template>
  <a-entity
    :geometry="`primitive: sphere; radius: ${atomInfo.radius}`"
    :material="`color: ${atomInfo.color};roughness: 0.25; metalness: 0.2`"
    :position="position"
  ></a-entity>
</template>

<style scoped>
</style>
