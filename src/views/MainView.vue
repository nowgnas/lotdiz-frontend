<template>
<div class = 'container' v-if='banners && lotdealProjectList && bestLotdPlusProject'>
  <Carousel :autoplay='3000' :wrap-around='true'>
    <Slide v-for='banner in banners' :key='banner.bannerId'>
      <RouterLink :to='banner.bannerUrl'>
        <div class='carousel__item'><img :alt='banner.bannerImageUrl' class='banner-img' :src='banner.bannerImageUrl'>
        </div>
      </RouterLink>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
  <div class='main-page-container'>
    <div class='main-page-lotd-plus-container'>
      <div class='main-page-lotd-plus-title'>롯드+ 인기상품</div>
      <div class='main-page-lotd-plus'>
        <ProjectCardComponent v-for='project in bestLotdPlusProject' :key='project.projectId' :project='project' />
      </div>
    </div>
    <div class='dividing-line'></div>

    <div class='main-page-lotdeal-container'>
      <div class='main-page-lotdeal-title'>실시간 롯딜</div>
      <div class='main-page-lotdeal'>
        <MainLotdealProjectCardComponent v-for='(project, idx)  in lotdealProjectList' :key='project.projectId'
                              :project='project' :idx='idx+1' />
      </div>
    </div>
  </div>
</div>



</template>

<script setup lang='ts'>
import { ref, onBeforeMount } from 'vue'
import type {
  BannersResponse,
  LotdealProject,
  Banner,
  CommonProjectsResponse,
  BestLotdPlusProject
} from '@/services/types/ProjectResponse'
import { getBanners, getBestLotdPlus, getLotdealProjects } from '@/services/api/ProjectService'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import ProjectCardComponent from '@/modules/project/components/ProjectCardComponent.vue'
import MainLotdealProjectCardComponent from '@/modules/project/components/MainLotdealProjectCardComponent.vue'

const banners = ref<Array<Banner>>([])
const bestLotdPlusProject = ref<Array<BestLotdPlusProject>>([])
const lotdealProjectList = ref<Array<LotdealProject>>([])

const getBannersRequest = async () => {
  try {
    const bannersResponse: BannersResponse = await getBanners()
    banners.value = bannersResponse['banners']
  } catch (error) {
    alert('조회에 실패하였습니다.')
  }
}
const getBestLotdPlusRequest = async () => {
  try {
    const lotdPlusResponse: CommonProjectsResponse<BestLotdPlusProject> = await getBestLotdPlus()
    bestLotdPlusProject.value = lotdPlusResponse['projects']
  } catch (error) {
    alert('조회에 실패하였습니다.')
  }
}

const getLotdealProjectsRequest = async (page: number, size: number, sort: string) => {
  try {
    const response: CommonProjectsResponse<LotdealProject> = await getLotdealProjects(page, size, sort)
    lotdealProjectList.value = response['projects']
  } catch (error) {
    alert('프로젝트 조회에 실패하였습니다.')
  }
}

onBeforeMount(async () => {
  await getBannersRequest()
  await getBestLotdPlusRequest()
  await getLotdealProjectsRequest(0, 6, 'lotdealDueTime,asc')
})

</script>

<style scoped>
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

.carousel__slide {
  justify-content: stretch;
}

.main-page-container {
  display: inline-flex;
  align-items: flex-start;
  gap: 57px;
  margin-left: 168px;
  margin-top: 35px;
}

.main-page-lotd-plus-container {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 35px;
}

.main-page-lotd-plus-title {
  width: 308px;
  height: 42px;
  color: #000;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 42px */
}

.main-page-lotd-plus {
  display: flex;
  width: 1064px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 43px 25px;
  flex-wrap: wrap;
  justify-content: center;

}

.dividing-line {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 3px;
  height: 1433px;
  background: rgba(0, 0, 0, 0.13);
}

.main-page-lotdeal-container {
  display: flex;
  height: 757.911px;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
}

.main-page-lotdeal-title {
  display: flex;
  padding: 5px 0px;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  color: #000;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 42px */

}

.main-page-lotdeal {
  display: flex;
  height: 757.911px;
  flex-direction: column;
  align-items: flex-start;
  gap: 46px;

}


</style>
