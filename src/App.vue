<script setup lang="ts">
  import { ref } from 'vue';
  import Header from './components/Layout/Header.vue'
  import Catalog from './components/Catalog.vue'
  import { useFetch } from '@vueuse/core'

</script>


<template>
  <div class="container">
    <Header/>
    <Catalog/>
  </div>
</template>

<style lang="scss">
  @import './src/assets/styles/global.scss'
</style>
