<template>
  <div class="chem-3d-header">
    <div :style="{ width: '14%', visibility: mode == 'AR' ? 'hidden' : 'visible',  cursor: 'pointer' }"  @click="visible = true" >
      <menu-outlined />
    </div>

    <modeChoose v-model:mode="mode"></modeChoose>
    <div style="width:14%;height:0"></div>
  </div>
  <a-scene embedded
           renderer="antialias: true;
                   colorManagement: true;
                   sortObjects: true;
                   physicallyCorrectLights: true;
                   maxCanvasWidth: -1;
                   maxCanvasHeight: -1;"
    arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 4x4_BCH_13_9_3;"
    vr-mode-ui="enabled: false">
    <template v-if="mode == 'AR'">
      <a-marker type="barcode" value="0" smooth="true">
        <fragment type="甲烷" />
      </a-marker>
      <a-marker type="barcode" value="1" smooth="true">
        <fragment type="乙烷" />
      </a-marker>
    </template>
    <template v-else>
      <fragment v-if="currentModel" :type="currentModel" :key="currentModel" position="0 0 -9" />
      <a-sky></a-sky>
    </template>

    <a-entity camera></a-entity>
  </a-scene>
  <a-drawer v-model:visible="visible" title="" placement="left" width="60%">
    <a-menu :selectable="false" mode="inline">
      <a-menu-item key="openModel" @click="$refs.openFile.click()">
        打开模型
      </a-menu-item>
      <a-sub-menu key="模型列表" title="模型列表">
        <a-menu-item v-for="it in modelList" :key="it.name" @click="currentModel = it.name; visible = false">
          {{ it.name }}
        </a-menu-item>
      </a-sub-menu>

    </a-menu>
  </a-drawer>
  <input v-show="false" type="file" ref="openFile" accept="chemical/x-c3xml" @change="openModel" />
</template>

<script setup>
import { MenuOutlined } from '@ant-design/icons-vue';
import modeChoose from './components/modeChoose.vue'
import fragment from './components/fragment.vue'
import BaseCamera from './components/BaseCamera.vue'
import { ref } from "vue";
import { xml2json, parseXml, getc3Data } from './utils'
const mode = ref('AR');
const visible = ref(false);
const modelList = ref([
  { name: '甲烷' }, { name: '乙烷' }, { name: '丙烷' }, { name: '乙烯' }, { name: '乙炔' }, { name: '苯' }
]);
const currentModel = ref('');
const openModel = (event) => {

  const path = event.target.value
  const file = event.target.files[0];
  console.log(event, file);
  const reader = new FileReader();
  reader.onload = function (event) {
    let { C3XML: { model: { group: { fragment } } } } = JSON.parse(xml2json(parseXml(event.target.result)))
    if (Array.isArray(fragment)) {
      fragment = fragment.map(it => getc3Data(it));
    } else {
      fragment = getc3Data(fragment)
    }
    window.c3Data[path] = fragment
    currentModel.value = path
    visible.value = false
  };

  reader.readAsText(file);
  setTimeout(() => {
    event.target.value = ''
  }, 0);
}
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


.ant-drawer-header {
  padding-top: 13px;
  padding-bottom: 13px;
}

.ant-drawer-body {
  padding: 0;
}
</style>

