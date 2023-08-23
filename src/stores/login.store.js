import { defineStore } from 'pinia';
import axios from 'axios';
import { useAlertStore } from '@/stores/alert.store.js';
import { useGlobalStore } from '@/stores/global.store.js';

export const useLoginStore = defineStore('auth', {
  state: () => ({
      isAuthenticated: false,
      user: null,
      apiURL: 'https://pachatube-db.onrender.com',
      endpoint: '/usuarios'
    }),

  actions: {
    async login(email, password) {
      const globalStore = useGlobalStore()
      try{
        const { data } = await axios.get(`${this.apiURL}${this.endpoint}?email=${email}&password=${password}`);     
        if(data[0] === undefined ){
          globalStore.setLogin()
          useAlertStore().error(`Los datos ingresados no son válidos.`);
        } else {
          this.user = data[0];
          console.log(this.user);
          globalStore.setLogin(true)
          useAlertStore().success(`Usted ha iniciado sesión con éxito.`);
          return 'Logeado';
        }
      }catch(error) {
        console.error(error);
        useAlertStore().error(`Ocurrió un error al iniciar sesion`);
        throw new Error('Error al iniciar sesión');
      }
    },

    logout() {
      this.isAuthenticated = false;
      this.user = null;
      this.$route.push('/home');
    },

    reload(){
      window.location.href = '/'
    }
  },
});