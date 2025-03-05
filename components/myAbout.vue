<script setup>
import MyLine from './svg/myLine.vue';
import MyCircle from './svg/myCircle.vue';

</script>
<template>
<div class="about">
    <h2 class="about__title">À propos de moi</h2>
    <p class="about__paragraphe"></p>

    <div class="about__chrono">
        <div class="about__chrono__left">
            <h3 class="about__chrono__left--title">Études</h3>
            <div class="about__chrono__left--paragraphe">
                <p>2021-2024<br/> BUT Métiers du Multimédia et de l'internet <br/> IUT Nord Franche-Comté</p>
                <div class="about__chrono__left--paragraphe--svg">
                    <MyCircle/>
                    <MyLine :width="4" :height="550" :strokeWidth="4"/>
                </div>
            </div>
            <div class="about__chrono__left--paragraphe">
                <p>2024-2026 <br/> Master Technologie de l’information, Produits et Services Multimédia <br/>UFR STGI Belfort Montbéliard</p>
                <div class="about__chrono__left--paragraphe--svg">
                    <MyCircle/>
                    <MyLine :width="4" :height="100" :strokeWidth="4"/>
                </div>
            </div>
        </div>
        <div class="about__chrono__right">
            <h3 class="about__chrono__right--title">Expériences professionelles</h3>
            <div class="about__chrono__right--paragraphe">
                <p>2022-2023</p>
                <p>Développeur Web pour l'association universitaire Unified Champions.</p>
                <p>J'ai réalisé la première version du site web de l'association en Wordpress.</p>
            </div>
            <div class="about__chrono__right--paragraphe">
                <p>2023 </p>
                <p>Stage de deuxième année de MMI</p>
                <p>Développeur web au service informatique / developpement économique au Grand Belfort.</p>
                <p>J'ai réalisé une maquette de préfiguration en Vue.js pour le service développement économique.</p>
            </div>
            <div class="about__chrono__right--paragraphe">
                <p>2024 </p>
                <p>Stage de troisième année de MMI</p>
                <p>Développeur web dans l'agence web <a href="https://www.premiere.place">Première Place</a> au Km0 à Mulhouse.</p>
                <p>Réalisation d'une application de relation clientele en quasar et adonis.js.</p>
            </div>
     
        </div>
    </div>
</div>

</template>
<style lang="scss">
.about {
    margin-top: 10rem;

    display: flex;
    flex-flow: column;
    gap: 0.5rem;
    // padding: 33px;
    &__title{
        font-size: $giant;
        font-weight: bold;
        text-align: center;
    }
    &__paragraphe{
        font-size: $big;
    }
    &__chrono{
        display: grid;
        grid-template-columns: 50% 50%; // Définir deux colonnes
        gap: 2rem; // Espace entre les colonnes
        width: 100%; // S'assurer que la grille prend toute la largeur disponible
        
        &__left{
            font-size: $medium;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            align-items: center;
            &--title{
                font-weight: bold;
                margin-bottom: 5rem;
            }
            &--paragraphe{
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                width: 100%;
                &--svg{
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                }
                p{
                    margin-left: 5rem;
                }
            }


        }
        &__right{
            font-size: $medium;
            display: flex;
            flex-flow: column;
            align-items: left;
            &--title{
                font-weight: bold;
                text-align: center;
                margin-bottom: 5rem;
            }
            &--paragraphe{
                margin-top: 5rem;
                display: flex;
                flex-flow: column;
                p{
                    margin-top: 5px;
                }
            }
        }
    }
}


</style>