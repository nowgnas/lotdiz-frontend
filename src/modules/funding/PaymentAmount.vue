<template>
  <div class="payments-container">
    <div class="payments-info-header">
      <div class="payments-info-header-font">결제 금액</div>
    </div>
    <div class="payments-info-content">
      <div class="payments-info-item">
        <div class="payments-info-item-left">상품 금액</div>
        <div class="payments-info-item-right">79,500원</div>
      </div>
      <div class="payments-info-item">
        <div class="payments-info-item-left">포인트 할인</div>
        <div class="payments-info-item-right" style="color: red">-{{ usedPoint ? usedPoint + '원' : '0원' }}</div>
      </div>
      <div class="payments-info-item">
        <div class="payments-info-item-left">멤버십 등급 할인(3%)</div>
        <div class="payments-info-item-right" style="color: red">-2,238원</div>
      </div>
      <div class="payments-info-item">
        <div class="payments-info-item-left">후원금</div>
        <div class="payments-info-item-right">{{ supportAmount ? supportAmount + '원' : '0원' }}</div>
      </div>
      <div class="payments-info-item">
        <div class="payments-info-item-left">배송비</div>
        <div class="payments-info-item-right">0원</div>
      </div>
      <div class="payments-info-item-total">
        <div class="payments-info-item-total-left">총 결제 금액</div>
        <div class="payments-info-item-total-right">77,005원</div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed} from 'vue';
import {useFundingStore} from '@/store/FundingStore';

export default {
  setup() {
    const fundingStore = useFundingStore();

    const supportAmount = computed(() => {
      return fundingStore.fundingDetails.fundingSupportAmount;
    });

    const usedPoint = computed(() => {
      return fundingStore.fundingDetails.fundingUsedPoint;
    });

    return {
      supportAmount,
      usedPoint
    };
  },
}
</script>

<style>
.payments-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.payments-info-header {
  display: flex;
  align-items: center;
  align-self: stretch;
}

.payments-info-header-font {
  display: flex;
  text-align: left;
  align-items: center;
  color: black;
  font-size: 20px;
  font-weight: bold;
}

.payments-info-content {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  align-self: stretch;
}

.payments-info-item {
  display: flex;
  align-items: flex-start;
  gap: 902px;
}

.payments-info-item-left {
  display: flex;
  width: 170px;
  height: 31px;
  flex-direction: column;
  justify-content: center;
}

.payments-info-item-right {
  text-align: right;
  display: flex;
  width: 153px;
  height: 31px;
  flex-direction: column;
  justify-content: center;
}

.payments-info-item-total {
  display: flex;
  align-items: flex-start;
  gap: 902px;
  font-weight: bold;
}

.payments-info-item-total-left {
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  width: 170px;
  height: 31px;
  flex-direction: column;
  justify-content: center;
}

.payments-info-item-total-right {
  text-align: right;
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  width: 153px;
  height: 31px;
  flex-direction: column;
  justify-content: center;
}

.hr-style {
  margin: 50px 0px;
  border: solid 1px #c8c8c8;
}
</style>