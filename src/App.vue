<script setup lang='ts'>
import { RouterView } from 'vue-router'
import HeaderBarComponent from '@/common/HeaderBarComponent.vue'
import ProjectDetailsNavBarComponent from '@/modules/project/components/ProjectDetailsNavBarComponent.vue'
import ProjectInfoComponent from '@/modules/project/components/ProjectInfoComponent.vue'
</script>

<template>
  <div class='container'>

    <header>
      <HeaderBarComponent />
    </header>

    <main role='main'>

      <div v-if="$route.path.includes('/project-details')">
        <div id='project-details-nav-bar'>
          <ProjectDetailsNavBarComponent />
        </div>

        <div id='project-details-contents'>
          <RouterView />
          <ProjectInfoComponent />
        </div>
      </div>

      <div v-else>
        <RouterView />
      </div>

    </main>


    <footer>

    </footer>
  </div>
</template>

<style scoped>

</style>
