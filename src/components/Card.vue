<template>
    <v-btn @click="router.go(-1)">
        Back to catalog
    <!-- <router-link :to="{ name: 'catalog' }">Back to catalog</router-link> -->
    </v-btn>
    <h2>CARD PAJE</h2>
</template>

<script setup>
    import { useRouter } from 'vue-router'

    const router = useRouter()
</script>