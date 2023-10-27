import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
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
          component: () => import('../modules/member/components/MyPageSupporter.vue'),
          meta: { authRequired: true }
        },
        {
          path: '/member/my-page/maker',
          name: 'my-page-maker',
          component: () => import('../modules/member/components/MyPageMaker.vue'),
          meta: { authRequired: true }
        },
      ],
      meta: { authRequired: true }
    },
    {
      path: '/member/membership-honors',
      name: 'membership-honors',
      component: () => import('../views/member/MembershipPayments.vue'),
      meta: { authRequired: true }
    },
    {
      path: '/member/likes-list',
      name: 'member-likes-list',
      component: () => import('../views/member/LikesList.vue'),
      meta: { authRequired: true }
    },
  ]
});

router.beforeEach(async (to, from, next) => {
  console.log("router beforeEach here");

  const jwtToken = localStorage.getItem("jwtToken");

  if(to.matched.some(record =>  record.meta.authRequired )) {
    if(jwtToken === "") {
      console.log("in token: " + jwtToken);
      next({
        path: '/member/sign-in',
        query: {redirect:to.fullPath}
      })
      alert('로그인이 필요한 페이지 입니다.');
    } else {
      console.log("in not null token: " + jwtToken);
      next()
    }
  } else {
    next();
  }
});

export default router;
