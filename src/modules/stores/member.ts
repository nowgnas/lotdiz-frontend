import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMemberStore = defineStore({
    id: 'member',
    state: () => ({
        activeNo: ref(1),
        username: ref(''),
        memberPassword: ref(''),
        memberName: ref(''),
        memberPhoneNumber: ref(''),
        memberPrivacyAgreement: ref(false),
    }),
    actions: {
        increaseActiveNo() {
            this.activeNo++;
        },

        decreaseActiveNo() {
            this.activeNo--;
        },

        getActiveNo() {
            return this.activeNo;
        },
        assignUsername(username: string) {
            this.username = username;
        },
        assignMemberPassword(memberPassword: string) {
            this.memberPassword = memberPassword;
        },
        assignMemberName(memberName: string) {
            this.memberName = memberName;
        },
        assignMemberPhoneNumber(memberPhoneNumber: string) {
            this.memberPhoneNumber = memberPhoneNumber;
        },
        assignMemberPrivacyAgreement(memberPrivacyAgreement: boolean) {
            this.memberPrivacyAgreement = memberPrivacyAgreement;
        },
    },
});