<template>
    <HeaderComponent />
    <div class="text-container">
        <p class="text">Olá! Veja os amigos disponíveis para a adoção</p>
    </div>
    <CardComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import CardComponent from "@/components/CardComponent.vue";

export default defineComponent({
    name: 'AnimaisView',
    components: {
        HeaderComponent,
        CardComponent

    }
})
</script>

<style scoped>
.text-container {
    padding: 24px 67px;
    margin-top: 152px;
}

.text {
    color: #3772FF;
    font-size: 16px;
    text-align: center;
    line-height: 21px;
}
</style>