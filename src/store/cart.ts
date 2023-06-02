import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    cart: [],
  }),
  getters: {
    totalItems() {
      return this.cart.reduce((total, item) => total + item.count, 0);
    },
  },
  actions: {
    addToCart(product, count) {
      const cartItem = this.cart.find((item) => item.product.id === product.id);

      if (cartItem) {
        cartItem.count += count;
      } else {
        this.cart.push({ product, count });
      }
    },
  },
});
