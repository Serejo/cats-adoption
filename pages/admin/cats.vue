<template>
  <NuxtLayout name="admin">
    <div class="container mx-auto p-8">
      <h1 class="text-3xl font-bold mb-6">Manage Cats</h1>
      <nuxt-link
        to="/admin/cats/new"
        class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 inline-block mb-4"
      >
        Add New Cat
      </nuxt-link>
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">ID</th>
            <th class="py-2 px-4 border-b">Name</th>
            <th class="py-2 px-4 border-b">Age</th>
            <th class="py-2 px-4 border-b">Status</th>
            <th class="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cat in cats" :key="cat.id">
            <td class="py-2 px-4 border-b">{{ cat.id }}</td>
            <td class="py-2 px-4 border-b">{{ cat.name }}</td>
            <td class="py-2 px-4 border-b">{{ cat.age }}</td>
            <td class="py-2 px-4 border-b">{{ cat.status }}</td>
            <td class="py-2 px-4 border-b">
              <nuxt-link
                :to="`/admin/cats/edit/${cat.id}`"
                class="text-blue-500 hover:underline mr-2"
              >
                Edit
              </nuxt-link>
              <button
                @click="deleteCat(cat.id)"
                class="text-red-500 hover:underline"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";

const cats = ref([]);

onMounted(() => {
  cats.value = [
    { id: 1, name: "Mittens", age: 2, status: "Available" },
    { id: 2, name: "Whiskers", age: 3, status: "Adoption in Progress" },
  ];
});

function deleteCat(id) {
  if (confirm("Are you sure you want to delete this cat?")) {
    cats.value = cats.value.filter((cat) => cat.id !== id);
  }
}
</script>
