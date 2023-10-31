<template>
  <div class='point-section'>
    <div class='point-header'>
      <div class='point-font'>포인트</div>
    </div>
    <div class='point-contents'>
      <div class='point-inner-contents-left'>
        <div class='point-inner-contents-left-header'>멤버십 적립 예정 포인트(1%)</div>
      </div>
      <div class='point-inner-contents-right'>
        <div class='point-inner-contents-line'></div>
        <div class='point-inner-contents-right-header'>
          <span> 795P </span>
        </div>
      </div>
    </div>
    <div class='point-contents'>
      <div class='point-inner-contents-left'>
        <div class='point-inner-contents-left-header'>포인트 사용</div>
      </div>
      <div class='point-inner-contents-right'>
        <div class='point-inner-contents-line'></div>
        <div class='point-inner-contents-right-header'>
          <div>보유포인트 (110P)</div>
          <input v-model='usedPoint' name='pointInput' type='number' />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { useFundingStore } from '@/store/FundingStore'
import { ref, watch } from 'vue'

const fundingStore = useFundingStore()

const usedPoint = ref(fundingStore.fundingDetails.fundingUsedPoint)

watch(usedPoint, (newVal) => {
  fundingStore.updateData({ fundingUsedPoint: newVal })
})

</script>

<style>
.point-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 17px;
}

.point-header {
  display: flex;
  width: 1400px;
  align-items: center;
}

.point-font {
  color: black;
  font-size: 20px;
  font-weight: bold;
}

.point-contents {
  display: flex;
  width: auto;
  height: 42px;
  padding: 0px 20px;
  align-items: center;
}

.point-inner-contents-left {
  display: flex;
  width: 276px;
  justify-content: center;
  align-items: center;
}

.point-inner-contents-left-header {
  width: 269px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
}

.point-inner-contents-right {
  display: flex;
  width: auto;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
}

.point-inner-contents-line {
  width: 800px;
  margin-bottom: 50px;
  height: 50px;
}

.point-inner-contents-right-header {
  margin-left: 40px;
}
</style>
