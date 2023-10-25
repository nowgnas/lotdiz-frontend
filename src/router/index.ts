import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../modules/member/components/MyPageSupporter.vue')
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
    },
    // {
    //   path: '/member/my-page',
    //   name: 'my-page',
    //   component: () => import('../views/member/MyPage.vue')
    // },
    {
      path: '/member/my-page/maker',
      name: 'my-page-maker',
      component: () => import('../modules/member/components/MyPageMaker.vue')
    },
    {
      path: '/member/my-page/supporter',
      name: 'my-page-supporter',
      component: () => import('../modules/member/components/MyPageSupporter.vue')
    },
  ]
})

export default router;
