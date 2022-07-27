<template>
    <main class="catalogo-container">
        <div class="text-container">
            <TextComponent text="Olá! Veja os amigos disponíveis para a adoção" />
        </div>
        <CardList />
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextComponent from "@/components/TextComponent.vue";
import CardList from "@/components/CardList.vue";

export default defineComponent({
    name: 'CatalogoAnimaisView',
    components: {
        TextComponent,
        CardList
    }
})
</script>

<style scoped>
.catalogo-container {
    margin: 82px 0 44px 0;
}

.text-container {
    margin-bottom: 32px;
    padding: 0 62px;
}

.footer-container {
    margin-top: calc(60px - 16px);
}

@media screen and (min-width: 768px) {
    .catalogo-container {
        margin-top: 188px;
    }

}

@media screen and (min-width: 1440px) {
    .catalogo-container {
        margin-top: 102px;
    }

    .text-container {
        margin-bottom: 40px;
    }

}
</style>