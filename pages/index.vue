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
import CatCard from "~/components/CatCard.vue";

const cats = ref([]);

onMounted(() => {
  cats.value = [
    {
      id: 1,
      name: "Mittens",
      age: 2,
      description: "Playful cat",
      image: "/cat1.jpg",
      status: "Available",
    },
    {
      id: 2,
      name: "Whiskers",
      age: 3,
      description: "Quiet cat",
      image: "/cat2.jpg",
      status: "Available",
    },
  ];
});
</script>
