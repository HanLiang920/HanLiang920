<template>
   <!-- minimal loader shown until image descriptors are loaded. Loading may take a while according to the device computational power -->
    <a-scene>
      <a-sky color="#ECECEC"></a-sky>
      <!-- <fragment type="甲烷" position="0 0 0"/> -->
      <fragment type="乙烷" position="-4 0 0"/>
      <fragment type="乙烯" position="0 0 0"/>
      <fragment type="乙炔" position="6 0 0"/>
      <fragment type="苯" position="10 0 0"/>
      <BaseCamera />
    </a-scene>

</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import fragment from './components/fragment.vue'
import BaseCamera from './components/BaseCamera.vue'
</script>

<style>

</style>
