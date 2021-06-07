<template >
    <q-page class="" >
        <div class="row tl_padding_page" >

            <header-page name_page="АКЦИИ"></header-page>

            <div class="col" >

            </div >

        </div >
        <div class="row q-px-lg-xl " >
            <promotionItem :promo='promo' v-for="promo in promotions"></promotionItem>
        </div >

    </q-page >
</template >

<script >
    import promotionItem from '../components/promotion/promotion-item'
    import { mapState } from 'vuex';
    import headerPage from '../components/header-page'
    export default {
        name: "promotions",
        components:{
            promotionItem,
            headerPage
        },
        meta:{
            title:`Акции Гриль Баров Антрекот Иркутск Ангарск`,
            meta: {
                description: { name: 'description', content: 'Акции Гриль-бар Антрекот в иркутске рад приветствовать своих гостей. На сайте вы сможете ознакомиться с меню ресторана Антрекот посмотреть интерьеры шашлыкбара Антрекот в Иркутске и узнать об акциях кафе атрекот в иркутске' },
                keywords: { name: 'keywords', content: 'Гриль-бар Антрекот Иркутск меню, интерьер, акции, кафе, шашлыкбар, шашлык, ресторан, стильный интерьер, подача блюд, грильбар, грильная' },
                equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
            },
            noscript: {
                default: 'В вашем браузере отключен JavaScript. Без него вы не сможете открыть наш сайт. Но вы всегда можете позвонить нам 50-61-70'
            }
        },
        preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext }) {
            return store.dispatch('common/getPromotions')
        },
        data: function () {
            return {
                tab: 1,
                menus: [
                    {
                        name: 'ОСНОВНОЕ', id: 1
                    },
                    {
                        name: 'БАРНОЕ', id: 2
                    },
                    {
                        name: 'ДЕТСКОЕ', id: 3
                    },
                    {
                        name: 'КОМБО-ОБЕД', id: 4
                    }
                ]
            }
        },
        computed:{
            ...mapState('common',['promotions'])
        }
    }
</script >

<style scoped >

    .text-h4 {
        font-family: mblack;
    }

    .zag {
        margin-bottom: -38px;
        z-index: 100;
        position: relative;

    }

    .tag {
        font-size: 56px;
        color: #282828;
        font-family: mblack;
        z-index: 20;
        position: relative;
    }

    .h-100 {
        height: 400px;
    }

</style >
