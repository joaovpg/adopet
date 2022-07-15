<template>
    <div class="blob"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'BlobComponent',
})
</script>

<style>
.blob {
    background-image: url('@/assets/Forma2.svg');
    background-repeat: no-repeat;
    width: 83px;
    height: 415px;
    position: absolute;
    right: 0;
    top: 25%;
    z-index: -1;
}

@media screen and (min-width: 778px) {
    .blob {
        width: 130px;
        height: 664px;
        background-size: 130px 664px;
        top: 20%;
    }
}
</style>