import { defineStore } from "pinia";

export const useFavsStore = defineStore("favsStore", {
  state: () => ({
    favs: [],
  }),
  actions: {
    addToFavs(product) {
      const index = this.favs.findIndex(
        (item) => item.product.id === product.id
      );
      if (index !== -1) {
        this.favs.splice(index, 1);
      } else {
        this.favs.push({ product });
      }
      console.log(this.favs);
    },
  },
});
