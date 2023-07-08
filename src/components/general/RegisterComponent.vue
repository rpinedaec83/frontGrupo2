<template>
  <section class="relative h-screen overflow-auto px-[20px] grid grid-cols-[100%] grid-rows-[60px_auto]">
    <div class="w-full self-start flex justify-around pt-[20px] border-b-[1px] border-solid border-[#f8f8fa]">
      <RouterLink class="w-[50%] flex justify-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.16)]" to="/login">
        <button>
          <h4 class="text-[#000425] pb-[15px] text-sm font-bold min-[1366px]:text-[#222222] Poppins">
            Iniciar Sesión
          </h4>
        </button>
      </RouterLink>
      <button
        class="w-[50%] flex justify-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.16)] border-b-[5px] border-solid border-[#000425] min-[1366px]:border-[#222222]">
        <h4 class="text-[#000425] text-sm font-bold pb-[15px] min-[1366px]:text-[#222222] Poppins">
          Registrarse
        </h4>
      </button>
    </div>

    <div class="w-full self-center">
      <div class="mt-[32px]">
        <p class="text-xs text-center text-[#222222] mb-[15px] Roboto">
          Puedes registrarte con:
        </p>
        <div class="w-full flex justify-center gap-x-[17px]">
          <button
            class="border-solid border-[1px] border-[#8b9099] rounded-[5px] hover:bg-secondary transition duration-300 ease-in-out">
            <img src="/icons/Facebook-icon.png" alt="Facebook Icon" class="px-[17px] py-[13px]">
          </button>
          <button
            class="border-solid border-[1px] border-[#8b9099] rounded-[5px] hover:bg-secondary transition duration-300 ease-in-out">
            <img src="/icons/LinkedIn-icon.png" alt="LinkedIn Icon" class="p-[13px]">
          </button>
        </div>
        <p class="text-xs text-center text-[#222222] mt-[25px] Roboto">
          También puedes registrarte con tu correo
        </p>
      </div>

      <Form @submit="registerStore.onSubmit(newUser)" class="mt-[40px]" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
        <div
          class="relative w-full border-solid border-[1px] border-[#8b9099] rounded-[5px] pt-[20px] px-[15px] pb-[16px]"
          :class="{ 'border-[#F22A40]': errors.name }">
          <Field type="text" name="name" id="name" class="w-full text-xs font-bold text-[#222222] outline-0 Roboto"
            autocomplete="off" required v-model="newUser.name" />
          <label for="name" class="Roboto">
            Nombres
          </label>
        </div>
        <p class="mb-[20px] text-xs text-right text-[#F22A40]">{{ errors.name }}</p>

        <div
          class="relative w-full border-solid border-[1px] border-[#8b9099] rounded-[5px] pt-[20px] px-[15px] pb-[16px]"
          :class="{ 'border-[#F22A40]': errors.lastname }">
          <Field name="lastname" id="lastname" class="w-full text-xs font-bold text-[#222222] outline-0 Roboto"
            autocomplete="off" required v-model="newUser.lastname" />
          <label for="lastname" class="Roboto">
            Apellidos
          </label>
        </div>
        <p class="mb-[20px] text-xs text-right text-[#F22A40]">{{ errors.lastname }}</p>

        <div
          class="relative w-full border-solid border-[1px] border-[#8b9099] rounded-[5px] pt-[20px] px-[15px] pb-[16px]"
          :class="{ 'border-[#F22A40]': errors.email }">
          <Field type="text" name="email" id="email" class="w-full text-xs font-bold text-[#222222] outline-0 Roboto"
            autocomplete="off" required v-model="newUser.email" />
          <label for="email" class="Roboto">
            Correo electrónico
          </label>
        </div>
        <p class="mb-[20px] text-xs text-right text-[#F22A40]">{{ errors.email }}</p>

        <div
          class="relative w-full border-solid border-[1px] border-[#8b9099] rounded-[5px] pt-[20px] px-[15px] pb-[16px] flex justify-between items-center"
          :class="{ 'border-[#F22A40]': errors.password01 }">
          <Field :type="typePassword01" name="password01" id="password01"
            class="w-full text-xs font-bold text-[#222222] outline-0 Roboto" autocomplete="off" required v-model="newUser.password" />
          <label for="password01" class="Roboto">
            Contraseña
          </label>
          <img class="w-[16px] h-[11px] cursor-pointer" src="/icons/show-icon.png" alt="Show Password Icon" @click="typePassword01 === 'password' ? typePassword01 = 'text' : typePassword01 = 'password'">
        </div>
        <p class="mb-[20px] text-xs text-right text-[#F22A40]">{{ errors.password01 }}</p>

        <div
          class="relative w-full border-solid border-[1px] border-[#8b9099] rounded-[5px] pt-[20px] px-[15px] pb-[16px] flex justify-between items-center"
          :class="{ 'border-[#F22A40]': errors.password02 }">
          <Field :type="typePassword02" name="password02" id="password02"
            class="w-full text-xs font-bold text-[#222222] outline-0 Roboto" autocomplete="off" required />
          <label for="password02" class="Roboto">
            Repite contraseña
          </label>
          <img class="w-[16px] h-[11px] cursor-pointer" src="/icons/show-icon.png" alt="Show Password Icon" @click="typePassword02 === 'password' ? typePassword02 = 'text' : typePassword02 = 'password'">
        </div>
        <p class="mb-[20px] text-xs text-right text-[#F22A40]">{{ errors.password02 }}</p>

        <div class="flex items-center">
          <Field type="checkbox" name="acceptTerms" id="acceptTerms" class="my-checkbox" required /><label
            for="acceptTerms" class="text-xs text-[#222222] ml-[10px]">
            Acepto <a href="/terminos" class="font-bold underline" target="_blank"> Términos y Condiciones</a>
          </label>
        </div>
        <p class="mb-[20px] text-xs text-right text-[#F22A40]">{{ errors.acceptTerms }}</p>

        <button :disabled="isSubmitting"
          class="mt-[30px] mb-[60px] bg-[#5640FF] w-full rounded-[10px] py-[18px] text-sm font-bold text-[#ffffff] Poppins">
          Registrarse
        </button>
      </Form>
    </div>
  </section>
