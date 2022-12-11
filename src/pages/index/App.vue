<template>
  <div class="app-content">
    <div class="chem-3d-header">
      <div :style="{ width: '14%', visibility: mode == 'AR' ? 'hidden' : 'visible', cursor: 'pointer' }"
        @click="visible = true">
        <menu-outlined />
      </div>

      <modeChoose v-model:mode="mode"></modeChoose>
      <div style="width:14%;height:0"></div>
    </div>
    <a-drawer v-model:visible="visible" :closable="false" title="" placement="left" width="55%">
      <div class="drawer-content">
        <div class="drawer-content-menu">
          <div style="overflow: auto;height: 100%;">
            <a-menu v-model:selectedKeys="currentModel" v-model:openKeys="openKeys" mode="inline"
              @click="visible = false">
              <a-sub-menu key="共价键">
                <template #title>共价键</template>
                <a-sub-menu key="σ键">
                  <template #title>σ键</template>
                  <a-menu-item key="s-s">s-s</a-menu-item>
                  <a-menu-item key="s-p">s-p</a-menu-item>
                  <a-menu-item key="p-pσ">p-p σ键</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="π键">
                  <template #title>π键</template>
                  <a-menu-item key="p-pπ">p-p π键</a-menu-item>
                </a-sub-menu>
              </a-sub-menu>
              <a-sub-menu key="分子模型">
                <template #title>分子模型</template>
                <a-sub-menu key="无机化合物">
                  <template #title>无机化合物</template>
                  <a-menu-item v-for="it in modelList" :key="it.name">
                    <BaseName :name="it.name" />
                  </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="有机化合物">
                  <template #title>有机化合物</template>
                  <a-menu-item v-for="it in modelList2" :key="it.name">
                    <BaseName :name="it.name" />
                  </a-menu-item>
                </a-sub-menu>

              </a-sub-menu>
              <a-sub-menu key="VSEPR模型">
                <template #title>VSEPR模型</template>
                <a-sub-menu key="直线形">
                  <template #title>直线形</template>
                  <a-menu-item key="2+0">2+0</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="平面三角形">
                  <template #title>平面三角形</template>
                  <a-menu-item key="2+1">2+1</a-menu-item>
                  <a-menu-item key="3+0">3+0</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="四面体">
                  <template #title>四面体</template>
                  <a-menu-item key="2+2">2+2</a-menu-item>
                  <a-menu-item key="3+1">3+1</a-menu-item>
                  <a-menu-item key="4+0">4+0</a-menu-item>
                </a-sub-menu>
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
          </div>

        </div>


        <div style="padding:10px 24px;border-top: 1px solid rgba(60, 60, 60, .12);">
          <div class="switch-item">
            <span>显示背景</span>
            <a-switch v-model:checked="showBackground">
              <template #checkedChildren>
                <check-outlined />
              </template>
              <template #unCheckedChildren>
                <close-outlined />
              </template>
            </a-switch>
          </div>
          <div class="switch-item">
            <span>显示坐标轴</span>
            <a-switch v-model:checked="showAxes">
              <template #checkedChildren>
                <check-outlined />
              </template>
              <template #unCheckedChildren>
                <close-outlined />
              </template>
            </a-switch>
          </div>
        </div>
      </div>

    </a-drawer>


    <div v-if="mode === '模型' && currentInfo.name" class="info" @click="showInfo"><info-outlined /></div>
    <a-modal class="visibleInfo" v-model:visible="visibleInfo" :title="currentInfo.name" :centered="true" width="660px"
      :mask="false" :destroyOnClose="true" :footer="null">
      <div>{{ currentInfo.text }}</div>
      <div style="margin-top: 15px;position: relative;">
        <iframe ref="videoIframe" style="" :src="currentInfo.video" scrolling="no" border="0" frameborder="no"
          framespacing="0" allowfullscreen="true"> </iframe>
      </div>
    </a-modal>

    <a-modal class="visibleStart" :maskStyle="{ backdropFilter: 'blur(6px)' }" v-model:visible="visibleStart"
      :closable="false" :width="660" closeIcon="" :destroyOnClose="false" :footer="null">
      <div class="ant-modal-body-content">
        <img src="../../utils/img1.png" />
        <div style="padding: 20px 30px;">
          <div style="font-size: 24px;">欢迎进入“分子视界”</div>
          <div style=" font-size: 16px;">让我们一起开启奇妙的AR之旅把！</div>
          <div class="button3" @click="visibleStart = false">
            <span>G O</span>
          </div>
        </div>
      </div>
    </a-modal>


    <iframe v-if="mode === 'AR'" :src="`./ar.html?v=${version}`"
      style="border:none;width: 100%;height: 100%;position: absolute;top: 0;"></iframe>
    <iframe v-if="mode === '模型'" ref="modelEl" :src="`./model.html?v=${version}`"
      style="border:none;width: 100%;height: 100%;position: absolute;top: 0;"></iframe>
    <a-spin v-if="!loaded" size="large"
      style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);" />
  </div>
</template>

