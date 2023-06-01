<template>
    <header class="header">
        <div class="header-container">
            <router-link class="header__link" :to="`/`">
                <div class="header__left">
                    <img class="header__logo" src="/svg/logo_shop.svg" alt="logo">
                    <p class="header__name">P R O J E C T</p>    
                </div>
            </router-link>

            <div class="header__right">
                <a href="#">
                    <div class="header__right__favourite">
                        <img class="heart" src="/svg/heart.svg" alt="favourite">
                    </div>
                </a>
                <div>
                    <router-link :to="'/cart'" class="header__right__cart" href="#">
                        <img src="/svg/korzina.svg" alt="bag">
                        <span class="right__cart__number" v-if="cartStore.totalItems">{{cartStore.totalItems}}</span>
                    </router-link>                        
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .header {
      height: 100px;
      margin-top: 60px; 
      margin-bottom: 85px 
    };

    .header-container {
        height: 40px;
        display: flex;

    };

    .header__logo {
        margin-right: 20px;
    };

    .header__name {
        color: #333333;
        font-size: 22px;
    };

    .header__left, .header__right {
        display: flex;
        align-items: center;
    };

    .header__link {
        margin-right: auto;
        text-decoration: none;
    }

    .heart {
        width: 20px;
        margin-right: 30px;
    };

    .header__right__cart {
        position: relative;
    }

    .right__cart__number {
        position: absolute;
        width: 15px;
        height: 15px;
        background-color: #BA967D;
        border-radius: 50%;
        color: white;
        font-size: 10px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        left: -50%;
        bottom: 0;
    }

</style>

<script setup>
    import { useCartStore } from '@/store/cart.ts'

    const cartStore = useCartStore()
</script>