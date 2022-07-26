<template>
    <div class="card-container">
        <CardComponent :key="pet.id" :img="id" :name="name" :age="age" :type="type" :behavior="behavior" :city="city" />
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
                .get("http://localhost:3000/pets")
                .then((response) => {
                    this.pets = response.data.pets
                })
                .catch((error) => {
                    console.log(error)
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