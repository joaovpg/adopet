<template>
    <HeaderComponent />
    <div class="text-container">
        <TextComponent text="Olá! Veja os amigos disponíveis para a adoção" />
    </div>
    <CardList />
    <FooterComponent class="footer-container" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import TextComponent from "@/components/TextComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import CardList from "@/components/CardList.vue";

export default defineComponent({
    name: 'CatalogoAnimaisView',
    components: {
        HeaderComponent,
        TextComponent,
        FooterComponent,
        CardList
    }
})
</script>

<style scoped>
.text-container {
    margin: 82px 0 32px 0;
    padding: 0 62px;
}

.footer-container {
    margin-top: calc(60px - 16px);
}

@media screen and (min-width: 768px) {
    .text-container {
        margin: 188px 0 32px 0;
    }
}

@media screen and (min-width: 1440px) {
    .text-container {
        margin: 102px 0 40px 0;
    }

}
</style>