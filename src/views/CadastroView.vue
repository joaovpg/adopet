<template>
    <header-component />
    <LogoComponent class="logo-component" />
    <div class="text-container">
        <TextComponent text="Ainda não tem cadastro?" />
        <TextComponent text="Então, antes de buscar seu melhor amigo, precisamos de alguns dados:" />
    </div>
    <section>
        <form>
            <InputComponent title="E-mail" msg="Escolha seu melhor e-mail" />
            <InputComponent title="Nome" msg="Digite seu nome completo" />
            <InputComponent title="Senha" input="password" msg="Insira seu senha" />
            <InputComponent title="Confirma sua senha" input="password" msg="Repita a senha criada acima" />
            <BtnComponent class="botao" link="/animais" msg="Cadastrar" />
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
import LogoComponent from "@/components/LogoComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import BlobComponent from "@/components/BlobComponent.vue";
import TextComponent from "@/components/TextComponent.vue";


export default defineComponent({
    name: "CadastroView",
    components: {
        HeaderComponent,
        InputComponent,
        BtnComponent,
        LogoComponent,
        FooterComponent,
        BlobComponent,
        TextComponent
    }
})

</script>

<style scoped>
body {
    background-color: none;
}

.logo-component {
    margin-top: 156px;
}

.text-container {
    padding: 24px;
}

.botao {
    margin-top: 4px;
}

.footer {
    margin-top: 106px;
}
</style>