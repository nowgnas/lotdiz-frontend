<template>
  <div
    :style="{
      width: '100px',
      height: '100px',
      backgroundColor,
      borderRadius: '50px',
      border,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }"
  >
    <div
      :style="{
        width: '72px',
        height: 'auto',
        fontSize: '18px',
        color,
        lineHeight: 'normal',
        textAlign: 'center',
        backgroundColor
      }"
    >
      {{ text }}
    </div>
  </div>
</template>

<script lang='ts' setup>
type Props = {
  text: string,
  color: string,
  backgroundColor: string,
  border: string
};

const { text, color, backgroundColor, border } = defineProps<Props>()
</script>

<style>
</style>
