<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <nuxt-link to="/" class="text-xl font-bold">
          The Defsafe Cat Adoption Platform.
        </nuxt-link>

        <nav>
          <ul class="flex space-x-4">
            <li>
              <nuxt-link to="/" class="hover:underline">Home</nuxt-link>
            </li>
            <!-- <li>
              <nuxt-link to="/adoption-request" class="hover:underline"
                >Adoção</nuxt-link
              >
            </li> -->
            <li>
              <nuxt-link to="/admin/login" class="hover:underline"
                >Admin</nuxt-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="flex-grow">
      <NuxtPage />
    </main>

    <footer class="bg-gray-800 text-white p-4">
      <div class="container mx-auto text-center">
        &copy; 2025 Cat Adoption. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { createClient } from "@supabase/supabase-js";
import { onMounted } from "vue";

const cats = ref([]);

async function loadCats() {
  // useFetch retorna um objeto com data, error, pending, etc.
  const { data, error, pending } = await useFetch("/api/cats");

  if (error.value) {
    console.error("Erro na requisição:", error.value);
  } else {
    console.log("Dados recebidos:", data.value);
  }
}

onMounted(loadCats);
</script>

<style></style>
