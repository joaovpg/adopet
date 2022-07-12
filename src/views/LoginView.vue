<template>
    <header-component />
    <section class="formulario">
        <form>
            <div class="campos">
                <InputComponent title="E-mail" msg="Insira seu email" />
            </div>
            <div class="campos">
                
                <InputComponent title="Senha" input="password" msg="Insira seu senha" />
            </div>
            <div>
                <BtnHome msg="Entrar" />
            </div>
            
        </form>
    </section>
    <!-- <FooterComponent /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import BtnHome from "../components/BtnHome.vue";
import InputComponent from "@/components/InputComponent.vue";


export default defineComponent({
    name: "LoginView",
    components: { HeaderComponent, BtnHome, InputComponent }
})

</script>

<style scoped>
.formulario {
    width: 100%;
    background-color: #fff;
    position: absolute;
    top: calc(30% - 100px);
    
}

.campos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}


</style>