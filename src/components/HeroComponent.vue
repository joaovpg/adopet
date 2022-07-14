<template>
    <section class="hero">
        <div>
            <img class="hero-logo" src="@/assets/logo/Logo.svg">
        </div>
        <div class="text-container">
            <h1 class="hero-text">Boas-vindas!</h1>
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
    width: 167px;
}

.hero-text {
    text-align: center;
    margin-top: 16px;
    max-width: 400px;
}

.hero-text:first-child {
    text-align: center;
    margin-top: 0;
}

@media screen and (min-width: 768px) {
    .hero-logo {
        margin-top: 270px;
    }
}
</style>
