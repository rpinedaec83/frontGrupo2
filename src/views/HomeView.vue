<template>
  <header>
    <div>
      <Navbar :hidden="true" />
    </div>
  </header>
  <main class="">
    <section class="relative bg-[#3015FD] text-white px-4 md:px-20 pb-20 pt-44">
      <div class="lg:w-[44.5625rem]">
        <h2 class="text-4xl lg:text-[3.375rem] font-bold leading-tight mb-8 Poppins">¡Explota todo tu potencial tecnológico!</h2>
        <p class="text-xl Poppins">Con nuestros programas de especialización</p>
      </div>
      <MobileForm class="hidden xl:block" />
    </section>
    <div class="fixed md:hidden bottom-4 right-4 flex flex-col items-end gap-4 z-50">
      <a href="https://api.whatsapp.com/send?phone=+51924288288&text=¡Hola!%20Quiero%20recibir%20mayor%20información%20y%20descuentos%20exclusivos%20–%20código%20WEB" target="_blank" class="w-auto bg-green-400 p-3 rounded-full cursor-pointer">
        <img class="w-7 h-7" src="/WhatsApp_logo.svg" alt="Whatsapp logo">
      </a>
      <div class="flex flex-row items-center px-4 py-3 bg-[#FF1558] text-white rounded-3xl">
        <PencilIcon class="h-5" />
        <a href="#FormInscribete" class="font-semibold Poppins">Inscríbete</a>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center w-full py-16 px-4 md:px-20">
      <div>
        <span class="text-sm font-semibold">Con el respaldo de:</span>
        <div class="flex flex-row gap-4 mt-4">
          <img class="h-5" src="/Intercorp_logo.png" alt="Intercorp logo">
          <img class="h-10" src="/Idat_logo.png" alt="Idat logo">
          <img class="bg-black h-8" src="/Zegel_logo.png" alt="Zegel logo">
        </div>
      </div>
      <a href="#Especializaciones" class="hidden md:block">
        <ArrowIcon class="w-12 h-12" />
      </a>
      <a class="w-auto hidden md:block bg-green-400 p-2 rounded-full cursor-pointer" href="https://api.whatsapp.com/send?phone=+51924288288&text=¡Hola!%20Quiero%20recibir%20mayor%20información%20y%20descuentos%20exclusivos%20–%20código%20WEB" target="_blank">
        <img class="w-6 h-6" src="/WhatsApp_logo.svg" alt="Whatsapp logo">
      </a>
    </div>
    <section class="w-full px-[10px] pb-[137px] min-[1366px]:w-[66%] min-[1366px]:px-[86px] min-[1366px]:pb-[160px]">
      <h3 id="Especializaciones" class="text-[#000425] text-base font-bold mb-[30px] min-[1366px]:text-xl min-[1366px]:text-[#222222] Poppins">
        Conoce nuestros Programas de Especialización
      </h3>
      <!-- Componente Card 1 -->
      <CursosList></CursosList>
      <RouterLink to="/cursos">
        <button class="bg-[#5640ff] text-[#fff] font-bold rounded-[20px] py-[8px] px-[16px] text-sm mt-[30px]">
          Ver todos los cursos
        </button>
      </RouterLink>
    </section>
    <section class="bg-gradient-to-b from-[#3015FD] to-[#5640FF] h-[30rem] md:h-72 px-4 lg:px-56 relative flex flex-col justify-end py-4 md:justify-center gap-4 text-white">
      <img class="w-80 self-center md:hidden lg:block lg:absolute h-96 lg:h-auto lg:-top-24 lg:-left-28" src="../assets/Chinita_pacha.svg" alt="Chinita Pacha">
      <h4 class="text-lg font-bold Poppins">Sé parte de la comunidad</h4>
      <p class="text-sm md:w-full lg:w-2/4 Roboto">Programas semi-presenciales para el desarrollo de habilidades de programación a lo largo de todo el Stack tecnológico.</p>
      <p class="text-sm md:w-full lg:w-2/4 Roboto">Al finalizar sabrás cómo crear una página web y desarrollar la lógica detrás del funcionamiento de una aplicación, así como formar parte de una gran comunidad de desarrolladores</p>
    </section>
    <section class="px-4 md:px-20 my-20 min-[1366px]:w-[60%]">
      <h4 class="text-base text-[#000425] font-bold mb-[30px] Poppins">Beneficios</h4>
      <!-- Componente 2 -->
      <BeneficiosList></BeneficiosList>
    </section>
    <FormHome id="FormInscribete" class="lg:px-40 xl:hidden" />
    <footer class="bg-[#000425] text-white px-4 md:px-20 py-4">
      <span class="text-sm font-semibold">Con el respaldo de:</span>
      <div class="flex flex-row gap-4 mt-4">
        <img class="h-5 " src="/Intercorp_logo.svg" alt="Intercorp logo">
        <img class="h-10" src="/Idat_logo.svg" alt="Idat logo">
        <img class="bg-black h-8" src="/Zegel_logo.png" alt="Zegel logo">
      </div>
    </footer>
  </main>
</template>
<script>
  import Navbar from '@/components/general/Navbar.vue';
  import ArrowIcon from '@/components/Icons/ArrowIcon.vue'
  import PencilIcon from '@/components/Icons/PencilIcon.vue'
  import CursosList from '@/components/home/CursosList.vue'
  import BeneficiosList from '@/components/home/BeneficiosList.vue'
  import FormHome from '@/components/home/FormHome.vue'
  import MobileForm from '@/components/home/MobileForm.vue'

  export default{
    components: {
      Navbar,
      ArrowIcon,
      PencilIcon,
      CursosList,
      BeneficiosList,
      MobileForm,
      FormHome
    }
  }
</script>