<template>
  <NuxtLayout name="admin">
    <div class="container mx-auto p-8">
      <h1 class="text-3xl font-bold mb-6">Manage Adoption Requests</h1>
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">ID</th>
            <th class="py-2 px-4 border-b">Applicant Name</th>
            <th class="py-2 px-4 border-b">Cat</th>
            <th class="py-2 px-4 border-b">Status</th>
            <th class="py-2 px-4 border-b">Actions</th>
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
