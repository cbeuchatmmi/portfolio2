<script setup lang="ts">
import MyHero from '~/components/myHero.vue';
import MyCompetence from '~/components/myCompetence.vue';

</script>

<template>
    <div>
        <section id="myHero">
            <MyHero/>
        </section>
        <section id="myAbout">
            <MyAbout/>
        </section>
        <section id="myCompetence">
            <MyCompetence/>
        </section>
        <section id="myProjet">
            <MyProjet/>
        </section>
        <section id="myContact">
            <MyContact/>
        </section>
    </div>
</template>
