<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-[#FFFFFF] p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Admin Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="email" class="block mb-2">Email:</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="w-full p-2 border rounded"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2">Password:</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            class="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          :loading="adminStore.loadingSubmit"
          class="w-full bg-[#4E2096] text-white py-2 rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { useAdminStore } from "~/store/admin";

definePageMeta({
  middleware: "admin-auth",
});
const adminStore = useAdminStore();
const form = ref({
  email: "",
  password: "",
});

// user: { email: erick.serejo@defsafe.com, password: 123defsafe2025 }

async function handleLogin() {
  const { email, password } = form.value;
  adminStore.handleLogin(email, password);
}
</script>
