<script setup>
import { ref, onMounted } from 'vue';
import myBarre from './svg/myBarre.vue';

const animateBars = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateBars.value = true;
            observer.disconnect();
        }
    }, { threshold: 0.5 });

    observer.observe(document.querySelector('.competence__listcard'));
});
</script>

<template>
<div class="competence">
    <h2 class="competence__title">Mes compétences</h2>
    <div class="competence__listcard">
        <div class="competence__card">
            <h3 class="competence__card--title">Frontend</h3>
            <div class="competence__card--column">
                <div class="competence__card--flex">
                    <p>HTML</p>
                    <myBarre :width="180" :animate="animateBars"/>
                </div>
                <div class="competence__card--flex">
                    <p>CSS</p>
                    <myBarre :width="180" :animate="animateBars"/>
                </div>
                <div class="competence__card--flex">
                    <p>Javascript</p>
                    <myBarre :width="180" :animate="animateBars"/>
                </div>
                <div class="competence__card--flex">
                    <p>VueJS</p>
                    <myBarre :width="160" :animate="animateBars"/>
                </div>
                <div class="competence__card--flex">
                    <p>NuxtJS</p>
                    <myBarre :width="140" :animate="animateBars"/>
                </div>
                <div class="competence__card--flex">
                    <p>Quasar</p>
                    <myBarre :width="120" :animate="animateBars"/>
                </div>
                <div class="competence__card--flex">
                    <p>ThreeJS</p>
                    <myBarre :width="120" :animate="animateBars"/>
                </div>
            </div>
        </div>
        <div class="competence__card">
            <h3 class="competence__card--title">Backend</h3>
            <div class="competence__card--column">
                <div class="competence__card--flex">
                    <p>NodeJS</p>
                    <myBarre :width="160" :animate="animateBars"/>
                </div>
                <div class="competence__card--flex">
                    <p>AdonisJS</p>
                    <myBarre :width="120" :animate="animateBars"/>
                </div>
                <div class="competence__card--flex">
                    <p>PHP</p>
                    <myBarre :width="100" :animate="animateBars"/>
                </div>
            </div>
        </div>
        <div class="competence__card">
            <h3 class="competence__card--title">DataBase</h3>
            <div class="competence__card--column">
                <div class="competence__card--flex">
                    <p>MySQL</p>
                    <myBarre :width="140" :animate="animateBars"/>
                </div>
                <div class="competence__card--flex">
                    <p>Firebase</p>
                    <myBarre :width="120" :animate="animateBars"/>
                </div>
                <div class="competence__card--flex">
                    <p>Supabase</p>
                    <myBarre :width="120" :animate="animateBars"/>
                </div>
            </div>
        </div>
        <div class="competence__card">
            <h3 class="competence__card--title">Developpement Mobile</h3>
            <div class="competence__card--column">
                <div class="competence__card--flex">
                    <p>Flutter</p>
                    <myBarre :width="80" :animate="animateBars"/>
                </div>
                <div class="competence__card--flex">
                    <p>Dart</p>
                    <myBarre :width="80" :animate="animateBars"/>
                </div>
                <div class="competence__card--flex">
                    <p>Swift</p>
                    <myBarre :width="80" :animate="animateBars"/>
                </div>
            </div>
        </div>
        <div class="competence__card">
            <h3 class="competence__card--title">Developpement 3D/VR</h3>
            <div class="competence__card--column">
                <div class="competence__card--flex">
                    <p>Unreal Engine </p>
                    <myBarre :width="120" :animate="animateBars"/>
                </div>
                <div class="competence__card--flex">
                    <p>Blueprint</p>
                    <myBarre :width="120" :animate="animateBars"/>
                </div>
                <div class="competence__card--flex">
                    <p>Unity</p>
                    <myBarre :width="140" :animate="animateBars"/>
                </div>
                <div class="competence__card--flex">
                    <p>C#</p>
                    <myBarre :width="140" :animate="animateBars"/>
                </div>
                <div class="competence__card--flex">
                    <p>3ds Max</p>
                    <myBarre :width="120" :animate="animateBars"/>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style lang="scss">
.competence {
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
    &__listcard{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr; 
        gap: 2rem; 
        width: 80%; 
    }
    &__card{
        background-color: $secondary;
        border-radius: 20px;
        padding-top: 1rem;
        padding-bottom: 1rem;
        &--title{
            text-align: center;
            font-weight: bold;
            margin: 10px;
            font-size: $medium;
        }
        &--column{    
            display: flex;
            flex-flow: column;
            align-items: center;
        }
        &--flex{
            display: grid;
            grid-template-columns: 0.6fr 0.6fr ; 
            margin: 10px;
        }
    }
}


</style>