<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    imgSrc: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
        required: true
    },
    voirPlus: {
        type: String,
        default: 'Voir plus...'
    }
});

const emit = defineEmits(['click']);
</script>

<template>
    <div class="card" @click="$emit('click')">
        <img :src="imgSrc" alt="image du projet" class="card__img">
        <div class="card__content">
            <h3 class="card__content--title">{{ title }}</h3>
            <p class="card__content--paragraphe">{{ description }}</p>
            <div class="card__content--list">
                <p v-for="tech in technologies" :key="tech">{{ tech }}</p>
            </div>
            <p class="card__content--voir">{{ voirPlus }}</p>
        </div>
    </div>
</template>

<style lang="scss">
.card {
    display: flex;
    flex-flow: column;
    border: 2px solid $white; 
    border-radius: 15px;
    gap: 1rem;
    
    &__img {
        border-radius: 15px;
        width: 400px;
    }
    &__content {
        margin-left: 1rem;
        display: flex;
        flex-flow: column;
        gap: 1rem;

        &--title {
            font-weight: bold;
            font-size: $medium;
        }
        &--paragraphe {
            // Ajoutez des styles ici si nécessaire
        }
        &--list {
            display: flex;
            flex-flow: row;
            gap: 1rem;
            p {
                background-color: $secondary;
                padding: 0.5rem;
                border-radius: 15px;
            }
        }
        &--voir {
            display: flex;
            flex-flow: row-reverse;
            color: $primary;
            padding: 1rem;
        }
    }
}
</style>