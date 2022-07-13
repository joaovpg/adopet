<template>
    <header-component />
    <section class="formulario">
        <form>
            <div class="campos">
                <InputComponent title="E-mail" msg="Insira seu email" />
                <InputComponent title="Senha" input="password" msg="Insira seu senha" />
            </div>
            <div>
                <BtnComponent link="/animais" msg="Entrar" />
            </div>

        </form>
    </section>
    <!-- <BlobComponent /> -->
    <!-- <FooterComponent /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import BtnComponent from "@/components/BtnComponent.vue";
import BlobComponent from "@/components/BlobComponent.vue";


export default defineComponent({
    name: "LoginView",
    components: {
        HeaderComponent,
        InputComponent,
        BtnComponent,
        // BlobComponent
    }
})

</script>

<style scoped>
</style>