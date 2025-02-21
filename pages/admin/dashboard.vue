<template>
  <NuxtLayout name="admin">
    <div class="container mx-auto p-8">
      <h1 class="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-[#FFFFFF] p-4 shadow rounded">
          <h2 class="text-xl font-bold">Total Cats</h2>
          <p class="text-2xl">{{ totalCats }}</p>
        </div>
        <div class="bg-[#FFFFFF] p-4 shadow rounded">
          <h2 class="text-xl font-bold">Adoption Requests</h2>
          <p class="text-2xl">{{ totalAdoptions }}</p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAdoptionsStore } from "~/store/adoptions";
import { useCatsStore } from "~/store/cats";
definePageMeta({
  middleware: "admin-auth",
});

const catsStore = useCatsStore();
const adoptionStore = useAdoptionsStore();
const totalCats = ref(0);
const totalAdoptions = ref(0);

onMounted(async () => {
  await catsStore.fetchCats();
  await adoptionStore.fetchAdoptions();
  totalCats.value = catsStore.cats.length;
  totalAdoptions.value = adoptionStore.adoptions.length;
});
</script>
