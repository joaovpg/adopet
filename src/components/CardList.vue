<template>
    <div class="card-container">
        <CardComponent v-for="(item, index) in pets" :key="index" :img="item.img_address" :name="item.name"
            :age="item.age" :type="item.type" :behavior="item.behavior" :city="item.city" />
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
            pets: {}
        }
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
    },
    mounted() {
        this.listCards();
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