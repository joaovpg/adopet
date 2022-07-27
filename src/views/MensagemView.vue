<template>
    <main class="mensagem-container">
        <div class="text-container">
            <TextComponent class="titulo"
                text="Envie uma mensagem para a pessoa ou instituição que está cuidado do animal:" />
        </div>
        <section class="form-container">
            <form>
                <div class="input-container">
                    <FormComponent title="Nome" msg="Insira seu nome completo" />
                    <FormComponent title="Telefone" msg="Insira seu telefone e/ou whatsapp" />
                    <FormComponent title="Nome do animal" msg="Qual animal você se interessou?" />
                    <FormComponent :textArea="true" title="Mensagem" msg="Escreva sua mensagem" />
                </div>
                <div class="btn-container">
                    <BtnComponent class="botao" msg="Enviar" />
                </div>
            </form>
        </section>
    </main>
    <BlobComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormComponent from "@/components/FormComponent.vue";
import BtnComponent from "@/components/BtnComponent.vue";
import TextComponent from "@/components/TextComponent.vue";

export default defineComponent({
    name: 'MensagemView',
    components: {
        FormComponent,
        BtnComponent,
        TextComponent,
    }
})
</script>

<style scoped>
.mensagem-container {
    max-width: 548px;
    margin: 100px auto 0 auto;
    padding: 24px;
}

.text-container {
    margin: 0 auto 24px;
    padding: 0 24px;
}

.form-container {
    background: #F7F7F7;
    border-radius: 10px;
    padding: 32px 16px;
}

.input-container div {
    margin-bottom: 16px;
}

.input-container div:last-child {
    margin-bottom: 32px;
}

.btn-container {
    max-width: 164px;
    margin: 0 auto;
}

@media screen and (min-width: 768px) {
    .mensagem-container {
        max-width: 524px;
        margin: 185px auto 92px auto;
        padding: 0;
    }

    .text-container {
        margin-bottom: 40px;
        padding: 0;
    }

    .form-container {
        padding: 27px 30px;
    }

    .btn-container {
        max-width: 164px;
        margin: 0 auto;
    }
}

@media screen and (min-width: 1440px) {
    .mensagem-container {
        max-width: 552px;
        margin: 87px auto 36px;
        padding: 0;
    }

    .text-container {
        margin-bottom: 37px;
        padding: 0 24px;
    }
}
</style>