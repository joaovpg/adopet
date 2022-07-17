<template>
    <div class="card">
        <div class="card-row">
            <div class="imgBox">
                <img class="img" :src="resolve_img_url(img)" />
            </div>
            <div class="info">
                <h1 class="name">{{ name }}</h1>
                <p>{{ age }}</p>
                <p>{{ type }}</p>
                <p>{{ behavior }}</p>

                <div class="local">
                    <p>{{ city }}</p>
                    <a href="#" class="local-info">
                        <img src="@/assets/animais/IconeMensagem.png">
                        <p>Falar com responsável</p>
                    </a>
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
            return images("./" + path)
        },
    }
})
</script>

<style scoped>
.card {
    background-color: #F6F6F6;
    padding: 24px;
    margin: 0 auto 16px auto;
    max-width: 360px;
}

.card:last-child {
    margin-bottom: 0;
}

.card-row {
    min-width: 312px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.imgBox {
    width: 100%;
    max-width: 148px;
}

.imgBox img {
    max-width: 148px;
}

.info {
    min-width: 148px;
    line-height: 20px;
}

.name {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 16px;
    color: #3772FF;
}

p {
    font-size: 14px;
    color: #737380;
}

.local {
    margin-top: 34px;
}

.local {
    font-size: 12px;
}

.local>p {
    margin-bottom: 8px;
}

.local-info {
    display: flex;
    text-decoration: none;
    justify-content: flex-start;
    align-items: center;
}

.local-info p {
    font-size: 10px;
}

.local-info img {
    margin-right: 6px;
}
</style>