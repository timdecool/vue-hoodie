<script setup>
    import CardItem from '@/components/CardItem.vue'
    import { HOODIES } from '@/data/hoodies'
</script>

<template>
    <div id="item-list" class="px-4" v-for="hoodie in HOODIES" :key="hoodie.ref">
        <card-item :hoodie="hoodie"/>
    </div>
</template>
