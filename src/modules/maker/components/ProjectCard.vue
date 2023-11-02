<script setup lang='ts'>
const props = defineProps(['project'])
{{ props.project.projectName }}





</script>

<template>
  <div class='project-card'>
    <div class='img-box'>
      <div class='project-img'></div>
    </div>
    <div class='project-name'>
      <div class='text'>{{ props.project.projectName }}</div>
    </div>
    <div class='achievement-rate'>
      <div class='text'>{{ props.project.fundingAchievementRate }} 달성</div>
    </div>
    <div class='authorized-box'>
      <div class='text'>{{ props.project.isAuthorized ? '인증완료' : '미인증'}}</div>
    </div>
    <div class='total-amount'>
      <div class='text'>{{ props.project.accumulatedFundingAmount }}원</div>
    </div>
    <div class='remain-date'>
      <div class='text'>{{ props.project.remainingDays }}일 남음</div>
    </div>
    <div class='maker-name'>
      <div class='text'>{{ props.project.makerName }}</div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/maker/ProjectCard.css";
</style>