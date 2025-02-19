<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-6">Add New Cat</h1>
    <form @submit.prevent="handleSubmit" class="max-w-lg">
      <div class="mb-4">
        <label class="block mb-2">Name:</label>
        <input
          v-model="form.name"
          type="text"
          class="w-full p-2 border rounded"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2">Age:</label>
        <input
          v-model="form.age"
          type="number"
          class="w-full p-2 border rounded"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2">Description:</label>
        <textarea
          v-model="form.description"
          class="w-full p-2 border rounded"
          required
        ></textarea>
      </div>
      <div class="mb-4">
        <label class="block mb-2">Status:</label>
        <select v-model="form.status" class="w-full p-2 border rounded">
          <option value="Available">Available</option>
          <option value="Adoption in Progress">Adoption in Progress</option>
          <option value="Adopted">Adopted</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block mb-2">Image:</label>
        <input type="file" @change="handleFileUpload" class="w-full" />
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  age: "",
  description: "",
  status: "Available",
  image: null,
});

function handleFileUpload(event) {
  form.value.image = event.target.files[0];
}

function handleSubmit() {
  alert("Cat added successfully!");
}
</script>
