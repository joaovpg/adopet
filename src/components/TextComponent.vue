<template>
    <p class="text">{{ text }}</p>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'TextComponent',
    props: {
        text: {
            type: String,
            default: 'Insira seu texto aqui'
        }
    }

})
</script>

<style scoped>
.text {
    color: #3772FF;
    font-size: 16px;
    text-align: center;
    line-height: 20px;
}

@media screen and (min-width: 768px) {
    .text {
        font-size: 18px;
    }
}
</style>