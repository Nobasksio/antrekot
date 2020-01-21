<template >
    <q-page class="" style="height: 1px">
        <div class="row tl_padding_page" >

            <div class="col-auto justify-center items-center content-center " >
                <div class="text-h4 text-white zag text-center" >
                    Интерьеры
                </div >
                <div class="tag col" >
                    #ANTRKT
                </div >
            </div >
            <div class="col-md col-12" >
                <q-tabs
                        v-model="tab"
                        dense
                        narrow-indicator
                        class="text-white bg-black"
                >
                    <q-tab :name="item.id" :key="index" :label="item.short_name" v-for="(item, index) in restaurants" />

                </q-tabs >
            </div >

        </div >
        <div class="" >

        </div >

        <q-tab-panels v-model="tab" animated class="bg-black full-height" >
            <q-tab-panel :name="item.id" class="q-px-none" :key="`tab${item.id}`" v-for="(item, index) in restaurants" >
                <interior-courusel :restaurant="item"></interior-courusel>
            </q-tab-panel >

        </q-tab-panels >

    </q-page >
</template >

<script >

    import {mapState} from 'vuex';

    import interiorCourusel from '../components/interior/interior-courusel'

    export default {
        name: "interior",
        components: {
            interiorCourusel
        },
        meta:{
            title:`Интерьеры Гриль Баров Антрекот Иркутск Ангарск`,
            meta: {
                description: { name: 'description', content: 'Интерьеры Гриль-бар Антрекот в иркутске рад приветствовать своих гостей. На сайте вы сможете ознакомиться с меню ресторана Антрекот посмотреть интерьеры шашлыкбара Антрекот в Иркутске и узнать об акциях кафе атрекот в иркутске' },
                keywords: { name: 'keywords', content: 'Гриль-бар Антрекот Иркутск меню, интерьер, акции, кафе, шашлыкбар, шашлык, ресторан, стильный интерьер, подача блюд, грильбар, грильная' },
                equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
            },
            noscript: {
                default: 'В вашем браузере отключен JavaScript. Без него вы не сможете открыть наш сайт. Но вы всегда можете позвонить нам 50-61-70'
            }
        },
        preFetch({store, currentRoute, previousRoute, redirect, ssrContext}) {
            return store.dispatch('common/getRestaurant')
        },
        data: function () {
            return {
                tab: 1,
            }
        },
        methods: {


        },
        computed: {
            ...mapState('common', ['restaurants']),

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
        margin-left: 70px;
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