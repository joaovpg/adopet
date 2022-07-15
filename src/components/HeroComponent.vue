<template>
    <section class="hero">
        <div>
            <img class="hero-logo" src="@/assets/logo/Logo.svg">
        </div>
        <div class="text-container">
            <h1 class="hero-title">Boas-vindas!</h1>
            <p class="hero-text">Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!
            </p>
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
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;

}

.hero-logo {
    width: 187px;
}

.text-container {
    text-align: center;
    margin: 24px auto;
}

.hero-title {
    margin-top: 0;
    line-height: 48px;
    font-size: 26px;
    font-weight: 500;
}

.hero-text {
    margin-top: 16px;
    line-height: 24px;
}


@media screen and (min-width: 768px) {
    .hero-logo {
        width: 252px;
    }

    .text-container {
        margin: 40px 0 38px 0;
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

@media screen and (min-width: 1440px) {
    .hero {
        margin-bottom: 0;
    }

    .text-container {
        margin: 40px 0 32px 0;
    }


    .hero-logo {
        width: 260px;
    }
}
</style>
