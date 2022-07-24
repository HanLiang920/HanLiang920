<template>
  <div class="chem-3d-header">
    <div :style="{ width: '14%', visibility: mode == 'AR' ? 'hidden' : 'visible', cursor: 'pointer' }"
      @click="visible = true">
      <menu-outlined />
    </div>

    <modeChoose v-model:mode="mode"></modeChoose>
    <div style="width:14%;height:0"></div>
  </div>
  <a-drawer v-model:visible="visible" title="" placement="left" width="60%">
    <a-menu v-model:selectedKeys="currentModel" v-model:openKeys="openKeys" mode="inline" @click="visible = false">
        <a-sub-menu key="分子模型">
          <template #title>分子模型</template>
          <a-menu-item v-for="it in modelList" :key="it.name">
            {{ it.name }}
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="VSEPR模型">
          <template #title>VSEPR模型</template>
          <a-menu-item v-for="it in VSEPRList" :key="it.name">{{ it.name }}</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="杂化轨道模型">
          <template #title>杂化轨道模型</template>
          <a-menu-item key="s">s轨道</a-menu-item>
          <a-sub-menu key="p轨道">
            <template #title>p轨道</template>
            <a-menu-item key="px">p<sub>x</sub>轨道</a-menu-item>
            <a-menu-item key="py">p<sub>y</sub>轨道</a-menu-item>
            <a-menu-item key="pz">p<sub>z</sub>轨道</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="sp">sp轨道</a-menu-item>
          <a-menu-item key="sp2">sp2轨道</a-menu-item>
          <a-menu-item key="sp3">sp3轨道</a-menu-item>
        </a-sub-menu>

    </a-menu>
  </a-drawer>
  <iframe v-if="mode === 'AR'" src="./ar.html" style="border:none;width: 100%;height: 100%;position: absolute;top: 0;"></iframe>
  <iframe v-if="mode === '模型'" ref="modelEl" src="./model.html" style="border:none;width: 100%;height: 100%;position: absolute;top: 0;"></iframe>
</template>

<script setup>
import { MenuOutlined } from "@ant-design/icons-vue";
import modeChoose from "../../components/modeChoose.vue";
import { ref, watchEffect} from "vue";
const mode = ref("AR");
const visible = ref(false);
const currentModel = ref(["C60"]);
const openKeys = ref(['分子模型']);
const VSEPRList = ref([
  { name: "4+0" },
  { name: "3+1" },
  { name: "2+2" },
  { name: "3+0" },
  { name: "2+1" },
  { name: "2+0" }
]);
const modelList = ref([
  { name: "H2O" },
  { name: "NH3" },
  { name: "CO2" },
  { name: "CH2O" },
  { name: "P4" },
  { name: "甲烷" },
  { name: "乙烷" },
  { name: "丙烷" },
  { name: "乙烯" },
  { name: "乙炔" },
  { name: "苯" },
  { name: "C60" }
]);
window.currentModel = currentModel
const modelEl = ref()
watchEffect(() => {
    if(modelEl&&modelEl.value) modelEl.value.contentWindow.postMessage({currentModel:currentModel.value[0]})
})
</script>

<style lang="scss">
* {
  font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji", sans-serif;
}

#app {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

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

.ant-drawer-header {
  padding-top: 13px;
  padding-bottom: 13px;
}
.ant-drawer-body {
  padding: 0;
}
</style>

