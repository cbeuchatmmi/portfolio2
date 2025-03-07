<template>
  <div>
      <header class="layout__header">
        <LayoutMyHeader v-if="!isProjectPage" />
      </header>
      
      <article class="layout__article">
          <NuxtPage/>
      </article>
      <footer class="layout__footer">
       <LayoutMyFooter/>
      </footer>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isProjectPage = ref(route.path.startsWith('/projet/'));

watch(route, (newRoute) => {
  isProjectPage.value = newRoute.path.startsWith('/projet/');
});
</script>

<style lang="scss">
.layout {
  &__header {
      position: fixed;
      top: 0px;
      width: 100%;
  }
}
</style>