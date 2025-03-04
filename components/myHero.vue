<script setup>
</script>
<template>
<div class="hero">
    <h1 class="hero__title"> Bonjour, je suis <span class="hero__title--blue">Corentin Beuchat</span>
    </h1>
    <p class="hero__paragraphe">Développeur web et jeux video 3D/VR</p>
    <p class="hero__paragraphe">(Étudiant)</p>
    <div class="hero__button">
        <button class="hero__button--blue">Télécharger mon CV</button>
        <button class="hero__button--white">Contactez-moi</button>
    </div>
</div>
</template>
<style lang="scss">
.hero {
    margin-top: 10rem;

    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    // padding: 33px;
    &__title{
        font-size: $giant;
        font-weight: bold;

        &--blue{
            font-size: $giant;
            font-weight: bold;
            color: $primary;

        }
    }
    &__paragraphe{
        font-size: $big;
    }
    &__button{
        margin-top: 2rem;
        display: flex;
        flex-flow: row wrap;
        gap: 2rem;
        text-decoration: none;
        button {
            border: none;
            font-size: $regular;
            font-weight: bold;
            border-radius: 15px;
            padding: 1rem;
        }
        &--blue {
            color: $white;
            background-color: $primary;

        
        }
        &--white {
            color: $primary;
            background-color: $white;
       
        }
    }
}


</style>