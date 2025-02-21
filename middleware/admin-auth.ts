export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/admin/login") {
    return;
  }

  const token = localStorage.getItem("adminToken");
  if (!token) {
    return navigateTo("/admin/login");
  }
});
