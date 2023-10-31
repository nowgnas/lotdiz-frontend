import {defineStore} from 'pinia';

interface ModalState {
    showModal: boolean;
}

export const useModalStore = defineStore('modal', {
    state: (): ModalState => ({
        showModal: false,
    }),
    actions: {
        toggleModal(this: ModalState) {
            this.showModal = !this.showModal;
        },
    },
});
