<template>
  <div class="product">
    <div class="product-right">
      <img :src="product.image" :alt="product.name" class="product-img" />
    </div>
    <div class="product-left">
      <h2 class="product-name">{{ product.title }}</h2>
      <h3 class="product-category">{{ product.category }}</h3>
      <p class="product-price">{{ product.price }} $</p>
      <div class="product-quan">
        <span class="quan-name">Quantity</span>
        <div class="product-quantity">
          <span
            class="product-quantity-symbol"
            @click="quantity > 1 && quantity--"
            >-</span
          >
          <span class="product-quantity-value">{{ quantity }}</span>
          <span class="product-quantity-symbol" @click="quantity++">+</span>
        </div>
      </div>
      <div class="buttons">
        <button
          @click="cartStore.addToCart(product, quantity)"
          class="cart-btn btn"
        >
          Add to cart
        </button>
        <button @click="favsStore.addToFavs(product)" class="fav-btn btn">
          Save to favourites
        </button>
      </div>
      <p class="product-descr">Description</p>
      <p class="product-description">{{ product.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart.ts";
import { useFavsStore } from "@/store/favs.ts";
import { ref } from "vue";

const props = defineProps({
  product: {
    type: Object,
    default: () => {},
    required: true,
  },
});

const quantity = ref(1);
const cartStore = useCartStore();
const favsStore = useFavsStore();
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  margin-bottom: 150px;
  margin-right: auto;
  &-right {
    width: 520px;
    height: 520px;
    margin-right: 39px;
  }
  &-img {
    display: block;
    max-width: 520px;
    max-height: 520px;
    margin: auto;
  }
  &-quantity {
    width: 122px;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    margin-bottom: 15px;
  }
  &-name {
    font-family: "TT Livret Subhead Trl", sans-serif;
    font-weight: 400;
    font-size: 48px;
    line-height: 130%;
    color: #333333;
  }
  &-category {
    font-weight: 400;
    font-size: 22px;
    line-height: 140%;
    color: #333333;
    opacity: 0.5;
    margin-bottom: 41px;
  }
  &-price {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: #333333;
    margin-bottom: 41px;
  }
  &-descr {
    font-family: "TT Livret Subhead Trl", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #333333;
    margin-bottom: 15px;
  }
  &-description {
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
    color: #111010;
    opacity: 0.75;
  }

  &-quantity-symbol {
    cursor: pointer;
  }
}

.quan-name {
  font-size: 22px;
  color: #333333;
}

.btn {
  display: inherit;
}
.cart-btn {
  background-color: #ba967d;
  color: white;
  width: 360px;
  height: 60px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 20px;
}
.fav-btn {
  border: 1px solid #eeebeb;
  color: #333333;
  width: 360px;
  height: 60px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 20px;
}
</style>
