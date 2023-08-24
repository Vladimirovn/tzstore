<template>
    <header class="header d-flex justify-space-between">
        <h1 class="header_title ms-2" href="/">MegaShop</h1>
        <v-btn size="small" class="ma-2 pa-2" href="#">
            <img class="header_cart" src="../../public/svg/icons8-cart-24.png" alt="cart">
        </v-btn>
    </header>
</template>

<style lang="scss" scoped>
    .header{
        height: 50px;
        background: #fff;
        border-bottom: 1px solid;

        &_cart{
            height: 15px;
        }

        &_title{
            cursor: pointer;
        }
    }
</style>