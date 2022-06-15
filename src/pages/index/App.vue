<template>
  <div class="chem-3d-header">
    <modeChoose v-model:mode="mode"></modeChoose>
  </div>
</template>

<script setup>
import { ref } from "vue";
const mode = ref("AR");
</script>

<style lang="scss">
* {
  font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji", sans-serif;
}

body {
  overflow: hidden;
}

.chem-3d {
  width: 100%;
  height: 100%;

  .chem-3d-header {
    position: fixed;
    top: 10px;
    right: 0;
    left: 0;
    height: 6vh;
    color: #e3e3e3;
    font-size: 16px;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    &>div {
      height: 100%;
      background: #868686;
      opacity: 0.8;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      border-radius: 4vw;
    }
  }
}
</style>

