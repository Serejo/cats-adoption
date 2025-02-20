<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside
      class="w-56 bg-gray-800 text-white p-6 flex flex-col justify-between"
    >
      <div>
        <h2 class="text-2xl font-bold mb-6">Admin</h2>
        <ul>
          <li class="mb-4">
            <NuxtLink to="/admin/dashboard" class="hover:underline"
              >Dashboard</NuxtLink
            >
          </li>
          <li class="mb-4">
            <NuxtLink to="/admin/cats" class="hover:underline"
              >Manage Cats</NuxtLink
            >
          </li>
          <li class="mb-4">
            <NuxtLink to="/admin/adoptions" class="hover:underline"
              >Adoption Requests</NuxtLink
            >
          </li>
        </ul>
      </div>
      <button @click="logout" class="text-white font-bold py-2 px-4 rounded">
        <Icon name="heroicons-solid:login" class="inline-block mr-2" />
        Logout
      </button>
    </aside>

    <!-- Main Content -->
    <main class="flex-grow p-6">
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("adminToken");
      this.$router.push("/admin/login");
      console.log("Logout");
    },
  },
};
</script>
