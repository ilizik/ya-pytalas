import { createRouter, createWebHistory } from "vue-router";
import Index from "@/Views/Index.vue";
import ProductCard from "@/Views/ProductCard.vue";
import Cart from "@/Views/Cart.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/:id",
      name: "Product",
      component: ProductCard,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
  ],
});

export default router;
