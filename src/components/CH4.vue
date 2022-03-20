<script setup>
import BaseAtom from './BaseAtom.vue'
import BaseBond from './BaseBond.vue'
import { ref, reactive } from "vue";

const fragment = reactive(window.c3Data.CH4);
</script>

<template>
  <a-entity>
    <BaseAtom v-for="atom in fragment.atom" :key="atom.id" v-bind="atom" />
    <BaseBond
      v-for="bond in fragment.bond"
      :key="bond.id"
      :bondAtom1="fragment.atom[bond.bondAtom1]"
      :bondAtom2="fragment.atom[bond.bondAtom2]"
      :bondOrderType="bond.bondOrderType"
      :bondOrder="bond.bondOrder"
    />
  </a-entity>
</template>

<style scoped>
</style>
