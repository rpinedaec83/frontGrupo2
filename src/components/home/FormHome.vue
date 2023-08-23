<template>

    <div class="flex flex-col p-4 mb-10">
        <h2 class="text-[#000425] text-base font-semibold Poppins">Postula y obtén un 10% de descuento en el programa</h2>
        <input type="text" pattern="[a-Z]" required class="px-2 py-3 rounded-md my-2 border-[#8b9099] border Roboto" placeholder="Nombre">
        <input type="tel" pattern="[0-9]{9}" required class="px-2 py-3 rounded-md my-2 border-[#8b9099] border Roboto" placeholder="Celular">
        <input type="email" required class="px-2 py-3 rounded-md border-[#8b9099] my-2 border Roboto" placeholder="Correo electrónico">
        <select v-model="programa" class="px-2 py-3 rounded-md my-2 border-[#8b9099] border Roboto" value="">
            <option value="programa" disabled>Programa</option>
            <option v-for="curso in cursos" :value="curso.nombre" :key="curso.id">{{ curso.nombre }}</option>
        </select>
        <br/>
        
        <label for="accept" class="mb-3 Roboto"><input id="accept" type="checkbox" checked class="border-[#000425] border"> Acepto las Politicas de privacidad.</label>
        <RouterLink to="/register" class="text-white text-center bg-[#5640FF] rounded font-bold py-3 px-12 text-sm w Poppins">
            Quiero Postular
        </RouterLink> 
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

<style>

</style>