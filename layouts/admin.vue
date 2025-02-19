<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-800 text-white p-6">
      <h2 class="text-2xl font-bold mb-6">Admin</h2>
      <ul>
        <li class="mb-4">
          <NuxtLink to="/admin/dashboard" class="hover:underline"
            >Dashboard</NuxtLink
          >
        </li>
        <li class="mb-4">
          <NuxtLink to="/admin/cats" class="hover:underline"
            >Gerenciar Gatos</NuxtLink
          >
        </li>
        <li class="mb-4">
          <NuxtLink to="/admin/adoptions" class="hover:underline"
            >Solicitações de Adoção</NuxtLink
          >
        </li>
      </ul>
    </aside>

    <!-- Conteúdo principal -->
    <main class="flex-grow p-6">
      <slot />
    </main>
  </div>
</template>
