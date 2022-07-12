<template>
    <div class="btn-container">
        <input class="btn" type="input" :href="link" :min-width="tamanho" :value="msg">
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'BtnComponent',
    props: {
        tamanho: {
            type: String,
        },
        msg: {
            type: String,
        },
        link: {
            type: String,
        }
    }
})
</script>

<style scoped>
.btn-container {
    display: flex;
    width: 100%;
    justify-content: center;
}

.btn {
    background-color: #FC7071;
    color: #FFF;
    font-weight: bold;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border: none;
    padding: 16px 24px;
    border-radius: 5px;
    margin-bottom: 16px;
}
</style>