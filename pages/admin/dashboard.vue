<template>
  <NuxtLayout name="admin">
    <div class="container mx-auto p-8">
      <h1 class="text-3xl font-bold mb-6">Dashboard Administrativo</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white p-4 shadow rounded">
          <h2 class="text-xl font-bold">Total de Gatos</h2>
          <p class="text-2xl">{{ totalCats }}</p>
        </div>
        <div class="bg-white p-4 shadow rounded">
          <h2 class="text-xl font-bold">Solicitações de Adoção</h2>
          <p class="text-2xl">{{ totalAdoptions }}</p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";

const totalCats = ref(0);
const totalAdoptions = ref(0);

onMounted(() => {
  totalCats.value = 10;
  totalAdoptions.value = 5;
});
</script>
