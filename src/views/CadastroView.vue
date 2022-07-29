<template>
    <main class="cadastro-container">
        <LogoComponent />
        <div class="text-container">
            <TextComponent text="Ainda não tem cadastro?" />
            <TextComponent text="Então, antes de buscar seu melhor amigo, precisamos de alguns dados:" />
        </div>
        <section class="form-container">
            <form @submit.prevent="createUser">
                <div class="input-container">
                    <InputComponent v-model="users.name" title="Nome" msg="Digite seu nome completo" />
                    <InputComponent v-model="users.email" title="E-mail" msg="Escolha seu melhor e-mail" />
                    <div class="password-container">
                        <InputComponent v-model="users.password" title="Senha" input="password"
                            msg="Insira seu senha" />
                        <InputComponent v-model="users.passwordConfirm" title="Confirma sua senha" input="password"
                            msg="Repita a senha criada acima" />
                    </div>
                </div>
                <div class="btn-container">
                    <BtnComponent msg="Cadastrar!" />
                </div>
            </form>
        </section>
    </main>
    <BlobComponent />
    <PawsComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputComponent from "@/components/InputComponent.vue";
import BtnComponent from "@/components/BtnComponent.vue";
import LogoComponent from "@/components/LogoComponent.vue";
import TextComponent from "@/components/TextComponent.vue";
import PawsComponent from "@/components/PawsComponent.vue";
import axios from "axios";


export default defineComponent({
    name: "CadastroView",
    components: {
        InputComponent,
        BtnComponent,
        LogoComponent,
        TextComponent,
        PawsComponent
    },
    data() {
        return {
            users: {
                name: '',
                email: '',
                password: '',
                passwordConfirm: '',
            }
        }
    },
    methods: {
        async createUser() {
            let reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
            if (reg.test(this.users.email)) {
                if (this.users.password == this.users.passwordConfirm) {
                    await axios.post("http://localhost:3000/users", {
                        name: this.users.name,
                        email: this.users.email,
                        password: this.users.password,
                        phone: '',
                        city: '',
                        about: ''
                    }).then(() => {
                        alert("Usuário criado")
                        this.$router.push('/login')
                    }).catch(response => {
                        console.log("Erro:", response)
                    });
                } else {
                    alert("Confirmação da senha não confere")
                }
            } else {
                alert("Coloque um e-mail válido")
            }
        }
    },


})

</script>

<style scoped>
.cadastro-container {
    margin: 87px auto;
    padding: 0 24px;
    max-width: 368px;
}

.text-container {
    margin: 24px 0;
}

.btn-container {
    padding: 0 82px;
}

.input-container div {
    margin-bottom: 20px;
}

.input-container div:last-child {
    margin-bottom: 24px;
}

.footer {
    margin-top: 106px;
}

@media screen and (min-width: 768px) {
    .cadastro-container {
        margin: 156px auto;
        padding: 0;
        max-width: 525px;
    }

    .text-container {
        margin: 40px 0;
    }

    .form-container {
        max-width: 344px;
        margin: 0 auto;
    }

    .input-container div {
        margin-bottom: 24px;
    }

    .input-container div:last-child {
        margin-bottom: 40px;
    }

    .footer {
        margin-top: 185px;
    }
}

@media screen and (min-width: 1440px) {
    .cadastro-container {
        margin: 36px auto;
        padding: 0;
        max-width: 552px;
    }

    .text-container {
        margin: 40px 0 48px 0;
    }

    .form-container {
        max-width: none;
    }

    .input-container div:last-child {
        margin-bottom: 32px;
    }

    .password-container {
        max-width: 362px;
        margin: 0 auto;
    }

    .btn-container {
        max-width: 362px;
        margin: 0 auto;
        padding: 0 95px;
    }

    .footer {
        margin-top: 156px;
    }
}
</style>