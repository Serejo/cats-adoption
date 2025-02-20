import { defineStore } from "pinia";
import type { CatModel } from "~/interfaces/cat_model";

export const useCatsStore = defineStore("cats", {
  state: () => ({
    cats: [] as CatModel[],
  }),
  actions: {
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
