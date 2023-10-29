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

<script>
export default {
  props: {
    text: String,
    color: String,
    backgroundColor: String,
    border: String
  }
}
</script>

<style>
</style>