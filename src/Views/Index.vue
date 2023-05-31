<script setup lang="ts">
  import { ref } from 'vue';
  import { onMounted } from 'vue';
  import api from '@/api';
  import Catalog from '@/components/Catalog.vue'
  
  const products = ref([])

  onMounted(async() => {
    products.value = await api.getProducts();
  })
</script>


<template>
  <div>
    <Catalog :products="products"/>  
  </div>
</template>

