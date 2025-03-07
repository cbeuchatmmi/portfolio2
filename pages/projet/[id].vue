<script setup>
import { useRoute, useRouter } from 'vue-router';
import MyArrow from '~/components/svg/myArrow.vue';
import projets from '~/data/projet.json';

const route = useRoute();
const router = useRouter();
const projet = projets[route.params.id];

console.log(projet)
</script>

<template>
    <div class="projet">
        <a href="/" class="link">
            <button class="link--button">
                <MyArrow/>
                <p>Retour</p>
            </button>
        </a>
        <h1 class="projet__title">{{ projet.title }}</h1>
        <img class="projet__img" :src="projet.imgSrc" alt="Image du projet">
        <div class="projet__content"> 
            <div class="projet__content--left">
                <h3 class="projet__content--left--title">Objectifs</h3>
                <p class="projet__content--left--description">{{ projet.objectif }}</p>
                <h3 class="projet__content--left--title">Solutions</h3>
                <p class="projet__content--left--description">{{ projet.solution }}</p>
            </div>
            <div class="projet__content--right">
                <h3>Détails du Projet</h3>
                <p class="projet__content--right--title">Client</p>
                <p class="projet__content--right--description">{{ projet.client }}</p>
                <p class="projet__content--right--title">Rôle</p>
                <p class="projet__content--right--description">{{ projet.role }}</p>
                <p class="projet__content--right--title">Technologie</p>
                <div class="card__content--list">
                    <p v-for="tech in projet.technologies" :key="tech">{{ tech }}</p>
                </div>
                <a v-if="projet.site !== 'none'" :href="projet.site" class="button">
                    <button class="button--blue">
                        <p>Voir le site</p>
                    </button>
                </a>
                <a v-if="projet.github !== 'none'" :href="projet.github" class="button">
                    <button class="button--white">
                        <p>Voir le code source</p>
                    </button>
                </a>
                <a v-if="projet.download !== 'none'" :href="projet.download" class="button">
                    <button class="button--blue">
                        <p>Télécharger le jeu</p>
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.projet {
    margin: 2rem;
    &__title {
        font-size: $giant;
        font-weight: bold;
        text-align: center;
        margin-bottom: 5rem;
    }
    &__content {
        display: grid;
        grid-template-columns: 70% 30%;
        &--left {
            &--title {
                font-size: $big;
                font-weight: bold;
                text-align: left;
                margin: 2rem;
            }
            &--description {
                font-size: $medium;
                margin: 3rem;
            }
        }
        &--right {
            border: 2px solid $white;
            border-radius: 15px;
            padding: 1rem;

            h3 {
                font-size: $big;
                font-weight: bold;
                text-align: center;
                margin: 2rem;
            }
            &--title {
                font-size: $medium;
                font-weight: bold;
                margin: 1rem;
            }
            &--description {
                font-size: $medium;
                margin: 1rem;
            }
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
    }
}
.link {
    text-decoration: none;
    margin: 1rem;
    &--button {
        display: flex;
        gap: 1rem;
        color: $white;
        background-color: $primary;
        font-size: $regular;
        font-weight: bold;
        border-radius: 15px;
        border: none;
        padding: 1rem;
    }
    :hover {
        background-color: $secondary;
    }
}

.button {
    width: 100%;
    text-decoration: none;
    :hover {
        background-color: $secondary;
    }
    &--blue {
        margin-top: 1rem;
        width: 100%;
        border: none;
        color: $white;
        background-color: $primary;
        font-size: $regular;
        font-weight: bold;
        border-radius: 15px;
        padding: 1rem;
        display: block;
    }
    &--white {
        margin-top: 1rem;
        width: 100%;
        border: none;
        color: $primary;
        background-color: $white;
        font-size: $regular;
        font-weight: bold;
        border-radius: 15px;
        padding: 1rem;
        display: block;
    }
}
</style>