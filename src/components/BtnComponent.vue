<template>
    <button @click="$router.push(link)" class="btn" type="submit">{{ msg }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'BtnComponent',
    props: {
        link: {
            type: String,
            default: '/'
        },
        tamanho: {
            type: String,
        },
        msg: {
            type: String,
        },
    }

})
</script>

<style scoped>
.btn {
    background-color: #FC7071;
    color: #FFF;
    font-size: 16px;
    font-weight: 600;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border: none;
    padding: 8px 0;
    border-radius: 5px;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.1s;
    width: 100%;
}

.btn:hover {
    cursor: pointer;
    opacity: 0.9;

}

@media screen and (min-width: 768px) {
    .btn {
        font-size: 18px;
    }
}
</style>