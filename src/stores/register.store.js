import { defineStore } from 'pinia';
import { useAlertStore } from '@/stores/alert.store.js';
import axios from 'axios';

export const useRegisterStore = defineStore({
  id: 'register',
  state: () => ({
    apiURL: 'https://pachatube-db.onrender.com',
    endpoint: '/usuarios'
  }),
  actions: {
    async onSubmit(newUser) {
      await axios.post(`${this.apiURL}${this.endpoint}`, newUser)
        .then(() => {
          window.location = '/login';
        })
        .catch(error => {
          console.error(`Ocurrió un error al registrarse: ${error}`);
          useAlertStore().error(`Ocurrió un error al registrarse`);
        });
    }
  }
});
