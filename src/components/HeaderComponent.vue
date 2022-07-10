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
    padding: 24px;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

}

.nav-container {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 24px;
}

.nav-icons {}

.nav-icons:last-child {
    padding-left: 60px;
}
</style>