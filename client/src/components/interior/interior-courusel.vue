<template >
    <div class="row q-pa-xl-md q-pa-md" >

        <div class="col-md-8 col-0 q-px-lg" >
            <q-img
                    :src="mainPhoto"
                    spinner-color="white"

            />
        </div >
        <div class="col-md-4 col-12  row content-stretch " >
            <hooper class="row content-stretch"
                    @slide="updateCarousel"
                    ref="carousel" style="height: 100%" >
                <slide :key="`slide${index}`" v-for="(slide, index) in slider_set">
                    <div class="row content-stretch " style="height: 100%" >
                        <div class="col-6 q-px-sm q-py-sm" :key="`photo${photo.id}`" v-for="photo in slide">
                            <q-img
                                    :src="`http://185.22.61.189:2000${photo.url}`"
                                    spinner-color="white"
                                    style="width: 100%"
                                    class="img_interior"
                                    @click="show_photo(photo)"
                            />
                        </div >
                    </div >
                </slide >
            </hooper >
        </div >
        <div class="row content-center justify-end fit q-pt-md" >
            <div class="row content-center q-mr-lg" >
                <q-btn @click="slidePrev()" >
                    <svg width="9" height="13" viewBox="0 0 9 13" fill="none"
                         xmlns="http://www.w3.org/2000/svg" >
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
                        {{ slider_set.length }}
                    </span >
            </div >
            <div class="row content-center" >
                <div class="dot" :class="{ 'dash':n == carouselData+1, 'dot' : n != carouselData+1 }"
                     v-for="n in slider_set.length" >
                </div >

            </div >
            <div class="row content-center q-ml-lg" >
                <q-btn @click="slideNext()" >
                    <svg width="9" height="13" viewBox="0 0 9 13" fill="none"
                         xmlns="http://www.w3.org/2000/svg" >
                        <path d="M7.88812 6.03598L2.04208 0.191882C1.78556 -0.0639902 1.36996 -0.0639902 1.11279 0.191882C0.85627 0.447754 0.85627 0.863359 1.11279 1.11923L6.49513 6.49963L1.11344 11.88C0.856917 12.1359 0.856917 12.5515 1.11344 12.808C1.36996 13.0639 1.78621 13.0639 2.04273 12.808L7.88877 6.96398C8.14135 6.71075 8.14135 6.28861 7.88812 6.03598Z"
                              fill="white" />
                    </svg >
                </q-btn >
            </div >
        </div >
        <q-dialog
                v-model="show_mobile_photo"
        >
            <q-card style="width: 600px; max-width: 90vw;" class="bg-black text-white" >
                <q-img :src="`${mainPhoto}`"/>

                <q-card-actions align="right" class="bg-black text-red" >
                    <q-btn flat label="закрыть" v-close-popup />
                </q-card-actions >
            </q-card >
        </q-dialog >
    </div >
</template >

<script >
    import {Hooper, Slide} from 'hooper';
    import 'hooper/dist/hooper.css';
    export default {
        name: "interior-courusel",
        props:['restaurant'],
        components:{
            Hooper,
            Slide,
        },
        created() {
            if ( typeof window !== 'undefined') {
                window.addEventListener('resize', this.updateWidth);
            }
        },
        mounted(){
            this.width = window.innerWidth
        },
        data: function(){
            return {
                mainPhoto:'http://185.22.61.189:2000'+this.restaurant.interior[0].url,
                photos:this.restaurant.interior,
                carouselData: 1,
                width:null,
                show_mobile_photo:false
            }
        },
        methods:{
            slidePrev() {
                this.$refs.carousel.slidePrev();
            },
            slideNext() {
                this.$refs.carousel.slideNext();

            },
            show_photo(photo) {
                this.mainPhoto = 'http://185.22.61.189:2000'+photo.url;

                if (this.width <600){
                    this.show_mobile_photo = true
                }
            },
            updateWidth() {
                this.width = window.innerWidth;
            },
            updateCarousel(payload) {
                this.carouselData = payload.currentSlide;
            },
        },
        watch: {
            carouselData() {
                this.$refs.carousel.slideTo(this.carouselData);
            }
        },
        computed:{
            slider_set() {
                let slider_set = [], num = 0;
                this.photos.forEach((photos_item, i, arr) => {
                    if (num % 6 == 0) {
                        slider_set.push([photos_item])
                    } else {
                        slider_set[slider_set.length - 1].push(photos_item)
                    }
                    num++
                })
                return slider_set
            }
        }
    }
</script >

<style scoped >
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


    .img_interior:hover {
        border: 1px solid #fff;
        cursor: pointer;
    }
</style >