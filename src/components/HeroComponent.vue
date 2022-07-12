<template>
    <section class="hero">
        <div>
            <img class="hero-logo" src="@/assets/logo/Logo.svg">
        </div>
        <div class="text-container">
            <h1 class=" hero-title">Boas-vindas!</h1>
            <p class="hero-text">Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'HeroComponent',
})
</script>

<style scoped>
.hero {
    margin: 0 auto 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;
}

.hero-logo {
    margin: 168px auto 24px;
}

.text-container {
    padding: 0 56px;
}

.hero-title {
    text-align: center;
    margin-bottom: 24px;
}

.hero-text {
    text-align: center;
    margin-bottom: 24px;
}
</style>
