<template>
    <div v-if="isLoggedIn()">
        <img class="icon" :src="resolve_img_url(img)">
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'LogoPerfilComponent',
    props: {
        img: {
            type: String,
            default: 'Usuario.png',
        },
    },
    methods: {
        isLoggedIn() {
            if (window.location.hash == '#/perfil' || window.location.hash == '#/mensagem' || window.location.hash == '#/catalogo') {
                return true;
            } else {
                return false
            }
        },
        resolve_img_url: function (path: any) {
            let images = require.context('../assets/users_icon/', false, /\.png$|\.jpg$/)
            return images("./" + path)
        }
    }
})

</script>

<style scoped>
.icon {
    border-radius: 40px;
    width: 100%;
}
</style>