<script setup lang="ts">
import { ref } from 'vue'
import { Product, COLOR } from '@/types'

import ProductList from './components/ui/ProductList/ProductList.vue';

const products = ref<Product[]>([
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: COLOR.BLACK,
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$25',
    color: COLOR.WHITE,
  },
])

</script>

<template>
  <div class="wg-white px-12 py-12 mx-auto w-full"> 

    <h1 class="3xl text-blue-500">E-Commerce app</h1>
    <ProductList :productList="products" />
  </div>
</template>

<style scoped>

</style>
