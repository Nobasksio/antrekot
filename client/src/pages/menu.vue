<template >
    <q-page class="" >
        <div class="row tl_padding_page q-px-none" >

            <div class="col-auto-md">
                <header-page name_page="Меню"></header-page>
            </div>

            <div class="col-md col-12" >
                <q-tabs
                        v-model="tab"
                        dense
                        narrow-indicator
                        class="text-white bg-black"
                >
                    <q-tab :name="item.id"
                           :key="index"
                           v-show="mayMenu(isOld,item.old)"
                           class="my-mbold"
                           :label="item.name" v-for="(item, index) in menus" />
                </q-tabs >
            </div >

        </div >
        <div class="h-100" >
            <q-tab-panels v-model="tab" animated class="bg-black" >
                <q-tab-panel :name="item.id" v-show="mayMenu(isOld,item.old)" class="q-px-none" :key="`tab${item.id}`"
                             v-for="(item, index) in menus" >
                    <div class="text-h6" >
                        <div style="text-align:center;" v-html="item.code" >
                        </div >
                    </div >
                </q-tab-panel >
            </q-tab-panels >
        </div >

    </q-page >
</template >

<script >
    import {mapState} from 'vuex';

    import headerPage from '../components/header-page'

    export default {
        name: "menu",
        preFetch({store, currentRoute, previousRoute, redirect, ssrContext}) {
            return store.dispatch('common/getMenu')
        },
        components: {
            headerPage,
        },
        meta: {
            title: `Меню Гриль Баров Антрекот Иркутск Ангарск`,
            meta: {
                description: {
                    name: 'description',
                    content: 'Меню Гриль-бар Антрекот в иркутске рад приветствовать своих гостей. На сайте вы сможете ознакомиться с меню ресторана Антрекот посмотреть интерьеры шашлыкбара Антрекот в Иркутске и узнать об акциях кафе атрекот в иркутске'
                },
                keywords: {
                    name: 'keywords',
                    content: 'Гриль-бар Антрекот Иркутск меню, интерьер, акции, кафе, шашлыкбар, шашлык, ресторан, стильный интерьер, подача блюд, грильбар, грильная'
                },
                equiv: {'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8'}
            },
            noscript: {
                default: 'В вашем браузере отключен JavaScript. Без него вы не сможете открыть наш сайт. Но вы всегда можете позвонить нам 50-61-70'
            }
        },
        data: function () {
            return {
                tab: 1,
            }
        },
        methods: {
            mayMenu: function (isOld, menuOld) {
                if (isOld) return true
                else if (menuOld === true) return false
                else return true
            }
        },
        computed: {
            ...mapState('common', ['menus']),
            ...mapState('age', ['isOld'])
        }
    }
</script >

<style scoped >


    .h-100 {
        height: 400px;
    }

</style >