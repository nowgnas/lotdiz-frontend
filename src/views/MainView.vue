<template>
  
  <Carousel :autoplay="3000" :wrap-around="true">
    <Slide v-for="banner in bannerList" :key="banner.bannerId">
      <div class="carousel__item"><img :alt="banner.bannerImageUrl" class="banner-img" :src="banner.bannerImageUrl">
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>

</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import type { BannerResponse } from '@/services/types/ProjectResponse';
import { getBanners } from '@/services/api/ProjectService';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css';

const bannerList = ref<Array<BannerResponse>>([]);

onBeforeMount(async () => {
  try {
    const response = await getBanners();
    bannerList.value = response['banners'];
  } catch (error) {
    throw error;
  }
});


</script>

<style>
.banner-img {
  width: 1905px;
  height: 340px;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

</style>