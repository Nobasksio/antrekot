<template >
    <div class="col-12 col-md-6 q-pa-md" >

        <q-card class="my-card cursor-pointer" clickable v-ripple
                @click="medium = !medium" >
            <q-img
                    :src="`http://185.22.61.189:2000/${promo.Image.url}`"
                    basic
            >
            </q-img >
        </q-card >
        <q-dialog
                v-model="medium"
        >
            <q-card style="width: 600px; max-width: 80vw;" class="bg-black text-white" >
                <q-img src="/statics/akc.jpg" />

                <q-card-section >
                    <div class=" mregular" >
                        <div class="col text-h6 ellipsis q-py-lg" >{{promo.Name}}</div >
                        <div v-html="converter.makeHtml(promo.Description)" ></div >
                    </div >
                </q-card-section >

                <q-card-actions align="right" class="bg-black text-red" >
                    <q-btn flat label="OK" v-close-popup />
                </q-card-actions >
            </q-card >
        </q-dialog >

    </div >
</template >

<script >
    var showdown = require('showdown');
    export default {
        name: "promotion-item",
        props: ['promo'],
        data() {
            return {
                medium: false,
                converter: new showdown.Converter()
            }
        },
        methods: {
            take() {
               
            }
        }
    }
</script >

<style scoped >

</style >