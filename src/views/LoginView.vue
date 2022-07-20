<template>
    <header-component />
    <main class="login-container">
        <LogoComponent />
        <div class="text-container">
            <TextComponent text="Já tem conta? Faça seu login:" />
        </div>
        <section>
            <form>
                <div class="form-container">
                    <InputComponent title="E-mail" msg="Insira seu email" />
                    <div class="password-container">
                        <InputComponent title="Senha" input="password" msg="Insira seu senha" />
                        <!-- Componente Redirect em Testes -->
                        <!-- <RedirectComponent link="#/cadastro" texto="Esqueceu a senha?" /> -->
                    </div>
                    <div class="btn-container">
                        <BtnComponent link="/animais" msg="Entrar" />
                    </div>
                </div>
            </form>
        </section>
    </main>
    <BlobComponent />
    <PawsComponent />
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
import PawsComponent from "@/components/PawsComponent.vue";


export default defineComponent({
    name: "LoginView",
    components: {
        HeaderComponent,
        InputComponent,
        BtnComponent,
        LogoComponent,
        // RedirectComponent,
        FooterComponent,
        BlobComponent,
        TextComponent,
        PawsComponent
    }
})

</script>

<style scoped>
.login-container {
    max-width: 368px;
    margin: 87px auto 247px auto;
    padding: 24px;
}

.text-container {
    margin: 56px 0 42px 0;
    width: 100%;
}

.form-container div {
    margin-bottom: 24px;
}

.btn-container {
    padding: 0 82px;
}

@media screen and (min-width: 768px) {
    .login-container {
        max-width: 344px;
        margin: 156px auto 434px auto;
        padding: 0;
    }

    .text-container {
        margin: 40px 0;
    }

    .form-container div:last-child {
        margin-bottom: 40px;
    }
}

@media screen and (min-width: 1440px) {
    .login-container {
        max-width: 552px;
        margin: 36px auto 352px auto;
    }

    .text-container {
        margin: 64px 0 72px 0;
    }

    .password-container {
        max-width: 362px;
        margin: 0 auto;
    }

    .form-container div:last-child {
        margin-bottom: 32px;
    }

    .btn-container {
        max-width: 362px;
        padding: 0 96px;
        margin: 0 auto;
    }
}
</style>