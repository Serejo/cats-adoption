<template>
  <div class="container mx-auto py-8">
    <nuxt-link to="/" class="text-gray-500 hover:underline mb-4 inline-block">
      &larr; Back
    </nuxt-link>
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        :src="cat?.image || '/default-cat.jpg'"
        alt="Cat image"
        class="w-full h-64 object-cover"
      />
      <div class="p-4">
        <h1 class="text-2xl font-bold mb-2">{{ cat?.name }}</h1>
        <p class="text-gray-600">
          Age: {{ cat?.age }} {{ cat?.age === 1 ? "year" : "years" }}
        </p>
        <p class="text-gray-800 mb-4">{{ cat?.description }}</p>
        <p class="text-green-500 font-semibold">{{ cat?.status }}</p>
        <nuxt-link
          to="/adoption-request"
          class="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Request Adoption
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import type { CatModel } from "~/interfaces/cat_model";
import { useCatsStore } from "~/store/cats";

const catStore = useCatsStore();
const route = useRoute();
const cat = ref<CatModel | null>(null);
const catId = Number(route.params.id);

async function loadCat() {
  const catFromStore = catStore.getCatById(catId);
  if (catFromStore) {
    cat.value = catFromStore;
    return;
  } else {
    const { data, error } = await useFetch(`/api/cats/${catId}`);
    if (error.value) {
      console.error("Error loading cat details:", error.value);
    } else {
    }
  }
}

onMounted(loadCat);
</script>
