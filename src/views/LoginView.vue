<template>
    <header-component />
    <LogoComponent class="logo" />
    <div class="title">
        <TextComponent text="Já tem conta? Faça seu login:" />
    </div>
    <section class="formulario">
        <form>
            <InputComponent title="E-mail" msg="Insira seu email" />
            <InputComponent title="Senha" input="password" msg="Insira seu senha" />
            <!-- Componente Redirect em Testes -->
            <RedirectComponent link="#/cadastro" texto="Esqueceu a senha?" />
            <BtnComponent link="/animais" msg="Entrar" />
        </form>
    </section>
    <BlobComponent />
    <FooterComponent class="footer" />
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
import TextComponent from "@/components/TextComponent.vue";


export default defineComponent({
    name: "LoginView",
    components: {
        HeaderComponent,
        InputComponent,
        BtnComponent,
        LogoComponent,
        RedirectComponent,
        FooterComponent,
        BlobComponent,
        TextComponent
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

.logo {
    margin-top: 156px;
    width: 100%;
}

.footer {
    margin-top: 247px;
}
</style>