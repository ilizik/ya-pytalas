<template>
    <div class="product">
        <router-link :to="`/${id}`" class="product-image-link" href="#">
            <img class="product-image" :src="image" :alt="title">
        </router-link>
        <button class="product-like">
            <img class="product-like-icon" src="/svg/like.svg" alt="fav">
        </button>
        <div class="product-info">
            <a href="" class="product-name">{{title}}</a>
            <p class="product-price">{{price}} $</p>    
        </div>
        <button @click="cartStore.addToCart(product, 1)">
            <img class="product-card" src="/svg/to_kart.svg" alt="to card">
        </button>
    </div>
</template>

<script setup>
    const props = defineProps({
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },        
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    })
</script>

<style lang="scss" scoped>
    .product {
        position: relative;
        &-like {
            position: absolute;
            top: 20px;
            right: 20px;
        }
        &-card {
            position: absolute;
            bottom: 20px;
            right: 20px;
        }
        &-image-link {
            display: block;
            height: 274px;
            width: 251px;
            margin-bottom: 15px;   
        }
        &-image {
            display: block;
            max-width: 100%;
            max-height: 100%;
            margin: auto;
        }
        &-name {
            display: block;
            color: #333333;
            font-size: 24px;
            font-family: 'TT Livret Subhead Trl', sans-serif;
            margin-bottom: auto;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
        &-price {
            color: #333333;
            display: block;
            font-size: 18px;
            margin-bottom: 0;
        }
        width: 281px;
        margin-bottom: 40px;
        background-color: white;
        border-radius: 10px;
        padding: 15px;
        filter: drop-shadow(0px 10px 50px rgba(0, 0, 0, 0.08));
    }
</style>