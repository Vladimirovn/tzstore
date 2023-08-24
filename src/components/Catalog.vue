<template>
    <div class="product-list">
        <CatalogItem v-for="product of CatalogStore.products"
        :key="product.id"
        :product="product"
        />
    </div>
</template>

<script setup>
    import { useCatalogStore } from '@/stores/CatalogStore'
    import CatalogItem from './CatalogItem.vue'

    
    const CatalogStore = useCatalogStore();


</script>

<style lang="scss" scoped>
    .product-list {
        display: grid;
        grid-template-columns: 30% 30% 30%;
        gap: 20px;
        justify-content: center;
    }
</style>