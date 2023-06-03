<template>
  <CartProducts :items="items" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCartStore } from "@/store/cart.ts";
import CartProducts from "@/components/CartProducts.vue";
const cartStore = useCartStore();
const items = ref(cartStore.cart);
</script>

