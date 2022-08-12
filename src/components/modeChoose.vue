<script setup>
import { ref } from "vue";
const left = ref("0");
const { mode } = defineProps({
    mode: String
});
const emit =  defineEmits(['update:mode'])
const modeClick = (type)=>{
    if(type===mode.value) return
    left.value = type !== 'AR' ?'0':'100%'
    setTimeout(()=>{
        emit('update:mode', type)
    },0)
}
</script>

<template>
    <div class="mode-choose" :style="{'--groove-left':left}">
        <div :class="{ 'mode-choose-item': true, choose: mode != 'AR' }" @click="modeClick('模型')">模型</div>
        <div :class="{ 'mode-choose-item': true, choose: mode == 'AR' }" @click="modeClick('AR')">AR</div>
    </div>
</template>

<style scoped lang="scss">
.mode-choose {
    width: 45%;
    display: flex;
    font-size: 14px;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 50%;
        height: 100%;
        border-radius: 15px;
        transition: transform 0.6s cubic-bezier(0.82, 0.12, 0.18, 0.88);
        background: #141414;
        opacity: 0.8;
        z-index: 1;
        transform: translate(var(--groove-left), 0);
    }

    .mode-choose-item {
        width: 50%;
        text-align: center;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        transition: color 0.3s linear;
        &.choose {
            color:#1890ff;
        }
    }
}
</style>