<script setup>
import { MenuOutlined, CheckOutlined, CloseOutlined, InfoOutlined } from "@ant-design/icons-vue";
import modeChoose from "../../components/modeChoose.vue";
import BaseName from "../../components/BaseName.vue";
import { ref, watchEffect, watch, computed } from "vue";
const version = computed(() => process.env.version)
const mode = ref("模型");
const loaded = ref(false);
const visible = ref(false);
const visibleInfo = ref(false);
const visibleStart = ref(true);
const isPlay = ref(false);
const showBackground = ref(true);
const showAxes = ref(true);
const currentModel = ref(["H2O"]);
const openKeys = ref(['分子模型', '无机化合物']);
const modelList = ref([
  { name: "H2O" },
  { name: "NH3" },
  { name: "CO2" },
  { name: "P4" },
  { name: "P4O6" },
  { name: "P4O10" },
  { name: "S8" },
])
const modelList2 = ref([
  { name: "CH2O" },
  { name: "CH4" },
  { name: "C2H6" },
  { name: "C3H8" },
  { name: "C2H4" },
  { name: "C2H2" },
  { name: "C6H6" },
  { name: "C60" }
]);
window.currentModel = currentModel
window.showAxes = showAxes
const dataInfos = {
  CH4: {
    name: '甲烷',
    text: '甲烷，化学式CH4，是最简单的烃，由一个碳和四个氢原子通过sp3杂化的方式组成，因此甲烷分子的结构为正四面体结构，四个键的键长相同键角相等。',
    video: '//player.bilibili.com/player.html?aid=77751294&bvid=BV1HJ411z7ii&cid=133016052&page=1'
  },
  sp3: {
    name: 'sp3杂化轨道',
    text: 'π键指两个p轨道垂直于键轴以“肩并肩”方式重叠所形成的化学键。形成π键时，原子轨道的重叠部分对等地分布在包括键轴在内的平面上、下两侧，形状相同，符号相反，呈镜面反对称。',
    video: '//player.bilibili.com/player.html?aid=540695830&bvid=BV1Hi4y147rk&cid=192227143&page=1'
  }
}
const modelEl = ref()
const videoIframe = ref()
const showInfo = () => {
  visibleInfo.value = true
  setTimeout(() => {
    videoIframe.value.onload = () => {

    };
  }, 0)
}
const play = () => {

}
watchEffect(() => {
  if (modelEl && modelEl.value) modelEl.value.contentWindow.postMessage({ currentModel: currentModel.value[0], showAxes: showAxes.value })
})
watch(mode, () => {
  loaded.value = false
})
watch(showBackground, () => {
  if (showBackground.value) {
    document.querySelector('body').setAttribute('style', 'background: linear-gradient(200deg, #f4efef, #e3eeff)')
  } else {
    document.querySelector('body').removeAttribute('style')
  }
})

const currentInfo = computed(() => {
  return dataInfos[currentModel.value[0]] || {}
})

window.addEventListener('message', (event) => {
  if (event.data === 'loaded') {
    loaded.value = true
    const loading = document.querySelector('#body-loading')
    loading.classList.add('animate__animated05', 'animate__fadeOut')

    setTimeout(() => {
      loading.style.display = 'none';
      document.querySelector('#app').classList.add('animate__animated', 'animate__fadeIn')
    }, 490)
  }
})
</script>

<style lang="scss">
#app {
  opacity: 0;
}

#app,
.app-content {
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
  height: 45px;
  color: #e3e3e3;
  font-size: 16px;
  font-weight: 500;
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
    border-radius: 15px;
  }
}

.ant-drawer-header {
  padding-top: 13px;
  padding-bottom: 13px;
}

.ant-drawer-body {
  padding: 0;
}

.drawer-content {
  display: flex;
  flex-direction: column;
  height: 100%;

  .drawer-content-menu {
    flex: 1;
    overflow: hidden;
  }

  .switch-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
  }
}

.info {
  position: fixed;
  bottom: 10%;
  right: 5%;
  z-index: 10;
  width: 50px;
  height: 50px;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);
  transition: color 0.3s;
  border-radius: 50%;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.visibleInfo {
  .ant-modal-content {
    backdrop-filter: blur(6px);
    background-color: rgb(255 255 255 / 60%);
  }

  .ant-modal-header {
    background-color: unset;
    border-bottom: 1px solid rgb(240 240 240 / 60%);
  }
}


.visibleStart {
  top: 20%;

  .ant-modal-content {
    border-radius: 35px;
  }

  @media (max-width: 767px) {
    .ant-modal-body-content {
      flex-direction: column;
      align-items: center;
    }
  }

  .ant-modal-body-content {
    width: 100%;
    display: flex;

    >div {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      min-height: 205px;
    }

    img {
      width: 40%;
    }

    .button3 {
      width: 200px;
      height: 46px;
      line-height: 46px;
      background-color: #2e82ff;
      color: #ffffff;
      font-size: 18px;
      text-align: center;
      border-radius: 27px;
      position: relative;
      cursor: pointer;
    }

    .button3::before {
      content: "";
      position: absolute;
      left: 0px;
      width: 100%;
      height: 100%;
      background-image:
        linear-gradient(to right, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 70%);
      background-size: 200%;
      animation: wipes 1s infinite;
    }

    @keyframes wipes {
      0% {
        background-position: 100% 0;
      }

      100% {
        background-position: 0 0;
      }
    }

  }
}
</style>

