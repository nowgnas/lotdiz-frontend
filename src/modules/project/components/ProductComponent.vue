<template>

  <div id = "product-info-section" v-if = "products">

    <div class="product-title">상품 정보</div>

    <div class="product-box" v-for="product in products" :key="product.productId">
      <div class="product-name">{{ product.productName }}</div>
      <div class="product-description">{{ product.productDescription }}</div>
      <div class="product-price-info">
        <div class="product-price-title">상품 가격</div>
        <div class="product-price-data" v-if='lotdealDueTime == null' >{{ product.productPrice }} 원</div>
        <div class="product-price-data" v-else>{{ product.productPrice * 0.6 }} 원</div>
      </div>
      <div class="product-current-stock-quantity-info">
        <div class="product-current-stock-quantity-title">남은 수량</div>
        <div class="product-current-stock-quantity-data">{{ product.productCurrentStockQuantity }}</div>
      </div>
      <div class="product-registered-stock-quantity-info">
        <div class="product-registered-stock-quantity-title">제한 수량</div>
        <div class="product-registered-stock-quantity-data">{{ product.productRegisteredStockQuantity }}</div>
      </div>
      <div class="funding-product-quantity-info">
        <div class="funding-quantity-title">구매 수량</div>
        <div class="funding-quantity-contents">
          <div class="funding-quantity-minus" @click="minusQuantity(product.productId)">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="3" viewBox="0 0 11 3" fill="none">
              <path d="M9.25 0H1.75C1.41848 0 1.10054 0.158036 0.866116 0.43934C0.631696 0.720645 0.5 1.10218 0.5 1.5C0.5 1.89782 0.631696 2.27936 0.866116 2.56066C1.10054 2.84196 1.41848 3 1.75 3H9.25C9.58152 3 9.89946 2.84196 10.1339 2.56066C10.3683 2.27936 10.5 1.89782 10.5 1.5C10.5 1.10218 10.3683 0.720645 10.1339 0.43934C9.89946 0.158036 9.58152 0 9.25 0Z" fill="#878787"/>
            </svg>
          </div>
          <div class="funding-quantity-data">
            <div>{{ fundingProductsQuantity?.get(product.productId) }}</div>
          </div>
          <div class="funding-quantity-plus" @click="plusQuantity(product.productId, product.productCurrentStockQuantity)">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M9.25 4.25H6.75V1.75C6.75 1.41848 6.6183 1.10054 6.38388 0.866116C6.14946 0.631696 5.83152 0.5 5.5 0.5C5.16848 0.5 4.85054 0.631696 4.61612 0.866116C4.3817 1.10054 4.25 1.41848 4.25 1.75L4.29438 4.25H1.75C1.41848 4.25 1.10054 4.3817 0.866116 4.61612C0.631696 4.85054 0.5 5.16848 0.5 5.5C0.5 5.83152 0.631696 6.14946 0.866116 6.38388C1.10054 6.6183 1.41848 6.75 1.75 6.75L4.29438 6.70562L4.25 9.25C4.25 9.58152 4.3817 9.89946 4.61612 10.1339C4.85054 10.3683 5.16848 10.5 5.5 10.5C5.83152 10.5 6.14946 10.3683 6.38388 10.1339C6.6183 9.89946 6.75 9.58152 6.75 9.25V6.70562L9.25 6.75C9.58152 6.75 9.89946 6.6183 10.1339 6.38388C10.3683 6.14946 10.5 5.83152 10.5 5.5C10.5 5.16848 10.3683 4.85054 10.1339 4.61612C9.89946 4.3817 9.58152 4.25 9.25 4.25Z" fill="#878787"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id = "product-delivery-funding">
    <div class="delivery-first-info">
      <div class="delivery-title">기본 배송지</div>
      <div class="delivery-price">3000원</div>
    </div>
    <div class="delivery-second-info">
      <div class="delivery-title">50000원 이상 구매 시,</div>
      <div class="delivery-price">배송비 무료</div>
    </div>
    <div class="funding-big">
      <div class="funding-click-big" v-if = "projectStatus == '프로젝트 진행중'" @click="goFunding">펀딩하기</div>
      <div class="funding-click-big"  v-else-if = "projectStatus == '프로젝트 성공'">펀딩 종료</div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import type { Product } from '@/services/types/ProjectResponse';
import type { FundingProductsRequest } from '@/services/types/FundingRequest';
import { useProjectStore } from '@/store/ProjectStore';
import { ref, watch, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

const projectStore = useProjectStore();
const router = useRouter();

const products = ref<Array<Product>>([]);
const projectId = ref<number>(0);
const projectStatus = ref<string>('');
const fundingProductsQuantity = ref<Map<number, number>>(new Map());
const lotdealDueTime = ref<string>('');

const setting = () => {
  projectId.value = projectStore.projectDetails.projectId;
  projectStatus.value = projectStore.projectDetails.projectStatus;
  products.value = projectStore.projectDetails.products;
  lotdealDueTime.value = projectStore.projectDetails.lotdealDueTime;

  products.value.forEach(product => {
    fundingProductsQuantity.value?.set(product.productId, 0);
  });
}

const minusQuantity = (productId: number) => {
  const currentQuantity = fundingProductsQuantity.value?.get(productId);

  if (currentQuantity != undefined && currentQuantity > 0) {
    fundingProductsQuantity.value?.set(productId, (currentQuantity - 1));
  }
}

const plusQuantity = (productId: number, productCurrentStockQuantity: number) => {
  const currentQuantity = fundingProductsQuantity.value?.get(productId);
  if (currentQuantity != undefined && currentQuantity < productCurrentStockQuantity) {
    fundingProductsQuantity.value?.set(productId, (currentQuantity + 1));
  }
}

const goFundingPage = (projectId:number, fundingProducts: Array<FundingProductsRequest>) => {

  router.push({
    name: 'funding',
    state: {
      projectId: projectId,
      products: JSON.stringify(fundingProducts)
    },
  })
}

const goFunding = () => {

  const fundingProducts: Array<FundingProductsRequest> = [];
    
  products.value.forEach(product => {

    const quantity = fundingProductsQuantity.value.get(product.productId);
    if (quantity != undefined && quantity > 0) {
      fundingProducts.push({
        productId: projectId.value,
        productFundingPrice: product.productPrice,
        productName: product.productName,
        productDescription: product.productDescription,
        productFundingQuantity: quantity
      })
    }
  });

  if (fundingProducts.length !=0 ) {
    goFundingPage(projectId.value, fundingProducts);
  } else {
    alert("수량을 선택해주세요.")
  }
}

onBeforeMount(() => {
  setting();
});

watch(() => projectStore.projectDetails.projectId, (newProjectId) => {
  if (newProjectId !== 0) {
    setting();
  }
});


</script>

<style scoped>
@import '@/assets/css/product-info.css';



</style>