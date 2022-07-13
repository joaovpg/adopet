<template>
    <div class="card-container">
        <div class="card">
            <div class="imgBox">
                <!-- <img class="img" src="@/assets/animais/AnimaisLua.png"> -->
                <img class="img" :src="resolve_img_url(img)" />
           </div>
            <div class="content">
                <p class="name">{{name}}</p>
                <p>{{age}}</p>
                <p>{{type}}</p>
                <p>{{behavior}}</p>

                <div class="local">
                    <p>{{city}}</p>
                    <p>
                        <img src="@/assets/animais/IconeMensagem.png">
                        Falar com responsável
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: 'CardComponent',
    props: {
        img: {
            type: String,
        },
        name: {
            type: String,
        },
        age: {
            type: String,
        },
        type: {
            type: String,
        },
        behavior: {
            type: String,
        },
        city: {
            type: String,
        }
    },
    methods: {
        resolve_img_url: function (path: any) {
      let images = require.context('../assets/animais/', false, /\.png$|\.jpg$/)
      return images("./"+path)
    },
}})
</script>

<style scoped>
.card-container {

    /* background-color: #F6F6F6;
    height: 196px;
    width: 100%; */

    position: relative;
    width: 100%;
    height: 196px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 16px;
}


.card-container .card {
    position: relative;
    background-color: #F6F6F6;
    padding: 16px;
    display: flex;
}

.card{
    width: 100%;
}


.card-container .card .imgBox {
    max-width: 148px;
    flex: 0 0 148px;
}

.card-container .card .imgBox img {
    max-width: 100%;

}

.card-container .card .content {
    margin-left: 16px;
}

p {
    display: flex;
    align-items: center;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #737380;
}

.name {
    width: 154px;
    height: 24px;
    margin-bottom: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    display: flex;
    align-items: center;

    color: #3772FF;

}

.local {
    margin-top: 30px;
}

.local p:first-child {
    font-size: 12px;
    margin-bottom: 7px;
    
}

.local p:last-child{
    font-size: 10px;
    
}

.local img {
    margin-right: 6px;
}
</style>