import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue';
import ProjectListByCategoryView from '@/views/ProjectListByCategoryView.vue';
import ProjectDetailsView from '@/views/ProjectDetailsView.vue';
import LotdealView from '@/views/LotdealView.vue';
import SpecialExhibitionView from '@/views/SpecialExhibitionView.vue';
import ProjectInfoComponent from '@/modules/project/components/ProjectInfoComponent.vue';
import SupporterWithUsComponent from '@/modules/project/components/SupporterWithUsComponent.vue'
import SupportSignatureComponent from '@/modules/project/components/SupportSignatureComponent.vue';
import FundingView from '@/views/funding/FundingView.vue';
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
      path: '/project-details',
      name: 'projectDetails',
      component: ProjectDetailsView
    },
    {
      path: '/project-details/story',
      name: 'projectDeatailsStory',
      component: ProjectInfoComponent
    },
    {
      path: '/project-details/support-signature',
      name: 'projectDeatailsSupportSignature',
      component: SupportSignatureComponent
    },
    {
      path: '/project-details/supporter-with-us',
      name: 'projectDeatailsSupporterWithUs',
      component: SupporterWithUsComponent
    },
    {
      path: '/funding',
      name: 'funding',
      component: FundingView
    }

  ]
})

export default router
