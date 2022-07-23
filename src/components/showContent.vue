<template v-if="type">
    <template v-if="type==='sp'">
        <fragment type="s" :showAxes="showAxes"  position="-2 1 0"  animation="property: position; to: 0 1 0; dur: 2000; easing: linear;"
          animation__visible="property: visible; from: true; to: false; dur: 1;delay: 2100"
        />
        <fragment type="sp-1" :showAxes="showAxes" position="2 1 0" animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" />
        <fragment type="sp-2" animation="property: position; to: 0 1 0; dur: 1; easing: linear;delay: 2100" :showAxes="false" position="0 9999 0" />
    </template>
    <template v-else-if="type==='sp2'">
        <fragment type="s" :showAxes="showAxes" position="-3 1 0"  animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
        <fragment type="px" :showAxes="showAxes"  position="0 1 0" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
        <fragment type="py" :showAxes="showAxes"  position="3 1 0"  animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
        <fragment type="sp2" :showAxes="showAxes"  position="0 9999 0" animation="property: position; to: 0 1 0; dur: 1; delay: 2300" />
    </template>
      <template v-else-if="type==='sp3'">
        <fragment type="s" :showAxes="showAxes" position="-4 1 0" animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
        <fragment type="px" :showAxes="showAxes"  position="1.34 1 0" animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
        <fragment type="py" :showAxes="showAxes"  position="-1.34 1 0" animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
        <fragment type="pz" :showAxes="showAxes"  position="4 1 0" animation="property: position; to: 0 1 0; dur: 2000; easing: linear;" animation__1="property: position; to: 0 9999 0; dur: 1; delay: 2100"/>
        <fragment type="sp3" :showAxes="showAxes"  position="0 9999 0" animation="property: position; to: 0 1 0; dur: 1; delay: 2300" />
    </template>
    <fragment v-else :type="type" :showAxes="false" :key="type"  position="0 1 0" />
</template>

<script setup>
import fragment from "./fragment.vue";
const { type } = defineProps({
  type: String,
  showAxes:{ type: Boolean, default: true }
});
</script>

<style lang="scss">

</style>

