<template>
  <section class="w-full">
    <div class="bg-[#000425] flex py-[15px] px-[20px] gap-[20px] flex-wrap lg:bg-[#FFFFFF]">
      <RouterLink to="/" class="lg:hidden flex justify-center items-center">
        <img src="/icons/arrow-left-light.svg" alt="Arrow Left Icon" class="cursor-pointer w-[16px]">
      </RouterLink>
      <RouterLink to="/" class="hidden justify-center items-center lg:flex">
        <img src="/icons/arrow-left-dark.svg" alt="Arrow Left Icon" class="cursor-pointer w-[20px]">
      </RouterLink>

      <h4 class="text-[#FFFFFF] text-sm font-bold lg:text-xl lg:text-[#222222] Poppins">
        Resumen de compra
      </h4>
    </div>

    <ul class="w-full px-[20px] mt-[50px] mb-[30px] flex flex-col gap-y-[50px] min-[320px]:gap-y-[20px]">
      <li v-for="course in coursesResume" :key="course.id"
        class="grid grid-cols-[100%] gap-x-[20px] gap-y-[20px] min-[320px]:grid-cols-[133px_auto] min-[550px]:grid-cols-[133px_auto_auto]">
        <picture class="flex w-[100%] h-[100%] items-center">
          <img :src="course.imagen" :alt="course.nombre" class="w-full rounded-[5px]">
        </picture>

        <div class="flex flex-col justify-between">
          <div class="flex flex-col mb-[12px]">
            <p class="text-[#222222] font-bold text-xs mb-[8px] min-[550px]:text-base Roboto">
              {{ course.nombre }}
            </p>
            <span v-if="course.descuento" class="text-[#5640FF] font-bold text-xs min-[550px]:text-sm Roboto">
              Dto. {{ course.descuento }}%
            </span>
            <span v-if="course.regalo" class="text-[#222222] text-xs min-[550px]:text-sm Roboto">
              Regalo para: {{ course.regalo }}
            </span>
            <span class="text-[#5640FF] font-bold text-xs min-[550px]:text-sm Roboto">
              {{ course.cantidad }}
            </span>
          </div>

          <div class="flex justify-end gap-[5px] flex-wrap">
            <span class="text-[#222222] font-bold text-xs min-[550px]:hidden Poppins">
              {{ formatPrice(course.precio * course.cantidad) }}
            </span>
          </div>
        </div>

        <div class="hidden min-[550px]:flex min-[550px]:justify-end">
          <span class="text-[#222222] font-bold text-base Poppins">
            {{ formatPrice(course.precio * course.cantidad) }}
          </span>
        </div>
      </li>
    </ul>

    <div
      class="flex justify-between px-[20px] flex-wrap gap-x-[20px] py-[30px] border-solid border-t-[1px] border-[#C4C4C4]">
      <span class="text-[#5640FF] text-xl font-bold Poppins">
        Precio final
      </span>
      <span class="text-[#5640FF] text-xl font-bold Poppins">
        {{ totalPriceFormatted }}
      </span>
    </div>
  </section>
</template>

<script>
import { useCartStore } from '@/stores/cart.store.js';

export default {
  data() {
    return {
      coursesResume: []
    };
  },
  async mounted() {
    try {
      await useCartStore().getProductsResume();
      this.coursesResume = useCartStore().myCourses;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString('es-PE', {
        style: 'currency',
        currency: 'PEN'
      });
    }
  },
  computed: {
    totalPriceFormatted() {
      return this.formatPrice(useCartStore().resumenSumaTotal('cursosComprados'));
    }
  }
};
</script>
