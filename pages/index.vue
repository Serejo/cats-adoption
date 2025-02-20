<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-6">Cats Available for Adoption</h1>
    <div v-if="loading" class="text-center">
      <Icon
        name="heroicons-outline:refresh"
        class="animate-spin inline-block mr-2"
      />
      Loading...
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CatCard v-for="cat in cats" :key="cat.id" :cat="cat" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useCatsStore } from "~/store/cats";

const catsStore = useCatsStore();

onMounted(() => {
  catsStore.fetchCats();
});

const cats = computed(() => catsStore.cats);
const loading = computed(() => catsStore.loadingList);
</script>
