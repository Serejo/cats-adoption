export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("adminToken").value;
  if (!token) {
    return navigateTo("/admin/login");
  }
});
