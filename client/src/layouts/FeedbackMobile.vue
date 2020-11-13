// eslin
<template>
    <q-layout view="lHh LpR lFf" >
        <q-page class="" >
        <div class="main-bg">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="child-bg">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <img src="/statics/logo.svg" class="img-logo"/>
                                </div>
                                <div class="col-12">
                                    <p class="title-feedback">
                                        Помоги нам <br/>стать лучше!
                                    </p>
                                    <p class="caption">
                                        Оставь свой отзыв на удобной
                                        <br> для тебя площадке!
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="feedback-list">
                                        <a v-for="(btn, index) of departmentLinks" class="btn"
                                           :href="btn.link"
                                           @click="clickHandle(btn.link)" >
                                            <img :src="btn.image" alt="" />
                                         </a>
<!--                                        <div-->
<!--                                                v-for="(item, index) of items"-->
<!--                                                :key="index"-->
<!--                                                class="btn-feedback"-->
<!--                                                :class="item.wrapClass"-->
<!--                                                @click="clickHandle(item.link)"-->
<!--                                        >-->
<!--                                            <div class="img-feedback-wrap"-->
<!--                                                 :class="item.classImg">-->
<!--                                                <img :src="item.image" alt=""></div>-->
<!--                                            <div class="text-feedback-wrap"-->
<!--                                                 :class="item.childClass">Оставить отзыв<br>-->
<!--                                                <span class="text-uppercase">{{ item.title }}</span>-->
<!--                                            </div>-->
<!--                                        </div>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </q-page>
    </q-layout>
</template>

