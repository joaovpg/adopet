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
            <textarea class="textarea" :placeholder="msg"></textarea>
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
    /* padding: 0 24px; */
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
    /* background-color: #F6F6F6;
    border: none;
    mix-blend-mode: normal;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    color: #BCBCBC;
    display: block;
    font-size: 12px;
    height: 48px;
    outline: 0;
    padding: 8px 0;
    padding-left: 16px;
    text-align: center; 
    width: 100%;
    margin-bottom: 16px; */

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    display: flex;
    align-items: center;

    /* Cinza claro */

    color: #BCBCBC;

    border: none;
    mix-blend-mode: normal;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    color: #BCBCBC;
    display: block;
    font-size: 12px;
    height: 48px;
    outline: 0;
    padding: 8px 0;
    padding-left: 16px;
    margin-bottom: 16px;

}

.textarea {
    background: #FFFFFF;
    mix-blend-mode: normal;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    padding: 16px;
    height: 172px;
    outline: 0;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    display: flex;
    align-items: center;

    /* Cinza claro */

    color: #BCBCBC;


}
</style>
