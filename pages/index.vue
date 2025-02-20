<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-6">Cats Available for Adoption</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CatCard v-for="cat in cats" :key="cat.id" :cat="cat" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

let cats = ref([]);

async function loadCats() {
  const { data, error } = await useFetch("/api/cats");
  console.log(data);
  if (!data.value) {
    console.error("Erro na requisição:", error.value);
  } else {
    console.log("Dados recebidos:", data.value);
    cats.value = data.value;
    console.log("Cats:", cats.value);
  }
}

onMounted(loadCats);
</script>
