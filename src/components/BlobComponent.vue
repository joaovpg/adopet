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
    top: calc(50% - 210px);
    z-index: -1;
}
</style>