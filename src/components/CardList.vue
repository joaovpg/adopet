<template>
    <div class="card-container">
        <CardComponent img="AnimaisLua.png" name="Lua" age="3 meses" type="Porte pequeno" behavior="Ativa e carinhosa"
            city="Rio de Janeiro(RS)" />

        <CardComponent img="AnimaisSid.png" name="Paulinha" age="2 anos" type="Porte pequeno"
            behavior="Ativa e não carinhosa" city="Rio de Janeiro(RS)" />

        <CardComponent img="AnimaisLua.png" name="Lua" age="3 meses" type="Porte pequeno" behavior="Ativa e carinhosa"
            city="Rio de Janeiro(RS)" />

        <CardComponent img="AnimaisSid.png" name="Paulinha" age="2 anos" type="Porte pequeno"
            behavior="Ativa e não carinhosa" city="Rio de Janeiro(RS)" />

        <CardComponent img="AnimaisLua.png" name="Lua" age="3 meses" type="Porte pequeno" behavior="Ativa e carinhosa"
            city="Rio de Janeiro(RS)" />

        <CardComponent img="AnimaisSid.png" name="Paulinha" age="2 anos" type="Porte pequeno"
            behavior="Ativa e não carinhosa" city="Rio de Janeiro(RS)" />

        <CardComponent img="AnimaisLua.png" name="Lua" age="3 meses" type="Porte pequeno" behavior="Ativa e carinhosa"
            city="Rio de Janeiro(RS)" />
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
</style>