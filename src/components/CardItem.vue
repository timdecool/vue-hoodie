<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()

const props = defineProps({
    hoodie: {
        type: Object,
        required: true
    }
})

// Changer la taille sélectionnée
function changeSize(index) {
    selectedSize.value = index
}

const availableStock = computed(() => {
    return props.hoodie.globalStock.filter((size) => size.stock > 0)
})

const selectedSize = ref(0)
const selectedQuantity = ref(0)

const emit = defineEmits(['addToCart'])





</script>

<template>
    <div
        id="item-card"
        class="flex w-full border-b-2 border-tertiary-contrast mt-6"
    >
        <div
            class="flex rounded-lg bg-card-background-light shadow-lg flex-row w-full"
        >
            <img
            class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            :src="'/src/assets/img/'+hoodie.picture"
            alt=""
            />
            <div class="flex flex-col justify-start p-6">
            <h5 class="mb-2 text-2xl font-bold text-neutral-800">
                {{ hoodie.name }}
                <span
                class="inline-block ml-4 bg-button-background border-button-text rounded-md border-2 border-primary px-6 py-2 text-sm font-bold uppercase leading-normal text-primary"
                >
                {{ hoodie.price }}€
                </span>
            </h5>

            <p class="mb-4 text-base text-neutral-600">
                {{ hoodie.description }}
            </p>

            <p class="text-xs text-neutral-600">
                <button
                type="button"
                class="inline-block rounded border-2 border-tertiary-contrast border-opacity-75 px-6 pt-2 pb-2 mr-1 text-xs font-medium uppercase leading-normal text-info"
                v-for="(size, index) in hoodie.availableSize" 
                :key="index"
                @click="changeSize(index)"
                :class="index === selectedSize ? 'border-red-600':''"
                >
                {{ size }}
                </button>
                <p class="text-red-600 inline-block ml-2" v-if="hoodie.globalStock[selectedSize].stock == 0">Indisponible à cette taille</p>
            </p>

            <div class="flex flex-row mt-12">
                <div class="basis-1/4 w-96">
                QTY
                <select
                    v-model="selectedQuantity"                
                >
                    <option
                        v-for="n in hoodie.globalStock[selectedSize].stock+1"  
                        :value="n-1"
                        :selected="n-1 == 1 & hoodie.globalStock[selectedSize].stock > 0 ? true:false"
                    >
                    {{ n-1 }}
                    </option>
                </select>
                </div>
                <div class="basis-1/4">
                <button
                    type="button"
                    class="inline-block rounded border-2 bg-tertiary-contrast text-card-background-light border-button-text px-6 pt-2 pb-2 text-xs font-medium uppercase leading-normal text-info w-44"
                    @click="cartStore.addArticle({
                        'ref': hoodie.ref,
                        'size': hoodie.availableSize[selectedSize],
                        'qty': selectedQuantity
                    })"
                >
                    ADD TO CART
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="ml-2 w-6 h-6 float-right"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                    </svg>
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
</template>