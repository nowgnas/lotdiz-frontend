import { defineStore } from "pinia";
import { ref } from 'vue';

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
