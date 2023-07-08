<template>

  <div class="top-16 right-40 absolute z-50 text-[#000425] w-96 h-[40rem] bg-[url('../assets/mobile.png')] bg-no-repeat">
    <div class="relative">
      <div class="absolute top-20 -right-8 w-[87%]">
        <h2 class="text-base font-semibold w-2/3 Poppins">Postula y obtén un 10% de descuento en el programa</h2>
        <input type="text" pattern="[a-Z]" required class="w-3/5 py-3 rounded-md my-2 border-[#8b9099] border px-1 Roboto" placeholder="Nombre">
        <input type="tel" pattern="[0-9]{9}" required class="w-3/5 py-3 rounded-md my-2 border-[#8b9099] border px-1 Roboto" placeholder="Celular">
        <input type="email" required class="w-3/5 py-3 rounded-md border-[#8b9099] my-2 border px-1 Roboto" placeholder="Correo electrónico">
        <select v-model="programa" class="w-3/5 py-3 rounded-md my-2 border-[#8b9099] border px-1 Roboto">
            <option value="programa" disabled>Programa</option>
            <option v-for="curso in cursos" :value="curso.nombre" :key="curso.id">{{ curso.nombre }}</option>
        </select>
        <span for="" class="w-2/3">         
            <p class="mb-10 text-xs Roboto"><input type="checkbox" checked class=""> Acepto las Politicas de privacidad.</p>
        </span>
        <RouterLink to="/register" class=" w-3/5 text-white text-center bg-[#5640FF] rounded font-bold py-3 px-10 text-sm w Poppins">
          Quiero Postular
        </RouterLink> 
      </div>
    </div>
  </div>
</template>


<script>
import { useCoursesStore } from '@/stores/courses.store.js';
    export default {
        data() {
            return {
                programa: 'programa',
                cursos: null,
            }
        },
        async mounted() {
            await useCoursesStore().getTotalCourses();
            this.cursos = useCoursesStore().totalCourses;
        }
    }
</script>
  

