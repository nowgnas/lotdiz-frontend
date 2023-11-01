<template>
  <div class="sec-content">
    <div id="sec-agreement-box">
            <pre>
<div style="text-align: center;"><B>개인정보 수집 및 이용 동의서</B></div>

<B>[Lotdiz]</B>

<B>1. 개인정보 수집 및 이용 목적</B>
본 동의서는 [Lotdiz] (이하 "서비스")에서 제공하는 서비스와 관련하여 귀하의 개인정보를 수집 및 이용하기 위한 목적으로 작성되었습니다.
개인정보의 수집 및 이용은 다음과 같은 목적을 가집니다.

회원 가입 및 관리
서비스 제공, 유지, 개선 및 개인 맞춤 서비스 제공
문의, 요청 및 문제 해결에 대한 응답
법적 의무의 준수 및 분쟁 해결
서비스 개선 및 개인 맞춤 광고 및 마케팅 전략 수립

<B>2. 수집하는 개인정보 항목</B>
서비스를 제공하기 위해 다음과 같은 개인정보 항목을 수집할 수 있습니다:
이름
연락처 정보 (이메일 주소, 전화번호)
회원 가입 정보 (아이디, 비밀번호)
서비스 이용 기록, 로그 데이터 및 쿠키 정보
기타 서비스 제공을 위해 필요한 정보

<B>3. 개인정보 보유 및 이용 기간</B>
귀하의 개인정보는 서비스 제공 및 관리 목적을 달성한 후 즉시 삭제되거나 파기됩니다. 그러나 관련 법규 또는 규정에 따라 정보 보관이 필요한 경우,
해당 기간 동안에 한하여 보관됩니다.

<B>4. 개인정보 제공 동의 거부 권리</B>
귀하는 개인정보 제공에 대한 동의를 거부할 권리가 있으며, 이 경우에도 서비스의 일부 기능 이용이 제한될 수 있습니다.

<B>5. 개인정보 보호 및 보안 조치</B>
귀하의 개인정보를 보호하기 위해 합리적인 보안 조치를 취하며, 귀하의 정보를 무단 액세스, 누출 또는 변경으로부터 보호하기 위해 노력합니다.

<B>6. 권리 행사와 개인정보 관련 문의</B>
귀하의 개인정보에 관한 접근, 수정, 삭제 및 처리 중지 요청을 하고자 할 경우, 010-1111-1111에 문의하실 수 있습니다.
본 개인정보 수집 및 이용 동의서에 동의함으로써 귀하는 서비스 이용에 필요한 개인정보 수집 및 이용에 동의하는 것으로 간주됩니다.
            </pre>
    </div>
    <div id="sec-agreement-check">
      <input type="checkbox" name="agreement-check" id="input-agreement-check" />
      <label for="input-agreement-check"> 개인정보 수집 및 이용에 동의합니다</label>
    </div>
  </div>
  <div class="sec-btn">
    <div class="btn-next">
      <router-link to="/member/sign-up/basic-info"
        ><button @click="validCheck">
          <span style="color: black; padding-right: 5px">Lotdiz</span> 회원가입하기
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMemberStore } from '../../stores/member';
import { nextTick } from 'vue';

const memberStore = useMemberStore()

const validCheck = async(event: any) => {
  await nextTick(); // DOM이 준비될 때까지 대기
  let checkbox = document.getElementById('input-agreement-check') as HTMLInputElement | null;
  if (!checkbox?.checked) {
    alert('약관에 동의해야 합니다.');
    event.preventDefault();
  } else {
    memberStore.assignMemberPrivacyAgreement(true);
    memberStore.increaseActiveNo();
  }
}
</script>

<style scoped>
@import '@/assets/css/member/sign-up-common.css';
@import '@/assets/color.css';
@import '@/assets/font.css';

@import '@/assets/css/member/sign-up-agreement.css';
</style>
