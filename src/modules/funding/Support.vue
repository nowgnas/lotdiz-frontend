<template>
  <fieldset style="border: 0">
    <table>
      <tr>
        <td style="width: 20%">
          <div style="color: black; font-size: 18px">후원금 더하기 (선택)</div>
        </td>
        <td>
          <label for="supportAmount">후원금을 더하여 메이커를 응원해주세요!</label> <br/>
          <input id="supportAmount" v-model="supportAmount" placeholder="0" size="40" type="number"/> 원을 추가로
          후원합니다.
        </td>
      </tr>
      <tr>
        <td style="width: 22%">
          <div style="color: black; font-size: 18px">공개여부 (선택)</div>
        </td>
        <td>
          <p>
            서포터 목록에 서포터 이름과 결제 금액이 공개됩니다. 조용히 참여하고 싶으시다면, 비공개로
            선택해 주세요. 커뮤니티, 새소식 댓글 작성 시에는 비공개 여부와 상관없이 참여자 표시가
            노출됩니다.
          </p>
          <div style="display: flex; justify-content: space-around; margin-top: 10px; width: 75%">
            <div>
              <label style="margin: 0 auto"
              ><input
                  id="chk1"
                  v-model="invertedSupporterWithUsIsNamePublic"
                  type="checkbox"
              />이름 비공개</label
              >
            </div>
            <div>
              <label
              ><input
                  id="chk2"
                  v-model="invertedSupporterWithUsIsAmountPublic"
                  type="checkbox"
              />금액 비공개</label
              >
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <Rectangle/>
        </td>
      </tr>
    </table>
  </fieldset>
</template>

<script>
import Rectangle from './Rectangle.vue'
import {computed, ref, watch} from 'vue';
import {useFundingStore} from '@/store/FundingStore'; // 사용자 store 파일 경로에 맞게 수정


export default {
  setup() {
    const fundingStore = useFundingStore();

    const supportAmount = ref(fundingStore.fundingDetails.fundingSupportAmount);
    // supporterWithUsIsNamePublic의 상태를 반대로 가져오기
    const invertedSupporterWithUsIsNamePublic = computed({
      get: () => !fundingStore.fundingDetails.supporterWithUsIsNamePublic,
      set: (value) => {
        fundingStore.updateData({supporterWithUsIsNamePublic: !value});
      }
    });

    // supporterWithUsIsAmountPublic의 상태를 반대로 가져오기
    const invertedSupporterWithUsIsAmountPublic = computed({
      get: () => !fundingStore.fundingDetails.supporterWithUsIsAmountPublic,
      set: (value) => {
        fundingStore.updateData({supporterWithUsIsAmountPublic: !value});
      }
    });


    // supportAmount의 변경을 감지하고 store 업데이트
    watch(supportAmount, (newAmount) => {
      fundingStore.updateData({fundingSupportAmount: newAmount});
    });

    return {
      invertedSupporterWithUsIsNamePublic,
      invertedSupporterWithUsIsAmountPublic,
      supportAmount,
    };
  },
  components: {Rectangle}
};
</script>

<style></style>
