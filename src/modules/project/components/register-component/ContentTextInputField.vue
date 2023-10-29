<script setup lang='ts'>

const props = defineProps({
  placeholder: String,
  title: String,
  isRequired: Boolean,
  modelValue: String
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
  </div>
</template>

<style scoped>
@import "../../../../assets/css/projectregister/projectContentItem.css";
</style>