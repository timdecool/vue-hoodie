import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])
  const change = ref(false)
  function addArticle(item) {
    if(item.qty !== 0) {
      cart.value.push(item);
      change.value = true
    }
  }

  function removeArticle(ref) {
    let index = cart.value.findIndex((item) => item.ref === ref)
    if(index > -1) {
      cart.value.splice(index,1)
    }
  }

  return { cart, addArticle, removeArticle, change }
})
