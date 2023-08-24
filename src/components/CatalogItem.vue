<template>
    <v-card
      class="mx-auto"
      width="344"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="300px"
        cover
      ></v-img>
  
      <v-card-title>
        {{ product.name }}
      </v-card-title>
  
      <v-card-subtitle>
        Price: {{ product.price }}$
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          variant="text"
          @click="router.push({name: 'card', props: true})"
        >
          More...
        </v-btn>
  
        <v-spacer></v-spacer>
  
      </v-card-actions>
    </v-card>
  </template>

<script setup>
    import { useRouter } from 'vue-router'

    const router = useRouter()

</script>

<style lang="scss" scoped>
    .product {
        height: 40em;
        width: 100%;
        border: 1px solid;
    }
</style>