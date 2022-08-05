<script setup>

const { mode } = defineProps({
    mode: String
});
defineEmits(['update:mode'])
</script>

<template>
    <div class="mode-choose">
        <div :class="{ 'mode-choose-item': true, choose: mode != 'AR' }" @click="$emit('update:mode', '模型')">模型</div>
        <div :class="{ 'mode-choose-item': true, choose: mode == 'AR' }" @click="$emit('update:mode', 'AR')">AR</div>
    </div>
</template>

<style scoped lang="scss">
.mode-choose {
    width: 45%;
    display: flex;
    font-size: 14px;

    .mode-choose-item {
        width: 50%;
        text-align: center;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &.choose {
            background: #141414;
            border-radius: 15px;
            color:#1890ff;
        }
    }
}
</style>
