<script setup>
import fragment from './fragment.vue'
import { ref, onMounted  } from "vue";

const { id, type } = defineProps({
  id: String,
  type: String,
});
const el = ref()
onMounted(() => {
  const marker = el.value
  marker.addEventListener('markerFound', (e) => {
    //store.addMarker(id,e)
  });

  marker.addEventListener('markerLost', () => {
   // store.removeMarker(id)
  })
})
</script>

<template>
    <a-marker ref="el" type="barcode" :value="id" smooth="true">
        <fragment :type="type" />
    </a-marker>
</template>

<style scoped>
</style>
