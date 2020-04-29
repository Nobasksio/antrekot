<template >
    <q-layout view="lHh LpR lFf" >
        <order></order>
    </q-layout>
</template >

<script >
    import Order from "../pages/order";
    export default {
        name: "Outside",
        components: {Order}
    }
</script >

<style scoped >
    .menu_drawer {
        background: linear-gradient(180deg, #970E00 0%, #E84437 100%);

        overflow: auto;
    }

    .ofsc {
        min-height: 690px;
        overflow: auto;
    }

    .item-menu {
        font-size: 24px;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .q-btn_my {
        margin-top: 20px;
        margin-left: 40px;
        font-size: 10px;
        padding: 7px 0px;
        border: 3px solid #FFFFFF;
        border-radius: 0px;
        letter-spacing: 0.25em;
        font-family: 'mbold';
    }

    .blk_burger {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        z-index: 1000;
        flex-direction: row;
        justify-content: center;
    }

    .burger-blk-mobile{
        position: absolute;
        width: 100%;
        height: 70px;
        top: 0;
        right: 0;
        z-index: 1000;
    }
    .burger-button-left{
        position: absolute;
        width: 70px;
        height: 70px;
        top: 0;
        right: 0;
        z-index: 1000;
    }
    .burger-button {
        width: 70px;
        height: 70px;
        top: 0;
        left: 0;
        z-index: 1000;

    }

</style >
