<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/75 transition-opacity"
  >
    <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
      <h2 class="text-2xl font-bold mb-4 text-primary">Adoption Request</h2>
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
          <label class="block text-gray-700">CPF:</label>
          <input
            v-model="form.cpf"
            type="text"
            class="w-full border rounded p-2"
            required
            @input="formatCPF"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Contact:</label>
          <input
            v-model="form.contact"
            type="text"
            class="w-full border rounded p-2"
            required
            @input="formatPhone"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Visit Date:</label>
          <input
            v-model="form.visitDate"
            type="date"
            class="w-full border rounded p-2"
            required
          />
        </div>

        <button
          type="submit"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Request
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import type { AdoptionModel } from "~/interfaces/adoption_model";

const props = defineProps<{
  show: boolean;
}>();

const emit = defineEmits<{
  (e: "submit", form: AdoptionModel): void;
}>();

const form = ref({
  name: "",
  cpf: "",
  contact: "",
  visitDate: "",
  catId: 0,
  status: "Pending",
});

function handleSubmit() {
  alert("Request sent successfully!");
  emit("submit", {
    ...form.value,
    visitDate: new Date(form.value.visitDate),
  });
}

function formatCPF() {
  form.value.cpf = form.value.cpf
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}

function formatPhone() {
  form.value.contact = form.value.contact
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
}
</script>
