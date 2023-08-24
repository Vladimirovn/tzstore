import { defineStore, setActivePinia } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cartStore', () => {
    const cart = ref([])
})