<template>
    <header class="header-container">
        <div class="blob-container"></div>
        <nav>
            <div class="nav-container">
                <a href="#" class="nav-icons">
                    <img class="logo" src="@/assets/logo/Logo.svg">
                </a>
                <a href="#" class="nav-icons">
                    <img src="@/assets/header/Casa.svg">
                </a>
                <a href="#" class="nav-icons">
                    <img src="@/assets/header/Mensagens.svg">
                </a>
            </div>
            <div>
                <a href="#" class="isLoggedIn">
                    <img src="@/assets/header/Usuario.png" width="40px">
                </a>
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HeaderComponent'
});
</script>

<style scoped>
.blob-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 295px;
    background-image: url('@/assets/header/Forma1.svg');
    background-repeat: no-repeat;
    z-index: -1;
}

.header-container {
    width: 100%;
    top: 0;
    margin: 0 auto;
    max-width: 1120px;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 48px;
    margin-left: 48px;
}

.logo {
    width: 128px;
    display: none;
}

.nav-container {
    display: flex;
    justify-content: start;
    align-items: center;
    padding-bottom: 0;
}

.nav-icons {
    margin-right: 56px;
}

.nav-icons:first-child {
    margin-right: 0;
}

.isLoggedIn {
    display: none;
}

@media screen and (min-width: 768px) {
    nav {
        margin-top: 64px;
    }

    .blob-container {
        height: 470px;
        background-size: 560px 470px;
    }

    .logo {
        display: block;
    }

    .nav-icons:first-child {
        margin-right: 56px;
    }

}

@media screen and (min-width: 1440px) {
    nav {
        margin-left: 0;
    }

    .nav-container {
        padding: 0;
    }

}
</style>