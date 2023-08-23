<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav :class="`${color} flex flex-row h-[60px] justify-between px-2 lg:px-20 items-center text-white`">
    <a v-if="checkout" href="/">
      <img class="h-[34px]" src="/Logo.svg" alt="Logo">
    </a>
    <RouterLink v-else to="/">
      <img class="h-[34px]" src="/Logo.svg" alt="Logo">
    </RouterLink>
    <div v-if="checkout" class="flex flex-row gap-4 relative">
      <a class="select-none hidden md:block" href="/cursos">Cursos</a>
      <a v-if="!globalStore.usuario.isLogin" class="select-none hidden md:block" href="/login">Login</a>
      <a v-if="!globalStore.usuario.isLogin" class="select-none hidden md:block" href="/register">Register</a>
      <a v-if="globalStore.usuario.isLogin" class="select-none hidden md:block" href="/mis-cursos">Mis Cursos</a>
      <a class="relative" href="/checkout">
        <span class="hidden lg:block absolute -top-4 -right-2">{{ numberCheckout }}</span>
        <CartIcon class="hidden md:block cursor-pointer" />
      </a>
      <MenuIcon @click="onMenu" v-model="menu" class="cursor-pointer md:hidden" />
      <div :class="`${menu ? 'block' : 'hidden'} bg-secondary absolute top-[2.625rem] p-4 right-0 z-50 rounded-b-lg`">
        <ul class="space-y-2">
          <li class="cursor-pointer"><a href="/register">Register</a></li>
          <li class="cursor-pointer"><a href="/login">Login</a></li>
        </ul>
      </div>
    </div>
    <div v-else class="flex flex-row gap-4 relative">
      <RouterLink class="select-none hidden md:block" to="/cursos">Cursos</RouterLink>
      <RouterLink v-if="!globalStore.usuario.isLogin" class="select-none hidden md:block" to="/login">Login</RouterLink>
      <RouterLink v-if="!globalStore.usuario.isLogin" class="select-none hidden md:block" to="/register">Registrarse</RouterLink>
      <RouterLink v-if="globalStore.usuario.isLogin" class="select-none hidden md:block" to="/mis-cursos">Mis cursos</RouterLink>
      <RouterLink to="/checkout" class="relative">
        <span class="hidden lg:block absolute -top-4 -right-2">{{ numberCheckout }}</span>
        <CartIcon class="hidden md:block cursor-pointer" />
      </RouterLink>
      <MenuIcon @click="onMenu" v-model="menu" class="cursor-pointer md:hidden" />
      <div :class="`${menu ? 'block' : 'hidden'} md:hidden bg-secondary absolute top-[2.625rem] w-32 py-4 right-0 z-50 rounded-b-lg`">
        <ul class="space-y-2 flex flex-col items-center">
          <li v-if="!globalStore.usuario.isLogin" class="cursor-pointer"><RouterLink to="/register">Register</RouterLink></li>
          <li v-if="!globalStore.usuario.isLogin" class="cursor-pointer"><RouterLink to="/login">Login</RouterLink></li>
          <li v-if="globalStore.usuario.isLogin" class="cursor-pointer"><RouterLink to="/mis-cursos">Mis cursos</RouterLink></li>
          <li class="cursor-pointer"><RouterLink to="/cursos">Cursos</RouterLink></li>
          <li class="cursor-pointer"><RouterLink class="relative" to="/checkout"><span class="md:hidden absolute -top-4 -right-2">{{ numberCheckout }}</span><CartIcon class="text-center" /></RouterLink></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import CartIcon from '../Icons/CartIcon.vue';
import MenuIcon from '../Icons/MenuIcon.vue';
import { useGlobalStore } from '@/stores/global.store.js';
import { useCartStore } from '@/stores/cart.store.js';

export default {
  props: {
    color: {
      type: String,
      default: 'bg-primary'
    },
    checkout: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CartIcon,
    MenuIcon
  },
  data(){
    return {
      menu: false,
      globalStore: useGlobalStore(),
      products: []
    }
  },
  methods: {
    onMenu() {
      this.menu ? this.menu = false : this.menu = true
    }
  },
  computed: {
    numberCheckout(){
      return useCartStore().productos?.length ?? 0;
    }
  }
}
</script>
<style>
  
</style>