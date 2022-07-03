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
    <a-menu v-model:selectedKeys="currentModel" mode="inline">
            <a-menu-item v-for="it in modelList" :key="it.name" @click="visible = false">
          {{ it.name }}
        </a-menu-item>

    </a-menu>
  </a-drawer>
  <iframe v-show="mode === 'AR'" src="./ar.html" style="border:none;width: 100%;height: 100%;position: absolute;top: 0;"></iframe>
  <iframe v-show="mode === '模型'" src="./model.html" style="border:none;width: 100%;height: 100%;position: absolute;top: 0;"></iframe>
</template>

<script setup>
import { MenuOutlined } from "@ant-design/icons-vue";
import modeChoose from "../../components/modeChoose.vue";
import { ref } from "vue";
const mode = ref("AR");
const visible = ref(false);
const currentModel = ref(["水"]);
const modelList = ref([
  { name: "甲烷" },
  { name: "乙烷" },
  { name: "丙烷" },
  { name: "乙烯" },
  { name: "乙炔" },
  { name: "苯" },
  { name: "水" },
]);
window.currentModel = currentModel
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

