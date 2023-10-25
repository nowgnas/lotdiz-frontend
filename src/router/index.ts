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
      path: '/member/sign-in',
      name: 'member-sign-in',
      component: () => import('../views/member/SignIn.vue')
    },
    {
      path: '/member/sign-up',
      component: () => import('../views/member/SignUp.vue'),
      children: [
        {
          path: '',
          name: 'member-sign-up-agreement',
          component: () => import('../modules/member/components/SignUpAgreement.vue')
        },
        {
          path: 'basic-info',
          name: 'member-sign-up-basic-info',
          component: () => import('../modules/member/components/SignUpBasicInfo.vue')
        },
        {
          path: 'email-auth',
          name: 'member-sign-up-email-auth',
          component: () => import('../modules/member/components/SignUpEmailAuth.vue')
        },
        {
          path: 'success',
          name: 'member-sign-up-success',
          component: () => import('../modules/member/components/SignUpSuccess.vue')
        },
      ]
    },
    {
      path: '/member/my-page',
      component: () => import('../views/member/MyPage.vue'),
      children: [
        {
          path: '',
          name: 'my-page-supporter',
          component: () => import('../modules/member/components/MyPageSupporter.vue')
        },
        {
          path: '/member/my-page/maker',
          name: 'my-page-maker',
          component: () => import('../modules/member/components/MyPageMaker.vue')
        },
      ]
    },
    {
      path: '/member/membership-honors',
      name: 'membership-honors',
      component: () => import('../views/member/MembershipPayments.vue')
    },
  ]
})

export default router;
