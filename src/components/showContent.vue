<template v-if="type">
    <template v-if="type==='sp'">
        <a-entity :key="key">
          <fragment type="s" :showAxes="false"  position="-2 1 0"  animation="property: position; to: 0 1 0; dur: 2000; easing: linear;"
            animation__1="property: visible; from: true; to: false; dur: 1;delay: 2100"
          />
          <fragment type="sp-1" :showAxes="false" position="2 1 0" animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" />
          <fragment type="sp-2" animation="property: position; to: 0 1 0; dur: 1; easing: linear;delay: 2100" :showAxes="showAxes" position="0 9999 0" />
        </a-entity>

    </template>
    <template v-else-if="type==='sp2'">
      <a-entity :key="key">
          <fragment type="s" :showAxes="false" position="-3 1 0"  animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
          <fragment type="px" :showAxes="false"  position="0 1 0" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
          <fragment type="py" :showAxes="false"  position="3 1 0"  animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
          <fragment type="sp2" :showAxes="showAxes"  position="0 9999 0" animation="property: position; to: 0 1 0; dur: 1; delay: 2300" />
      </a-entity>
    </template>
    <template v-else-if="type==='sp3'">
      <a-entity :key="key">
        <fragment type="s" :showAxes="false" position="-4 1 0" animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
        <fragment type="px" :showAxes="false"  position="1.34 1 0" animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
        <fragment type="py" :showAxes="false"  position="-1.34 1 0" animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
        <fragment type="pz" :showAxes="false"  position="4 1 0" animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
        <fragment type="sp3" :showAxes="showAxes"  position="0 9999 0" animation="property: position; to: 0 1 0; dur: 1; delay: 2300" />
      </a-entity>
    </template>
    <template v-else-if="type==='s-s'">
        <a-entity :key="key">
          <fragment type="s-s1" :showAxes="false" position="-2 1 0" animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
          <fragment type="s-s1" :showAxes="false" position="2 1 0" animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
          <fragment type="s-s" animation="property: position; to: 0 1 0; dur: 1; easing: linear;delay: 2100" :showAxes="showAxes" position="0 9999 0" />
        </a-entity>
    </template>
    <template v-else-if="type==='s-p'">
        <a-entity :key="key">
          <fragment type="s-s1" :showAxes="false" position="-2 1 0" animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
          <fragment type="s-p1" :showAxes="false" position="2 1 0" animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
          <fragment type="s-p" animation="property: position; to: 0 1 0; dur: 1; easing: linear;delay: 2100" :showAxes="showAxes" position="0 9999 0"  />
        </a-entity>
    </template>
    <template v-else-if="type==='p-pσ'">
        <a-entity :key="key">
          <fragment type="s-p1" :showAxes="false" position="-2 1 0" animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
          <fragment type="s-p1" :showAxes="false" position="2 1 0" animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
          <fragment type="p-pσ" animation="property: position; to: 0 1 0; dur: 1; easing: linear;delay: 2100" :showAxes="showAxes" position="0 9999 0"  />
        </a-entity>
    </template>
    <fragment v-else :type="type" :showAxes="showAxes" :key="type"  position="0 1.2 0" />
    <div v-if="['sp','sp2','sp3','s-s','s-p','p-pσ'].includes(type)" class="replay" @click="key++"><reload-outlined :class="{rotatefresh:true,rotatefresh1:key&&key%2===0,rotatefresh2:key&&key%2===1}" /></div>
</template>

<script setup>
import { ReloadOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import fragment from "./fragment.vue";
const { type } = defineProps({
  type: String,
  showAxes:{ type: Boolean, default: true }
});
const key = ref(0)

</script>

<style lang="scss">
.replay{
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 10;
  width: 50px;
  height: 50px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  transition: color .3s;
  border-radius: 50%;    
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #1890ff;
  }
 .rotatefresh1{
    animation: 0.6s rotatefresh1 linear;
  }
  .rotatefresh2{
    animation: 0.6s rotatefresh2 linear;
  }
}
@keyframes rotatefresh1 {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
@keyframes rotatefresh2 {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>