<script>
    export default {
        name: 'FeedbackMobile',
        meta:{
            title:`Гриль Бар Антрекот Иркутск Ангарск`,
            meta: {
                description: { name: 'description', content: 'Гриль-бар Антрекот в иркутске рад приветствовать своих гостей. На сайте вы сможете ознакомиться с меню ресторана Антрекот посмотреть интерьеры шашлыкбара Антрекот в Иркутске и узнать об акциях кафе атрекот в иркутске' },
                keywords: { name: 'keywords', content: 'Гриль-бар Антрекот Иркутск меню, интерьер, акции, кафе, шашлыкбар, шашлык, ресторан, стильный интерьер, подача блюд, грильбар, грильная' },
                equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
            },
            noscript: {
                default: 'В вашем браузере отключен JavaScript. Без него вы не сможете открыть наш сайт. Но вы всегда можете позвонить нам 50-61-70'
            }
        },
        data() {
           return  {

            items: {
                km:[
                    {
                        title: 'в google.карты',
                        image: '/statics/image/gmaps.svg',
                        link: 'https://www.google.ru/maps/place/%D0%93%D1%80%D0%B8%D0%BB%D1%8C-%D0%B1%D0%B0%D1%80+%D0%90%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82/@52.2830955,104.2837124,17z/data=!3m1!4b1!4m10!1m2!2m1!1z0LDQvdGC0YDQtdC60L7Rgg!3m6!1s0x0:0xf8e6056d222a75e5!8m2!3d52.2830918!4d104.2859012!9m1!1b1?hl=ru',
                        wrapClass: 'btn-feedback btn-feedback-google',
                        classImg: 'img-wrap-google',
                        childClass: 'text-color-black',
                    },
                {
                    title: 'в яндекс.карты',
                    image: '/statics/image/yandex.svg',
                    link: 'https://yandex.ru/maps/-/CCQ~yKRT~A',
                    wrapClass: 'btn-feedback btn-feedback-yandex',
                    classImg: 'img-wrap-yandex',
                    childClass: 'text-color-black',
                },
                {
                    title: 'в 2gis',
                    image: '/statics/image/2gis.svg',
                    link: 'https://2gis.ru/irkutsk/search/%D0%B0%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82/firm/70000001007452897/104.285889%2C52.282968/tab/reviews',
                    wrapClass: 'btn-feedback btn-feedback-2gis',
                    classImg: 'img-wrap-2gis',
                    childClass: 'text-color-white',
                },
                {
                    title: 'на flamp',
                    image: '/statics/image/flamp.svg',
                    link: 'https://irkutsk.flamp.ru/firm/antrekot_gril_bar-70000001007452897#reviews',
                    wrapClass: 'btn-feedback-flamp',
                    classImg: 'img-wrap-flamp',
                    childClass: 'text-color-white',
                },
                {
                    title: 'на trip advisorp',
                    image: '/statics/image/tripadvisor.svg',
                    link: 'https://www.tripadvisor.ru/Restaurant_Review-g298527-d7906415-Reviews-Antrekot_Grill_Bar-Irkutsk_Irkutsk_Oblast_Siberian_District.html#REVIEWS',
                    wrapClass: 'btn-feedback-flamp',
                    classImg: 'img-wrap-flamp',
                    childClass: 'text-color-white',
                },
            ],
                mk:[
                    {
                        title: 'в google.карты',
                        image: '/statics/image/gmaps.svg',
                        link: 'https://www.google.ru/maps/place/%D0%93%D1%80%D0%B8%D0%BB%D1%8C-%D0%B1%D0%B0%D1%80+%D0%90%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82/@52.2731263,104.2884496,17z/data=!3m1!4b1!4m10!1m2!2m1!1z0LDQvdGC0YDQtdC60L7Rgg!3m6!1s0x0:0xc72267924b9f3301!8m2!3d52.2731208!4d104.290638!9m1!1b1?hl=ru',
                        wrapClass: 'btn-feedback btn-feedback-google',
                        classImg: 'img-wrap-google',
                        childClass: 'text-color-black',
                    },
                    {
                        title: 'в яндекс.карты',
                        image: '/statics/image/yandex.svg',
                        link: 'https://yandex.ru/maps/63/irkutsk/?ll=104.258398%2C52.273927&mode=search&oid=1809672268&ol=biz&sll=104.280660%2C52.286387&sspn=0.493011%2C0.172016&text=%D0%90%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82&z=14',
                        wrapClass: 'btn-feedback btn-feedback-yandex',
                        classImg: 'img-wrap-yandex',
                        childClass: 'text-color-black',
                    },
                    {
                        title: 'в 2gis',
                        image: '/statics/image/2gis.svg',
                        link: 'https://2gis.ru/irkutsk/search/%D0%B0%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82/firm/70000001019411678/104.291045%2C52.273013/tab/reviews',
                        wrapClass: 'btn-feedback btn-feedback-2gis',
                        classImg: 'img-wrap-2gis',
                        childClass: 'text-color-white',
                    },
                    {
                        title: 'на flamp',
                        image: '/statics/image/flamp.svg',
                        link: 'https://irkutsk.flamp.ru/firm/antrekot_gril_bar-70000001019411678#reviews',
                        wrapClass: 'btn-feedback-flamp',
                        classImg: 'img-wrap-flamp',
                        childClass: 'text-color-white',
                    },
                    {
                        title: 'на trip advisor',
                        image: '/statics/image/tripadvisor.svg',
                        link: 'https://www.tripadvisor.ru/Restaurant_Review-g298527-d9716999-Reviews-Antrekot-Irkutsk_Irkutsk_Oblast_Siberian_District.html#REVIEWS',
                        wrapClass: 'btn-feedback-flamp',
                        classImg: 'img-wrap-flamp',
                        childClass: 'text-color-white',
                    },
                ],
                sm:[
                    {
                        title: 'в google.карты',
                        image: '/statics/image/gmaps.svg',
                        link: 'https://www.google.ru/maps/place/%D0%93%D1%80%D0%B8%D0%BB%D1%8C-%D0%B1%D0%B0%D1%80+%D0%90%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82/@52.2660608,104.2239485,17z/data=!3m1!4b1!4m10!1m2!2m1!1z0LDQvdGC0YDQtdC60L7Rgg!3m6!1s0x0:0x337d531bef57a9b8!8m2!3d52.2660563!4d104.2261362!9m1!1b1?hl=ru',
                        wrapClass: 'btn-feedback btn-feedback-google',
                        classImg: 'img-wrap-google',
                        childClass: 'text-color-black',
                    },
                    {
                        title: 'в яндекс.карты',
                        image: '/statics/image/yandex.svg',
                        link: 'https://yandex.ru/maps/63/irkutsk/?ll=104.258398%2C52.273927&mode=search&oid=177570716262&ol=biz&sll=104.280660%2C52.286387&sspn=0.493011%2C0.172016&text=%D0%90%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82&z=14',
                        wrapClass: 'btn-feedback btn-feedback-yandex',
                        classImg: 'img-wrap-yandex',
                        childClass: 'text-color-black',
                    },
                    {
                        title: 'в 2gis',
                        image: '/statics/image/2gis.svg',
                        link: 'https://2gis.ru/irkutsk/search/%D0%B0%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82/firm/70000001025918827/104.225718%2C52.26495/tab/reviews',
                        wrapClass: 'btn-feedback btn-feedback-2gis',
                        classImg: 'img-wrap-2gis',
                        childClass: 'text-color-white',
                    },
                    {
                        title: 'на flamp',
                        image: '/statics/image/flamp.svg',
                        link: 'https://irkutsk.flamp.ru/firm/antrekot_gril_bar-70000001025918827#reviews',
                        wrapClass: 'btn-feedback-flamp',
                        classImg: 'img-wrap-flamp',
                        childClass: 'text-color-white',
                    },
                    {
                        title: 'на trip advisor',
                        image: '/statics/image/tripadvisor.svg',
                        link: 'https://www.tripadvisor.ru/Restaurant_Review-g298527-d12901204-Reviews-Antrekot-Irkutsk_Irkutsk_Oblast_Siberian_District.html#REVIEWS',
                        wrapClass: 'btn-feedback-flamp',
                        classImg: 'img-wrap-flamp',
                        childClass: 'text-color-white',
                    },
                ],
                ang:[
                    {
                        title: 'в google.карты',
                        image: '/statics/image/gmaps.svg',
                        link: 'https://www.google.ru/maps/place/%D0%93%D1%80%D0%B8%D0%BB%D1%8C-%D0%B1%D0%B0%D1%80+%D0%90%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82/@52.5040966,103.840233,17z/data=!3m1!4b1!4m10!1m2!2m1!1z0LDQvdGC0YDQtdC60L7Rgg!3m6!1s0x0:0x21f330e0a5210c6!8m2!3d52.5040934!4d103.8424221!9m1!1b1?hl=ru',
                        wrapClass: 'btn-feedback btn-feedback-google',
                        classImg: 'img-wrap-google',
                        childClass: 'text-color-black',
                    },
                    {
                        title: 'в яндекс.карты',
                        image: '/statics/image/yandex.svg',
                        link: 'https://yandex.ru/maps/11256/angarsk/?ll=103.905933%2C52.494717&mode=search&oid=184698671336&ol=biz&sctx=ZAAAAAgBEAAaKAoSCedSXFX2EVpAEfF%2FR1SoJEpAEhIJS2z9%2F3%2BN3z8RGZB%2BMZsExj8oCkD4V0gBVc3MzD5YAGoCcnVwAJ0BzcxMPaABAKgBAL0BmvGXPcIBBuihmIewBQ%3D%3D&sll=103.905933%2C52.494717&sspn=0.264198%2C0.091745&text=%D0%90%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82&z=12.9',
                        wrapClass: 'btn-feedback btn-feedback-yandex',
                        classImg: 'img-wrap-yandex',
                        childClass: 'text-color-black',
                    },
                    {
                        title: 'в 2gis',
                        image: '/statics/image/2gis.svg',
                        link: 'https://2gis.ru/irkutsk/search/%D0%B0%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82/firm/70000001028630613/tab/reviews?floor=3&m=103.844794%2C52.504729%2F17.55',
                        wrapClass: 'btn-feedback btn-feedback-2gis',
                        classImg: 'img-wrap-2gis',
                        childClass: 'text-color-white',
                    },
                    {
                        title: 'на flamp',
                        image: '/statics/image/flamp.svg',
                        link: 'https://irkutsk.flamp.ru/firm/antrekot_gril_bar-70000001028630613#reviews',
                        wrapClass: 'btn-feedback-flamp',
                        classImg: 'img-wrap-flamp',
                        childClass: 'text-color-white',
                    },
                    {
                        title: 'на trip advisor',
                        image: '/statics/image/tripadvisor.svg',
                        link: 'https://www.tripadvisor.ru/Restaurant_Review-g2373836-d15791963-Reviews-Antrekot-Angarsk_Irkutsk_Oblast_Siberian_District.html#REVIEWS',
                        wrapClass: 'btn-feedback-flamp',
                        classImg: 'img-wrap-flamp',
                        childClass: 'text-color-white',
                    },
                ],
                yam:[
                    {
                        title: 'в google.карты',
                        image: '/statics/image/gmaps.svg',
                        link: 'https://www.google.ru/maps/search/%D0%B0%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82/@52.2640642,104.2498569,13.25z?hl=ru',
                        wrapClass: 'btn-feedback btn-feedback-google',
                        classImg: 'img-wrap-google',
                        childClass: 'text-color-black',
                    },
                    {
                        title: 'в яндекс.карты',
                        image: '/statics/image/yandex.svg',
                        link: 'https://yandex.ru/maps/63/irkutsk/?ll=104.292527%2C52.267233&mode=search&oid=113072509041&ol=biz&sctx=ZAAAAAgBEAAaKAoSCedSXFX2EVpAEfF%2FR1SoJEpAEhIJS2z9%2F3%2BN3z8RGZB%2BMZsExj8oCkDTzQZIAVXNzMw%2BWABqAnJ1cACdAc3MTD2gAQCoAQC9AZrxlz3CAQvM0PXeBvGglp2lAw%3D%3D&sll=104.292527%2C52.267233&sspn=0.025732%2C0.008982&text=%D0%90%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82&z=16.26',
                        wrapClass: 'btn-feedback btn-feedback-yandex',
                        classImg: 'img-wrap-yandex',
                        childClass: 'text-color-black',
                    },
                    {
                        title: 'в 2gis',
                        image: '/statics/image/2gis.svg',
                        link: 'https://2gis.ru/irkutsk/search/%D0%B0%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82/firm/70000001040523461/104.289833%2C52.268328/tab/reviews?floor=3&m=103.844794%2C52.504729%2F17.55',
                        wrapClass: 'btn-feedback btn-feedback-2gis',
                        classImg: 'img-wrap-2gis',
                        childClass: 'text-color-white',
                    },
                    {
                        title: 'на flamp',
                        image: '/statics/image/flamp.svg',
                        link: 'https://irkutsk.flamp.ru/firm/antrekot_gril_bar-70000001040523461#reviews',
                        wrapClass: 'btn-feedback-flamp',
                        classImg: 'img-wrap-flamp',
                        childClass: 'text-color-white',
                    },
                    {
                        title: 'на trip advisor',
                        image: '/statics/image/tripadvisor.svg',
                        link: 'https://www.tripadvisor.ru/Restaurant_Review-g298527-d20867442-Reviews-Antrekot-Irkutsk_Irkutsk_Oblast_Siberian_District.html#REVIEWS',
                        wrapClass: 'btn-feedback-flamp',
                        classImg: 'img-wrap-flamp',
                        childClass: 'text-color-white',
                    },
                ],
            },
        }
        },
        methods: {
            clickHandle(link) {
                window.location.href = link;
            },
        },
        computed:{
            departmentLinks(){
                if (this.items[this.$route.params.departmentName] === undefined){
                    return this.items.km
                }
                return this.items[this.$route.params.departmentName]
            }
        }
    };
