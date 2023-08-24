import { defineStore, setActivePinia } from 'pinia'
import { ref, computed } from 'vue'

export const useCatalogStore = defineStore('catalogStore', ()=>{
    const products = ref([
        {
          "id": "5b2760ac4613bc8ecb5693f6",
          "name": "name4",
          "cover": "92a50329-cd3f-4fad-bc8f-04bca02e952e",
          "price": 300,
          "description": "green"
        },
        {
          "id": "5b2760ace5b025b50a1f7d87",
          "name": "name4",
          "cover": "b259dd17-3bfa-4e62-9335-8e10944c12d2",
          "price": 850,
          "description": "brown"
        },
        {
          "id": "5b2760ac74f355323578d65a",
          "name": "name1",
          "cover": "52cf4552-f244-47f5-87d8-1e10e74e03e4",
          "price": 400,
          "description": "blue"
        },
        {
          "id": "5b2760acfb01a505d3ac3139",
          "name": "name4",
          "cover": "7fb36f8e-4842-4316-ba43-6fb8a79c54be",
          "price": 1015,
          "description": "blue"
        },
        {
          "id": "5b2760acadaaef2ce88a7ada",
          "name": "name2",
          "cover": "16eb4503-7408-436d-87f9-7fc458aa98cc",
          "price": 700,
          "description": "blue"
        },
        {
          "id": "5b2760acec7c62d65dd1f1cb",
          "name": "name3",
          "cover": "e5134e24-2b59-43eb-8e8d-fb20508b7b01",
          "price": 700,
          "description": "brown"
        },
        {
          "id": "5b2760ac89c7d290344e967e",
          "name": "name2",
          "cover": "2c2a6588-7dc8-403b-b221-80ffc688bf0d",
          "price": 200,
          "description": "brown"
        },
        {
          "id": "5b2760ac1f5a45bb433bd7ee",
          "name": "name2",
          "cover": "a38d4311-823a-44e1-a840-2318fc7b9d83",
          "price": 850,
          "description": "brown"
        },
        {
          "id": "5b2760ac087565373183b563",
          "name": "name3",
          "cover": "b080d7a6-a0d2-4e32-87d6-95454b259649",
          "price": 300,
          "description": "brown"
        },
        {
          "id": "5b2760aca074a48f5ac53250",
          "name": "name1",
          "cover": "0ffbdb30-9d8d-45b3-86c9-a09a06112845",
          "price": 200,
          "description": "blue"
        },
      ])

      return {products}
})