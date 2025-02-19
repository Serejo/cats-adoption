<template>
  <div class="bg-white shadow-md rounded-lg overflow-hidden">
    <img
      :src="cat.image"
      alt="Imagem do gato"
      class="w-full h-48 object-cover"
    />
    <div class="p-4">
      <h2 class="text-xl font-bold">{{ cat.name }}</h2>
      <p class="text-gray-600">Idade: {{ cat.age }} anos</p>
      <p class="text-gray-800">{{ cat.description }}</p>
      <nuxt-link
        :to="`/cat/${cat.id}`"
        class="text-blue-500 hover:underline mt-2 block"
      >
        Ver detalhes
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cat: {
    type: Object,
    required: true,
  },
});
</script>
