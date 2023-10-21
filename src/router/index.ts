import {createRouter, createWebHistory} from 'vue-router'
import MainView from '@/views/MainView.vue'
import ProjectRegisterView from '@/views/ProjectRegisterView.vue'
import ProjectInformation from "@/modules/project/components/ProjectInformation.vue";
import MakerRegister from "@/modules/project/components/MakerRegister.vue";

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
                    component: ProjectInformation
                },
                {
                    path: 'maker',
                    component: MakerRegister
                }
            ]
        }
    ]
})

export default router
