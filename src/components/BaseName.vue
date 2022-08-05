<script setup>
import { ref ,computed  } from "vue";
const { name } = defineProps({
  name: String
});
const nameList = computed(() => {
    if(!name) return []
    return name.split('').map(it=>{
        return {
            text:it,
            isNumber:!isNaN(it)
        }
    })
}) 
</script>

<template>
    <span class="base-name">
        <template v-for="(it,i) in nameList" :key="i">
            <template v-if="it.isNumber"><sub>{{it.text}}</sub></template>
            <template v-else>{{it.text}}</template>
        </template>
    </span>
</template>

<style scoped>
.base-name{
    font-style: italic;
}
</style>
