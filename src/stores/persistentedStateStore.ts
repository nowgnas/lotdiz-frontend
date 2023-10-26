import { defineStore } from "pinia";
import { ref } from 'vue';

// export const usePersistentedStateStore = defineStore('persistented', {
//     state: () => {
//         return {
//             jwtToken: ref(''),
//         }
//     },
//     getters: {},
//     actions: {
//         assignJwtToken(token: string) {
//             this.jwtToken = token;
//         }
//     },
//     persist: true
// });

export const usePersistentedStateStore = defineStore(
    'persistented',
    () => {
        const jwtToken = ref('');
        return { jwtToken }
    },
    {
        persist: true,
    }
)