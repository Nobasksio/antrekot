<template >
    <q-page class="" >
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
                    <q-tab :name="item.id" :key="index" :label="item.name" v-for="(item, index) in menus" />

                </q-tabs >
            </div >

        </div >
        <div class="" >

        </div >
        <div class="row q-pa-xl " >

            <div class="col-8 q-px-lg" >
                <q-img
                        :src="main_photo"
                        spinner-color="white"

                />
            </div >
            <div class="col-4 row content-stretch" >
                <hooper class="row content-stretch"
                        @slide="updateCarousel"
                        ref="carousel"  style="height: 100%">
                    <slide >
                        <div class="row content-stretch " style="height: 100%">
                            <div class="col-6 q-px-sm" >
                                <q-img
                                        src="statics/int1.jpg"
                                        spinner-color="white"
                                        style="width: 100%"
                                        class="img_interior"
                                        @click="show_photo('statics/int1.jpg')"
                                />
                            </div >
                            <div class="col-6 q-px-sm" >
                                <q-img
                                        src="statics/int3.jpg"
                                        spinner-color="white"
                                        @click="show_photo('statics/int3.jpg')"

                                />
                            </div >
                            <div class="col-6 flex content-center q-px-sm" >
                                <q-img
                                        src="statics/int2.jpg"
                                        spinner-color="white"
                                        style="width: 100%"
                                        @click="show_photo('statics/int2.jpg')"
                                />
                            </div >
                            <div class="col-6 flex content-center q-px-sm" >
                                <q-img
                                        src="statics/int1.jpg"
                                        spinner-color="white"
                                />
                            </div >
                            <div class="col-6 flex content-end q-px-sm" >
                                <q-img
                                        src="statics/int3.jpg"
                                        spinner-color="white"
                                        style="width: 100%"
                                />
                            </div >
                            <div class="col-6 flex content-end q-px-sm" >
                                <q-img
                                        src="statics/int2.jpg"
                                        spinner-color="white"
                                />
                            </div >
                        </div >
                    </slide >
                    <slide >
                        <div class="row content-stretch " style="height: 100%">
                            <div class="col-6 q-px-sm" >
                                <q-img
                                        src="statics/int1.jpg"
                                        spinner-color="white"
                                        style="width: 100%"
                                />
                            </div >
                            <div class="col-6 q-px-sm" >
                                <q-img
                                        src="statics/int3.jpg"
                                        spinner-color="white"

                                />
                            </div >
                            <div class="col-6 flex content-center q-px-sm" >
                                <q-img
                                        src="statics/int2.jpg"
                                        spinner-color="white"
                                        style="width: 100%"
                                />
                            </div >
                            <div class="col-6 flex content-center q-px-sm" >
                                <q-img
                                        src="statics/int1.jpg"
                                        spinner-color="white"
                                />
                            </div >
                            <div class="col-6 flex content-end q-px-sm" >
                                <q-img
                                        src="statics/int3.jpg"
                                        spinner-color="white"
                                        style="width: 100%"
                                />
                            </div >
                            <div class="col-6 flex content-end q-px-sm" >
                                <q-img
                                        src="statics/int2.jpg"
                                        spinner-color="white"
                                />
                            </div >
                        </div >
                    </slide >
                    <slide >
                        <div class="row content-stretch " style="height: 100%">
                            <div class="col-6 q-px-sm" >
                                <q-img
                                        src="statics/int1.jpg"
                                        spinner-color="white"
                                        style="width: 100%"
                                />
                            </div >
                            <div class="col-6 q-px-sm" >
                                <q-img
                                        src="statics/int3.jpg"
                                        spinner-color="white"

                                />
                            </div >
                            <div class="col-6 flex content-center q-px-sm" >
                                <q-img
                                        src="statics/int2.jpg"
                                        spinner-color="white"
                                        style="width: 100%"
                                />
                            </div >
                            <div class="col-6 flex content-center q-px-sm" >
                                <q-img
                                        src="statics/int1.jpg"
                                        spinner-color="white"
                                />
                            </div >
                            <div class="col-6 flex content-end q-px-sm" >
                                <q-img
                                        src="statics/int3.jpg"
                                        spinner-color="white"
                                        style="width: 100%"
                                />
                            </div >
                            <div class="col-6 flex content-end q-px-sm" >
                                <q-img
                                        src="statics/int2.jpg"
                                        spinner-color="white"
                                />
                            </div >
                        </div >
                    </slide >
                </hooper >
            </div >
            <div class="row content-center justify-end fit q-pt-md" >
                <div class="row content-center q-mr-lg" >
                    <q-btn @click="slidePrev()">
                        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M1.11188 6.96402L6.95792 12.8081C7.21444 13.064 7.63004 13.064 7.88721 12.8081C8.14373 12.5522 8.14373 12.1366 7.88721 11.8808L2.50487 6.50037L7.88656 1.11998C8.14308 0.864105 8.14308 0.448501 7.88656 0.191981C7.63004 -0.0638918 7.21379 -0.0638918 6.95727 0.191981L1.11123 6.03602C0.858649 6.28925 0.858649 6.71139 1.11188 6.96402Z"
                                  fill="white" />
                        </svg >
                    </q-btn >

                </div >
                <div class="text-white my-mbold q-px-md row content-center" >
                    <span class="q-mr-xs" >
                        {{carouselData + 1}}
                    </span >
                    <span class="q-mx-xs" >/</span >
                    <span class="q-ml-xs" >
                        {{ length_slider }}
                    </span >
                </div >
                <div class="row content-center" >
                    <div class="dot" :class="{ 'dash':n == carouselData+1, 'dot' : n != carouselData+1 }" v-for="n in length_slider">
                    </div >

                </div >
                <div class="row content-center q-ml-lg" >
                    <q-btn @click="slideNext()">
                        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M7.88812 6.03598L2.04208 0.191882C1.78556 -0.0639902 1.36996 -0.0639902 1.11279 0.191882C0.85627 0.447754 0.85627 0.863359 1.11279 1.11923L6.49513 6.49963L1.11344 11.88C0.856917 12.1359 0.856917 12.5515 1.11344 12.808C1.36996 13.0639 1.78621 13.0639 2.04273 12.808L7.88877 6.96398C8.14135 6.71075 8.14135 6.28861 7.88812 6.03598Z"
                                  fill="white" />
                        </svg >
                    </q-btn >
                </div >
            </div >
        </div >
    </q-page >
