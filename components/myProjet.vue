<script setup>
import MyCard from '~/components/myCard.vue';
import projets from '~/data/projet.json';
</script>

<template>
    <div class="projet">

        <h2 class="projet__title">Mes projets</h2>
        
        <div class="projet__card">
            <MyCard 
            v-for="(projet, index) in projets" 
            :key="index" 
            :imgSrc="projet.imgSrc"
            :title="projet.title" 
            :description="projet.description" 
            :technologies="projet.technologies"
            />  
        </div>
    </div>
</template>

<style lang="scss">
.projet {
    margin-top: 10rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 0.5rem;
    &__title{
        font-size: $giant;
        font-weight: bold;
        text-align: center;
        margin-bottom: 5rem;
    }
    &__card{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr; 
        gap: 2rem; 
        width: 80%;
    }     
}
</style>