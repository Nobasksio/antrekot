<template >
    <q-page class="flex flex-center main_b" >
        <div class="full-width column  justify-center items-center content-center " >
            <q-space />
            <div class="col main_zag text-center" >
                НОВОЕ МЕНЮ
            </div >
            <div class="col lumios_zag" >
                По любому поводу!
            </div >
            <div class="col" >
                <q-btn outline color="white" class='text-uppercase q-btn_my_black' label="посмотреть" @click="check()" >
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" class="q-ml-sm"
                         xmlns="http://www.w3.org/2000/svg" >
                        <path d="M0.269457 11.1147C0.269457 11.474 0.560656 11.7652 0.919469 11.7648L19.7277 11.7647L16.211 15.2814C15.9555 15.5369 15.9555 15.9517 16.211 16.2072C16.4666 16.4628 16.8814 16.4628 17.1369 16.2072L21.7665 11.5777C21.8892 11.455 21.96 11.2888 21.96 11.1147C21.96 10.9406 21.8892 10.7744 21.7665 10.6518L17.1369 6.02217C16.8813 5.7666 16.4665 5.76664 16.211 6.02217C15.9555 6.27769 15.9555 6.69254 16.211 6.94806L19.7277 10.4647L0.919469 10.4647C0.560194 10.4647 0.268996 10.7559 0.269457 11.1147Z"
                              fill="white" />
                    </svg >
                </q-btn >
            </div >
            <q-space />
        </div >
    </q-page >


    <!--<div class="col main_b items-stretch " >-->

    <!--<div class="full-width column wrap justify-center items-center content-center" >-->

    <!--<div class="main_zag z100 col" >-->
    <!--НОВОЕ МЕНЮ-->
    <!--</div >-->
    <!--<div class="z100 col" >-->
    <!--По любому поводу!-->
    <!--</div >-->

    <!--</div >-->


    <!--</div >-->


</template >

<script >
    const axios = require('axios').default;
    export default {
        name: 'PageIndex',
        methods: {
            check() {

                axios({
                    method: 'post',
                    url: 'http://195.206.46.94:2211/Ochered/ru_RU/',
                    mode: 'no-cors',
                    data: {

                        "ochered": 1,
                        "telefon": 546456,
                        "kod": 1,
                        "sd": 1
                    }
                }).then((response) => {
                    console.log(response)
                })
            }
        }
    }
</script >
<style scope >
    .main_b {
        background: url(/statics/main.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        z-index: 101;
    }

    .bg_mask {
        background: #000000;
        opacity: 0.7;
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 99;
    }

    @media (max-width: 500px) {
        .main_zag {
            font-size: 3em;
            line-height: 44px;
            /* identical to box height */
            letter-spacing: 0.5em;
            text-transform: uppercase;
            color: #FFFFFF;
            font-family: mblack;

        }
        .lumios_zag {
            font-family: lumios;
            color: #ffffff;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 34px;
            text-align: center;
            padding: 20px 0;
        }
    }
    @media (min-width: 500px) {
        .main_zag {
            font-size: 5em;
            line-height: 78px;
            /* identical to box height */
            letter-spacing: 0.5em;
            text-transform: uppercase;
            color: #FFFFFF;
            font-family: mbold;

        }
        .lumios_zag {
            font-family: lumios;
            color: #ffffff;
            font-style: normal;
            font-weight: normal;
            font-size: 64px;
            line-height: 90px;
            text-align: center;
        }
    }

    .z100 {
        z-index: 100;
    }

    .h-100 {
        height: 100%;
    }

    .q-btn_my_black {

        font-size: 10px;
        padding: 7px 0px;
        border: 3px solid #FFFFFF;
        border-radius: 0px;
        letter-spacing: 0.25em;
        font-family: 'mbold';
        background: #000000 !important;
    }

</style >