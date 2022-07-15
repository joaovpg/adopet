<template>
    <div class="paws"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'PawsComponent',
})
</script>

<style>
.paws {
    width: 190px;
    height: 244px;
    background-image: url('@/assets/animais/Patas.svg');
    background-repeat: no-repeat;
    background-size: 190px;
    position: absolute;
    top: 0;
    right: 0;
    background-position: 68px -30px;
}

@media screen and (min-width: 768px) {
    .paws {
        width: 292px;
        background-position: 70px -50px;
        background-size: 292px;
    }
}

@media screen and (min-width: 1440px) {
    .paws {
        width: 318px;
        height: 318px;
        background-position: 70px -50px;
        background-size: 318px;
    }
}
</style>