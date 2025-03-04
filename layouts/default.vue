<template>
    <div>
        <header class="layout__header">
          <LayoutMyHeader />
        </header>
        
        <article class="layout__article">
            <NuxtPage/>
        </article>
        <footer class="layout__footer">
         <LayoutMyFooter/>
        </footer>
    </div>
  </template>
  <style lang="scss">
    .layout{
        &__header{
        position: absolute;
        position: fixed;
        top: 0px;
        width: 100%;
        }

    }


  
  
  </style>