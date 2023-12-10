<script setup>
    import { computed, ref } from 'vue'
    import { HOODIES } from '@/data/hoodies'

    // Compute available brands
    const hoodies = computed(() => {
        let hoodies = HOODIES
        if(priceFilter.value) { hoodies = hoodies.filter((hoodie) => hoodie.price < 100)}
        return hoodies
    })

    const brands = computed(() => {
        let brandsArray = ["All", ...new Set(hoodies.value.map(({ brand }) => brand))]

        return brandsArray
    })

    // FILTER CHANGES
    const currentBrand = ref("All")
    const priceFilter = ref(false)

    const emit = defineEmits(['brandFilter','priceFilter'])
    function changeBrand(brand) {
        if(currentBrand.value === brand) { 
            currentBrand.value = "All"
        }
        else { currentBrand.value = brand }
        emit("brandFilter", currentBrand.value)
    }

    function changePriceFilter() {
        priceFilter.value = !priceFilter.value
        emit("priceFilter", priceFilter.value)
    }

</script>


<template>
    <div id="filters" class="px-4 mt-4 flex space-x-2 bg-white py-2">
        <template v-for="brand in brands">
            <span v-if="brand !=='No brand'"
            class="px-2 border-tertiary-contrast border-2 border-primary cursor-pointer rounded-[0.27rem] hover:text-red-600"
            :class="brand === currentBrand ? 'text-red-600':''"
            @click="changeBrand(brand)"
            >
            {{ brand }}
            </span>
        </template>

        <span
        class="px-2 border-tertiary-contrast border-2 border-primary cursor-pointer rounded-[0.27rem] hover:text-red-600"
        :class="priceFilter ? 'text-red-600':''"
        @click="changePriceFilter"
        >
        &#60;100€
        </span>
    </div>
</template>
