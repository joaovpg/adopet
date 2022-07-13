<template>
    <header-component />
    <LogoComponent />
    <div class="text-container">
        <p class="text">Ainda não tem cadastro?</p>
        <p class="text">Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
    </div>
    <section class="formulario">
        <form>
            <InputComponent title="E-mail" msg="Escolha seu melhor e-mail" />
            <InputComponent title="Nome" msg="Digite seu nome completo" />
            <InputComponent title="Senha" input="password" msg="Insira seu senha" />
            <InputComponent title="Confirma sua senha" input="password" msg="Repita a senha criada acima" />
            <BtnComponent class="botao" link="/animais" msg="Cadastrar" />
        </form>
    </section>
    
    <!-- <BlobComponent /> -->
    <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import BtnComponent from "@/components/BtnComponent.vue";
import LogoComponent from "@/components/LogoComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import BlobComponent from "@/components/BlobComponent.vue";


export default defineComponent({
    name: "CadastroView",
    components: {
        HeaderComponent,
        InputComponent,
        BtnComponent,
        LogoComponent,
        FooterComponent,
        // BlobComponent
    }
})

</script>

<style scoped>
.text-container {
    padding: 24px;
}

.text {
    color: #3772FF;
    font-size: 16px;
    text-align: center;
    line-height: 21px;
}

.botao {
    margin-top: 4px;
    margin-bottom: 60px;
}
</style>