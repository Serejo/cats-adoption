<template>
  <div
    class="bg-[#FFFFFF] shadow-md rounded-lg overflow-hidden p-4 flex items-center gap-4"
  >
    <div class="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
      <img
        :src="cat.image || catDefault"
        alt="Cat image"
        class="w-full h-full object-cover object-center"
      />
    </div>

    <div class="flex-grow">
      <h2 class="text-xl font-bold mb-1">{{ cat.name }}</h2>
      <p class="text-gray-600">
        Age: {{ cat.age }} {{ cat.age === 1 ? "year" : "years" }}
      </p>
      <p
        :class="{
          'text-green-600': cat.status === 'Available',
          'text-yellow-600': cat.status === 'Pending',
          'text-blue-600': cat.status === 'Adopted',
        }"
        class="font-medium"
      >
        {{ cat.status }}
      </p>
      <p class="text-gray-800 mb-3">{{ cat.description }}</p>

      <nuxt-link
        :to="`/cat/${cat.id}`"
        class="block bg-primary text-white py-2 px-4 rounded-full text-center w-full bg-[#3b1a73] transition"
      >
        See details
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
