<template>
  <ul class="w-full flex flex-col gap-y-[20px] min-[1366px]:gap-y-[30px]">
    <li v-for="beneficio in beneficios" :key="beneficio.id" class="bg-[#F2F3F5] rounded-[10px] flex p-[30px] gap-x-[50px]">
      <picture class="flex items-center">
        <img class="min-w-[50px] min-h-[50px] min-[1366px]:min-w-[60px] min-[1366px]:min-h-[60px]" :src="beneficio.icon" :alt="beneficio.title">
      </picture>
      <div class="flex flex-col justify-center gap-y-[20px]">
        <h5 class="font-medium text-base text-[#000425] Poppins">
          {{ beneficio.title }}
        </h5>
        <p class="hidden min-[600px]:block text-sm text-[#000425] Roboto">
          {{ beneficio.description }}
        </p>
      </div>
    </li>
  </ul>
</template>
  
<script>
export default {
  data() {
    return {
      beneficios: [
        {
          icon: '/icons/people.png',
          title: 'Aprende de Expertos',
          description: 'Aprende directamente de expertos del mercado a través del análisis y solución de problemas de programación. Utilizando los frameworks y herramientas de mayor relevancia dentro del mundo del coding.',
          id: 1
        },
        {
          icon: '/icons/monitor.png',
          title: 'Clases Virtuales',
          description: 'Aprovecha tu tiempo al máximo en nuestras clases virtuales y participa presencialmente de nuestras hackathones semanales para conocer y participar de la comunidad profesional que liderará la transformación tecnológica del Perú.',
          id: 2
        },
        {
          icon: '/icons/briefcase.png',
          title: 'Empleabilidad',
          description: 'Al finalizar el programa y certificarte a nombre de IDAT, podrás acceder a ofertas laborales especialmente identificadas para la comunidad PachaQTec, a través de nuestra plataforma de empleabilidad IDAT JOB.',
          id: 3
        }
      ]
    };
  }
};
</script>
