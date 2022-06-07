<script setup>
import BaseAtom from './BaseAtom.vue'
import BaseBond from './BaseBond.vue'
import BaseElectronPair from './BaseElectronPair.vue'
import { reactive, computed } from "vue";
import { useStore } from '../stores/index'
const store = useStore()

const { type } = defineProps({
  type: String
});

const fragment = reactive(store.c3Data[type]);
const isArray = computed(() => {
  return Array.isArray(fragment)
});
</script>

<template>
  <a-entity v-if="!isArray">
    <template  v-for="atom in fragment.atom" :key="atom.id">
      <BaseAtom v-if="atom.symbol" v-bind="atom" />
    </template>
    <template v-for="bond in fragment.bond" :key="bond.id">
      <BaseBond v-if="!bond.isElectronPair" :bondAtom1="fragment.atom[bond.bondAtom1]"
        :bondAtom2="fragment.atom[bond.bondAtom2]" :bondOrderType="bond.bondOrderType" :bondOrder="bond.bondOrder" />
      <BaseElectronPair v-else-if="bond.isElectronPair===true" :bondAtom1="fragment.atom[bond.bondAtom1]" :bondAtom2="fragment.atom[bond.bondAtom2]" :id="type+bond.id"/>
    </template>
    
  </a-entity>
  <a-entity v-else>
    <a-entity v-for="item in fragment">
      <template v-for="atom in item.atom" :key="atom.id">
        <BaseAtom v-if="atom.symbol"  v-bind="atom" />
      </template>
      
      <template  v-for="bond in item.bond" :key="bond.id">
        <BaseBond v-if="!bond.isElectronPair" :bondAtom1="item.atom[bond.bondAtom1]"
          :bondAtom2="item.atom[bond.bondAtom2]" :bondOrderType="bond.bondOrderType" :bondOrder="bond.bondOrder" />
        <BaseElectronPair v-else-if="bond.isElectronPair===true" :bondAtom1="item.atom[bond.bondAtom1]" :bondAtom2="item.atom[bond.bondAtom2]" :id="type+bond.id"/>
      </template>

    </a-entity>
  </a-entity>
</template>

<style scoped>
</style>
