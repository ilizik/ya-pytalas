<template>
  <div class="catalog">
    <h1 class="catalog-name">Catalog</h1>
    <div class="search">
      <input v-model="searchValue" type="search" placeholder="Type to search" class="catalog-input">
    </div>
    <div class="catalog-filtersort">
      <div class="filters">
        <select name="Категория" id="" class="filter">
          <option value="" class="option">Category</option>
        </select>
        <input type="checkbox" name="" id=""><label>Favourites</label>
      </div>
      <select name="" id="" class="filter">
        <option value="" class="option">Sort</option>
        <option value="" class="option">↓ Price</option>
        <option value="" class="option">↑ Price</option>
        <option value="" class="option">↓ Alphabet</option>
        <option value="" class="option">↑ Alphabet</option>
      </select>
    </div>
    <div class="catalog-products">
      <Product v-for='product of searchProducts' 
        :id="product.id"
        :key="product.id"
        :image="product.image"
        :title="product.title"
        :price="product.price"
        :description="product.description"
        :category="product.category"/>  
        
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Product from '@/components/Product.vue';

const props = defineProps({
  products: {
    required: true,
  },
});

const searchValue = ref('');

const searchProducts = computed(() => {
  return props.products.filter((product) => {
    const title = product.title.toLowerCase();
    const search = searchValue.value.toLowerCase();
    return title.includes(search);
  });
});
</script>


<style lang="scss" scoped>
    .catalog {
      max-width: 923px;
      margin: auto;
      &-products {
          display: flex;
          column-gap: 40px;
          flex-wrap: wrap;
          margin: auto;

      }   
      &-name {
        font-family: 'TT Livret Subhead Trl', sans-serif;
        font-size: 46px;
        font-style: normal;
        margin-bottom: 50px;
      } 

      &-input {
        width: 50%;
        height: 40px;
        border: 1px solid lightgrey;
        border-radius: 10px;
        margin-bottom: 15px;
      }

      &-filtersort {
        display: flex;
        margin-bottom: 15px;
      }
    }

    .filters{
      margin-right: auto;
    }
    .filter {
      height: 20px;
    }
  
</style>