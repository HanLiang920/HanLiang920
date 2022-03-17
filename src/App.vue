<template>
   <!-- minimal loader shown until image descriptors are loaded. Loading may take a while according to the device computational power -->
    <a-scene>
      
      <a-sky color="#ECECEC"></a-sky>
      <CH4 />
    </a-scene>

</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import CH4 from './components/CH4.vue'
</script>

<style>

</style>
