<script setup>
import { computed } from 'vue'

import { HOODIES } from '@/data/hoodies'
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()

const cartList = computed(() => {
    let cartList = []
    for(let i = 0; i<cartStore.cart.length; i++) {
        let hoodieIndex = HOODIES.findIndex((hoodie) => hoodie.ref === cartStore.cart[i].ref)
        cartList.push({
            hoodie: HOODIES[hoodieIndex],
            qty: cartStore.cart[i].qty,
            size: cartStore.cart[i].size
        })
    }
    return cartList
})

const totalPrice = computed(() => {
    return cartList.value.reduce(
        (accumulator, curItem) => accumulator + curItem.hoodie.price * curItem.qty,
        0
    )
})


</script>


<template>
    <div
        class="fixed inset-0  bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        :class="cartStore.change === true ? '':'hidden'"
        id="my-modal"
    >   
    <div
        class="relative top-20 mx-auto p-5 border w-2/4 shadow-lg  rounded-md bg-white"
    >
            <div class="mt-0 text-center">
                <div
                    class="mx-auto flex items-center justify-center"
                >
                <h3 class="text-lg leading-6 font-medium text-gray-900">VOTRE PANIER : {{ totalPrice }} € </h3>
                </div>
                
                <div class="mt-2 px-7 py-3">
                    <p class="text-sm text-gray-500"> 
                        <!-- liste panier -->
                        <div
                            class="p-5 border shadow-lg rounded-md bg-white text-left h-24 flex justify-start space-x-8 mb-2"
                            v-for="item in cartList"
                            :key="item.hoodie.ref"
                        >
                            <img
                                class="rounded-md object-cover"
                                :src="'/src/assets/img/'+item.hoodie.picture"
                                alt="mini preview" />
                            <span>{{ item.hoodie.name }} ({{ item.size }}) </span> <!--  name -->
                            <span>{{ item.hoodie.price }} €</span>  <!--  prix unité -->
                            <span>x{{ item.qty }}</span> <!--  quantité -->
                            <span>TOTAL {{ item.hoodie.price * item.qty }} €</span> <!--  quantité*price -->
                            <button
                                class="px-2 border-tertiary-contrast border-2 border-primary cursor-pointer rounded-[0.27rem] hover:text-red-600"
                                @click="cartStore.removeArticle(item.hoodie.ref)"                            
                            >Retirer article</button>
                        </div>
                        
                        
                    </p>
                </div>
                <div class="items-center px-4 py-3">
                    <button
                        id="ok-btn"
                        class="px-4 py-2 bg-tertiary-contras text-base font-medium rounded-md w-full shadow-sm hover:opacity-90"
                    >
                        Passer à la caisse
                    </button>
                    <button 
                        class="py-2"
                        @click="cartStore.change = false"
                    >
                        Continuer les achats
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>