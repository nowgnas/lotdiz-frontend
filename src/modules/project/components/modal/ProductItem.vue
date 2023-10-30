<script setup lang='ts'>
import { ref } from 'vue'

const emit = defineEmits(['productItem', 'close'])

const productItem = ref({
  productName: '',
  productDescription: '',
  productPrice: 0,
  productRegisteredStockQuantity: 0
})
const close = ref('close')
const emitCloseModal = () => {
  emit('close', close)
}

const emitProductItem = () => {
  emit('close', productItem.value)
}


</script>

<template>
  <transition name='modal' appear>
    <div class='modal modal-overlay' @click.self='emitCloseModal'>
      <div class='modal-window'>
        <div class='modal-content'>
          <div class='modal-box'>
            <div class='modal-box-header'>
              <div class='modal-title'>
                <div class='text'>상품 등록</div>
              </div>
              <div class='close-icon' @click='emitCloseModal'>
                <svg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52' fill='none'>
                  <path
                    d='M41.2003 40.0506C41.3528 40.2031 41.4384 40.4098 41.4384 40.6255C41.4384 40.8411 41.3528 41.0478 41.2003 41.2003C41.0478 41.3528 40.8411 41.4384 40.6255 41.4384C40.4098 41.4384 40.2031 41.3528 40.0506 41.2003L26.0005 27.1501L11.9503 41.2003C11.7978 41.3528 11.5911 41.4384 11.3755 41.4384C11.1598 41.4384 10.9531 41.3528 10.8006 41.2003C10.6482 41.0478 10.5625 40.8411 10.5625 40.6255C10.5625 40.4098 10.6481 40.2031 10.8006 40.0506L24.8508 26.0005L10.8006 11.9503C10.6481 11.7978 10.5625 11.5911 10.5625 11.3755C10.5625 11.1598 10.6481 10.9531 10.8006 10.8006C10.9531 10.6481 11.1598 10.5625 11.3755 10.5625C11.5911 10.5625 11.7978 10.6481 11.9503 10.8006L26.0005 24.8508L40.0506 10.8006C40.1261 10.7251 40.2157 10.6652 40.3144 10.6244C40.413 10.5835 40.5187 10.5625 40.6255 10.5625C40.7322 10.5625 40.8379 10.5835 40.9366 10.6244C41.0352 10.6652 41.1248 10.7251 41.2003 10.8006C41.2758 10.8761 41.3357 10.9657 41.3765 11.0643C41.4174 11.163 41.4384 11.2687 41.4384 11.3755C41.4384 11.4822 41.4174 11.5879 41.3765 11.6866C41.3357 11.7852 41.2758 11.8748 41.2003 11.9503L27.1501 26.0005L41.2003 40.0506Z'
                    fill='black' />
                </svg>
              </div>
            </div>
            <div class='product-name-box'>
              <div class='title'>
                <div class='text'>상품 명</div>
              </div>
              <input v-model='productItem.productName' class='product-name-field' type='text' name='produdctName'
                     id='product-name'
                     placeholder='예시) 캠핑용 의자'>
            </div>
            <div class='product-description-box'>
              <div class='title'>
                <div class='text'>상품 상세 설명</div>
              </div>
              <textarea v-model='productItem.productDescription' class='description-field'
                        placeholder='상품 구성을 간결하게 설명해 주세요.' type='text'></textarea>
            </div>
            <div class='product-price-box'>
              <div class='title'>
                <div class='text'>상품 가격</div>
              </div>
              <div class='product-price-box'>
                <input v-model='productItem.productPrice' type='number' class='price-field' placeholder='0' />
              </div>
            </div>
            <div class='product-price-box'>
              <div class='title'>
                <div class='text'>상품 수량</div>
              </div>
              <div class='product-price-box'>
                <input v-model='productItem.productRegisteredStockQuantity' type='number' class='price-field'
                       placeholder='0' />
              </div>
            </div>
            <div class='product-save-box'>
              <input type='button' class='cancel-box' value='취소' @click='emitCloseModal' />
              <input type='button' class='save-box' value='추가' @click='emitProductItem' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@import "@/assets/css/projectregister/ProductItemModal.styl";
@import "@/assets/css/projectregister/ProductItemModal.css";
</style>