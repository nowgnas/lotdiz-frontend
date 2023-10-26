<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="container">

  <header>
    <HeaderBarComponent/>
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
