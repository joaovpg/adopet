<template>
    <div class="card-container">
        <div>
            <img class="img" src="@/assets/animais/AnimaisLua.png">
        </div>
        <div>
            <p>Lua</p>
            <p>3 meses</p>
            <p>Porte pequeno</p>
            <p>Ativa e carinhosa</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: 'CardComponent',
    components: {

    }
})
</script>

<style scoped>
.card-container {

    background-color: #F6F6F6;
    height: 196px;
    width: 100%;

}

.img {
    width: 148px;
}
</style>