<template>
  <NuxtLayout name="admin">
    <div class="container mx-auto p-8">
      <h1 class="text-3xl font-bold mb-6">Manage Adoption Requests</h1>
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
                Applicant Name
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
                {{ request.catName }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ request.status }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <button
                  @click="approveRequest(request.id)"
                  class="text-green-500 hover:underline mr-2"
                >
                  Approve
                </button>
                <button
                  @click="rejectRequest(request.id)"
                  class="text-red-500 hover:underline"
                >
                  Reject
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

const requests = ref([]);

onMounted(() => {
  requests.value = [
    { id: 1, name: "John", catName: "Mittens", status: "Pending" },
    { id: 2, name: "Mary", catName: "Whiskers", status: "Pending" },
  ];
});

function approveRequest(id) {
  alert(`Request ${id} approved!`);
}

function rejectRequest(id) {
  alert(`Request ${id} rejected!`);
}
</script>