</template>

<script>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useRegisterStore } from '@/stores/register.store.js';

export default {
  components: {
    Form,
    Field
  },
  data() {
    return {
      newUser: {
        name: '',
        lastname: '',
        email: '',
        password: ''
      },

      typePassword01: 'password',
      typePassword02: 'password',

      registerStore: useRegisterStore(),

      schema: Yup.object().shape({
        name: Yup.string()
          .required('El nombre es requerido.'),
        lastname: Yup.string()
          .required('El apellido es requerido.'),
        email: Yup.string()
          .required('El correo es requerido.')
          .email('Ingrese un correo electrónico válido.'),
        password01: Yup.string()
          .required('La contraseña es requerida.')
          .min(6, 'La contraseña de ser de al menos 6 caracteres'),
        password02: Yup.string()
          .required('Por favor, confirme la contraseña.')
          .oneOf([Yup.ref('password01'), null], 'Las contraseñas deben coincidir'),
        acceptTerms: Yup.string()
          .oneOf(['off'], 'Debes aceptar los Términos y Condiciones'),
      })
    };
  },
};
</script>

<style scoped>
label:not(label[for="acceptTerms"]) {
  font-size: 0.75rem;
  color: #c4c4c4;
  transition: all 0.3s;
  position: absolute;
  top: 20px;
  left: 15px;
}

input:not(:valid)+label:not(label[for="acceptTerms"]) {
  font-size: 0.75rem;
  color: #c4c4c4;
  top: 20px;
  left: 15px;
  transition: all 0.3s;
}

input:focus+label:not(label[for="acceptTerms"]) {
  top: 8px;
  font-size: 0.625rem;
  transition: all 0.3s;
}

input:valid+label:not(label[for="acceptTerms"]) {
  top: 8px;
  font-size: 0.625rem;
  transition: all 0.3s;
}

.my-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #222222;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}

.my-checkbox:checked {
  width: 19px;
  height: 19px;
  background-color: #222222;
  border: 3px solid #ffffff;
  box-shadow: 0 0 0 1px #222222;
  border-radius: 2px;
}</style>
