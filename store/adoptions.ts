import { defineStore } from "pinia";
import type { AdoptionModel } from "~/interfaces/adoption_model";

export const useAdoptionsStore = defineStore("adoptions", {
  state: () => ({
    adoptions: [] as AdoptionModel[],
    adoptionDetail: {} as AdoptionModel,
    loadingList: ref(false),
  }),
  actions: {
    async fetchAdoptions() {
      this.loadingList = true;
      try {
        const adoptionsData = await $fetch<AdoptionModel[]>("/api/adoptions");
        this.adoptions = adoptionsData;
      } catch (error) {
        console.error("Error fetching adoptions:", error);
      } finally {
        this.loadingList = false;
      }
    },

    setAdoptions(newAdoptions: AdoptionModel[]) {
      this.adoptions = newAdoptions;
    },

    async addAdoption(adoption: AdoptionModel) {
      try {
        const newAdoption = await $fetch("/api/adoptions", {
          method: "POST",
          body: adoption,
        });
      } catch (error) {
        console.error("Error adding adoption:", error);
      }
    },

    async updateAdoption(adoption: AdoptionModel) {
      try {
        await $fetch(`/api/adoptions/${adoption.id}`, {
          method: "PUT",
          body: adoption,
        });
        return;
      } catch (error) {
        console.error("Error updating adoption:", error);
      }
    },

    async getAdoptionById(adoptionId: number) {
      return this.adoptions.find((adoption) => adoption.id === adoptionId);
    },
  },
});
