<template>

    <template v-if="typeArea()">
        <div class="input-container">
            <label class="label">{{ title }}</label>
            <input class="input" :type="input" :placeholder="msg">

        </div>
    </template>

    <template v-else>
        <div class="input-container">
            <label class="label">{{ title }}</label>
            <textarea maxlength="256" class="textarea" :placeholder="msg"></textarea>
        </div>
    </template>



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
        textArea: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        typeArea() {
            return this.textArea === false
        }
    }
})

</script>

<style scoped>
.input-container {
    width: 100%;
    display: flex;
    flex-direction: column;

}

.label {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    color: #3772FF;
    margin-bottom: 8px;
}

.input {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    padding: 12px 16px;
    color: #BCBCBC;
    border: none;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    background-color: #FFFFFF;
    outline: 0;
}

.textarea {
    background-color: #FFFFFF;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    padding: 16px;
    outline: 0;
    min-height: 172px;
    font-family: 'Poppins';
    font-size: 14px;
    color: #BCBCBC;
}
</style>
