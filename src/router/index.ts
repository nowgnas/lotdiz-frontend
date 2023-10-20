import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../modules/member/components/SignUpAgreement.vue')
    },
    {
      path: '/basic-info',
      name: 'basic-info',
      component: () => import('../modules/member/components/SignUpBasicInfo.vue')
    },
    {
      path: '/email-auth',
      name: 'email-auth',
      component: () => import('../modules/member/components/SignUpEmailAuth.vue')
    },
    {
      path: '/sign-up-success',
      name: 'sign-up-success',
      component: () => import('../modules/member/components/SignUpSuccess.vue')
    }
  ]
})

export default router
