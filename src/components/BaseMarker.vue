<script setup>
import { ref, onMounted  } from "vue";
import showContent from "./showContent.vue";
const { id, type } = defineProps({
  id: String,
  type: String,
});
const el = ref()
const isShow = ref(false);
onMounted(() => {
  const marker = el.value
  marker.addEventListener('markerFound', (e) => {
    isShow.value = true
  });

  marker.addEventListener('markerLost', () => {
   isShow.value = false
  })
})
</script>

<template>
    <a-marker ref="el" type="barcode" :value="id" smooth="true">
        <showContent v-if="isShow" :type="type" :showAxes="false"/>
    </a-marker>
</template>

<style scoped>
</style>
