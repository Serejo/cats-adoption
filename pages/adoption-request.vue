<template>
  <div class="container mx-auto py-8">
    <h1 class="text-2xl font-bold mb-6">Adoption Request</h1>
    <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto">
      <div class="mb-4">
        <label class="block text-gray-700">Name:</label>
        <input
          v-model="form.name"
          type="text"
          class="w-full border rounded p-2"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Phone:</label>
        <input
          v-model="form.phone"
          type="text"
          class="w-full border rounded p-2"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Email:</label>
        <input
          v-model="form.email"
          type="email"
          class="w-full border rounded p-2"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Reason:</label>
        <textarea
          v-model="form.reason"
          class="w-full border rounded p-2"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit Request
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  phone: "",
  email: "",
  reason: "",
});

function handleSubmit() {
  alert("Request sent successfully!");
  form.value = {
    name: "",
    phone: "",
    email: "",
    reason: "",
  };
}
</script>
