<template>
    <svg :width="width" :height="height"  fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="0" :x2="2" :y2="height" stroke="white" :stroke-width="strokeWidth"/>
    </svg>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    width: {
        type: Number,
        default: 4
    },
    height: {
        type: Number,
        default: 823
    },
    strokeWidth: {
        type: Number,
        default: 4
    },
});
</script>