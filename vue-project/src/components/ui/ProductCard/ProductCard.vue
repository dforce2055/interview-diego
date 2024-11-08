<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { COLOR, Product } from '../../../types'

const props = defineProps({
  product: {
    type: Object as () => Product,
    required: true,
    default: {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: COLOR.BLACK,
    }
  }
})

// const emit = defineEmits(['save', 'delete'])


</script>
<template>
    <div v-if="props.product" class="group relative">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img 
            :src="props.product.imageSrc" :alt="product.imageAlt" 
            class="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
        </div>
        <div class="mt-4 flex justify-between">
        <div>
            <h3 class="text-sm text-gray-700">
            <a :href="product.href">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ product.name }}
            </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
        </div>
        <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
        </div>
    </div>
</template>
<style>
</style>