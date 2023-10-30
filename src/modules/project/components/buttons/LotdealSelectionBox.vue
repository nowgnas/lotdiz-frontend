<script setup lang='ts'>
const props = defineProps(['content', 'selected'])


</script>

<template>
  <div class='select-btn'>
    <div class='select-btn-title'>
      <div class='text'>{{ props.content.title }}</div>
      <div class='select-btn-content'>
        <div class='text'>{{ props.content.content }}</div>
      </div>
      <input type='radio' value='선택하기' class='select-lotdeal' @change="$emit('input', props.content.selectedValue)"
             :checked='props.content.type ===props.selected  '>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/projectregister/SelectLotdeal.css";
</style>