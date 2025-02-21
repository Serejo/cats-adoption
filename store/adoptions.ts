import { request } from "http";
import { defineStore } from "pinia";
import type { AdoptionModel } from "~/interfaces/adoption_model";
import type { CatModel } from "~/interfaces/cat_model";

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

    async updateAdoption(adoption: AdoptionModel) {
      try {
        await $fetch<AdoptionModel>(`/api/adoptions/${adoption.id}`, {
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

    async requestAdoption(adoption: AdoptionModel) {
      try {
        const newAdoption = await $fetch<AdoptionModel>(
          "/api/adoptions/adoptions",
          {
            method: "POST",
            body: adoption,
          }
        );
      } catch (error) {
        console.error("Error requesting adoption:", error);
      }
    },

    async approveAdoption(adoptionId: number) {
      try {
        await $fetch<AdoptionModel>(`/api/adoptions/approve/${adoptionId}`, {
          method: "PUT",
        });
      } catch (error) {
        console.error("Error approving adoption:", error);
      }
    },

    async rejectAdoption(adoptionId: number) {
      try {
        await $fetch<AdoptionModel>(`/api/adoptions/reject/${adoptionId}`, {
          method: "PUT",
        });
      } catch (error) {
        console.error("Error rejecting adoption:", error);
      }
    },

    async changeStatusCat(adoptionId: number, status: string) {
      const cat = await $fetch<CatModel>(`/api/cats/${adoptionId}`);
      cat.status = status;
      await $fetch<CatModel>(`/api/cats/${cat.id}`, {
        method: "PUT",
        body: cat,
      });
    },
  },
});
