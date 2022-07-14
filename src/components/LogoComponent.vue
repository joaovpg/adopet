<template>
    <div class="logo-container">
        <img class="logo" alt="Imagem da logo do Adopet" src="@/assets/logo/Logo-azul.svg">
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'LogoComponent',

})
</script>

<style scoped>
.logo-container {
    display: flex;
    justify-content: center;
}

.logo {
    width: 142px;
}
</style>