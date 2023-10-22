import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue';
import ProjectListByCategoryView from '@/views/ProjectListByCategoryView.vue';
import ProjectDetailsView from '@/views/ProjectDetailsView.vue';
import LotdPlusView from '@/views/LotdPlusView.vue';
import LotdealView from '@/views/LotdealView.vue';

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
      path: '/lotdplus',
      name: '/lotdplus',
      component: LotdPlusView
    },
    {
      path: '/lotdeal',
      name: 'lotdeal',
      component: LotdealView
    },

  ]
})

export default router
