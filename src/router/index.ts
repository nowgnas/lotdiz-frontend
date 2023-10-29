import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue';
import ProjectListByCategoryView from '@/views/ProjectListByCategoryView.vue';
import ProjectDetailsView from '@/views/ProjectDetailsView.vue';
import LotdealView from '@/views/LotdealView.vue';
import SpecialExhibitionView from '@/views/SpecialExhibitionView.vue';
import FundingView from '@/views/FundingView.vue';
import FundingPayApproveView from "@/views/FundingPayApproveView.vue";
import FundingDetailsView from "@/views/FundingDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/projects/category',
      name: 'projectListByCategory',
      component: ProjectListByCategoryView
    },
    {
      path: '/projects/details',
      name: 'projectDetails',
      component: ProjectDetailsView
    },
    {
      path: '/lotdeal',
      name: 'lotdeal',
      component: LotdealView
    },
    {
      path: '/special-exhibition/camping',
      name: 'specialExhibition',
      component: SpecialExhibitionView
    },
    {
      path: '/funding',
      name: 'funding',
      component: FundingView
    },
    {
      path: '/payments/approve/:order/:user',
      name: 'payments',
      component: FundingPayApproveView
    },
    {
      path: '/funding/details',
      name: 'fundingDetails',
      component: FundingDetailsView
    }

  ]
})

export default router
