import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: App
    },
    {
      path: '/CreateAccount',
      name: 'CreateAccount',
      component: () => import('@/Pages/CreateAccount.vue')
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      // route level code-splitting
      // this generates a separate chunk (LoginPage.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/Pages/LoginPage.vue')
    },
    {
      path: '/MyErrorPage',
      name: 'MyError',
      component: () => import('@/Pages/MyError.vue')
    }
  ]
})

export default router
