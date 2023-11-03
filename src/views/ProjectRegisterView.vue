<template>
  <div class='project-register'>
    <div class='project-register-sidebar'>
      <div class='sidebar-top'>프로젝트 생성 중</div>
      <div class='sidebar-nav'>
        <div class='sidebar-nav-item' v-for='(item, idx) in sidebar' :key='idx'>
          <RouterLink :to=item.url class='sidebar-nav-item-text'>{{ item.name }}</RouterLink>
        </div>
      </div>
    </div>
    <div class='project-register-content'>
      <RouterView />
    </div>
  </div>
</template>


<script lang='ts' setup>
import { RouterLink, RouterView } from 'vue-router'
import { computed, onBeforeUnmount, ref } from 'vue'
import { useMakerStore } from '@/store/registerProjectStore'


const sidebar: any = [
  {
    name: '메이커 정보',
    url: '/projects/maker'
  },
  {
    name: '프로젝트 정보',
    url: '/projects/project-info'
  },
  {
    name: '기본 정보',
    url: '/projects/basic-information'
  },
  {
    name: '스토리 작성',
    url: '/projects/story'
  },
  {
    name: '상품 등록',
    url: '/projects/products'
  },
  {
    name: '롯딜 선택',
    url: '/projects/lotdeal'
  }
]

const maker = computed(() => useMakerStore().makerData)


const reloadFlag = ref(false)

window.addEventListener('beforeunload', confirmNavigation)
reloadFlag.value = true


function confirmNavigation(event: any) {
  if (reloadFlag.value) {
    event.returnValue = 'If you reload, you may lose your data.'
  }
}

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', confirmNavigation)
})

</script>

<style lang='css' scoped>
@import "@/assets/css/projectregister/projectRegister.css";
</style>