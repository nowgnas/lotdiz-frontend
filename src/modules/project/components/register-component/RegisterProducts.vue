<script setup lang='ts'>
import GuideComponent from '@/modules/project/components/register-component/GuideComponent.vue'
import ProjectContentTitle from '@/modules/project/components/register-component/ProjectContentTitle.vue'
import SaveButton from '@/modules/project/components/buttons/SaveButton.vue'
import { ref } from 'vue'
import ProductItem from '@/modules/project/components/modal/ProductItem.vue'
import { useProductRegisterStore } from '@/store/registerProjectStore'
import type { Product, ProductsData } from '@/services/types/ProjectRegisterType'
import { useRouter } from 'vue-router'


const showModal = ref(false)


const projectContentTitle = {
  title: '상품 등록',
  description: '서포터님들에게 제공할 상품을 입력해 주세요.'
}

const guideContent = {
  title: '상품 등록 가이드',
  key: [
    '상품 등록 수량',
    '상품 설명'
  ],
  value: [
    '각 상품별 제공할 수 있는 수량을 입력해 주세요. 제한된 수량이 모두 소진되면 이 상품을 선택할 수 없어요.',
    '각 상품에 대한 상세 설명을 작성할 수 있어요.'
  ]
}
const productsList = ref<ProductsData>({
  products: []
})
let isOpened = false
const openModal = (value: any) => {
  if (isOpened) {
    const product: Product = {
      productName: value.productName,
      productDescription: value.productDescription,
      productRegisteredStockQuantity: value.productRegisteredStockQuantity,
      productCurrentStockQuantity: value.productRegisteredStockQuantity,
      productPrice: value.productPrice
    }
    productsList.value.products.push(product)
    isOpened = false
  } else {
    isOpened = true
  }
  showModal.value = !showModal.value
}
const router = useRouter()

const emitData = () => {
  useProductRegisterStore().setProductsData({ products: productsList })
  router.push('/projects/lotdeal')
}
</script>

<template>
  <ProjectContentTitle :title='projectContentTitle' />
  <div class='product-register-box'>
    <GuideComponent :guide-content='guideContent' />
    <div class='product-register-btn' @click='openModal'>
      <div class='add-product-btn'>
        <svg xmlns='http://www.w3.org/2000/svg' width='64' height='63' viewBox='0 0 64 63' fill='none'>
          <g clip-path='url(#clip0_227_40)'>
            <path
              d='M32 0C14.6031 0 0.5 14.1031 0.5 31.5C0.5 48.8978 14.6031 63 32 63C49.3978 63 63.5 48.8978 63.5 31.5C63.5 14.1031 49.3978 0 32 0ZM32 59.1245C16.8022 59.1245 4.4375 46.6978 4.4375 31.4999C4.4375 16.3021 16.8022 3.93738 32 3.93738C47.1978 3.93738 59.5625 16.3022 59.5625 31.4999C59.5625 46.6976 47.1978 59.1245 32 59.1245ZM45.7812 29.5312H33.9688V17.7188C33.9688 16.632 33.0867 15.75 32 15.75C30.9133 15.75 30.0312 16.632 30.0312 17.7188V29.5312H18.2188C17.132 29.5312 16.25 30.4133 16.25 31.5C16.25 32.5867 17.132 33.4688 18.2188 33.4688H30.0312V45.2812C30.0312 46.368 30.9133 47.25 32 47.25C33.0867 47.25 33.9688 46.368 33.9688 45.2812V33.4688H45.7812C46.868 33.4688 47.75 32.5867 47.75 31.5C47.75 30.4133 46.868 29.5312 45.7812 29.5312Z'
              fill='#878787' />
          </g>
          <defs>
            <clipPath id='clip0_227_40'>
              <rect width='63' height='63' fill='white' transform='translate(0.5)' />
            </clipPath>
          </defs>
        </svg>
        <div>상품을 추가해 주세요.</div>
      </div>
    </div>
  </div>
  <ProductItem @close='openModal' v-if='showModal' />
  <SaveButton @click='emitData' />
</template>

<style scoped>
@import "@/assets/css/projectregister/ProductRegister.css";
</style>