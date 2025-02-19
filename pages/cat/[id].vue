<template>
  <div class="container mx-auto py-8">
    <nuxt-link to="/" class="text-blue-500 hover:underline mb-4 inline-block">
      &larr; Back
    </nuxt-link>
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <img :src="cat.image" alt="Cat image" class="w-full h-64 object-cover" />
      <div class="p-4">
        <h1 class="text-2xl font-bold mb-2">{{ cat.name }}</h1>
        <p class="text-gray-600">Age: {{ cat.age }} years</p>
        <p class="text-gray-800 mb-4">{{ cat.description }}</p>
        <p class="text-green-500 font-semibold">{{ cat.status }}</p>
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

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const cat = ref({});

onMounted(() => {
  const catId = Number(route.params.id);
  const catsData = [
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
      description: "Calm cat",
      image: "/cat2.jpg",
      status: "Available",
    },
  ];
  cat.value = catsData.find((c) => c.id === catId) || {};
});
</script>
