<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
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
          <label for="password" class="block mb-2">Senha:</label>
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
          class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Entrar
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const form = ref({
  email: "",
  password: "",
});

function handleLogin() {
  if (
    form.value.email === "admin@example.com" &&
    form.value.password === "senha123"
  ) {
    router.push("/admin/dashboard");
  } else {
    alert("Credenciais inválidas!");
  }
}
</script>
