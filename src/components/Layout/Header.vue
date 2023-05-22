<template>
    <header class="header">
        <div class="header-container">
            <div class="header__left">
                <img class="header__logo" src="/svg/logo_shop.svg" alt="logo">
                <p class="header__name">P R O J E C T</p>    
            </div>
            <div class="header__right">
                <a href="#">
                    <div class="header__right__favourite">
                        <img class="heart" src="/svg/heart.svg" alt="favourite">
                    </div>
                </a>
                <div class="header__right__cart">
                    <a href="#">
                        <img src="/svg/korzina.svg" alt="bag">
                    </a>                        
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .header {
      height: 100px;
      padding-top: 60px; 
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
        font-size: 16px;
    };

    .header__left, .header__right {
        display: flex;
        align-items: center;
    };

    .header__left {
        margin-right: auto;
    };

    .heart {
        width: 20px;
        margin-right: 30px;
    };

</style>