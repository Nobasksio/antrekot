<template >
    <q-page class="" style="height: 1px">
        <div class="row tl_padding_page" >

            <div class="col-auto-md items-center">
            <header-page name_page="ИНТЕРЬЕР"></header-page>
            </div>
            <div class="col-md-auto col-12" >
              <div class="col-md-8 col-12 row text-white bg-black items-center q-ml-lg">
                <div class="q-px-md menu-button q-mt-sm q-mr-sm"
                     v-for="(item, index) in restaurants"
                     @click="chooseInterior(item)"
                     :class="{
              'active': activeInterior === item,
              '': activeInterior !== item,
            }">
                  {{ item.short_name }}
                  <div class="col-12"
                       :class="{
              'active-line': activeInterior === item,
              '': activeInterior !== item,
            }"></div>
                </div>
              </div>
<!--                <q-tabs-->
<!--                        v-model="tab"-->
<!--                        dense-->
<!--                        narrow-indicator-->
<!--                        class="text-white my-mbold"-->
<!--                >-->
<!--                    <q-tab :name="item.id" :key="index" :label="item.short_name" v-for="(item, index) in restaurants" />-->

<!--                </q-tabs >-->
            </div >

        </div >
        <div class="" >

        </div >
      <interior-courusel :key="activeInterior.id" :restaurant="activeInterior"></interior-courusel>

<!--      <q-tab-panels v-model="tab" animated class="bg-black full-height" >-->
<!--            <q-tab-panel :name="item.id" class="q-px-none" :key="`tab${item.id}`" v-for="(item, index) in restaurants" >-->
<!--                <interior-courusel :restaurant="item"></interior-courusel>-->
<!--            </q-tab-panel >-->

<!--        </q-tab-panels >-->

    </q-page >
</template >

<script >

    import {mapState} from 'vuex';

    import interiorCourusel from '../components/interior/interior-courusel'
    import headerPage from '../components/header-page'
    export default {
        name: "interior",
        components: {
            interiorCourusel,
            headerPage
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
            try {
                return store.dispatch('common/getRestaurant')
            } catch (e) {
               console.log(e);
            }

        },
        data: function () {
            return {
                tab: 1,
              activeInterior: null,
            }
        },
        methods: {
          chooseInterior(item) {
            this.activeInterior = item;
          }

        },
        computed: {
            ...mapState('common', ['restaurants']),

        },
      mounted() {
        if (this.restaurants[0] !== undefined) {
          [this.activeInterior] = this.restaurants;
        }
      },
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

    .menu-button {
      cursor: pointer;
      font-size: 16px;
      font-family: mbold;
      text-transform: uppercase;
      letter-spacing: 0.25em;
    }

    .active-line {
      background-image: url("../assets/activeMenuLine.png");
      background-position: bottom;
      height: 3px;
      width: 100%
    }

    .h-100 {
        height: 400px;
    }



</style >
