<template>
  <div class="chem-3d-header">
    <menu-outlined @click="visible = true" style="font-size: 20px;opacity: 0.5;" />
    <span>Chem3D</span>
    <span style="width:20px"></span>
  </div>
  <div class="chem-3d-content">
    <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 4x4_BCH_13_9_3;" vr-mode-ui="enabled: false">
      <a-marker type="barcode" value="0">
        <fragment :type="currentModel[0]" :key="currentModel[0]"/>
        <!-- <fragment type="乙烷"  />
        <fragment type="乙烯" position="0 0 0" />
        <fragment type="乙炔" position="6 0 0" />
        <fragment type="苯" position="10 0 0" /> -->
      </a-marker>
      <BaseCamera />
    </a-scene>
  </div>
  <a-drawer
    v-model:visible="visible"
    title="选择模型"
    placement="left"
    width="60%"
  >
    <a-menu v-model:selectedKeys="currentModel" @click="visible = false">
      <a-menu-item v-for="it in modelList" :key="it.name">{{ it.name }}</a-menu-item>
    </a-menu>
  </a-drawer>
</template>

<script setup>
import { MenuOutlined } from '@ant-design/icons-vue';
import fragment from './components/fragment.vue'
import BaseCamera from './components/BaseCamera.vue'
import { ref } from "vue";
const visible = ref(false);
const modelList = ref([
  { name: '甲烷' }, { name: '乙烷' }, { name: '丙烷' }, { name: '乙烯' }, { name: '乙炔' }, { name: '苯' }
]);
const currentModel = ref(['甲烷']);
console.log(currentModel);
</script>

<style lang="scss">
.chem-3d {
  font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji", sans-serif;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  .chem-3d-header {
    background: #fff;
    height: 50px;
    color: #000000d9;
    font-weight: 300;
    font-size: 26px;
    z-index: 1;
    border-bottom: 1px solid rgba(60, 60, 60, 0.12);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
  .chem-3d-content {
    flex: 1;
  }
}
.ant-drawer-header {
  padding-top: 13px;
  padding-bottom: 13px;
}
.ant-drawer-body {
  padding: 0;
}
</style>

