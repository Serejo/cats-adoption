<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/75 transition-opacity"
  >
    <div class="bg-[#FFFFFF] rounded-lg shadow-lg w-full max-w-sm p-6">
      <h2 class="text-xl font-bold mb-4 text-primary">Confirm Delete</h2>
      <p class="mb-6">Are you sure you want to delete this cat?</p>
      <div class="flex justify-center space-x-2">
        <button
          @click="cancel"
          class="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          @click="confirm"
          class="px-4 py-2 rounded bg-red-300 text-gray-700 hover:bg-gray-400"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  show: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "confirm"): void;
}>();

function cancel() {
  emit("close");
}

function confirm() {
  emit("confirm");
}
</script>
