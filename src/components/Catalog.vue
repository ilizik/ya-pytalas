<template>
  <div class="catalog">
    <h1 class="catalog-name">Catalog</h1>
    <div class="search">
      <img src="/svg/search.svg" alt="" class="search-icon" />
      <input
        v-model="searchValue"
        type="search"
        placeholder="Type to search"
        class="catalog-input"
      />
    </div>
    <div class="catalog-filtersort">
      <div class="filters">
        <select v-model="selectedCategory" class="filter category">
          <option value="" class="option">Category</option>
          <option
            v-for="category in categories"
            :value="category"
            :key="category"
          >
            {{ category }}
          </option>
        </select>
        <input class="checkbox" type="checkbox" v-model="showFavorites" />
        <label>Favourites</label>
      </div>
      <select v-model="sortOption" class="filter">
        <option value="" class="option">Sort</option>
        <option value="priceAscending" class="option">↑ Price</option>
        <option value="priceDescending" class="option">↓ Price</option>
        <option value="alphaAscending" class="option">↑ Alphabet</option>
        <option value="alphaDescending" class="option">↓ Alphabet</option>
      </select>
    </div>
    <div class="catalog-products">
      <Product
        v-for="product of sortedProducts"
        :id="product.id"
        :key="product.id"
        :image="product.image"
        :title="product.title"
        :price="product.price"
        :description="product.description"
        :category="product.category"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Product from "@/components/Product.vue";
import { useFavsStore } from "@/store/favs.ts";
import { filteredProducts as getFilteredProducts } from "@/sort/filter.ts";
import { sortedProducts as getSortedProducts } from "@/sort/sort.ts";

const props = defineProps({
  products: {
    required: true,
  },
});

const searchValue = ref("");
const sortOption = ref("");
const selectedCategory = ref("");
const favsStore = useFavsStore();
const favoriteProducts = favsStore.favs;
//console.log(favoriteProducts)
const showFavorites = ref(false);

const categories = computed(() => {
  const uniqueCategories = new Set(
    props.products.map((product) => product.category)
  );
  return [].concat(Array.from(uniqueCategories));
});

const filteredProducts = computed(() => {
  return getFilteredProducts(
    props.products,
    searchValue.value,
    selectedCategory.value,
    showFavorites.value,
    favoriteProducts
  );
});

const sortedProducts = computed(() => {
  return getSortedProducts(filteredProducts.value, sortOption.value);
});
</script>

<style lang="scss" scoped>
.catalog {
  width: 923px;
  margin: auto;
  &-products {
    display: flex;
    column-gap: 40px;
    flex-wrap: wrap;
    margin: auto;
  }
  &-name {
    font-family: "TT Livret Subhead Trl", sans-serif;
    font-size: 46px;
    font-style: normal;
    margin-bottom: 50px;
  }

  &-input {
    width: 50%;
    height: 40px;
    border: none;
    border-bottom: 1px solid lightgrey;
    outline: none;
    font-size: 16px;
  }

  &-filtersort {
    display: flex;
    margin-bottom: 30px;
  }
}

.filters {
  margin-right: auto;
}
.filter {
  height: 20px;
  border: none;
  outline: none;
  font-size: 16px;
  color: #333333;
}

.category {
  margin-right: 15px;
}

.checkbox {
  font-size: 16px;
  color: #333333;
}

.search {
  display: flex;
  text-align: center;
  margin-bottom: 20px;
  &-icon {
    margin-right: 15px;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
