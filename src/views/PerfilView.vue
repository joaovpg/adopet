<template>
    <HeaderComponent :usuario="true" />
    <main class="mensagem-container">
        <div class="text-container">
            <TextComponent text="Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem." />
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
                <div class="btn-container">
                    <BtnComponent msg="Salvar" />
                </div>
            </form>
        </section>
    </main>
    <BlobComponent />
    <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormComponent from "@/components/FormComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import BtnComponent from "@/components/BtnComponent.vue";
import TextComponent from "@/components/TextComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import BlobComponent from "@/components/BlobComponent.vue";

export default defineComponent({
    name: 'PerfilView',
    components: {
        FormComponent,
        BtnComponent,
        HeaderComponent,
        TextComponent,
        FooterComponent,
        BlobComponent
    }
})
</script>

<style scoped>
.mensagem-container {
    max-width: 548px;
    margin: 100px auto 16px auto;
    padding: 0 24px;
}

.text-container {
    padding: 0 33px;
    margin-bottom: 24px;
}

.form-container {
    background: #F7F7F7;
    border-radius: 10px;
    padding: 32px 16px;
}

.input-container {
    margin-bottom: 16px;
}

.input-container:last-child {
    margin-bottom: 32px;
}

.btn-container {
    max-width: 164px;
    margin: 0 auto;

}

@media screen and (min-width: 768px) {
    .mensagem-container {
        max-width: 524px;
        margin: 185px auto 32px auto;
        padding: 0;
    }

    .text-container {
        padding: 0;
        margin-bottom: 32px;
    }

}

@media screen and (min-width: 1440px) {
    .mensagem-container {
        max-width: 552px;
        margin: 86px auto 32px auto;
        padding: 0;
    }

    .form-container {
        padding: 32px 30px;
    }
}
</style>