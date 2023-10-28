<script setup lang='ts'>
import { RouterView } from 'vue-router'
import HeaderBarComponent from '@/common/HeaderBarComponent.vue'
import ProjectDetailsNavBarComponent from '@/modules/project/components/ProjectDetailsNavBarComponent.vue'
import ProjectInfoComponent from '@/modules/project/components/ProjectInfoComponent.vue'

const isNonHeaderPath = (): boolean => {
  const url: string = window.location.href;
  console.log("url:", url);
  // const host = ""
  if(url === "http://localhost:5173/member/sign-in" || url === "http://localhost:5173/member/sign-up" || url === "http://localhost:5173/member/membership-honors/join/success") {
    return true;
  }
  return false;
}
</script>

<template>
  <div class='container'>

    <header>
      <HeaderBarComponent v-if="!isNonHeaderPath()"/>
    </header>
    <main role='main' style='height:100%;'>

      <div v-if="$route.path.includes('/project-details')">
        <div id='project-details-nav-bar'>
          <ProjectDetailsNavBarComponent />
        </div>

        <div id='project-details-contents'>
          <RouterView />
          <ProjectInfoComponent />
        </div>
      </div>

      <div v-else style='height:100%;'>
        <RouterView />
      </div>

    </main>


    <footer>

    </footer>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
}

</style>
