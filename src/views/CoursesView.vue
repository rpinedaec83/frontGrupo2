<template>
  <header>
    <div>
      <Navbar />
    </div>
    <div
      class="w-full h-[240px] bg-[url('/imgs/banner2.png')] bg-center bg-no-repeat bg-cover lg:h-[440px] lg:bg-[url('/imgs/banner.png')]">
    </div>
  </header>

  <main>
    <div class="flex flex-row justify-between items-center w-full py-16 px-4 md:px-20">
      <div>
        <span class="text-sm font-semibold">Con el respaldo de:</span>
        <div class="flex flex-row gap-4 mt-4">
          <img class="h-5" src="/Intercorp_logo.png" alt="Intercorp logo">
          <img class="h-10" src="/Idat_logo.png" alt="Idat logo">
          <img class="bg-black h-8" src="/Zegel_logo.png" alt="Zegel logo">
        </div>
      </div>
      <a href="#Cursos" class="hidden md:block">
        <ArrowIcon class="w-12 h-12" />
      </a>
      <div></div>
    </div>
    <section class="w-full px-[10px] pb-[137px] min-[1366px]:px-[86px] min-[1366px]:pb-[160px]">
      <h3 id="Cursos"
        class="text-[#000425] text-base font-bold mb-[30px] min-[1366px]:text-xl min-[1366px]:text-[#222222] Poppins">
        Conoce todos nuestros Programas de Especialización
      </h3>
      <TotalCourses></TotalCourses>
    </section>
    <section class="px-4 md:px-20 my-20">
      <h4 class="text-base text-[#000425] font-bold mb-[30px] Poppins">Beneficios</h4>
      <BeneficiosList></BeneficiosList>
    </section>
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
import ArrowIcon from '@/components/Icons/ArrowIcon.vue';
import BeneficiosList from '@/components/home/BeneficiosList.vue';
import TotalCourses from '@/components/courses/TotalCourses.vue'

export default {
  components: {
    Navbar,
    ArrowIcon,
    BeneficiosList,
    TotalCourses
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>
