<template>
    <section class="hero">
        <div>
            <img class="hero-logo" src="@/assets/logo/Logo.svg">
        </div>
        <div class="text-container">
            <h1 class="hero-title">Boas-vindas!</h1>
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

.text-container {
    text-align: center;
}

.hero-title {
    margin-top: 0;
    line-height: 48px;
    font-size: 26px;
    font-weight: 500;
}

.hero-text {
    margin-top: 16px;
    max-width: 400px;
    line-height: 24px;
}


@media screen and (min-width: 768px) {
    .hero {
        margin-bottom: 38px;
    }

    .hero-logo {
        margin: 274px auto 40px;
        width: 252px;
    }

    .hero-title {
        line-height: 48px;
        font-size: 28px;
    }

    .hero-text {
        margin-top: 24px;
        line-height: 26px;
        font-size: 18px;
    }
}
</style>
