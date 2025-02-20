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
    addCat(cat: CatModel) {
      this.cats.push(cat);
    },
    getCatById(id: number) {
      console.log("id", id);
      return this.cats.find((cat) => cat.id === id);
    },
  },
});
