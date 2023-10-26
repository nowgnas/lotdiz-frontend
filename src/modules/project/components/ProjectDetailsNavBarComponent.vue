<template>

  <div id="project-details">
    <RouterLink to="/project-details"><div class="title">스토리</div></RouterLink>
    <RouterLink to="/project-details/support-signature"><div class="title">지지서명</div></RouterLink>
    <RouterLink to="/project-details/supporter-with-us"><div class="title">함께 하는 서포터</div></RouterLink>
  </div>
  
</template>

<script setup lang="ts">
</script>

<style scoped>

#project-details {
  display: flex;
  align-items: flex-start;
  gap: 19px;
  /* border-bottom: 4px solid #EBEBEB;*/
}

.title {
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 3px solid #65B9BB; 

  color: #000;
  text-align: center;
  /*font-family: Open Sans;*/
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; 
}

</style>