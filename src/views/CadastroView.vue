<template>
    <header-component />
    <main class="cadastro-container">
        <LogoComponent class="logo-component" />
        <div class="text-container">
            <TextComponent text="Ainda não tem cadastro?" />
            <TextComponent text="Então, antes de buscar seu melhor amigo, precisamos de alguns dados:" />
        </div>
        <section class="form-container">
            <form>
                <div class="input-container">
                    <InputComponent title="Nome" msg="Digite seu nome completo" />
                    <InputComponent title="E-mail" msg="Escolha seu melhor e-mail" />
                    <div class="password-container">
                        <InputComponent title="Senha" input="password" msg="Insira seu senha" />
                        <InputComponent title="Confirma sua senha" input="password" msg="Repita a senha criada acima" />
                    </div>
                </div>
                <div class="btn-container">
                    <BtnComponent link="/catalogo" msg="Cadastrar!" />
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
import LogoComponent from "@/components/LogoComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import BlobComponent from "@/components/BlobComponent.vue";
import TextComponent from "@/components/TextComponent.vue";
import PawsComponent from "@/components/PawsComponent.vue";


export default defineComponent({
    name: "CadastroView",
    components: {
        HeaderComponent,
        InputComponent,
        BtnComponent,
        LogoComponent,
        FooterComponent,
        BlobComponent,
        TextComponent,
        PawsComponent
    }
})

</script>

<style scoped>
.cadastro-container {
    margin: 87px auto;
    padding: 0 24px;
    max-width: 368px;
}

.text-container {
    margin: 24px 0;
}

.btn-container {
    padding: 0 82px;
}

.input-container div {
    margin-bottom: 20px;
}

.input-container div:last-child {
    margin-bottom: 24px;
}

.footer {
    margin-top: 106px;
}

@media screen and (min-width: 768px) {
    .cadastro-container {
        margin: 156px auto;
        padding: 0;
        max-width: 525px;
    }

    .text-container {
        margin: 40px 0;
    }

    .form-container {
        max-width: 344px;
        margin: 0 auto;
    }

    .input-container div {
        margin-bottom: 24px;
    }

    .input-container div:last-child {
        margin-bottom: 40px;
    }

    .footer {
        margin-top: 185px;
    }
}

@media screen and (min-width: 1440px) {
    .cadastro-container {
        margin: 36px auto;
        padding: 0;
        max-width: 552px;
    }

    .text-container {
        margin: 40px 0 48px 0;
    }

    .form-container {
        max-width: none;
    }

    .input-container div:last-child {
        margin-bottom: 32px;
    }

    .password-container {
        max-width: 362px;
        margin: 0 auto;
    }

    .btn-container {
        max-width: 362px;
        margin: 0 auto;
        padding: 0 95px;
    }

    .footer {
        margin-top: 156px;
    }
}
</style>