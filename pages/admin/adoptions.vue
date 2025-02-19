<template>
  <NuxtLayout name="admin">
    <div class="container mx-auto p-8">
      <h1 class="text-3xl font-bold mb-6">Gerenciar Solicitações de Adoção</h1>
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">ID</th>
            <th class="py-2 px-4 border-b">Nome do Solicitante</th>
            <th class="py-2 px-4 border-b">Gato</th>
            <th class="py-2 px-4 border-b">Status</th>
            <th class="py-2 px-4 border-b">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="request in requests" :key="request.id">
            <td class="py-2 px-4 border-b">{{ request.id }}</td>
            <td class="py-2 px-4 border-b">{{ request.name }}</td>
            <td class="py-2 px-4 border-b">{{ request.catName }}</td>
            <td class="py-2 px-4 border-b">{{ request.status }}</td>
            <td class="py-2 px-4 border-b">
              <button
                @click="approveRequest(request.id)"
                class="text-green-500 hover:underline mr-2"
              >
                Aprovar
              </button>
              <button
                @click="rejectRequest(request.id)"
                class="text-red-500 hover:underline"
              >
                Rejeitar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";

const requests = ref([]);

onMounted(() => {
  requests.value = [
    { id: 1, name: "João", catName: "Mittens", status: "Pendente" },
    { id: 2, name: "Maria", catName: "Whiskers", status: "Pendente" },
  ];
});

function approveRequest(id) {
  alert(`Solicitação ${id} aprovada!`);
}

function rejectRequest(id) {
  alert(`Solicitação ${id} rejeitada!`);
}
</script>
