<template>
  <div id='support-signature-section'>
    <div id='support-signature-title-write-section'>
      <div class='support-signature-title-box'>
        <div class='support-signature-logo'>
          <img alt='support-signature-logo' src='/common/clapping-icon.png'>
        </div>
        <div class='support-signature-title'>지지서명</div>
      </div>
      <div class='support-signature-write-box'>
        <div class='support-signature-write-logo'>
          <img alt='support-signature-write-logo' src='/common/pencil-icon.png'>
        </div>
        <div class='support-signature-write-title' @click='clickCreateRequest'>글 쓰기</div>
      </div>
    </div>

    <div id='support-signature-contents-section' v-if='isContents' >

      <div class='support-signature-contents-box' v-for='signature in supportSignatureResponseList'>
        <div class='support-signature-support-info-box'>
          <div class='support-signature-support-info-box-image-name'>
            <div class='support-signature-profile-image-box'>
              <img class='support-signature-profile-image' :src='signature.supporterImageUrl'
                   :alt='signature.supporterImageUrl'>
            </div>

            <div class='support-signature-name-data'>
              {{ signature.supporterName }}
            </div>
          </div>
          <div class='support-signature-modify' v-if='signature.isSignatureOfLoggedUser' @click='clickModifyRequest(signature.supportSignatureContent)'>
            <img class='support-signature-modify-icon' src='/common/modify-icon.svg'
                 alt='modify-icon'>
            수정
          </div>
        </div>
        <div class='support-signature-created-at-data'>
          {{ new Date(signature.createdAt).toLocaleString() }}
        </div>
        <div class='support-signature-contents'>
          {{ signature.supportSignatureContent }}
        </div>
      </div>

    </div>

    <div class='support-signature-non-contents-box' v-else>
      작성된 지지서명이 존재하지 않습니다.
    </div>
  </div>

  <div class='support-signature-modal-wrap' v-show='modalCheck'>
    <div class='support-signature-modal-container'>

      <div class='support-signature-modal-close' @click='modalControl'>
        <svg xmlns='http://www.w3.org/2000/svg' width='11' height='12' viewBox='0 0 11 12' fill='none'>
          <path
            d='M6.87215 6L10.7129 2.15926C10.8952 1.97731 10.9977 1.73039 10.9979 1.47283C10.9982 1.21528 10.8961 0.968178 10.7141 0.785898C10.5321 0.603617 10.2852 0.501085 10.0277 0.500858C9.77011 0.50063 9.52302 0.602726 9.34074 0.784685L5.5 4.62542L1.65926 0.784685C1.47698 0.602404 1.22976 0.5 0.971974 0.5C0.714191 0.5 0.466965 0.602404 0.284685 0.784685C0.102404 0.966965 0 1.21419 0 1.47197C0 1.72976 0.102404 1.97698 0.284685 2.15926L4.12542 6L0.284685 9.84074C0.102404 10.023 0 10.2702 0 10.528C0 10.7858 0.102404 11.033 0.284685 11.2153C0.466965 11.3976 0.714191 11.5 0.971974 11.5C1.22976 11.5 1.47698 11.3976 1.65926 11.2153L5.5 7.37458L9.34074 11.2153C9.52302 11.3976 9.77024 11.5 10.028 11.5C10.2858 11.5 10.533 11.3976 10.7153 11.2153C10.8976 11.033 11 10.7858 11 10.528C11 10.2702 10.8976 10.023 10.7153 9.84074L6.87215 6Z'
            fill='black' />
        </svg>
      </div>
      <div class='support-signature-modal-title-box'>
        <div class='support-signature-modal-title-details'>
          <div class='support-signature-modal-title-contents'>
            친구에게 소개해 보세요
          </div>
          <div class='support-signature-modal-title-contents-details'>
            지지서명으로 메이커에게 힘이 되어 주세요!
          </div>
        </div>

        <div class='support-signature-modal-speech-bubble'>
          <svg class='support-signature-modal-speech-bubble-vector' xmlns='http://www.w3.org/2000/svg' width='132'
               height='98' viewBox='0 0 132 98' fill='none'>
            <path
              d='M66.0013 0.00124384C19.2787 0.181641 0.353093 19.2952 0.00261912 43.0819C-0.194523 56.3797 10.7249 67.8564 27.4601 74.849C35.6196 79.3761 25.9049 94.2117 18.1287 98C18.1287 98 45.619 96.5311 53.1981 81.3347C57.3818 81.8158 61.6861 82.0649 66.0999 82.0649C102.549 82.0649 132 66.8772 132 43.0819C132 19.2866 113.173 -0.179154 66.0013 0.00124384Z'
              fill='#121212' />
          </svg>
          <div class='support-signature-modal-speech-bubble-contents'>
            지지서명 작성 후, 펀딩 시, 1% 할인 적용!
          </div>
        </div>
      </div>
      <textarea v-model='inputSupportSignatureContents' placeholder='입력' class='support-signature-modal-input-box' />

      <div class='support-signature-modal-condition-box'></div>
      <div class='support-signature-modal-write-button-box'>
        <div class='support-signature-modal-write-button'>
          <div class='support-signature-modal-write-button-logo'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M15.1794 2.32266V0.774221C15.1794 0.568885 15.2683 0.371959 15.4265 0.226764C15.5846 0.0815695 15.7991 0 16.0228 0C16.2465 0 16.461 0.0815695 16.6192 0.226764C16.7774 0.371959 16.8662 0.568885 16.8662 0.774221V2.32266C16.8662 2.528 16.7774 2.72492 16.6192 2.87012C16.461 3.01531 16.2465 3.09688 16.0228 3.09688C15.7991 3.09688 15.5846 3.01531 15.4265 2.87012C15.2683 2.72492 15.1794 2.528 15.1794 2.32266ZM18.9568 3.96788C19.0894 4.04112 19.2416 4.07899 19.3964 4.07724C19.5411 4.07745 19.6835 4.04346 19.8098 3.97855C19.9361 3.91363 20.042 3.81997 20.1175 3.70658L20.9609 2.43783C21.0195 2.35101 21.0589 2.25438 21.0767 2.15352C21.0946 2.05266 21.0904 1.94955 21.0647 1.85016C21.0389 1.75076 20.9919 1.65704 20.9264 1.57438C20.861 1.49173 20.7784 1.42179 20.6833 1.36859C20.5883 1.3154 20.4827 1.27999 20.3727 1.26442C20.2627 1.24886 20.1504 1.25343 20.0424 1.27789C19.9343 1.30234 19.8326 1.34619 19.743 1.40691C19.6535 1.46763 19.578 1.54402 19.5208 1.63167L18.6774 2.89946C18.6189 2.98635 18.5797 3.083 18.5621 3.18385C18.5445 3.28469 18.5488 3.38774 18.5748 3.48705C18.6008 3.58636 18.6479 3.67997 18.7135 3.7625C18.779 3.84502 18.8617 3.91482 18.9568 3.96788ZM23.958 5.18631C23.9241 5.08952 23.8697 4.99983 23.7979 4.92235C23.7262 4.84487 23.6385 4.78113 23.5399 4.73475C23.4413 4.68838 23.3338 4.66029 23.2234 4.65209C23.1129 4.64388 23.0019 4.65573 22.8964 4.68694L21.3151 5.15631C21.1234 5.21258 20.9599 5.32994 20.8542 5.48718C20.7485 5.64442 20.7075 5.83119 20.7387 6.01373C20.7699 6.19627 20.8712 6.36255 21.0243 6.48253C21.1773 6.60252 21.3721 6.66829 21.5734 6.66798C21.6614 6.66767 21.7489 6.65494 21.8327 6.63023L23.4141 6.16086C23.52 6.1297 23.6181 6.07961 23.7029 6.01348C23.7876 5.94735 23.8573 5.86649 23.9078 5.77555C23.9584 5.68461 23.9888 5.58539 23.9975 5.4836C24.0061 5.38181 23.9927 5.27946 23.958 5.18244V5.18631ZM20.7953 9.05161C21.7278 10.524 22.1033 12.2383 21.8632 13.9271C21.6231 15.6159 20.781 17.1844 19.4681 18.3877C19.0125 19.8491 18.0985 21.1551 16.8398 22.1428C15.5812 23.1305 14.0337 23.7562 12.3903 23.942C10.7469 24.1277 9.08023 23.8653 7.59819 23.1874C6.11616 22.5094 4.8843 21.446 4.0562 20.1297L0.366376 14.2621C0.14109 13.9034 0.0157192 13.4992 0.0013847 13.0853C-0.0129498 12.6715 0.0841947 12.2608 0.284202 11.8896C0.48421 11.5185 0.780898 11.1984 1.14795 10.9577C1.51501 10.7171 1.94109 10.5633 2.3884 10.51L1.9667 9.83841C1.74491 9.48574 1.61968 9.08892 1.60176 8.68203C1.58383 8.27514 1.67376 7.87033 1.8638 7.50237C2.05385 7.13441 2.33835 6.81429 2.69286 6.5695C3.04737 6.32471 3.4613 6.16257 3.89912 6.09699C3.67952 5.54193 3.67959 4.93365 3.8993 4.37863C4.11902 3.82361 4.54439 3.35721 5.10095 3.06108C5.61129 2.79158 6.20247 2.67978 6.78729 2.74216C7.37211 2.80454 7.91961 3.0378 8.34904 3.40754C8.61207 3.059 8.96677 2.77713 9.38021 2.5881C9.79366 2.39907 10.2524 2.30901 10.7139 2.32629C11.1754 2.34357 11.6247 2.46763 12.02 2.68695C12.4153 2.90626 12.7438 3.21372 12.975 3.58077L14.2401 5.59278C14.514 5.26353 14.8722 5.00145 15.283 4.82983C15.6937 4.6582 16.1443 4.58232 16.5946 4.60894C17.045 4.63556 17.4812 4.76384 17.8646 4.9824C18.248 5.20097 18.5666 5.50304 18.7923 5.86182L20.7953 9.05161ZM9.68898 5.32277L10.3141 6.31667C10.5229 6.49168 10.7007 6.69541 10.8413 6.92057L12.1063 8.9287C12.5221 8.43297 13.1229 8.09587 13.7931 7.98222L11.5149 4.35499C11.3751 4.13272 11.1448 3.97053 10.8748 3.90411C10.6047 3.83768 10.317 3.87246 10.0748 4.00079C9.8327 4.12912 9.65602 4.3405 9.58366 4.58842C9.5113 4.83634 9.54918 5.10049 9.68898 5.32277ZM5.55848 5.72439L6.18364 6.71927L6.21738 6.74733C6.42191 6.47548 6.68291 6.24338 6.9854 6.06435C7.28788 5.88532 7.6259 5.76288 7.98006 5.70407L7.38442 4.75662C7.28018 4.59084 7.12474 4.45715 6.93774 4.37247C6.75074 4.28779 6.54059 4.25592 6.33385 4.28089C6.12712 4.30585 5.9331 4.38653 5.77632 4.51273C5.61953 4.63892 5.50704 4.80496 5.45306 4.98985C5.41675 5.1126 5.40738 5.24074 5.42547 5.36684C5.44357 5.49293 5.48878 5.61447 5.55848 5.72439ZM17.8772 17.8622C18.1088 17.0767 18.1684 16.2568 18.0526 15.45C17.9368 14.6432 17.6478 13.8654 17.2025 13.1618L15.1995 9.9768C15.0632 9.7624 14.8425 9.60425 14.5828 9.53503C14.3231 9.46581 14.0444 9.49083 13.8043 9.6049C13.5642 9.71897 13.381 9.91339 13.2925 10.148C13.2041 10.3825 13.2173 10.6393 13.3292 10.8652L14.5332 12.7746C14.645 12.9526 14.6753 13.1641 14.6172 13.3626C14.5592 13.5611 14.4177 13.7302 14.2238 13.8329C14.0299 13.9356 13.7995 13.9633 13.5833 13.9101C13.3671 13.8568 13.1828 13.7269 13.071 13.5489L9.38114 7.69672C9.23638 7.4863 9.00888 7.33515 8.74589 7.27469C8.48291 7.21423 8.20466 7.2491 7.96894 7.37205C7.73323 7.495 7.55818 7.69659 7.48015 7.93493C7.40212 8.17327 7.42711 8.43005 7.54993 8.65192L10.1465 12.7746C10.2054 12.8628 10.2444 12.9608 10.2614 13.0631C10.2783 13.1653 10.2728 13.2696 10.2451 13.3698C10.2174 13.47 10.1681 13.5641 10.1001 13.6465C10.0322 13.729 9.94693 13.7981 9.8494 13.8498C9.75188 13.9015 9.64406 13.9348 9.53231 13.9476C9.42056 13.9605 9.30713 13.9526 9.19873 13.9246C9.09033 13.8965 8.98915 13.8488 8.90116 13.7843C8.81317 13.7198 8.74014 13.6397 8.6864 13.5489L5.25275 8.09641C5.18404 7.98546 5.09209 7.88808 4.98221 7.80989C4.87233 7.73169 4.74669 7.67421 4.61251 7.64077C4.47833 7.60733 4.33828 7.59859 4.20041 7.61504C4.06253 7.63149 3.92957 7.67281 3.80916 7.73663C3.68876 7.80045 3.58329 7.8855 3.49884 7.98688C3.41439 8.08827 3.35261 8.20399 3.31708 8.32738C3.28154 8.45077 3.27294 8.57939 3.29177 8.70585C3.31061 8.8323 3.35651 8.95408 3.42682 9.06419L7.22207 15.0992C7.27744 15.1873 7.31338 15.2845 7.32783 15.3854C7.34228 15.4862 7.33495 15.5886 7.30627 15.6869C7.27758 15.7851 7.2281 15.8772 7.16066 15.9578C7.09321 16.0385 7.00912 16.1062 6.91317 16.157C6.81723 16.2079 6.71132 16.2408 6.60149 16.2541C6.49166 16.2674 6.38006 16.2606 6.27306 16.2343C6.16606 16.208 6.06576 16.1626 5.97788 16.1006C5.89001 16.0387 5.81627 15.9615 5.7609 15.8735L3.65243 12.5211C3.51163 12.3006 3.28156 12.1402 3.01242 12.0749C2.74328 12.0096 2.45692 12.0446 2.21583 12.1724C1.97474 12.3002 1.79849 12.5103 1.72555 12.757C1.65261 13.0036 1.6889 13.2667 1.82649 13.4889L5.51631 19.3565C6.18351 20.4175 7.1785 21.2731 8.37543 21.815C9.57237 22.3569 10.9175 22.5608 12.2406 22.4008C13.5638 22.2409 14.8056 21.7243 15.8089 20.9164C16.8122 20.1085 17.532 19.0457 17.8772 17.8622ZM19.3342 9.82196L17.3311 6.63701C17.1903 6.41654 16.9603 6.25615 16.6911 6.19083C16.422 6.1255 16.1356 6.16056 15.8945 6.28834C15.6534 6.41612 15.4772 6.62626 15.4042 6.87289C15.3313 7.11952 15.3676 7.38262 15.5052 7.60478L16.1282 8.59675C16.3369 8.77255 16.5147 8.9769 16.6554 9.20258L18.6584 12.3875C19.2212 13.2805 19.5843 14.2675 19.7263 15.2909C20.1239 14.4131 20.2953 13.4629 20.2273 12.5143C20.1592 11.5657 19.8536 10.6443 19.3342 9.82196Z'
                fill='white' />
            </svg>
          </div>
          <div class='support-signature-modal-write-button-contents' @click='clickRequest'>지지서명 하기
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script setup lang='ts'>
import { ref, onBeforeMount } from 'vue';
import { getSupportSignature, createSupportSignature, modifySupportSignature } from '@/services/api/ProjectService';
import type { SupportSignatureResponse, SupportSignature } from '@/services/types/ProjectResponse';
import type { InputSupportSignatureContentsRequest } from '@/services/types/ProjectRequest';
import { useProjectStore } from '@/store/ProjectStore';

