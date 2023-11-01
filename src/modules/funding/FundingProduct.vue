<template>
  <div class='product-container'>
    <!-- 반복되는 제품 정보를 배열로 정의 -->
    <div v-for='product in products' :key='product.id' class='product-info-content'>
      <div class='product-info-item'>
        <div style='color: #4fafb1; font-weight: bold'>{{ product.title }}</div>
      </div>
      <div class='product-info-item'>
        <div
          style='width: 1350px; overflow: hidden; word-wrap: break-word; overflow-wrap: break-word'
        >
          {{ product.description }}
        </div>
      </div>
      <div class='product-info-item' style='justify-content: flex-end; font-weight: bold'>
        <div>
          {{ product.quantity }}개 X {{ product.price }} 원 =
          {{ product.quantity * product.price }}원
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'

interface Product {
  id: number;
  title: string;
  description: string;
  quantity: number;
  price: number;
}

const products = ref<Product[]>([
  {
    id: 1,
    title: '홍+청무화과 1kg 세트',
    description: `"30박스 한정 홍무화과와 청무화과를 한번에 만날 수 있는 기회 !부드러운 식감에 톡톡 터지는
    식감 그리고 달큰한 맛까지제대로된 무화과를 산지직송으로 만나보세요 :)
    * 무농약 인증 농가* 홍무화과 500g + 청무화과 500g* 홍무화과 12-16과 내외 + 청무화과 18-20과 내외* 산지의
    상황에 따라 일괄 혹은 순차적으로 배송될 예정입니다.* 배송 일정은 산지의 상황에 따라 변경될
    수 있으며, 새소식으로 공지드리니 꼭 !! 확인해주세요."`,
    quantity: 1,
    price: 19500
  },
  {
    id: 2,
    title: '홍+청무화과 2kg 세트',
    description: `'30박스 한정 홍무화과와 청무화과를 한번에 만날 수 있는 기회 !부드러운 식감에 톡톡 터지는
    식감 그리고 달큰한 맛까지제대로된 무화과를 산지직송으로 만나보세요 :)
    * 무농약 인증 농가* 홍무화과 500g + 청무화과 500g* 홍무화과 12-16과 내외 + 청무화과 18-20과 내외* 산지의
    상황에 따라 일괄 혹은 순차적으로 배송될 예정입니다.* 배송 일정은 산지의 상황에 따라 변경될
    수 있으며, 새소식으로 공지드리니 꼭 !! 확인해주세요.'`,
    quantity: 1,
    price: 30500
  }
])
</script>


<style>
.product-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.product-info-content {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  align-self: stretch;
}

.product-info-item {
  display: flex;
  align-items: flex-start;
  gap: 50px;
}
</style>
