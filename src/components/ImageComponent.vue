<template>
    <div class="image-container">
        <img src="@/assets/home/ilustracao.png">
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'ImageComponent',
})
</script>

<style scoped>
.image-container {

    display: flex;
    justify-content: center;
    width: 100%;
    margin: 24px 0 -24px;
}

img {
    z-index: -1;
}
</style>