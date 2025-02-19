<template>
  <NuxtLayout name="admin">
    <div class="container mx-auto p-8">
      <h1 class="text-3xl font-bold mb-6">Gerenciar Gatos</h1>
      <nuxt-link
        to="/admin/cats/new"
        class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 inline-block mb-4"
      >
        Adicionar Novo Gato
      </nuxt-link>
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">ID</th>
            <th class="py-2 px-4 border-b">Nome</th>
            <th class="py-2 px-4 border-b">Idade</th>
            <th class="py-2 px-4 border-b">Status</th>
            <th class="py-2 px-4 border-b">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cat in cats" :key="cat.id">
            <td class="py-2 px-4 border-b">{{ cat.id }}</td>
            <td class="py-2 px-4 border-b">{{ cat.name }}</td>
            <td class="py-2 px-4 border-b">{{ cat.age }}</td>
            <td class="py-2 px-4 border-b">{{ cat.status }}</td>
            <td class="py-2 px-4 border-b">
              <nuxt-link
                :to="`/admin/cats/edit/${cat.id}`"
                class="text-blue-500 hover:underline mr-2"
              >
                Editar
              </nuxt-link>
              <button
                @click="deleteCat(cat.id)"
                class="text-red-500 hover:underline"
              >
                Excluir
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

const cats = ref([]);

onMounted(() => {
  cats.value = [
    { id: 1, name: "Mittens", age: 2, status: "Disponível" },
    { id: 2, name: "Whiskers", age: 3, status: "Adoção em Andamento" },
  ];
});

function deleteCat(id) {
  if (confirm("Tem certeza que deseja excluir este gato?")) {
    cats.value = cats.value.filter((cat) => cat.id !== id);
  }
}
</script>
