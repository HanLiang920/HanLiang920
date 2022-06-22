<script setup>
import BaseAtom from './BaseAtom.vue'
import BaseBond from './BaseBond.vue'
import BaseElectronPair from './BaseElectronPair.vue'
import { reactive, computed } from "vue";

const { type } = defineProps({
  type: String
});

const fragment = reactive(window.c3Data[type]);
</script>

<template>
  <a-entity shadow use-rotate>
    <template  v-for="atom in fragment.atom" :key="atom.id">
      <BaseAtom v-if="atom.symbol" v-bind="atom" />
    </template>
    <template v-for="bond in fragment.bond" :key="bond.id">
      <BaseBond v-if="!bond.isElectronPair" :bondAtom1="fragment.atom[bond.bondAtom1]"
        :bondAtom2="fragment.atom[bond.bondAtom2]" :bondOrderType="bond.bondOrderType" :bondOrder="bond.bondOrder" />
      <BaseElectronPair v-else-if="bond.isElectronPair===true" :bondAtom1="fragment.atom[bond.bondAtom1]" :bondAtom2="fragment.atom[bond.bondAtom2]" :id="type+bond.id"/>
    </template>
  </a-entity>
</template>

<style scoped>
</style>
