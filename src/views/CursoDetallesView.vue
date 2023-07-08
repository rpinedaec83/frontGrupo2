<template>
  <header>
    <div class="">
      <Navbar />
    </div>
  </header>
  <main class="p-4 bg-gradient-to-b from-[#3015FD] to-[#7969f7] h-full lg:h-[calc(100vh-60px)]">
    <Loader v-if="!loading" />
    <div v-else class=" mx-auto">
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        <div class="flex flex-col ">
          <h1 class="text-3xl font-bold mb-4 text-center lg:text-left text-white">{{ curso.nombre }}</h1>
          <p class="text-lg text-justify lg:text-left text-gray-200">{{ curso.descripcion }}</p>
          <div class="flex flex-col lg:flex-row mt-5 gap-4">
            <button
              class="inline-block rounded bg-indigo-800 mt-10 px-9 py-3 text-sm font-bold text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-900" 
              @click="addToCart()"
            >
              Agregar al carrito
            </button>
            <button
              class="inline-block rounded bg-indigo-800 px-9 lg:mt-10 font-bold py-3 text-sm text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-900"
              @click="showCertificado = !showCertificado"
            >
              Ver Certificado
            </button>
          </div>
        </div>
        <img v-if="!showCertificado" :src="curso.imagen" :alt="curso.nombre" class="w-full h-96 object-contain ">
        <img v-if="showCertificado" :src="curso.certificado" alt="Certificado" class="w-full h-96 object-contain">
        <div class="">
          <div v-show="showCertificado" class="w-2/5">
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { useCoursesStore } from '@/stores/courses.store.js';
import { useCartStore } from '@/stores/cart.store.js';
import Navbar from '@/components/general/Navbar.vue';
import Loader from '@/components/general/Loader.vue';

export default {
  data() {
    return {
      cartStore: useCartStore(),
      cursosStore: useCoursesStore(),
      curso: null,
      id: null,
      loading: false,
      showCertificado: false
    };
  },
  methods: {
    async getDetalles(id) {
      this.loading = false;
      this.cursosStore
        .getDetalleCurso(id)
        .then((curso) => {
          this.curso = curso;
          this.loading = true;
        })
        .catch((error) => {
          console.error(error);
          this.loading = true;
        });
    },
    addToCart() {
      this.cartStore.addProduct(this.id);
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getDetalles(this.id);
  },
  components: {
    Navbar,
    Loader
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
</style>
