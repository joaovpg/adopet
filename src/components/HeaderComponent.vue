<template>
    <header class="header-container">
        <div class="blob-container"></div>
        <nav>
            <div class="nav-container">
                <a href="#" class="nav-icons">
                    <img class="logo" src="@/assets/logo/Logo.svg">
                </a>
                <a href="#" class="nav-icons">
                    <img src="@/assets/header/Casa.svg">
                </a>
                <a href="#" class="nav-icons">
                    <img src="@/assets/header/Mensagens.svg">
                </a>
            </div>
            <div class="login-icon">
                <!-- <a href="#" :style="{ display: isLoggedIn }">
                    <img class="login-icon" src="@/assets/header/Usuario.png">
                </a> -->
                <div v-if="userLogin()">
                    <LogoPerfilComponent :logado=false />
                </div>
                  <div v-else>
                    <LogoPerfilComponent :logado=true />
                </div>
                    
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LogoPerfilComponent from './LogoPerfilComponent.vue';

export default defineComponent({
    name: 'HeaderComponent',
    components: {
        LogoPerfilComponent
    },
    props: {
        usuario: {
            type: Boolean,
            
        }
    },
    computed: {
        isLoggedIn() {
            if (window.location.hash == '#/catalogo') {
                return 'block';
            } else {
                return 'none';
            }
        }
    },
     methods: {
        userLogin() {
            return this.usuario === false
        }
    }
   
});
</script>

<style scoped>
.blob-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 295px;
    background-image: url('@/assets/header/Forma1.svg');
    background-repeat: no-repeat;
    z-index: -1;
}

.header-container {}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 48px 48px 0 48px;
}

.logo {
    width: 128px;
    display: none;
}

.nav-container {
    display: flex;
    justify-content: start;
    align-items: center;
    padding-bottom: 0;
}

.nav-icons {
    margin-right: 56px;
}

.nav-icons:first-child {
    margin-right: 0;
}

.login-icon {
    width: 40px;
    
}

@media screen and (min-width: 768px) {
    nav {
        margin-top: 64px;
    }

    .blob-container {
        height: 470px;
        background-size: 560px 470px;
    }

    .logo {
        display: block;
    }

    .nav-icons:first-child {
        margin-right: 56px;
    }

}

@media screen and (min-width: 1440px) {
    nav {
        margin-left: 0;
        margin-right: 0;
    }

    .header-container {
        margin-left: 160px;
        margin-right: 160px;
    }

    .nav-container {
        padding: 0;
    }

}
</style>