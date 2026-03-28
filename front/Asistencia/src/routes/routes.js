import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login.vue'
import Recuperacion from '../views/Recuperacion.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/recuperar',
    name: 'Recuperar',
    component: Recuperacion
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
