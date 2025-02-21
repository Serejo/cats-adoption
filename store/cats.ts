import { defineStore } from "pinia";
import type { CatModel } from "~/interfaces/cat_model";

export const useCatsStore = defineStore("cats", {
  state: () => ({
    cats: [] as CatModel[],
    catDetail: {} as CatModel,
    loadingList: ref(false),
  }),
  actions: {
    async fetchCats() {
      this.loadingList = true;
      try {
        const catsData = await $fetch<CatModel[]>("/api/cats");
        this.cats = catsData;
      } catch (error) {
        console.error("Erro ao buscar gatos:", error);
      } finally {
        this.loadingList = false;
      }
    },

    async loadCat(catId: number) {
      const catFromStore = this.getCatById(catId);
      if (catFromStore) {
        this.catDetail = catFromStore;
        return;
      } else {
        const { data, error } = await useFetch(`/api/cats/${catId}`);
        if (error.value) {
          console.error("Error loading cat details:", error.value);
        } else {
        }
      }
    },

    setCats(newCats: CatModel[]) {
      this.cats = newCats;
    },

    async addCat(cat: CatModel) {
      try {
        const newCat = await $fetch<CatModel>("/api/cats", {
          method: "POST",
          body: cat,
        });
      } catch (error) {
        console.error("Error adding cat:", error);
      }
    },

    async updateCat(cat: CatModel) {
      try {
        await $fetch<CatModel>(`/api/cats/${cat.id}`, {
          method: "PUT",
          body: cat,
        });
        return;
      } catch (error) {
        console.error("Error updating cat:", error);
      }
    },

    async deleteCat(catId: number) {
      try {
        await $fetch<CatModel>(`/api/cats/${catId}`, {
          method: "DELETE",
        });
        return;
      } catch (error) {
        console.error("Error deleting cat:", error);
      }
    },

    getCatById(id: number) {
      console.log("id", id);
      return this.cats.find((cat) => cat.id === id);
    },
  },
});
