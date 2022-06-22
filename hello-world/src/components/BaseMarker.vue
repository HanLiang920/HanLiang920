<script setup>
import fragment from './fragment.vue'
import { ref, onMounted  } from "vue";

const { id, type } = defineProps({
  id: String,
  type: String,
});
const el = ref()
const isShow = ref(false);
onMounted(() => {
  const marker = el.value
  marker.addEventListener('markerFound', (e) => {
    isShow = true
  });

  marker.addEventListener('markerLost', () => {
   isShow = false
  })
})
</script>

<template>
    <a-marker ref="el" type="barcode" :value="id" smooth="true">
        <fragment v-if="isShow" :type="type" />
    </a-marker>
</template>

<style scoped>
</style>
