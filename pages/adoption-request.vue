<template>
  <div class="container mx-auto py-8">
    <h1 class="text-2xl font-bold mb-6">Solicitar Adoção</h1>
    <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto">
      <div class="mb-4">
        <label class="block text-gray-700">Nome:</label>
        <input
          v-model="form.name"
          type="text"
          class="w-full border rounded p-2"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Telefone:</label>
        <input
          v-model="form.phone"
          type="text"
          class="w-full border rounded p-2"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">E-mail:</label>
        <input
          v-model="form.email"
          type="email"
          class="w-full border rounded p-2"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Motivo:</label>
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
        Enviar Solicitação
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
  alert("Solicitação enviada com sucesso!");
  form.value = {
    name: "",
    phone: "",
    email: "",
    reason: "",
  };
}
</script>
