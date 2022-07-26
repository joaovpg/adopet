<template>
    <div class="card-container">
        <CardComponent v-for="pet in pets" :key="pet" img="Lua.png" name='pet.name' age="3 meses" type="Porte pequeno"
            behavior="Agressiva" city="Rio Janeiro (RJ)" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardComponent from "./CardComponent.vue";
import axios from 'axios'


export default defineComponent({
    name: 'CardList',
    components: {
        CardComponent
    },
    data() {
        return {
            pets: {},
        }
    },
    mounted() {
        this.listCards();
    },
    methods: {
        async listCards() {
            await axios
                .get("http://localhost:3000/pets/")
                .then((response) => {
                    this.pets = response.data
                    console.log("Deu certo?", this.pets)
                })
                .catch((error) => {
                    console.log("Erro: ", error)
                })
        }
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