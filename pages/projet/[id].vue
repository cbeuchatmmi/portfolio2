<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MyArrow from '~/components/svg/myArrow.vue';
import projets from '~/data/projet.json';

const route = useRoute();
const router = useRouter();
const projet = projets[route.params.id];

const showLightbox = ref(false);
const lightboxMedia = ref(null);

const openLightbox = (media) => {
  lightboxMedia.value = media;
  showLightbox.value = true;
};

const closeLightbox = () => {
  showLightbox.value = false;
  lightboxMedia.value = null;
};
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
                <h3 class="projet__content--left--title" v-if="projet.solution">Solutions</h3>
                <p class="projet__content--left--description">{{ projet.solution }}</p>
            </div>
            <div class="projet__content--right">
                <h3>Détails du Projet</h3>
                <p class="projet__content--right--title">Cadre</p>
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
                <a v-if="projet.download !== 'none'" download :href="projet.download" class="button">
                    <button class="button--blue">
                        <p>Télécharger</p>
                    </button>
                </a>
            </div>
        </div>
    </div>
    <div class="carousel">
        <div v-for="(media, index) in projet.images" :key="index" class="carousel__item" @click="openLightbox(media)">
            <template v-if="media.type === 'image'">
              <img :src="media.src" alt="Image du projet" class="carousel__image" />
            </template>
        </div>
        <div v-if="projet.youtube" class="carousel__item">
            <iframe
                :src="projet.youtube"
                class="carousel__youtube"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    </div>
    <div v-if="showLightbox" class="lightbox" @click.self="closeLightbox">
        <div class="lightbox__content">
          <template v-if="lightboxMedia.type === 'image'">
            <img :src="lightboxMedia.src" alt="Image agrandie" class="lightbox__image" />
          </template>
          <template v-else-if="lightboxMedia.type === 'video'">
            <video controls autoplay class="lightbox__video">
              <source :src="lightboxMedia.src" type="video/mp4" />
            </video>
          </template>
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
    &__img {
        display: block; 
        margin: 0 auto; 
        max-width: 100%;
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
.carousel {
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    padding: 1rem;

    &__item {
        flex: 0 0 auto;
        width: 300px;
        height: 200px;
    }

    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        width: 300px;
        height: 200px;
    }
    &__youtube {
        aspect-ratio: 16 / 9; 
        height: 200px;

    }
}
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  &__content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
  }

  &__image,
  &__video {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }
}
</style>