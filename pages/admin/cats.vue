<template>
  <NuxtLayout name="admin">
    <div class="container mx-auto p-8">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-3xl font-bold">Manage Cats</h1>
        <button
          class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          @click="openCreateModal"
        >
          Add New Cat
        </button>
      </div>
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
          <tbody
            v-if="catsStore.loadingList"
            class="bg-white divide-y divide-gray-200"
          >
            <tr>
              <td
                colspan="7"
                class="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500"
              >
                Loading...
              </td>
            </tr>
          </tbody>
          <tbody v-else class="bg-white divide-y divide-gray-200">
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
                <button
                  class="text-blue-600 hover:text-blue-900 mr-4"
                  @click="openEditModal(cat)"
                >
                  <Icon name="heroicons-outline:pencil" size="20" />
                </button>
                <button
                  @click="openDeleteModal(cat)"
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
    <CreateCatModal
      :show="showCreateModal"
      @close="showCreateModal = false"
      @create="handleCreateCat"
    />
    <EditCatModal
      :show="showEditModal"
      :cat="selectedCat"
      @close="showEditModal = false"
      @update="handleUpdateCat"
    />
    <DeleteCatModal
      :show="showDeleteModal"
      @close="showDeleteModal = false"
      @confirm="handleDeleteCat"
    />
  </NuxtLayout>
</template>

<script setup>
import CreateCatModal from "~/components/modals/CreateCatModal.vue";
import EditCatModal from "~/components/modals/EditCatModal.vue";
import DeleteCatModal from "~/components/modals/DeleteCatModal.vue";
import { onMounted } from "vue";

definePageMeta({
  middleware: "admin-auth",
});
import { useCatsStore } from "~/store/cats";

const catsStore = useCatsStore();
const showCreateModal = ref(false);
const showEditModal = ref(false);
const showDeleteModal = ref(false);
const selectedCat = ref(null);

onMounted(() => {
  catsStore.fetchCats();
});

const cats = computed(() => catsStore.cats);

function openCreateModal() {
  showCreateModal.value = true;
}

function openEditModal(cat) {
  selectedCat.value = cat;
  showEditModal.value = true;
}

function openDeleteModal(cat) {
  selectedCat.value = cat;
  showDeleteModal.value = true;
}

async function handleCreateCat(newCat) {
  await catsStore.addCat(newCat).then(() => {
    showCreateModal.value = false;
    catsStore.fetchCats();
  });
}

async function handleUpdateCat(updatedCat) {
  await catsStore.updateCat(updatedCat).then(() => {
    showEditModal.value = false;
    catsStore.fetchCats();
  });
}

async function handleDeleteCat() {
  await catsStore.deleteCat(selectedCat.value.id).then(() => {
    showDeleteModal.value = false;
    catsStore.fetchCats();
  });
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
</script>
