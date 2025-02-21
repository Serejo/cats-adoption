<template>
  <div class="bg-white shadow-md rounded-lg overflow-hidden">
    <img
      :src="cat.image ||  '~/assets/Elements/default-cat-1.png'" 
      alt="Cat image"
      class="w-full h-48 object-cover"
    />
    <div class="p-4">
      <h2 class="text-xl font-bold">{{ cat.name }}</h2>
      <p class="text-gray-600">
        Age: {{ cat.age }} {{ cat.age === 1 ? "year" : "years" }}
      </p>
      <p class="text-gray-600" >  <p
        :class="{
                  'text-green-600': cat.status === 'Available',
                  'text-yellow-600': cat.status === 'Pending',
                  'text-blue-600': cat.status === 'Adopted',
                }" 
        >{{ cat.status }}</p> </p>
      <p class="text-gray-800">{{ cat.description }}</p>
      <nuxt-link
        :to="`/cat/${cat.id}`"
        class="text-blue-500 hover:underline mt-2 block"
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
