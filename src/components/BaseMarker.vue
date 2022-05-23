<script setup>
import fragment from './fragment.vue'
import { ref, onMounted  } from "vue";

const { value, type } = defineProps({
  value: String,
  type: String,
});
const el = ref()
onMounted(() => {
  const marker = el.value
  marker.addEventListener('markerFound', (...e) => {
    console.log(e);
  });

  marker.addEventListener('markerLost', () => {
  })
})
</script>

<template>
    <a-marker ref="el" type="barcode" :value="value" smooth="true">
        <fragment :type="type" />
    </a-marker>
</template>

<style scoped>
</style>
