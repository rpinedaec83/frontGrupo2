<template>
  <div class="flex flex-row">
    <AsideDesktop class="w-2/3" />
    <FormLogin class="w-full lg:w-1/3" />
  </div>
</template>
<script>
import AsideDesktop from '@/components/general/AsideDesktop.vue';
import FormLogin from '@/components/general/FormLogin.vue';

export default {
  components: {
    AsideDesktop,
    FormLogin
  }
}
</script>
<style>
  
</style>