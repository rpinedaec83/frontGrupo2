<template>
  <div class="flex flex-row">
    <AsideDesktop class="w-2/3" />
    <RegisterComponent class="w-full lg:w-1/3" />
  </div>
</template>
<script>
import AsideDesktop from '@/components/general/AsideDesktop.vue';
import RegisterComponent from '@/components/general/RegisterComponent.vue';

export default {
  components: {
    AsideDesktop,
    RegisterComponent
  }
}
</script>
<style>
  
</style>