<script setup lang='ts'>
import { RouterView } from 'vue-router'
import HeaderBarComponent from '@/common/HeaderBarComponent.vue';

</script>

<template>
  <div class='container'>

    <header>
      <HeaderBarComponent />
    </header>
    
    <main role="main">
        <RouterView />
    </main>

    <footer>

    </footer>
  </div>
</template>

<style scoped>

</style>
