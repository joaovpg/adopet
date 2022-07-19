<template>
    <HeaderComponent :usuario="true" />
    <main class="mensagem-container">
        <div class="text-container">
            <TextComponent class="titulo"
                text="Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem." />
        </div>
        <section class="form-container">
            <form>
                <div class="input-container">
                    <FormComponent title="Nome" msg="Joana Magalhães" />
                    <FormComponent title="Telefone" msg="55 11 xxxxx xxxx" />
                    <FormComponent title="Cidade" msg="São Paulo" />
                    <FormComponent :textArea="true" title="Sobre" 
                    msg="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati." />
                </div>
                <div class="input-area">
                    <BtnComponent class="botao" msg="Salvar" />
                </div>
            </form>
        </section>
    </main>
    <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormComponent from "@/components/FormComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import BtnComponent from "@/components/BtnComponent.vue";
import TextComponent from "@/components/TextComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
    name: 'PerfilView',
    components: {
        FormComponent,
        BtnComponent,
        HeaderComponent,
        TextComponent,
        FooterComponent
    }
})
</script>

<style scoped>

.mensagem-container{
    max-width: 360px;
}

.text-container{
    /* margin-top: 168px; */
    width: 226px;
    margin: 100px 67px auto;
}

.form-container {
    display: flex;
    background: #F7F7F7;
    /* background: red; */
    border-radius: 10px;
    margin: 24px;
    padding: 32px 16px;
}

.form-container form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.input-container{
    width: 100%;
}




.botao {
    margin-top: 32px;
    width: 148px;

}
</style>