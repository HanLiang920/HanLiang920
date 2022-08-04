<script setup>
import BaseAtom from './BaseAtom.vue'
import BaseBond from './BaseBond.vue'
import BaseElectronPair from './BaseElectronPair.vue'
import BaseZahua from './BaseZahua.vue'
import { reactive, computed } from "vue";

const { type } = defineProps({
  type: String,
  showAxes:{ type: Boolean, default: true },
  animation__visible: String,
  zahuaVisible:{ type: Boolean, default: true },
});

const fragment = reactive(window.c3Data[type]);
</script>

<template>
<a-entity use-rotate v-if="fragment">
  <a-entity shadow  :position="fragment.center" :rotation="fragment.rotation">
    <template  v-for="atom in fragment.atom" :key="atom.id">
      <BaseAtom v-if="atom.symbol" v-bind="atom" :animation__visible="animation__visible"/>
    </template>
    <template v-for="bond in fragment.bond" :key="bond.id">
      <BaseElectronPair v-if="bond.isElectronPair===true" :bondAtom1="fragment.atom[bond.bondAtom1]" :bondAtom2="fragment.atom[bond.bondAtom2]" :id="type+bond.id"/>
      <BaseZahua v-else-if="bond.zahua===true" :animation__visible="animation__visible" :zahuaVisible="zahuaVisible" :height="bond.height" :scale="bond.scale" :opacity="bond.opacity" :bondAtom1="fragment.atom[bond.bondAtom1]" :bondAtom2="fragment.atom[bond.bondAtom2]" :id="type+bond.id"/>
      <BaseBond v-else :bondAtom1="fragment.atom[bond.bondAtom1]"
        :bondAtom2="fragment.atom[bond.bondAtom2]" :bondOrderType="bond.bondOrderType" :bondOrder="bond.bondOrder" :color="bond.color"/>
    </template>
  </a-entity>
  <a-entity v-if="showAxes" axes-helper="size:2"></a-entity>
</a-entity>
</template>

<style scoped>
</style>
