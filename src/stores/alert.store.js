import { defineStore } from 'pinia';

export const useAlertStore = defineStore({
  id: 'alert',
  state: () => ({
    alert: null,
  }),
  actions: {
    success(message) {
      this.alert = { message, border: 'bg-[#DDF3D5] border-[#9DDC86]', text: 'text-[#597151]' };
    },
    error(message) {
      this.alert = { message, border: 'bg-[#ECC8C5] border-[#D37F78]', text: 'text-[#B83C37]' };
    },
    clear() {
      this.alert = null;
    },
  },
});
