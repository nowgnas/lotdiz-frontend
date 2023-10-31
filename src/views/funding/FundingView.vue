<template>
  <div class='container'>
    <div class='process-bar'>
      <Circle
        :backgroundColor="'#4FAFB1'"
        :border="'1px solid white'"
        :color="'white'"
        :text="'결제'"
      />
      <div class='dotted-line'></div>
      <Circle
        :backgroundColor="'white'"
        :border="'2px dotted black'"
        :color="'black'"
        :text="'주문내역'"
      />
    </div>
    <div class='section'>
      <FundingProduct />
    </div>
    <hr class='hr-style' />
    <div class='section'>
      <Support />
    </div>
    <hr class='hr-style' />
    <div class='section'>
      <Point />
    </div>
    <hr class='hr-style' />
    <div class='section'>
      <PaymentAmount />
    </div>
    <hr class='hr-style' />
    <div class='section'>
      <DeliveryAddress />
    </div>
    <div class='hr-style' />
    <div class='section'>
      <KakaopayLogo />
    </div>
    <div class='hr-style' />
    <div class='section'>
      <Agreement />
    </div>
    <div class='section'>
      <PayBtn />
    </div>
  </div>
</template>

<script lang='ts' setup>
import Circle from '@/modules/funding/Circle.vue'
import FundingProduct from '@/modules/funding/FundingProduct.vue'
import Support from '@/modules/funding/Support.vue'
import Point from '@/modules/funding/Point.vue'
import PaymentAmount from '@/modules/funding/PaymentAmount.vue'
import DeliveryAddress from '@/modules/funding/DeliveryAddress.vue'
import KakaopayLogo from '@/modules/funding/KakaopayLogo.vue'
import Agreement from '@/modules/funding/Agreement.vue'
import PayBtn from '@/modules/funding/PayBtn.vue'
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 1430px;
}

.process-bar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dotted-line {
  width: 30px;
  border-bottom: 2px dotted black;
  margin-bottom: 70px;
  height: 80px;
}

.section {
  display: flex;
  align-items: center;
}

.hr-style {
  margin: 50px 0px;
  border: solid 1px #c8c8c8;
}
</style>
