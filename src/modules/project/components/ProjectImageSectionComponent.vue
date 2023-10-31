<template>
    <div id = "project-image-section">
        <div id = "main-image" v-if = "projectStoryImageUrl">
               <Carousel>
                <Slide v-for="projectImage in projectImages" :key="projectImage.projectImageId">
                    <div class="carousel__item">
                        <div class = "project-details-image">
                            <img :alt="projectImage.projectImageUrl" class="project-details-img" :src= "projectImage.projectImageUrl" />
                        </div>
                    </div>

                </Slide>

                <template #addons>
                <Navigation v-if="false" />
                <Pagination />
                </template>
            </Carousel>

        </div>

        <div id = "story-image">
            <div class = "project-story-title">프로젝트 스토리</div>

            <div class = "project-story-image">
                <img alt="project-story-img" class="project-details-story-img" :src="projectStoryImageUrl" />
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