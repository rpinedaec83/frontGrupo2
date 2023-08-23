<template>
  <Loader class="w-screen mx-auto" v-if="!loading" />
  <ul v-else
    class="flex flex-wrap justify-center items-center gap-y-[15px] gap-x-[20px] min-[1366px]:justify-start min-[1366px]:gap-y-[40px] min-[1366px]:gap-x-[30px]">
    <li v-for="course in coursesHome" :key="course.id"
      class="relative w-full max-w-[355px] h-[222px] rounded-[10px] bg-center bg-no-repeat bg-cover flex flex-col justify-end p-[20px] gap-y-[15px] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-[10px] min-[1366px]:max-w-[344px] min-[1366px]:h-[320px]"
      :class="course.imagen ? 'before:bg-gradient-to-b from-[#00042500] to-[#000425]' : 'bg-[#000425]'"
      :style="`background-image: url(${course.imagen});`">
      <h3 class="text-[#fff] text-xl font-medium z-0 Poppins">
        {{ course.nombre }}
      </h3>
      <RouterLink :to="`/curso/${course.id}`" v-if="course.activo"
        class="flex gap-x-[12px] items-center text-[#fff] text-sm font-bold self-end z-0 Poppins">
        <img src="/icons/plus-circle.png" alt="More Icon"> Ver más
      </RouterLink>
      <span v-else class="text-[#8b9099] text-sm font-bold self-end z-0 Poppins">
        Proximamente
      </span>
    </li>
  </ul>
</template>

<script>
import { useCoursesStore } from '@/stores/courses.store.js';
import Loader from '@/components/general/Loader.vue'

export default {
  components: {
    Loader
  },
  data() {
    return {
      coursesHome: [],
      loading: false,
    };
  },
  async mounted() {
    this.loading = false
    try {
      await useCoursesStore().getCoursesHome();
      this.coursesHome = useCoursesStore().coursesHome;
      this.loading = true
    } catch (error) {
      console.error(error);
    }
  }
};
</script>
