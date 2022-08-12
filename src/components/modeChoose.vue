<script setup>

const { mode } = defineProps({
    mode: String
});
defineEmits(['update:mode'])
</script>

<template>
    <div class="mode-choose" :style="{'--groove-left':mode !== 'AR'?'0':'50%'}">
        <div :class="{ 'mode-choose-item': true, choose: mode != 'AR' }" @click="$emit('update:mode', '模型')">模型</div>
        <div :class="{ 'mode-choose-item': true, choose: mode == 'AR' }" @click="$emit('update:mode', 'AR')">AR</div>
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
        left: var(--groove-left);
        width: 50%;
        height: 100%;
        border-radius: 15px;
        transition: left 0.6s cubic-bezier(.17,.67,.83,.67);
        background: #141414;
        opacity: 0.8;
        z-index: 1;
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
