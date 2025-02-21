<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/75 transition-opacity"
  >
    <div class="bg-[#FFFFFF] rounded-lg shadow-lg w-full max-w-md p-6">
      <h2 class="text-2xl font-bold mb-4 text-primary">Edit Cat</h2>
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
            class="px-4 py-2 rounded bg-[#4E2096] text-gray-700"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from "vue";
import type { CatModel } from "~/interfaces/cat_model";

const props = defineProps<{
  show: boolean;
  cat: CatModel;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "update", cat: CatModel): void;
}>();

const form = ref<CatModel>({ ...props.cat });

// Atualiza o formulário se a prop mudar
watch(
  () => props.cat,
  (newCat) => {
    form.value = { ...newCat };
  }
);

function handleSubmit() {
  emit("update", { ...form.value });
  emit("close");
}

function closeModal() {
  emit("close");
}
</script>
