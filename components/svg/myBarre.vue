<template>
    <svg width="201" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="200" height="15" stroke="white"/>
        <rect :width="animatedWidth" height="15" fill="white" class="bar-animation"/>
    </svg>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    width: {
        type: Number,
        default: 100
    },
    animate: {
        type: Boolean,
        default: false
    }
});

const animatedWidth = computed(() => props.animate ? props.width : 0);
</script>

<style scoped>
.bar-animation {
    transition: width 2s ease;
}
</style>