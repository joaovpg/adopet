<template>
    <div v-if="isLoggedIn()">
        <img class="icon" src="../assets/header/logado.jpg">
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'LogoPerfilComponent',
    methods: {
        isLoggedIn() {
            if (window.location.hash == '#/perfil' || window.location.hash == '#/mensagem' || window.location.hash == '#/catalogo') {
                return true;
            } else {
                return false
            }
        }
    }
})

</script>

<style scoped>
.icon {
    border-radius: 40px;
    width: 100%;
}
</style>