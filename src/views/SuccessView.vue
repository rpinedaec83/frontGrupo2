<template>
  <header>
    <div>
      <Navbar :color="'bg-secondary'" class="hidden md:flex" />
    </div>
  </header>
  <section class="w-full flex flex-col justify-center py-[20px] px-[20px] lg:px-[80px]">
    <h5 class="text-4xl font-bold text-[#222] mb-[15px]">
      ¡Pago Exitoso!
    </h5>
    <p class="font-[#222] mb-[30px]">
      Gracias por confiar en nosotros. ¡Su compra ha sido realizada con éxito!
    </p>
    <div class="flex flex-wrap gap-[10px]">
      <a href="/resumen" class="bg-[#5640ff] text-[#fff] font-bold rounded-[20px] py-[8px] px-[16px] text-sm">
        Ver resumen de compra
      </a>
      <RouterLink to="/" class="bg-[#5640ff] text-[#fff] font-bold rounded-[20px] py-[8px] px-[16px] text-sm">
        Volver a la página principal
      </RouterLink>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/general/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  mounted() {
    const productos = JSON.parse(localStorage.getItem('productos'));
    const cursosComprados = [...productos];
    
    localStorage.setItem('cursosComprados', JSON.stringify(cursosComprados));
    if(JSON.parse(localStorage.getItem('cursosComprados'))){
      const oldCursos = JSON.parse(localStorage.getItem('Miscursos')) ?? null;
      const newCursos = JSON.parse(localStorage.getItem('cursosComprados'));
      if(oldCursos === null){
        localStorage.setItem('Miscursos', JSON.stringify(cursosComprados));
        return
      }
      const totalCursos = [...oldCursos, ...newCursos]
      localStorage.setItem('Miscursos', JSON.stringify(totalCursos));
    }else{
      localStorage.setItem('Miscursos', JSON.stringify(cursosComprados));
    }
    localStorage.removeItem('productos');
  }
}
</script>

<style scoped>
section {
  min-height: calc(100vh - 3.75rem);
}
</style>
