<script setup lang='ts'>
import { RouterView } from 'vue-router'
import HeaderBarComponent from '@/common/HeaderBarComponent.vue'

const isNonHeaderPath = (): boolean => {
  const url: string = window.location.href
  // const host = ""
  if (url === 'http://localhost:5173/member/sign-in' || url === 'http://localhost:5173/member/sign-up' || url === 'http://localhost:5173/member/membership-honors/join/success') {
    return true
  }
  return false
}


</script>

<template>
  <div class='container'>

    <header>
      <HeaderBarComponent v-if='!isNonHeaderPath()' />
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
