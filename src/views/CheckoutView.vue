<template>
  <header>
    <div>
      <Navbar :checkout="true" :color="'bg-secondary'" class="hidden lg:flex" />
    </div>
  </header>
  <div class="pb-20 lg:px-20 lg:py-10 lg:grid lg:grid-cols-3 lg:gap-x-6">
    <ShoppingList class="col-span-2" />
    <Next class="" />
  </div>
</template>
<script>
import Navbar from '@/components/general/Navbar.vue';
import ShoppingList from '@/components/shop/ShoppingList.vue';
import Next from '@/components/shop/Next.vue';

export default {
  components: {
    Navbar,
    ShoppingList,
    Next,
  }  
}
</script>