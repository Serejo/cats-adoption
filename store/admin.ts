import { defineStore } from "pinia";
import { useNuxtApp } from "#app";

export const useAdminStore = defineStore("admin", {
  state: () => ({
    admin: {},
    loadingSubmit: false,
  }),
  actions: {
    async handleLogin(email: string, password: string) {
      const { $router } = useNuxtApp();
      const form = ref({ email, password });
      try {
        this.loadingSubmit = true;
        const result = await $fetch("/api/admin/login", {
          method: "POST",
          body: form.value,
        });
        console.log("Login result:", result);
        if ("error" in result) {
          alert(result.error);
        } else {
          localStorage.setItem("adminToken", result.token);
          $router.push("/admin/dashboard");
        }
      } catch (err) {
        console.error("Login error:", err);
        alert("Erro ao efetuar login.");
      } finally {
        this.loadingSubmit = false;
      }
    },
  },
});
