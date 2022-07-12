<template>
    <div class="input-container">
        <label>{{ title }}</label>
        <input class="input" :type="input" :placeholder="msg">
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'InputComponent',
    props: {
        msg: {
            type: String,           
        },
        title: {
            type: String,
        },
        input: {
            type: String,
            default: 'text'
        }
       
    }

})

</script>

<style>
.input {
    background-color: #F6F6F6;
    border: none;
    outline: 0;
    color: #BCBCBC;
    display: block;
    text-align: center;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    font-size: 12px;
    padding: 8px 0;
    width: 100%;
}

.input-container {
    padding: 0 24px;
    width: 100%;
}
</style>
