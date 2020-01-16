<template >
    <q-page class="" >

        <div class=" mregular" >



            <div class="row full-height" >
                <div class="col-md-4 col-12 q-px-xl " >
                    <div class="row tl_padding_page" >

                        <div class="col-auto justify-center items-center content-center " >
                            <div class="text-h4 text-white zag text-center" >
                                Отзывы
                            </div >
                            <div class="tag col" >
                                #ANTRKT
                            </div >
                        </div >
                        <div class="col" >

                        </div >

                    </div >
                    <div class="q-mb-lg" >
                        <div class="text-white feed_zag" >
                            Оставить отзыв
                        </div >
                        <div class="red-delimeter" >

                        </div >
                    </div >
                    <div class="q-mb-lg" >
                        <div class="text-white" >
                            Оценка
                        </div >
                        <q-rating
                                v-model="feedback.rate"
                                size="2em"
                                color="grey"
                                color-selected="warning"
                                icon="img:statics/star-gray.svg"
                                icon-selected="img:statics/star.svg"
                        />
                    </div >
                    <div class="q-mb-lg" >
                        <div class="text-white q-mb-sm" >
                            Имя
                        </div >
                        <q-input dark outlined dense v-model="feedback.Name" >
                        </q-input >
                    </div >

                    <div class="q-mb-lg" >
                        <div class="text-white q-mb-sm" >
                            Телефон / email
                        </div >
                        <q-input dark outlined dense v-model="feedback.Phone" >
                        </q-input >
                    </div >

                    <div class="q-mb-lg" >
                        <div class="text-white q-mb-sm" >
                            Выберите бар
                        </div >
                        <q-select dark
                                  outlined
                                  dense
                                  label="Гриль Бар"
                                  option-label="Name"
                                  option-value="id"
                                  v-model="feedback.restaurant" :options="restaurants" >

                        </q-select >
                    </div >
                    <div class="q-mb-lg" >
                        <div class="text-white q-mb-sm" >
                            Ваш отзыв
                        </div >
                        <q-input
                                v-model="feedback.text"
                                dark
                                outlined
                                dense
                                type="textarea"
                        />
                    </div >
                    <div class="q-pb-md">
                        <q-btn color="red" label="Отправить" class='text-uppercase q-btn_my_red' @click="save_feed">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" class="q-ml-sm"
                                 xmlns="http://www.w3.org/2000/svg" >
                                <path d="M0.269457 11.1147C0.269457 11.474 0.560656 11.7652 0.919469 11.7648L19.7277 11.7647L16.211 15.2814C15.9555 15.5369 15.9555 15.9517 16.211 16.2072C16.4666 16.4628 16.8814 16.4628 17.1369 16.2072L21.7665 11.5777C21.8892 11.455 21.96 11.2888 21.96 11.1147C21.96 10.9406 21.8892 10.7744 21.7665 10.6518L17.1369 6.02217C16.8813 5.7666 16.4665 5.76664 16.211 6.02217C15.9555 6.27769 15.9555 6.69254 16.211 6.94806L19.7277 10.4647L0.919469 10.4647C0.560194 10.4647 0.268996 10.7559 0.269457 11.1147Z"
                                      fill="white" />
                            </svg >
                        </q-btn >
                    </div >
                </div >
                <div class="col-8 feed_b row flex-center mobile-hide" v-if="!showFeed">
                    <div class="full-width column  justify-center items-center content-center">
                        <q-space />
                        <div class="col text-white text-36 my-black text-center">
                            МЫ ЛЮБИМ <br>
                             СВОИХ ГОСТЕЙ
                        </div>
                        <div class="col text-white text-center q-pb-lg">
                            Посмотрите отзывы которые<br>
                            оставляют наши гости
                        </div>
                        <div class="col">
                            <q-btn outline color="white" class='text-uppercase q-btn_my_black' label="ЧИТАТЬ ОТЗЫВЫ"  @click="showFeed = !showFeed">
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" class="q-ml-sm" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.269457 11.1147C0.269457 11.474 0.560656 11.7652 0.919469 11.7648L19.7277 11.7647L16.211 15.2814C15.9555 15.5369 15.9555 15.9517 16.211 16.2072C16.4666 16.4628 16.8814 16.4628 17.1369 16.2072L21.7665 11.5777C21.8892 11.455 21.96 11.2888 21.96 11.1147C21.96 10.9406 21.8892 10.7744 21.7665 10.6518L17.1369 6.02217C16.8813 5.7666 16.4665 5.76664 16.211 6.02217C15.9555 6.27769 15.9555 6.69254 16.211 6.94806L19.7277 10.4647L0.919469 10.4647C0.560194 10.4647 0.268996 10.7559 0.269457 11.1147Z" fill="white"/>
                                </svg>
                            </q-btn>
                        </div>
                        <q-space />
                    </div>

                </div>
                <div v-else class="col-8  row flex-center mobile-hide overflow_scr " :style="`height:${updateHeight}`">
                    <template v-for="item in feedbacks">
                        <feedback-item :feedback="item"></feedback-item >

                    </template>
                </div>
            </div >
        </div >

    </q-page >
</template >

<script >
    import feedbackItem from '../components/feedback/feedback-item'
    import {mapState} from 'vuex';
    const axios = require('axios').default;
    export default {
        name: "feedback",
        components:{
            feedbackItem
        },
        preFetch({store, currentRoute, previousRoute, redirect, ssrContext}) {
            return store.dispatch('common/getFeedbacks')
        },
        created() {
            window.addEventListener('resize', this.updateHeight);
        },
        data: function () {
            return {
                tab: 1,
                text:null,
                ratingModel: null,
                showFeed:false,
                feedback:{
                    Name:null,
                    ftext:null,
                    rate:0,
                    contact:null,
                    restaurant:null,
                    date: new Date(),
                    answer:'',
                    active:false
                },
            }
        },
        methods:{
            updateHeight() {
                this.height = window.innerHeight;
            },
            save_feed(){
                this.feedback.rate = "_"+this.feedback.rate
                this.loading = true
                axios.post(`http://185.22.61.189:2000/otzyvies`,
                    this.feedback
                )
                    .then((res) => {
                        console.log()
                        this.feedback.rate = this.feedback.rate.substr(1,1)

                        this.sent = true
                        this.loading = false
                    })
                    .catch((error) => {

                        this.loading = false
                        this.error = true
                    });

            }
        },
        computed: {
            ...mapState('common', ['restaurants','feedbacks']),

        }
    }
</script >

<style scoped >
    .feed_b {
        background: url(/statics/feed.jpg) no-repeat;
        background-position-x: 0%;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        z-index: 101;
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

    .h-100 {
        height: 100%;
    }

    .q-btn_my_red {

        font-size: 12px;
        padding: 10px 10px;

        border-radius: 0px;
        letter-spacing: 0.25em;
        font-family: 'mbold';
        background: #E84437 !important;
    }

    .feed_zag {
        font-family: mblack;
        font-style: normal;
        font-size: 16px;
        line-height: 20px;
        /* identical to box height */
        letter-spacing: 0.25em;
        text-transform: uppercase;
        padding-bottom: 12px;
    }
    .overflow_scr{
        overflow:scroll;
    }
</style >