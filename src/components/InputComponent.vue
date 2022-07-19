<template>
    <div class="input-container">
        <label class="label">{{ title }}</label>
        <input class="input" :type="input" :placeholder="msg">
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'InputComponent',
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

<style scoped>
.input-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.label {
    color: #737380;
    text-align: center;
    font-size: 16px;
    margin-bottom: 4px;
    line-height: 24px;
}

.input {
    font-family: 'Poppins', sans-serif;
    color: #BCBCBC;
    background-color: #F6F6F6;
    border: none;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    color: #BCBCBC;
    font-size: 12px;
    line-height: 24px;
    outline: 0;
    padding: 8px 0;
    text-align: center;
    width: 100%;
}

@media screen and (min-width: 768px) {
    .label {
        font-size: 18px;
        margin-bottom: 8px;
    }

    .input {
        font-size: 14px;
    }
}

@media screen and (min-width: 1440px) {
    .label {
        font-weight: 600;
    }

    .input {
        font-size: 16px;
    }
}
</style>
