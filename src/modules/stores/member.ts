import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMemberStore = defineStore({
    id: 'member',
    state: () => ({
        activeNo: ref(1),
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
    },
});