<template>
    <footer class="footer">
        <div class="container footer-container">
            <div class="footer-left">
                <img class="footer-icon" src="/svg/logo_shop.svg" alt="logo">
                <p class="footer-name">P R O J E C T</p>    
            </div>
            <p class="footer-descr">Работу выполнила Арсланова Илиза</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    .footer {
        color: white;
        background-color: #222222;
        padding: 50px 0 100px 0;
        &-container {
            display: flex;
        }
        &-left {
            margin-right: auto;
            display: flex;
            align-items: center;
        }
        &-descr {
            font-size: 16px;
        }
        &-icon {
            margin-right: 20px;
        }
        &-name {
            font-size: 22px;
        }
    }
</style>