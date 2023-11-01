import { defineStore } from "pinia";

export const useHeaderStore = defineStore('header', {
  state: () => ({
    isNoHeaderPath: false,
  }),
  actions: {
    assignIsNoHeaderPath(val: boolean) {
      this.isNoHeaderPath = val;
    },
    getIsNoHeaderPath(): boolean {
      return this.isNoHeaderPath
    }
  },
});
