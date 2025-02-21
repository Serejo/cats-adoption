<template>
  <div class="container mx-auto py-8">
    <nuxt-link to="/" class="text-gray-500 hover:underline mb-4 inline-block">
      &larr; Back
    </nuxt-link>
    <div
      class="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row"
    >
      <div class="md:w-1/2">
        <img
          :src="cat?.image || '/default-cat.jpg'"
          alt="Cat image"
          class="w-110 h-64 md:h-full object-cover justify-center"
        />
      </div>
      <div class="p-4 md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 class="text-2xl font-bold mb-2">{{ cat?.name }}</h1>
          <p class="text-gray-600">
            Age: {{ cat?.age }} {{ cat?.age === 1 ? "year" : "years" }}
          </p>
          <p class="text-gray-800 mb-4">{{ cat?.description }}</p>
          <p class="text-green-500 font-semibold">{{ cat?.status }}</p>
        </div>

        <button
          @click="openRequestModal"
          class="mt-4 bg-[#4E2096] text-white py-2 px-4 rounded-full hover:bg-[#3b1a73] w-full"
        >
          Request Adoption
        </button>
      </div>
    </div>
    <!-- Modal de solicitação de adoção -->
    <AdoptionRequestModal
      :show="showRequestModal"
      @close="showRequestModal = false"
      @submit="handleRequest"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import type { CatModel } from "~/interfaces/cat_model";
import { useCatsStore } from "~/store/cats";
import { useAdoptionsStore } from "~/store/adoptions";
import type { AdoptionModel } from "~/interfaces/adoption_model";
import AdoptionRequestModal from "~/components/modals/AdoptionRequestModal.vue";

const catStore = useCatsStore();
const adoptionStore = useAdoptionsStore();
const route = useRoute();
let cat = ref<CatModel | null>(null);
const catId = Number(route.params.id);
const showRequestModal = ref(false);

onMounted(async () => {
  await catStore.loadCat(catId);
  cat.value = catStore.catDetail;
});

function openRequestModal() {
  showRequestModal.value = true;
}

async function handleRequest(form: AdoptionModel) {
  form.catId = catId;
  form.catName = cat.value?.name || "";
  await adoptionStore
    .requestAdoption({
      ...form,
    })
    .then(() => {
      adoptionStore.changeStatusCat(catId, "Pending");
      catStore.loadCat(catId);
      cat.value = catStore.catDetail;
      showRequestModal.value = false;
    });
  showRequestModal.value = false;
}
</script>
