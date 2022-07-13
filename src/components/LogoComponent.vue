<template>
    <div class="logo-container">
        <img class="logo" src="@/assets/logo/Logo-azul.svg">
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
    margin-top: 156px;
}

.logo {
    width: 142px;
}
</style>