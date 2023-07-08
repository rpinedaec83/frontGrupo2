import { defineStore } from 'pinia';

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    usuario: JSON.parse(localStorage.getItem('USUARIO')) ?? { isLogin: false },
  }),
  actions: {
    setLogin(value = false) {
      const store = {
        isLogin: value,
      }
      localStorage.setItem('USUARIO', JSON.stringify(store))
    },
    getLogin(){
      return localStorage.getItem('usuario')
    }
  }
});
