<template>
  <div class="product">
    <router-link :to="`/${product.id}`" class="product-image-link" href="#">
      <img class="product-image" :src="product.image" :alt="product.title" />
    </router-link>
    <div class="product-info">
      <router-link :to="`/${id}`" href="#" class="product-name">{{
        product.title
      }}</router-link>
      <div>
        <p class="product-info-name">Price</p>
        <p class="product-price">{{ product.price }} $</p>
      </div>
      <div class="">
        <p class="product-info-name">Quantity</p>
        <p class="product-price">{{ count }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  &-image-link {
    display: block;
    height: 300px;
    width: 251px;
    margin-bottom: 15px;
    margin-right: auto;
  }
  &-info {
    display: flex;
    &-name {
      color: #333333;
      display: block;
      font-size: 26px;
      font-weight: 700;
    }
  }
  &-image {
    display: block;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }
  &-name {
    display: block;
    width: 370px;
    margin-right: 40px;
    color: #333333;
    font-size: 24px;
    font-family: "TT Livret Subhead Trl", sans-serif;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  &-price {
    color: #333333;
    display: block;
    font-size: 26px;
    margin-bottom: 0;
    margin-right: 50px;
  }
  width: 100%;
  display: flex;
  padding-top: 40px;
  border-top: 2px solid #333333;
}
</style>
