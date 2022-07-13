<template>
    <header-component />

    <section class="formulario">
        <LogoComponent />
        <div class="title">
            <p>Já tem conta? Faça seu login:</p>
        </div>

        <form>
            <div class="campos">

                <InputComponent title="E-mail" msg="Insira seu email" />
                <InputComponent title="Senha" input="password" msg="Insira seu senha" />
            </div>
            <div>


                <!-- Componente Redirect em Testes -->
                <RedirectComponent link="#/cadastro" texto="Esqueceu a senha?" />
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
import LogoComponent from "@/components/LogoComponent.vue";
import RedirectComponent from "@/components/RedirectComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";


export default defineComponent({
    name: "LoginView",
    components: {
        HeaderComponent,
        InputComponent,
        BtnComponent,
        LogoComponent,
        RedirectComponent,
        // FooterComponent

    }
})

</script>

<style scoped>
.title {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 56px;
    margin-bottom: 42px;
}

.title p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    display: flex;
    align-items: center;
    text-align: center;


    color: #3772FF;
}
</style>