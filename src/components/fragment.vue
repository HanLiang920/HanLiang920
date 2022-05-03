<script setup>
import BaseAtom from './BaseAtom.vue'
import BaseBond from './BaseBond.vue'
import { reactive, computed } from "vue";

const { type } = defineProps({
  type: String
});

const fragment = reactive(window.c3Data[type]);
const isArray = computed(() => {
  return Array.isArray(fragment)
});
</script>

<template>
  <a-entity v-if="!isArray">
    <BaseAtom v-for="atom in fragment.atom" :key="atom.id" v-bind="atom" />
    <BaseBond v-for="bond in fragment.bond" :key="bond.id" :bondAtom1="fragment.atom[bond.bondAtom1]"
      :bondAtom2="fragment.atom[bond.bondAtom2]" :bondOrderType="bond.bondOrderType" :bondOrder="bond.bondOrder" />
  </a-entity>
  <a-entity v-else>
    <a-entity v-for="item in fragment">
      <BaseAtom v-for="atom in item.atom" :key="atom.id" v-bind="atom" />
      <BaseBond v-for="bond in item.bond" :key="bond.id" :bondAtom1="item.atom[bond.bondAtom1]"
        :bondAtom2="item.atom[bond.bondAtom2]" :bondOrderType="bond.bondOrderType" :bondOrder="bond.bondOrder" />
    </a-entity>
  </a-entity>
</template>

<style scoped>
</style>
