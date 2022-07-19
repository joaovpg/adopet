<template>

    <template v-if="logado === true">
        <img class="icon" src="../assets/header/logado.jpg">
    </template>

    <template v-else>
        <img class="icon" src="../assets/header/Usuario.png">
    </template>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'LogoPerfilComponent',
    props: {
        logado: {
            type: Boolean,
            default: false
        }
    }
})

</script>

<style scoped>
.icon{
    width: 40px;
    height: 40px;
    border-radius: 20px;
}
</style>