<template>
  <div>
    <ProductDet :product="currentProduct" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "@/api.ts";
import ProductDet from "@/components/ProductDet.vue";

const route = useRoute();
const router = useRouter();
const ProductID = ref("");
const currentProduct = ref({});

onMounted(async () => {
  ProductID.value = route.params.id;
  currentProduct.value = await api.getProduct(ProductID.value);
});
</script>