</script>

<style scoped>
    @font-face{
        font-family: TT Lakes;
        /*src: url(../assets/font/TTLakes-Black.ttf);*/
    }
    .btn {
        display: flex;
        height: 43px;
        background-color: #fff;
        justify-content: center;
        border-radius: 10px;
        margin-bottom: 14px;
    }
    .main-bg {
        background: #000;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .img-logo{
        margin: 40px 50px;
        padding: 20px;
        box-sizing: content-box;
    }
    .main-bg .container {
        padding: 15px;
    }
    .child-bg {
        background: #000;
        width: 275px;
        margin: 0 auto;
    }
    .title-feedback {
        font-family: mbold, sans-serif;
        text-transform: uppercase;
        font-style: normal;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
        letter-spacing: 0.25em;
        padding-bottom: 0;
        margin-bottom: 0;
    }
    .caption{
        color: #fff;
        text-align: center;
        padding: 10px 20px;
        font-family: mregular, sans-serif;
        font-size: 12px;
    }
    .feedback-list {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }
    .btn-feedback {
        display: flex;
        width: 227px;
        height: 56px;
        background: #FFFFFF;
        border-radius: 10px;
        margin: 0 auto 8px;
        cursor: pointer;
    }
    .btn-feedback:hover {
        background: rgba(0, 0, 0, 0.2)!important;
    }
    .btn-feedback:last-child {
        margin-bottom: 30px;
    }
    .btn-feedback-google {
        background: #FFFFFF;
    }
    .btn-feedback-yandex {
        background: #FFD600;
    }
    .btn-feedback-2gis {
        background: #A1C611;
    }
    .btn-feedback-advisor {
        background: #00AF87;
    }
    .btn-feedback-flamp {
        background: #2E6AE4;
    }
    .img-feedback-wrap {
        width: 56px;
        position: relative;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    .img-wrap-google {
        background: rgba(242, 242, 242, 0.8);
    }
    .img-wrap-yandex {
        background: rgba(0, 0, 0, 0.11);
    }
    .img-wrap-2gis {
        background: rgba(57, 57, 56, 0.1);
    }
    .img-wrap-advisor {
        background: rgba(57, 57, 56, 0.2);
    }
    .img-wrap-flamp {
        background: rgba(47, 54, 64, 0.42);
    }
    .img-feedback-wrap img {
        position: absolute;
        top: 10px;
        left: 17px;
    }
    .img-wrap-2gis img {
        position: absolute;
        top: 5px;
        left: 5px;
    }
    .img-wrap-advisor img {
        position: absolute;
        top: 18px;
        left: 12px;
    }
    .img-wrap-flamp img {
        position: absolute;
        top: 10px;
        left: 10px;
    }
    .text-color-black {
        color: #323232;
    }
    .text-color-white {
        color: #fff;
    }
    .text-feedback-wrap {
        font-family: TT Lakes, sans-serif;
        text-transform: uppercase;
        line-height: 14px;
        font-size: 10px;
        padding: 15px 10px 0;
    }
    .text-uppercase {
        text-transform: uppercase;
        font-size: 14px;
    }
    @media (max-width: 414px) {
        .child-bg {
            width: 100%;
        }
    }
</style>
