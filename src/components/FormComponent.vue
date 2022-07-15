<template>
    <div class="input-container">
        <label class="label">{{ title }}</label>
        <input class="input" :type="input" :placeholder="msg">
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'FormComponent',
    props: {
        title: {
            type: String,
        },
        input: {
            type: String,
            default: 'text'
        },
        msg: {
            type: String,
        },
    }
})

</script>

<style>
.input-container {
    padding: 0 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
     
}

.label {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    display: flex;
    align-items: center;

    color: #3772FF;
    margin-bottom: 8px;
}

.input {
    background-color: #F6F6F6;
    border: none;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    color: #BCBCBC;
    display: block;
    font-size: 12px;
    height: 48px;
    outline: 0;
    padding: 8px 0;
    text-align: center;
    width: 100%;
}
</style>