const projectStore = useProjectStore();

const projectId = ref<number>(-1);
const totalPages = ref<number>(0);
const supportSignatureResponseList = ref<Array<SupportSignature>>([]);
const isContents = ref<boolean>(false);
const modalCheck = ref<boolean>(false);
const creationStatus = ref<string>('');

const inputSupportSignatureContents = ref<string>('');

const modalControl = () => {
  modalCheck.value = !modalCheck.value;
}

const clickRequest = () => {
  if (creationStatus.value == 'create') {
    modalControl();
    createSupportSignatureRequest();
  } else if (creationStatus.value == 'modify') {
    modalControl();
    modifySupportSignatureRequest();
  }
}

const clickCreateRequest = () =>  {
  creationStatus.value = 'create';
  modalControl();
}

const clickModifyRequest = (originalContents: string) =>  {
  creationStatus.value = 'modify';
  inputSupportSignatureContents.value = originalContents;
  modalControl();
}

const createSupportSignatureRequest = async () => {
  const inputSupportSignatureContentsRequest: InputSupportSignatureContentsRequest = { supportSignatureContents: inputSupportSignatureContents.value };
  try {
    await createSupportSignature(projectId.value, inputSupportSignatureContentsRequest);
    inputSupportSignatureContents.value = '';
    await getSupportSignatureRequest(projectId.value, 0, 6, 'createdAt,desc');
  } catch (error) {
    alert("지지서명 작성에 실패하였습니다.");
  }
}

const modifySupportSignatureRequest= async () => {
  const inputSupportSignatureContentsRequest: InputSupportSignatureContentsRequest = { supportSignatureContents: inputSupportSignatureContents.value };
  try {
    await modifySupportSignature(projectId.value, inputSupportSignatureContentsRequest);
    inputSupportSignatureContents.value = '';
    await getSupportSignatureRequest(projectId.value, 0, 6, 'createdAt,desc');
  } catch (error) {
    alert("지지서명 수정에 실패하였습니다.");
  }

}

const getSupportSignatureRequest = async (projectId: number, page: number, size: number, sort: string) => {
  try {
    const response: SupportSignatureResponse<SupportSignature> = await getSupportSignature(projectId, page, size, sort);
    supportSignatureResponseList.value = response['supportSignatures'];
    totalPages.value = response['totalPages'];

    if (supportSignatureResponseList.value.length != 0) {
      isContents.value = true;
    }
  } catch (error) {
    console.log(error);
  }
}

onBeforeMount(async () => {
  projectId.value = projectStore.projectDetails.projectId;
  await getSupportSignatureRequest(projectId.value, 0, 6, 'createdAt,desc');
})

</script>

<style scoped>
@import '@/assets/css/project-get-support-signature.css';

</style>