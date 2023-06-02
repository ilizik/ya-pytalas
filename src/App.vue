<script setup lang="ts">
import { ref } from "vue";
import { onMounted } from "vue";
import api from "@/api";
import Header from "@/components/Layout/Header.vue";
import Footer from "@/components/Layout/Footer.vue";

const products = ref([]);

onMounted(async () => {
  products.value = await api.getProducts();
});
</script>

<template>
  <div class="app">
    <div class="container">
      <Header />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
@import "./src/assets/styles/global.scss";
</style>
