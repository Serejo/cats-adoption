<template>
  <NuxtLayout name="admin">
    <div class="container mx-auto p-8">
      <h1 class="text-3xl font-bold mb-6">Manage Adoption Requests</h1>
      <div class="overflow-x-auto">
        <table
          class="min-w-full bg-[#FFFFFF] shadow rounded divide-y divide-gray-200"
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
                Applicant Name
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Contact
              </th>

              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Cat
              </th>

              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Solicited At
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="request in requests" :key="request.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ request.id }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ request.name }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ request.contact }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ request.catName }}
              </td>
              <td
                :class="{
                  'text-green-600': request.status === 'Available',
                  'text-yellow-600': request.status === 'Pending',
                  'text-blue-600': request.status === 'Adopted',
                  'text-red-600': request.status === 'Rejected',
                }"
              >
                {{ request.status }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ formatDate(request.createdAt) }}
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                v-if="request.status !== 'Adopted'"
              >
                <button
                  @click="approveRequest(request.id)"
                  class="bg-green-500 text-white py-2 px-4 mx-2 rounded hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  @click="rejectRequest(request.id)"
                  class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Reject
                </button>
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                v-else
              >
                <span>Not available</span>
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
import { useAdoptionsStore } from "~/store/adoptions";

definePageMeta({
  middleware: "admin-auth",
});

const adoptionStore = useAdoptionsStore();

const requests = computed(() => adoptionStore.adoptions);

onMounted(() => {
  adoptionStore.fetchAdoptions();
});

async function approveRequest(id) {
  await adoptionStore.approveAdoption(id).then(() => {
    adoptionStore.changeStatusCat(id, "Adopted");
    adoptionStore.fetchAdoptions();
  });
}

async function rejectRequest(id) {
  await adoptionStore.rejectAdoption(id);
  adoptionStore.fetchAdoptions();
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
</script>
