<template>
    <v-btn class="back-btn mb-2" @click="router.go(-1)">
        Back 
    </v-btn>
    <div class="product d-flex">
        <div class="product-img me-2">
            <img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" alt="product-img">
        </div>
        <div class="product-info">
            <h2 class="product-name">{{  }}</h2>
            <div class="">
                <span>Description:</span>
                <div></div>
            </div>
            <div class="product-price">
                <span>Price: {{  }}$</span>
            </div>
            <div class="product-add">
                <v-btn class="add-to-cart">Add to cart</v-btn>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const props = defineProps({
        product: {
            type: Object,
            default: ()=>{}
        }
    })
</script>

<style lang="scss" scoped>
    .product-img>img {
        width: 500px;
        height: 700px;
    }
</style>