</template >

<script >
    import {Hooper, Slide} from 'hooper';
    import 'hooper/dist/hooper.css';

    export default {
        name: "interior",
        components: {
            Hooper,
            Slide
        },
        data: function () {
            return {
                tab: 1,
                slides: [{}, {}, {}, {}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {}],
                carouselData: 1,
                main_photo:'statics/int2.jpg',
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
        methods: {
            slidePrev() {
                this.$refs.carousel.slidePrev();


            },
            slideNext() {
                this.$refs.carousel.slideNext();

            },
            show_photo(link){
                this.main_photo = link;
            },
            updateCarousel(payload) {
                this.carouselData = payload.currentSlide;
            }
        },
        watch: {
            carouselData () {
                this.$refs.carousel.slideTo(this.carouselData);
            }
        },
        computed:{
            length_slider: function () {

                if (this.slides.length % 6 == 0) return this.slides.length / 6;
                else{
                    return Math.floor(this.slides.length / 6) + 1;
                }

            }
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

    .dot {
        width: 7px;
        height: 7px;
        border-radius: 7px;
        background: #fff;
        margin-right: 5px;
        margin-left: 5px;
    }

    .dash {
        width: 46px;
        height: 7px;
        background: linear-gradient(180deg, #A12A1D 0%, #E74336 100%);
        border-radius: 3.5px;
        margin-right: 5px;
        margin-left: 5px;
    }
    .img_interior:hover{
        border: 1px solid #fff;
        cursor:pointer
    }

</style >