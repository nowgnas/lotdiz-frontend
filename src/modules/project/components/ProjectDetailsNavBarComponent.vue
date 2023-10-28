<template>

  <div id='project-details'>
    <RouterLink to='/project-details/:id/story'>
      <div class='title'>스토리</div>
    </RouterLink>
    <RouterLink to='/project-details/:id/support-signature'>
      <div class='title'>지지서명</div>
    </RouterLink>
    <RouterLink to='/project-details/:id/supporter-with-us'>
      <div class='title'>함께 하는 서포터</div>
    </RouterLink>
  </div>

</template>

<script setup lang='ts'>
</script>

<style>
</style>