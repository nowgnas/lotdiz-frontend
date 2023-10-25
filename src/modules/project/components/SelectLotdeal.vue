<script setup lang="ts">

import ProjectContentTitle from "@/modules/project/components/ProjectContentTitle.vue";
import SaveButton from "@/modules/project/components/buttons/SaveButton.vue";

const projectContentTitle = {
  title: "롯딜 선택",
  description: "롯딜 선택으로 더 많은 서포터를 확보하세요.",
};
</script>

<template>
  <ProjectContentTitle :title="projectContentTitle"/>
  <div class="select-lotdeal-box">
    <div class="lotdeal-guide-box">
      <div class="text">롯딜 가이드</div>
    </div>
    <div class="lotdeal-select-item-box">

    </div>
    <SaveButton/>
  </div>
</template>

<style scoped>

</style>