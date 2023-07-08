<template>
  <div v-if="alert" class="fixed top-[20px] left-0 w-full flex justify-center z-50">
    <div class="w-[90%] flex flex-wrap justify-between items-center border-[3px] border-solid rounded-[5px] px-[20px] py-[10px] gap-[20px]" :class="alert.border">
      <p class="text-lg font-bold" :class="alert.text">
        {{ alert.message }}
      </p>
      <button @click="alertStore.clear()" type="button" class="text-lg font-bold" :class="alert.text">
        X
      </button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import { useAlertStore } from '@/stores/alert.store.js';

const alertStore = useAlertStore();
const { alert } = storeToRefs(alertStore);
</script>
