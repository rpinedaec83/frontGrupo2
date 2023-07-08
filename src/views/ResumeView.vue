<template>
  <header>
    <div>
      <Navbar :color="'bg-secondary'" class="hidden lg:flex" />
    </div>
  </header>
  <div class="pb-20 lg:px-20 lg:py-10 lg:grid lg:grid-cols-3 lg:gap-x-6">
    <MyShopping class="col-span-2" />
    <Confirmation class="" />
  </div>
</template>
<script>
import Navbar from '@/components/general/Navbar.vue';
import MyShopping from '@/components/shop/MyShopping.vue';
import Confirmation from '@/components/shop/Confirmation.vue';

export default {
  components: {
    Navbar,
    MyShopping,
    Confirmation
  }  
}
</script>
<style>
  
</style>