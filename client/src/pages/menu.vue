<template >
    <q-page class="" >
        <div class="row tl_padding_page q-px-none" >

            <div class="col-auto-md justify-center items-center content-center " >
                <div class="text-h4 text-white zag text-center" >
                    МЕНЮ
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
                    <q-tab :name="item.id" :key="index" :label="item.name" v-for="(item, index) in menus" />

                </q-tabs >
            </div >

        </div >
        <div class="h-100" >
            <q-tab-panels v-model="tab" animated class="bg-black" >
                <q-tab-panel :name="item.id" class="q-px-none" :key="`tab${item.id}`"  v-for="(item, index) in menus">
                    <div class="text-h6" >
                        <div style="text-align:center;" v-html="item.code">




                        </div>
                    </div >
                </q-tab-panel >
            </q-tab-panels >
        </div >

    </q-page >
</template >

<script >
    import { mapState } from 'vuex';
    export default {
        name: "menu",
        preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext }) {
            return store.dispatch('common/getMenu')
        },
        data: function () {
            return {
                tab: 1,
                // menus: [
                //     {
                //         name: 'ОСНОВНОЕ', id: 1
                //     },
                //     {
                //         name: 'БАРНОЕ', id: 2
                //     },
                //     {
                //         name: 'ДЕТСКОЕ', id: 3
                //     },
                //     {
                //         name: 'КОМБО-ОБЕД', id: 4
                //     }
                // ]
            }
        },
        computed:{
            ...mapState('common',['menus'])
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