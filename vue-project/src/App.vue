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
  <h1>Test</h1>
  <ProductList :productList="products" />

</template>

<style scoped>

</style>
