<script setup>
  import HeaderNav from '@/layout/HeaderNav.vue';
  // import Catalog from '@/components/Catalog.vue'
</script>

<template>
  <div class="container">
    <HeaderNav/>
    <div class="pajes mt-2">
      <!-- <Catalog/> -->
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
  .container{
    max-width: 1280px;
    margin: auto;
  }
</style>
