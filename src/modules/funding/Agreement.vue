<template>
  <div class="agreement-container">
    <div class="agreement-info-header">
      <div class="agreement-info-header-font">약관 동의</div>
    </div>
    <div class="agreement-info-content">
      <div style="display: flex; align-items: flex-start">
        <input type="checkbox" name="agree1" style="width: 25px; height: 25px" />
        <div style="margin-left: 30px; font-size: 1.2rem">기본 배송지로 선택</div>
      </div>
      <div style="display: flex; align-items: flex-start">
        <input type="checkbox" name="agree2" style="width: 25px; height: 25px" />
        <div style="margin-left: 30px; font-size: 1.2rem">개인정보 제3자 제공 동의 (필수)</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.agreement-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
.agreement-info-header {
  display: flex;
  align-items: center;
  align-self: stretch;
}
.agreement-info-header-font {
  display: flex;
  text-align: left;
  align-items: center;
  color: black;
  font-size: 20px;
  font-weight: bold;
}
.agreement-info-content {
  display: flex;
  padding: 20px 50px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
}
</style>