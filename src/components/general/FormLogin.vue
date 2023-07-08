<template>
  <section
    class="relative h-screen overflow-auto px-[20px] grid grid-cols-[100%] grid-rows-[60px_auto]">
    <div class="w-full flex justify-around pt-[20px] border-b-[1px] border-solid border-[#f8f8fa]">
      <button
        class="w-[50%] flex justify-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.16)] border-b-[5px] border-solid border-[#000425] min-[1366px]:border-[#222222]">
        <h4 class="text-[#000425] text-sm font-bold pb-[15px] min-[1366px]:text-[#222222] Poppins">
          Iniciar Sesión
        </h4>
      </button>
      <RouterLink class="w-[50%] flex justify-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.16)]" to="/register">
        <button>
          <h4 class="text-[#000425] pb-[15px] text-sm font-bold min-[1366px]:text-[#222222] Poppins">
            Registrarse
          </h4>
        </button>
      </RouterLink>
    </div>

    <div class="w-full self-center">
      <div class="mt-[32px]">
        <p class="text-xs text-center text-[#222222] mb-[15px] Roboto">Puedes iniciar sesión con:</p>
        <div class="w-full flex justify-center gap-x-[17px]">
          <button class="border-solid border-[1px] hover:bg-secondary transition duration-300 ease-in-out border-[#8b9099] rounded-[5px]">
            <img src="/icons/Facebook-icon.png" alt="Facebook Icon" class="px-[17px] py-[13px]">
          </button>
          <button class="border-solid border-[1px] border-[#8b9099] rounded-[5px] hover:bg-secondary transition duration-300 ease-in-out">
            <img src="/icons/LinkedIn-icon.png" alt="LinkedIn Icon" class="p-[13px]">
          </button>
        </div>
        <p class="text-xs text-center text-[#222222] mt-[25px] Roboto">También puedes iniciar sesión con tu correo</p>
      </div>

      <Form @submit="login" class="mt-[40px] flex flex-col" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
        <div
          class="relative w-full border-solid border-[1px] border-[#8b9099] rounded-[5px] pt-[20px] px-[15px] pb-[16px]"
          :class="{ 'border-[#F22A40]': errors.email }">
          <Field type="text" name="email" id="email" class="w-full text-xs font-bold text-[#222222] outline-0 Roboto"
            autocomplete="off" required v-model="email" />
          <label for="email" class="Roboto">
            Correo electrónico
          </label>
        </div>
        <p class="mb-[20px] text-xs text-right text-[#F22A40]">{{ errors.email }}</p>

        <div
          class="relative w-full border-solid border-[1px] border-[#8b9099] rounded-[5px] pt-[20px] px-[15px] pb-[16px] flex justify-between items-center"
          :class="{ 'border-[#F22A40]': errors.password }">
          <Field :type="typePassword" name="password" id="password"
            class="w-full text-xs font-bold text-[#222222] outline-0 Roboto" autocomplete="off" required v-model="valuePassword" />
          <label for="password" class="Roboto">
            Contraseña
          </label>
          <img class="w-[16px] h-[11px] cursor-pointer" src="/icons/show-icon.png" alt="Show Password Icon" @click="typePassword === 'password' ? typePassword = 'text' : typePassword = 'password'">
        </div>
        <p class="mb-[20px] text-xs text-right text-[#F22A40]">{{ errors.password }}</p>

        <button :disabled="isSubmitting"
          type="submit" class="mt-[30px] mb-[60px] bg-primary w-full rounded-[10px] py-[18px] text-sm font-bold text-[#ffffff] Poppins">Login</button>
        <a href="#" class="text-[#894bf5] text-sm decoration-[#894bf5] underline font-semibold self-center Poppins">¿Olvidaste tu contraseña?</a>
      </Form>
    </div>
  </section>
</template>

<script>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useLoginStore } from '@/stores/login.store.js';
import { useAlertStore } from '@/stores/alert.store.js';

export default {
  components: {
    Form,
    Field
  },
  data() {
    return {
      email: '',
      valuePassword: '',

      typePassword: 'password',

      schema: Yup.object().shape({
        email: Yup.string()
          .required('El correo es requerido.')
          .email('Ingrese un correo electrónico válido.'),
        password: Yup.string()
          .required('La contraseña es requerida.')
          .min(6, 'La contraseña de ser de al menos 6 caracteres'),
      })
    };  
  },

  methods: {
    async login() {
      const authStore = useLoginStore();
      try {
        const resp = await authStore.login(this.email, this.valuePassword)
        resp === 'Logeado' && authStore.reload()
      } catch (error) {
        console.error(error);
        console.log('Error al iniciar sesión')
        useAlertStore().error(`Ocurrió un error al iniciar sesion`);
      }
    },
  },

};
</script>

<style scoped>
label:not(label[for="accept"]) {
  font-size: 0.75rem;
  color: #c4c4c4;
  transition: all 0.5s;
  position: absolute;
  top: 20px;
  left: 15px;
}

input:not(:valid)+label:not(label[for="accept"]) {
  font-size: 0.75rem;
  color: #c4c4c4;
  top: 20px;
  left: 15px;
  transition: all 0.5s;
}

input:focus+label:not(label[for="accept"]) {
  top: 8px;
  font-size: 0.625rem;
  transition: all 0.5s;
}

input:valid+label:not(label[for="accept"]) {
  top: 8px;
  font-size: 0.625rem;
  transition: all 0.5s;
}
</style>
