<template>
    <div class="card-container">
        <CardComponent img="AnimaisLua.png" name="Lua" age="3 meses" type="Porte pequeno" behavior="Ativa e carinhosa"
            city="Rio de Janeiro(RJ)" />

        <CardComponent img="AnimaisSid.png" name="Paulinha" age="2 anos" type="Porte pequeno"
            behavior="Ativa e não carinhosa" city="Rio de Janeiro(RJ)" />

        <CardComponent img="AnimaisLua.png" name="Lua" age="3 meses" type="Porte pequeno" behavior="Ativa e carinhosa"
            city="Rio de Janeiro(RJ)" />

        <CardComponent img="AnimaisSid.png" name="Paulinha" age="2 anos" type="Porte pequeno"
            behavior="Ativa e não carinhosa" city="Rio de Janeiro(RJ)" />

        <CardComponent img="AnimaisLua.png" name="Lua" age="3 meses" type="Porte pequeno" behavior="Ativa e carinhosa"
            city="Rio de Janeiro(RJ)" />

        <CardComponent img="AnimaisSid.png" name="Paulinha" age="2 anos" type="Porte pequeno"
            behavior="Ativa e não carinhosa" city="Rio de Janeiro(RJ)" />

        <CardComponent img="AnimaisLua.png" name="Lua" age="3 meses" type="Porte pequeno" behavior="Ativa e carinhosa"
            city="Rio de Janeiro(RJ)" />
        <CardComponent img="AnimaisSid.png" name="Paulinha" age="2 anos" type="Porte pequeno"
            behavior="Ativa e não carinhosa" city="Rio de Janeiro(RJ)" />

        <CardComponent img="AnimaisLua.png" name="Lua" age="3 meses" type="Porte pequeno" behavior="Ativa e carinhosa"
            city="Rio de Janeiro(RJ)" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardComponent from "./CardComponent.vue";

export default defineComponent({
    name: 'CardList',
    components: {
        CardComponent
    }
})
</script>

<style scoped>
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

@media screen and (min-width: 768px) {
    .card-container {
        padding: 0 32px 32px 32px;
        margin: 0 auto;
        max-width: 768px;
    }
}

@media screen and (min-width: 1440px) {
    .card-container {
        padding: 0;
        margin: 0 auto;
        max-width: 1120px;
    }
}
</style>