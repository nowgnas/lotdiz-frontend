<script setup lang='ts'>
import { RouterView } from 'vue-router'
import HeaderBarComponent from '@/common/HeaderBarComponent.vue'

import { onMounted } from 'vue'
import { useHeaderStore } from '@/stores/headerStore';

const headerStore = useHeaderStore();

onMounted(() => {
  const url: string = window.location.pathname
  if (
    url === '/member/sign-in' ||
    url === '/member/sign-up' ||
    url === '/member/membership-honors/join/success'
  ) {
    console.log('no header here')
    headerStore.assignIsNoHeaderPath(true)
  } else {
    console.log('header here')
    headerStore.assignIsNoHeaderPath(false)
  }
})

</script>

<template>
  <div class='container'>

    <header>
      <HeaderBarComponent v-if='!headerStore.getIsNoHeaderPath()' />
    </header>
    <main role='main' style='height:100%;'>
      <RouterView />
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
