<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <nuxt-link to="/" class="text-xl font-bold">
          Adoção de Gatos
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

    <main class="flex-grow container mx-auto p-4">
      <NuxtPage />
    </main>

    <footer class="bg-gray-800 text-white p-4">
      <div class="container mx-auto text-center">
        &copy; 2025 Adoção de Gatos. Todos os direitos reservados.
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style></style>
