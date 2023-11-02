<script setup lang='ts'>

import { ref } from 'vue'

const props = defineProps({
  placeholder: String,
  title: String,
  isRequired: Boolean,
  modelValue: String,
  textCnt: Number
})
const emits = defineEmits(['update:modelValue'])

const updateValue = (value: any) => {
  emits('update:modelValue', value.target.value)
}
</script>

<template>
  <div class='project-content-box'>
    <div class='title'>
      <div class='text'>{{ props.title }}</div>
      <div v-if='props.isRequired' class='is-required'>
        <div class='text'>*</div>
      </div>
    </div>
    <input class='project-title-input' :placeholder=props.placeholder maxlength='40' :value=props.modelValue
           @input='updateValue' />
    <div class='remain-text' v-if='props.textCnt'>
      <div class='text'>{{ textCnt }}자 남음</div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/projectregister/projectContentItem.css";
</style>