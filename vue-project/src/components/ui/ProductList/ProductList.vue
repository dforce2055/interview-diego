<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { Product } from '@/types'
import ProductCard from '../ProductCard/ProductCard.vue';


const props = defineProps({
  productList: {
    type: Array as () => Product[],
    }
})

// const emit = defineEmits(['save', 'delete'])


</script>
<template>
    <div class="bg-white">
        <div v-if="props.productList" class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ProductCard v-for="product in props.productList" :key="product.id "/>
        </div>  
    </div>
    
</template>
<style>
</style>