<script setup>
    import { computed } from 'vue'
    import CardItem from '@/components/CardItem.vue'
    import { HOODIES } from '@/data/hoodies'

    const props = defineProps({
        brand: {
            type:String,
            required: true
        },
        price: {
            type:Boolean,
            required: true
        }
    })

    const hoodies = computed(() => {
        let hoodies = HOODIES
        if(props.brand !== "All") {
            hoodies = HOODIES.filter((hoodie) => hoodie.brand === props.brand)
        }
        if(props.price) {
            hoodies = hoodies.filter((hoodie) => hoodie.price < 100)
        }
        return hoodies
    })
</script>

<template>

    <div id="item-list" class="px-4" v-for="hoodie in hoodies" :key="hoodie.ref">
        <card-item :hoodie="hoodie"/>
    </div>
    <p v-if="hoodies.length === 0" class="px-4">Aucun résultat pour cette recherche.</p>
</template>
