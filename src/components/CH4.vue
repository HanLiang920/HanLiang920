<script setup>
    import BaseAtom from './BaseAtom.vue'
import { ref, reactive } from "vue";

const fragment = reactive({
  atom: [
    {
      id: "6",
      atType: "C Alkane",
      symbol: "C",
      userNum: "1",
      cartCoords: "1.42654 -4.28633 0.403219",
    },
    {
      id: "7",
      atType: "H",
      symbol: "H",
      userNum: "2",
      cartCoords: "0.937213 -3.28667 0.403871",
    },
    {
      id: "9",
      atType: "H",
      symbol: "H",
      userNum: "3",
      cartCoords: "2.53217 -4.15879 0.41203",
    },
    {
      id: "11",
      atType: "H",
      symbol: "H",
      userNum: "4",
      cartCoords: "1.11182 -4.85344 1.30771",
    },
    {
      id: "13",
      atType: "H",
      symbol: "H",
      userNum: "5",
      cartCoords: "1.1251 -4.84616 -0.510291",
    },
  ],
  bond: [
    {
      id: "5",
      bondAtom1: "6",
      bondAtom2: "7",
      bondOrderType: "0",
      bondOrder: "1",
    },
    {
      id: "8",
      bondAtom1: "6",
      bondAtom2: "9",
      bondOrderType: "0",
      bondOrder: "1",
    },
    {
      id: "10",
      bondAtom1: "6",
      bondAtom2: "11",
      bondOrderType: "0",
      bondOrder: "1",
    },
    {
      id: "12",
      bondAtom1: "6",
      bondAtom2: "13",
      bondOrderType: "0",
      bondOrder: "1",
    },
  ],
});
</script>

<template>
  <BaseAtom v-for="atom, in fragment.atom" :key="id"  :symbol="atom.symbol" :cartCoords="atom.cartCoords"/>
</template>

<style scoped>
</style>
