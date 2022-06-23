<template>
  <div class="chem-3d-header">
    <modeChoose v-model:mode="mode"></modeChoose>
  </div>
  <iframe v-show="mode === 'AR'" src="./ar.html" style="border:none;width: 100%;height: 100%;"></iframe>
  <iframe v-show="mode === '模型'" src="./model.html" style="border:none;width: 100%;height: 100%;"></iframe>
</template>

<script setup>
import modeChoose from "../../components/modeChoose.vue";
import { ref } from "vue";
const mode = ref("AR");
</script>

<style lang="scss">
* {
  font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji", sans-serif;
}

#app {
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.chem-3d-header {
  position: fixed;
  top: 10px;
  width: 45%;
  left: 27.5%;
  height: 6vh;
  color: #e3e3e3;
  font-size: 16px;
  z-index: 1;
  display: flex;
  justify-content: center;
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
</style>

