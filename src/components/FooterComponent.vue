<template>
    <footer class="container">
        <p class="footer-copyright">2022 - Desenvolvido pela dupla João e Talison</p>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: 'FooterComponent',
})
</script>

<style scoped>
.container {
    margin-top: 100px;
    position: relative;
    background-color: #36D6AD;
    padding: 40px;
    width: 100%;

}

.footer-copyright {
    color: #FFF;
    font-size: 16px;
    text-align: center;
}

@media screen and (min-width: 1440px) {
    .container {
        padding: 30px;
    }
}
</style>