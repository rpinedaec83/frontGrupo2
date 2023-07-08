import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue')
    },
    {
      path: '/resumen',
      name: 'resumen',
      component: () => import('../views/ResumeView.vue')
    },
    {
      path: '/cursos',
      name: 'cursos',
      component: () => import('../views/CoursesView.vue')
    },
    {
      path: '/mis-cursos',
      name: 'mis-cursos',
      component: () => import('../views/MyCoursesView.vue')
    },
    {
      path: '/terminos',
      name: 'terminos',
      component: () => import('../views/TerminosView.vue')
    },
    {
      path: '/pago/aceptado',
      name: 'pago-aceptado',
      component: () => import('../views/SuccessView.vue')
    },
    {
      path: '/pago/cancelado',
      name: 'pago-cancelado',
      component: () => import('../views/CancelView.vue')
    },
    {
      path: '/curso/:id',
      name: 'detalles',
      component: () => import('../views/CursoDetallesView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/NoFound.vue')
    },
  ]
})

export default router
