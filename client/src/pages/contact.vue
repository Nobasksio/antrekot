<template >
    <q-page class="bg-black" style="height: 1px;" >
        <div class="row tl_padding_page" >

            <div class="col-auto justify-center items-center content-center " >
                <div class="text-h4 text-white zag text-center">
                    Контакты
                </div >
                <div class="tag col" >
                    #ANTRKT
                </div >
            </div >
            <div class="col" >

            </div >

        </div >

        <q-list dark class="rounded-borders my-mbold lspacing25 contact-xs" v-if="width < 600">
            <contact-item-mobile :restaurant="rest" :key="`contxs${rest.id}`" v-for="rest in restaurants">

            </contact-item-mobile>
        </q-list >
        <div class="row contact-md align-items-stretch h-100" v-else-if="width < 1200">
            <div class="col-sm-3 col-4 bg-black" >
                <contact-item :restaurant="rest" :key="`contmd${rest.id}`" v-for="rest in restaurants">

                </contact-item >
            </div >
            <div class="col-sm-9 col-8 " >
                <yandex-map class="yandex-map"
                            :controls="[]"
                            :zoom="zoom"
                            :coords="[choosenRest.latitude, choosenRest.longitude]" >
                    <ymap-marker
                            :key="`markmd${rest_item.id}`"
                            :marker-id="rest_item.id"
                            :hint-content="rest_item.Name"
                            :icon="{color: 'red'}"
                            :coords="[rest_item.latitude,rest_item.longitude]"
                            v-for="rest_item in restaurants"

                    ></ymap-marker >
                </yandex-map >
            </div >
        </div >
        <div class="my-map " v-else>
            <yandex-map class="yandex-map"
                        :controls="[]"
                        :zoom="zoom"
                        :coords="[choosenRest.latitude, choosenRest.longitude]" >
                <ymap-marker
                        :key="`mark${rest_item.id}`"
                        :marker-id="rest_item.id"
                        :hint-content="rest_item.Name"
                        :icon="{color: 'red'}"
                        :coords="[rest_item.latitude,rest_item.longitude]"
                        v-for="rest_item in restaurants"

                ></ymap-marker >

            </yandex-map >
        </div >
        <div class="row justify-center contact-lg" v-if="width > 1200">
            <contact-item :restaurant="rest" :key="`contb${rest.id}`" v-for="rest in restaurants">

            </contact-item >
        </div >

    </q-page >
</template >

<script >
    import {yandexMap, ymapMarker} from 'vue-yandex-maps'
    import contactItem from '../components/contact/contact-item'
    import contactItemMobile from '../components/contact/contact-item-mobile'
    import {mapState} from 'vuex';
    export default {
        name: "contact",

        components: {yandexMap, ymapMarker, contactItem,contactItemMobile},
        preFetch({store, currentRoute, previousRoute, redirect, ssrContext}) {
            return store.dispatch('common/getRestaurant')
        },
        created() {
            window.addEventListener('resize', this.updateWidth);
        },
        mounted: function(){

        },
        data: function () {
            return {
                tab: 1,
                width:null,
                settings: {
                    apiKey: '22d47171-61c4-429f-bfaf-c0a883e12290',
                    lang: 'ru_RU',
                    coordorder: 'latlong',
                    version: '2.1'
                },
                zoom:13,
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
        methods:{
            updateWidth() {
                this.width = window.innerWidth;
            },
        },
        computed: {
            ...mapState('common', ['restaurants','choosenRest']),

        }
    }
</script >

<style scoped >

    .h-100 {
        height: 100%;
    }

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

    @media (max-width: 1200px) {
        .my-map {
            display: none;
        }

        .contact-lg {
            display: none;
        }
        .contact-xs{
            display: none;
        }
    }

    @media (min-width: 1201px) {
        .my-map {
            height: 400px;
        }

        .contact-lg {
            display: flex;
        }

        .contact-md {
            display: none;
        }
        .contact-xs{
            display: none;
        }
    }
    @media (max-width: 599px) {
        .my-map {
            display: none;
        }

        .contact-lg {
            display: none;
        }
        .contact-md {
            display: none;
        }
        .contact-xs{
            display: block;
        }
    }


    @media (min-width: 1000px) {
        .yandex-map {
            height: 100%;
        }

    }

    @media (max-width: 1000px) {
        .yandex-map {
            height: 75%;
        }

    }

    .my-baloon-icon {
        padding-top: 3px;
        margin-right: 15px;
    }


</style >