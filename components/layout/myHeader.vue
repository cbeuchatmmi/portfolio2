<template>
    <div class="c-header">
        <h1 class="c-header__title">Portfolio</h1>

        <div class="c-header__div">
            <a href="https://github.com/cbeuchatmmi" class="c-header__div--link">
                <img src="/assets/Github.svg" alt="logo github" class="c-header__div--link--github">
            </a>
            <a href="https://www.linkedin.com/in/corentin-beuchat-593b91223/" class="c-header__div--link"> 
                <img src="/assets/LinkedIn.svg" alt="logo linkedIn" class="c-header__div--link--github">
            </a>
        </div>
    </div>
    <div class="c-menu">
        <nav class="c-menu__nav">
            <a href="#" class="c-menu__nav--link">
                <img src="/assets/home.svg" alt="logo home" class="c-menu__nav--link--home">
            </a>
            <a href="#" class="c-menu__nav--link">
                <img src="/assets/user.svg" alt="logo user" class="c-menu__nav--link--user">
            </a>
            <a href="#" class="c-menu__nav--link">
                <img src="/assets/book.svg" alt="logo book" class="c-menu__nav--link--book">
            </a>
            <a href="#" class="c-menu__nav--link">
                <img src="/assets/briefcase.svg" alt="logo briefcase" class="c-menu__nav--link--briefcase">
            </a>
            <a href="#" class="c-menu__nav--link">
                <img src="/assets/sms.svg" alt="logo sms" class="c-menu__nav--link--sms">
            </a>
        </nav>
    </div>
</template>

<style lang="scss">
.c-header {
    position : relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 33px;
    &__title{
        color: $primary;
        font-size: $big;
        font-weight: bold;
    }
    &__div{
        &--link{
            margin-left: 20px;
            &--github {
                width: 28px; 
                height: auto; 
            }
        }
    }
}

.c-menu{
    position : absolute;
    right: 4rem;
    top: 14rem;
    &__nav{
        background-color: $grey;
        padding: 1rem;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        gap: 1rem;
        border-radius: 500px;
    }
}



</style>