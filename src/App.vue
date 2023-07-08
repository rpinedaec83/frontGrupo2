<script setup>
import { RouterView } from 'vue-router'
import AlertComponent from '@/components/general/AlertComponent.vue';
</script>

<template>
  <AlertComponent></AlertComponent>
  <RouterView />
</template>

<style>
.Poppins {
  font-family: 'Poppins', sans-serif;
}

.Roboto {
  font-family: 'Roboto', sans-serif;
}
</style>
