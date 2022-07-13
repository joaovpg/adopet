<template>
    <header>
        <nav>
            <div class="nav-container">
                <a href="#" class="nav-icons">
                    <img src="@/assets/header/Casa.svg">
                </a>
                <a href="#" class="nav-icons">
                    <img src="@/assets/header/Mensagens.svg">
                </a>
            </div>
            <div>
                <a href="#">
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
header {
    position: fixed;
    width: 100%;
    top: 0;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 24px;
    width: 100%;
    height: 295px;
    background-image: url('@/assets/header/Forma1.svg');
    background-repeat: no-repeat;
}

.nav-container {
    display: flex;
    justify-content: start;
    align-items: start;
    padding: 0 24px;
}

.nav-icons {}

.nav-icons:last-child {
    margin-left: 56px;
}
</style>