<script setup lang="ts">
import ContentTextInputField from "@/modules/project/components/ContentTextInputField.vue";
import {ref} from "vue";
import SaveButton from "@/modules/project/components/buttons/SaveButton.vue";
import ProjectContentTitle from "@/modules/project/components/ProjectContentTitle.vue";

const makerInputComponent = ref({
  makerEmail: {
    title: "메이커 이메일",
    placeholder: "example@email.com"
  },
  makerName: {
    title: "메이커 명",
    placeholder: "메이커 명"
  },
  contactEmail: {
    title: "문의 이메일",
    placeholder: "example@email.com"
  },
  makerPhoneNumber: {
    title: "문의 전화번호",
    placeholder: "01012345678"
  },
  makerKakaoUrl: {
    title: "카카오톡 채널 url",
    placeholder: "카카오톡 채널 url"
  },
  makerHomeUrl: {
    title: "홈페이지 url",
    placeholder: "홈페이지 url"
  },
  makerSnsUrl: {
    title: "SNS",
    placeholder: "https://instagram.com"
  }
})

const maker = ref({
  makerEmail: "",
  makerName: "",
  contactEmail: "",
  makerPhoneNumber: "",
  makerKakaoUrl: "",
  makerHomeUrl: "",
  makerSnsUrl: ""
});

const contentTitle = {
  title: "메이커 등록",
  description: "메이커를 등록해주세요."
};

const uploadProfile = ref();

const addProfile = () => {
  uploadProfile.value.click();
}
</script>

<template>
  <ProjectContentTitle :title="contentTitle"/>
  <ContentTextInputField
      @input="maker.makerEmail"
      :placeholder="makerInputComponent.makerEmail.placeholder"
      :title="makerInputComponent.makerEmail.title"
      :is-required="true"/>
  <ContentTextInputField
      @input="maker.makerName"
      :placeholder="makerInputComponent.makerName.placeholder"
      :title="makerInputComponent.makerName.title"
      :is-required="true"/>
  <div class="project-content-box">
    <div class="title">
      <div class="text">메이커 프로필 이미지</div>
    </div>
    <div class="maker-profile-register-btn" @click="addProfile">
      <div class="text">사진 등록하기</div>
    </div>
    <input type="file" ref="uploadProfile" style="display: none">
  </div>
  <ContentTextInputField
      @input="maker.contactEmail"
      :placeholder="makerInputComponent.contactEmail.placeholder"
      :title="makerInputComponent.contactEmail.title"
      :is-required="true"/>
  <ContentTextInputField
      @input="maker.makerPhoneNumber"
      :placeholder="makerInputComponent.makerPhoneNumber.placeholder"
      :title="makerInputComponent.makerPhoneNumber.title"
      :is-required="true"/>
  <ContentTextInputField
      @input="maker.makerKakaoUrl"
      :placeholder="makerInputComponent.makerKakaoUrl.placeholder"
      :title="makerInputComponent.makerKakaoUrl.title"
      :is-required="false"/>
  <ContentTextInputField
      @input="maker.makerHomeUrl"
      :placeholder="makerInputComponent.makerHomeUrl.placeholder"
      :title="makerInputComponent.makerHomeUrl.title"
      :is-required="false"/>
  <ContentTextInputField
      @input="maker.makerSnsUrl"
      :placeholder="makerInputComponent.makerSnsUrl.placeholder"
      :title="makerInputComponent.makerSnsUrl.title"
      :is-required="false"/>
  <SaveButton/>
</template>

<style scoped>
@import "../../../assets/css/projectregister/basicInformation.css";
@import "../../../assets/css/projectregister/projectRegister.css";
@import "../../../assets/css/projectregister/projectContentItem.css";
@import "../../../assets/css/projectregister/MakerRegister.css";

</style>