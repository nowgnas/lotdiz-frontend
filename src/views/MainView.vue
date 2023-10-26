<template>
  
  <Carousel v-if="banners" :autoplay="3000" :wrap-around="true">
    <Slide v-for="banner in banners" :key="banner.bannerId">
      <RouterLink :to="banner.bannerUrl"> 
      <div class="carousel__item"><img :alt="banner.bannerImageUrl" class="banner-img" :src="banner.bannerImageUrl">
      </div>
      </RouterLink>
    </Slide>

    <template #addons>
      <Pagination/>
    </template>
  </Carousel>

</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import type { BannersResponse, Banner } from '@/services/types/ProjectResponse';
import { getBanners } from '@/services/api/ProjectService';
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css';

const banners = ref<Array<Banner>>([]);

onBeforeMount(async () => {
  try {
    const response: BannersResponse = await getBanners();
    banners.value = response['banners'];
  } catch (error) {
    alert("조회에 실패하였습니다.");
  }
});
</script>

<style>
.banner-img {
  width: 1887px;
  height: 340px;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
