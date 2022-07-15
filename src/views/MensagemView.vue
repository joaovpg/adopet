<template>
    <!-- <HeaderComponent /> -->
    <section>
        <form>
            <FormComponent title="Nome" msg="Insira seu nome completo" />
            <FormComponent title="Telefone" msg="Insira seu telefone e/ou whatsapp" />
            
        </form>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import FormComponent from "@/components/FormComponent.vue";
    import HeaderComponent from "@/components/HeaderComponent.vue";
    
    export default defineComponent({
        name: 'MensagemView',
        components: {
            FormComponent,
            // HeaderComponent
        }
    })
</script>

<style scoped>

</style>