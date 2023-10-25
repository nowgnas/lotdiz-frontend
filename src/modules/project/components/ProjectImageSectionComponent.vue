<template>
    <div id = "project-image-section">
        <div id = "main-image" v-if = "projectStoryImageUrl">
            <!-- <div class = "arrow">
                <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M0.959604 9.436C0.66532 9.71822 0.5 10.1009 0.5 10.5C0.5 10.8991 0.66532 11.2818 0.959604 11.564L9.83972 20.0775C10.1358 20.3517 10.5323 20.5034 10.9439 20.4999C11.3555 20.4965 11.7492 20.3382 12.0402 20.0592C12.3313 19.7802 12.4964 19.4027 12.4999 19.0081C12.5035 18.6135 12.3453 18.2334 12.0594 17.9495L4.28906 10.5L12.0594 3.05047C12.3453 2.76663 12.5035 2.38647 12.4999 1.99188C12.4964 1.59728 12.3313 1.21982 12.0402 0.940791C11.7492 0.66176 11.3555 0.503486 10.9439 0.500057C10.5323 0.496628 10.1358 0.648319 9.83972 0.922459L0.959604 9.436Z" fill="#91918F"/>
                </svg>
            </div> -->

               <Carousel>

                <Slide v-for="projectImage in projectImages" :key="projectImage.projectImageId">
                    <div class="carousel__item">
                        <div class = "project-details-image">
                            <img :alt="projectImage.projectImageUrl" class="project-details-img" :src= "imageUrlPrefix + projectImage.projectImageUrl" />
                        </div>
                    </div>

                </Slide>


                <template #addons>
                <Navigation />
                <Pagination />
                </template>
            </Carousel>

<!--            <img alt="project-details-img" class="project-details-img" src= "/public/project-img/딸기4.png" />-->

            
            <!-- <div class = "arrow">
                <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M12.0404 9.436C12.3347 9.71822 12.5 10.1009 12.5 10.5C12.5 10.8991 12.3347 11.2818 12.0404 11.564L3.16028 20.0775C2.86423 20.3517 2.4677 20.5034 2.05612 20.4999C1.64453 20.4965 1.25082 20.3382 0.95977 20.0592C0.668725 19.7802 0.503635 19.4027 0.500059 19.0081C0.496483 18.6135 0.654705 18.2334 0.940649 17.9495L8.71094 10.5L0.940649 3.05047C0.654705 2.76663 0.496483 2.38647 0.500059 1.99188C0.503635 1.59728 0.668725 1.21982 0.95977 0.940791C1.25082 0.66176 1.64453 0.503486 2.05612 0.500057C2.4677 0.496628 2.86423 0.648319 3.16028 0.922459L12.0404 9.436Z" fill="#91918F"/>
                </svg>
            </div>  -->
        </div>

        <div id = "story-image">
            <div class = "project-story-title">프로젝트 스토리</div>

            <div class = "project-story-image">
                <img alt="project-story-img" class="project-details-story-img" :src="imageUrlPrefix + projectStoryImageUrl" />    
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeMount } from 'vue';
import type { ProjectImage } from '@/services/types/ProjectResponse';
import { useProjectStore } from '@/store/ProjectStore';

import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const projectStore = useProjectStore();
const projectImages = ref<Array<ProjectImage>>([]);
const projectStoryImageUrl = ref<string>('');
const imageUrlPrefix = '/../../public/project-img';

onBeforeMount(() => {
    projectImages.value = projectStore.projectDetails.projectImages;
    projectStoryImageUrl.value = projectStore.projectDetails.projectStoryImageUrl;
});

watch(() => projectStore.projectDetails.projectId, (newProjectId) => {
    if (newProjectId !== 0) {
        projectImages.value = projectStore.projectDetails.projectImages;
        projectStoryImageUrl.value =  projectStore.projectDetails.projectStoryImageUrl;
  }
});

</script>

<style scoped>
@import '@/assets/css/project-image-info.css';

</style>