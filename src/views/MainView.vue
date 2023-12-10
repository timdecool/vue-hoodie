<script setup>
import { ref } from 'vue'
import FiltersSection from '@/components/FiltersSection.vue'
import CardList from '@/components/CardList.vue'

const brand = ref("All")
const price = ref(false)
function handleBrandChange(newBrand) {
    brand.value = newBrand
}

function handlePriceChange(newPrice) {
    price.value = newPrice
}

</script>

<template>
    <div class="container mx-auto mt-4  w-2/3 bg-card-background rounded py-2">
        <filters-section @brandFilter="handleBrandChange" @priceFilter="handlePriceChange"/>
        <card-list :brand="brand" :price="price"/>
    </div>

</template>