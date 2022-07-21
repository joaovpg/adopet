<template>

    <!-- 
    
    Ao adicionar a props "link" quando invocar o 
    componente utilizar # antes do /. Exemplo:
    <RedirectComponent link="#/cadastro" />
    
    -->

    <div class="a-container">
        <a :href="link">{{ texto }}</a>
    </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'RedirectComponent',

    props: {
        link: {
            type: String,
            default: '/'
        },
        texto: {
            type: String,
        }
    }
})
</script>

<style scoped>
.a-container {
    padding: 0 24px 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    font-style: normal;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    text-decoration: none;
    color: #FC7071;
    transition: cubic-bezier(0.23, 1, 0.320, 1) 0.5ms;
}

a:hover {
    opacity: 0.5;
}
</style>


