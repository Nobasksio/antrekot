<template >
    <div class="col-12 col-md-6 q-pa-md" >

        <q-card class="my-card cursor-pointer" clickable v-ripple
                @click="medium = !medium" >
            <q-img
                    :src="`${api_link}${promo.Image.url}`"
                    basic
            >
            </q-img >
        </q-card >
        <q-dialog
                v-model="medium"
                class="relative-position"
        >

            <q-card style="width: 600px; max-width: 80vw;" class=" text-white relative-position" >

                <q-btn v-close-popup flat color="primary" class=" text-red blur absolute-top-right">
                  <img src="../../assets/closePopUp.svg"/>
                </q-btn>

                <div class="back no-support">

                </div>
                <q-img :src="`${api_link}${promo.Image.url}`"/>

                <q-card-section class="blur">
                    <div class=" mregular q-px-md-md" >
                        <div class="col text-h6 ellipsis q-py-md my-mbold promotionName" >{{promo.Name}}</div >
                        <div class="promotionDescription mregular" v-html="converter.makeHtml(promo.Description)" ></div >
                    </div >
                </q-card-section >
            </q-card >
        </q-dialog >

    </div >
</template >

<script >

    var showdown = require('showdown');
    // console.log(process.env.API_LINK)
    import { mapState } from 'vuex';
    export default {
        name: "promotion-item",
        props: ['promo'],
        data() {
            return {
                medium: false,
                api_link: process.env.API_LINK,
                converter: new showdown.Converter()
            }
        },
        methods: {
            take() {

            }
        },
        computed:{

        }
    }
</script >

<style scoped >
    @media (min-width:600px ) {
        .my-card{
            margin: 0 0 0 20px ;
        }
    }
    .blur{
        -webkit-backdrop-filter: contrast(1) blur(20px);
      z-index: 2;
    }
    .back{
        position: absolute;
        width: 100%;
        height: 100%;
        background: #000;
        -moz-opacity:1;
    }

    .promotionName {
      font-size: 16px;
    }

    .promotionDescription {
      font-size: 12px;
    }


    @supports ((-webkit-backdrop-filter: opacity(1)) or (backdrop-filter: opacity(1))) {
        .back {

            opacity: 0.7;
        }
    }
</style >
