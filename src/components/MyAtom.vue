<script setup>
import { ref } from 'vue'

defineProps({
  symbol: String
})

const count = ref(0)
</script>

<template>
  <a-entity geometry="primitive: sphere; radius: 0.2" material="color: red" position="1.42654 -4.28633 0.403219"></a-entity>
  <a-entity geometry="primitive: sphere; radius: 0.2" material="color: red" position="0.937213 -3.28667 0.403871"></a-entity>
  <a-entity geometry="primitive: sphere; radius: 0.2" material="color: red" position="2.53217 -4.15879 0.41203"></a-entity>
  <a-entity geometry="primitive: sphere; radius: 0.2" material="color: red" position="1.11182 -4.85344 1.30771"></a-entity>
  <a-entity geometry="primitive: sphere; radius: 0.2" material="color: red" position="1.1251 -4.84616 -0.510291"></a-entity>
</template>

<style scoped>

</style>
