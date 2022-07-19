import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CadastroView from '../views/CadastroView.vue'
import CatalogoAnimaisView from '../views/CatalogoAnimaisView.vue'
import MensagemView from '../views/MensagemView.vue'
import PerfilView from '../views/PerfilView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/cadastro',
    component: CadastroView
  },
  {
    path: '/catalogo',
    component: CatalogoAnimaisView
  },
  {
    path: '/mensagem',
    component: MensagemView
  },
  {
    path: '/perfil',
    component: PerfilView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
