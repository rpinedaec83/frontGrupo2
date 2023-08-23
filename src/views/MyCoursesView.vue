<template>
  <header>
    <div>
      <Navbar />
    </div>
    <div
      class="w-full h-[240px] bg-[url('imgs/banner2.png')] bg-center bg-no-repeat bg-cover lg:h-[440px] lg:bg-[url('/imgs/banner.png')]">
    </div>
  </header>

  <main>
    <div class="justify-between items-center w-full py-16 px-4 md:px-20">
      <div>
        <Loader class="w-screen mx-auto" v-if="!loading" />
        <ul v-else
          class="w-full flex flex-row flex-wrap justify-center items-center gap-y-[15px] gap-x-[20px] min-[1366px]:gap-y-[40px] min-[1366px]:gap-x-[30px]">
          <li v-for="course in totalCourses" :key="course.id"
            class="relative w-full max-w-[355px] h-[222px] rounded-[10px] bg-center bg-no-repeat bg-cover flex flex-col justify-end p-[20px] gap-y-[15px] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-[10px] min-[1366px]:max-w-[344px] min-[1366px]:h-[320px]"
            :class="course.imagen ? 'before:bg-gradient-to-b from-[#00042500] to-[#000425]' : 'bg-[#000425]'"
            :style="`background-image: url(${course.imagen});`">
            <h3 class="text-[#fff] text-xl font-medium z-0 Poppins">
              {{ course.nombre }}
            </h3>
          </li>
        </ul>
      </div>
    </div>
  </main>

  <footer class="bg-[#000425] text-white px-4 md:px-20 py-4">
    <span class="text-sm font-semibold">Con el respaldo de:</span>
    <div class="flex flex-row gap-4 mt-4">
      <img class="h-5 " src="/Intercorp_logo.svg" alt="Intercorp logo">
      <img class="h-10" src="/Idat_logo.svg" alt="Idat logo">
      <img class="bg-black h-8" src="/Zegel_logo.png" alt="Zegel logo">
    </div>
  </footer>
</template>

<script>
import Navbar from '@/components/general/Navbar.vue';
import { useCoursesStore } from '@/stores/courses.store.js';
import Loader from '@/components/general/Loader.vue'
export default {
  components: {
    Navbar,
    Loader
  },
  data() {
    return {
      totalCourses: [],
      loading: false,
      filtro: 'void'
    };
  },
  async mounted() {
    this.loading = false
    try {
      this.totalCourses = JSON.parse(localStorage.getItem('Miscursos'));
      this.loading = true
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async filterCursos(){
      try {
        if(this.filtro !== 'todos'){
          await useCoursesStore().getFilterCourses(this.filtro);
          this.totalCourses = useCoursesStore().totalCourses;
        }else{
          await useCoursesStore().getTotalCourses();
          this.totalCourses = useCoursesStore().totalCourses;
        }
        this.loading = true
      } catch (error) {
        console.error(error);
      }
    }
  }

}
</script>
