<template>
  <NuxtLayout name="admin">
    <div class="container mx-auto p-8">
      <!-- Header com título e botão para adicionar novo gato -->
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-3xl font-bold">Manage Cats</h1>
        <nuxt-link
          to="/admin/cats/new"
          class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Add New Cat
        </nuxt-link>
      </div>
      <!-- Tabela responsiva -->
      <div class="overflow-x-auto">
        <table
          class="min-w-full bg-white shadow rounded divide-y divide-gray-200"
        >
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Age
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Created At
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr
              v-for="cat in cats"
              :key="cat.id"
              class="transition hover:bg-gray-50"
            >
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ cat.id }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ cat.name }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ cat.age }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm">
                <span>
                  {{ cat.description }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm">
                <span>
                  {{ formatDate(cat.createdAt) }}
                </span>
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-sm">
                <div class="flex items-center space-x-2">
                  <Icon
                    :name="
                      cat.status === 'Available'
                        ? 'heroicons-solid:check-circle'
                        : 'heroicons-solid:exclamation-circle'
                    "
                    :class="{
                      'text-green-600': cat.status === 'Available',
                      'text-yellow-600': cat.status === 'Pending',
                      'text-red-600': cat.status === 'Adopted',
                    }"
                    size="20"
                  />
                  <span
                    :class="{
                      'text-green-600': cat.status === 'Available',
                      'text-yellow-600': cat.status === 'Pending',
                      'text-red-600': cat.status === 'Adopted',
                    }"
                  >
                    {{ cat.status }}
                  </span>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-right">
                <nuxt-link
                  :to="`/admin/cats/edit/${cat.id}`"
                  class="text-blue-600 hover:text-blue-900 mr-4"
                >
                  <Icon name="heroicons-outline:pencil" size="20" />
                </nuxt-link>
                <button
                  @click="deleteCat(cat.id)"
                  class="text-red-600 hover:text-red-900"
                >
                  <Icon name="heroicons-outline:trash" size="20" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";

definePageMeta({
  middleware: "admin-auth",
});
import { useCatsStore } from "~/store/cats";

const catsStore = useCatsStore();

onMounted(() => {
  catsStore.fetchCats();
});

const cats = computed(() => catsStore.cats);

function deleteCat(id) {
  if (confirm("Are you sure you want to delete this cat?")) {
    cats.value = cats.value.filter((cat) => cat.id !== id);
  }
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
</script>
