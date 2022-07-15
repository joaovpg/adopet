import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CadastroView from '../views/CadastroView.vue'
import AnimaisView from '../views/AnimaisView.vue'
import MensagemView from '../views/MensagemView.vue'

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
    path: '/animais',
    component: AnimaisView
  },
  {
    path: '/mensagem',
    component: MensagemView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
