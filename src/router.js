import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../src/views/Login.vue')
    }
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../src/views/Cadastro.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
