<template>
  <div class='kakaopay-container'>
    <div class='kakaopay-header'>
      <div class='kakaopay-header-font'>결제 수단</div>
    </div>
    <div class='kakaopay-content'>
      <img alt='kakaopay logo' src='@/assets/kakaopay-logo.png' />
    </div>
  </div>
</template>

<script lang='ts' setup>
</script>

<style>
.kakaopay-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 35px;
  flex-shrink: 0;
}

.kakaopay-header {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.kakaopay-header-font {
  display: flex;
  text-align: left;
  align-items: center;
  color: black;
  font-size: 20px;
  font-weight: bold;
}

.kakaopay-content {
  display: flex;
  padding: 0px 50px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
}
</style>
