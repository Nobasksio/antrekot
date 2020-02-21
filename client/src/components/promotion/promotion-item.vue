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
                class=""
        >
            <q-card style="width: 600px; max-width: 80vw;" class=" text-white " >
                <div class="back no-support">

                </div>
                <q-img :src="`${api_link}${promo.Image.url}`"/>

                <q-card-section class="blur">
                    <div class=" mregular q-px-md-md" >
                        <div class="col text-h6 ellipsis q-py-lg my-mbold " >{{promo.Name}}</div >
                        <div v-html="converter.makeHtml(promo.Description)" ></div >
                    </div >
                </q-card-section >

                <q-card-actions align="right" class=" text-red blur" >
                    <q-btn flat label="OK" v-close-popup />
                </q-card-actions >
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
        backdrop-filter: contrast(2) blur(20px);
    }
    .back{
        position: absolute;
        width: 100%;
        height: 100%;
        background: #000;
        -moz-opacity:1;
    }


    @supports ((-webkit-backdrop-filter: opacity(1)) or (backdrop-filter: opacity(1))) {
        .back {

            opacity: 0.7;
        }
    }
</style >