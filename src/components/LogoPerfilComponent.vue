<template>



    <template v-if="logado === true">
        <img :class="estilo" src="../assets/header/logado.jpg">
    </template>

    <template v-else>
        <img :class="estilo" src="../assets/header/Usuario.png">
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
    },
    data(){
        return{
            estilo: 'icon'
        }
    }
})

</script>

<style scoped>
.icon{
    width: 40px;
    height: 40px;
    border-radius: 40px;
}

.icon-perfil{
    width: 80px;
    height: 80px;
    border-radius: 40px;
}
</style>