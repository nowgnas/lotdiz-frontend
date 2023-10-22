import {createRouter, createWebHistory} from 'vue-router'
import MainView from '@/views/MainView.vue'
import ProjectRegisterView from '@/views/ProjectRegisterView.vue'
import DefaultInformation from "@/modules/project/components/DefaultInformation.vue";
import MakerRegister from "@/modules/project/components/MakerRegister.vue";
import ProjectInformation from "@/modules/project/components/ProjectInformation.vue";

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
            path: '/projects',
            name: 'projectRegister',
            component: ProjectRegisterView,
            children: [
                {
                    path: 'basic-information',
                    component: DefaultInformation
                },
                {
                    path: 'maker',
                    component: MakerRegister
                },
                {
                    path: 'project-info',
                    component: ProjectInformation
                }
            ]
        }
    ]
})

export default router
