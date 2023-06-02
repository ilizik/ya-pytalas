<template>
  <div class="cart">
    <h1 class="cart-name">Cart</h1>
    <p class="cart-price">Total Price: {{ totalPrice }} $</p>
    <div class="cart-products">
      <ProductCart
        v-for="item of items"
        :key="item.product.id"
        :product="item.product"
        :count="item.count"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ProductCart from "@/components/ProductCart.vue";

const props = defineProps({
  items: {
    required: true,
  },
});

const totalPrice = computed(() => {
  let total = 0;
  for (const item of props.items) {
    total += item.product.price * item.count;
  }
  return total;
});
</script>

<style lang="scss" scoped>
.cart {
  width: 923px;
  margin: auto;
  margin-bottom: 250px;
  &-name {
    font-family: "TT Livret Subhead Trl", sans-serif;
    font-size: 46px;
    font-style: normal;
    margin-bottom: 50px;
  }
  &-price {
    display: block;
    width: fit-content;
    margin-left: auto;
    color: #333333;
    font-size: 26px;
    margin-left: auto;
  }
}
</style>
