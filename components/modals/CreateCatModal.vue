<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/75 transition-opacity"
  >
    <div class="bg-[#FFFFFF] rounded-lg shadow-lg w-full max-w-md p-6">
      <h2 class="text-2xl font-bold mb-4 text-primary">Create New Cat</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700 mb-1">Name</label>
          <input
            v-model="form.name"
            type="text"
            class="w-full border rounded p-2"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-1">Age</label>
          <input
            v-model.number="form.age"
            type="number"
            class="w-full border rounded p-2"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-1">Description</label>
          <textarea
            v-model="form.description"
            class="w-full border rounded p-2"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-1">Image URL</label>
          <input
            v-model="form.image"
            type="text"
            class="w-full border rounded p-2"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-1">Status</label>
          <select v-model="form.status" class="w-full border rounded p-2">
            <option value="Available">Available</option>
            <option value="Pending">Pending</option>
            <option value="Adopted">Adopted</option>
          </select>
        </div>
        <div class="flex justify-center space-x-2">
          <button
            type="button"
            @click="closeModal"
            class="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 rounded bg-[#4E2096] text-white"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps<{
  show: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (
    e: "create",
    cat: {
      name: string;
      age: number;
      description: string;
      image: string;
      status: string;
    }
  ): void;
}>();

const form = ref({
  name: "",
  age: 0,
  description: "",
  image: "",
  status: "Available",
});

function handleSubmit() {
  emit("create", { ...form.value });
  form.value = {
    name: "",
    age: 0,
    description: "",
    image: "",
    status: "Available",
  };
  emit("close");
}

function closeModal() {
  emit("close");
}
</script>
