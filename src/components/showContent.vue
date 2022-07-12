<template v-if="type">
    <template v-if="type==='sp'">
        <fragment type="s" :showAxes="showAxes" :key="type"  position="0 1 0" />
        <fragment type="py" :showAxes="showAxes" :key="type"  position="0 1 0"/>
    </template>
    <fragment v-else :type="type" :showAxes="showAxes" :key="type"  position="0 1 0" />
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

