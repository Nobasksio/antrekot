<template>
  <q-page class="container">

    <div class=" mregular full-height">


      <div class="row full-height relative-position">
        <div class="col-md-4 col-12 " v-if="thanks === false">
          <div class="row tl_padding_page q-pr-lg-xl ">

            <header-page name_page="ОТЗЫВЫ"></header-page>

          </div>
          <div class=" q-pt-lg-lg q-pr-xl">
            <div class="row justify-between items-center col-12 q-mb-lg mobile-row-box">
            <div>
              <div class="">
                <div class="text-white feed_zag">
                  Оставить отзыв
                </div>
                <div class="active-line">

                </div>
              </div>
            </div>
            <div class="block-hide-mob" v-if="isOpenOtherFeedback === false">
              <q-btn outline color="white" class='text-uppercase q-btn_my_black' label="ЧИТАТЬ ОТЗЫВЫ"
                     @click="toShowFeed">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" class="q-ml-sm"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.269457 11.1147C0.269457 11.474 0.560656 11.7652 0.919469 11.7648L19.7277 11.7647L16.211 15.2814C15.9555 15.5369 15.9555 15.9517 16.211 16.2072C16.4666 16.4628 16.8814 16.4628 17.1369 16.2072L21.7665 11.5777C21.8892 11.455 21.96 11.2888 21.96 11.1147C21.96 10.9406 21.8892 10.7744 21.7665 10.6518L17.1369 6.02217C16.8813 5.7666 16.4665 5.76664 16.211 6.02217C15.9555 6.27769 15.9555 6.69254 16.211 6.94806L19.7277 10.4647L0.919469 10.4647C0.560194 10.4647 0.268996 10.7559 0.269457 11.1147Z"
                    fill="white"/>
                </svg>
              </q-btn>
            </div>
            </div>
            <div v-if="isShowFeedbackForm" class="lspacing10">
              <div v-if="isOpenOtherFeedback === false">
                <div class="q-mb-lg">
                  <div class="text-white q-mb-sm">
                    Выберите бар
                  </div>
                </div>
                <q-select dark
                          class="q-mb-lg"
                          color="grey-3"
                          outlined
                          square
                          dense
                          label="Гриль Бар"
                          option-label="Name"
                          option-value="id"
                          v-model="feedback.restaurant" :options="setRestarauntName">

                </q-select>
                <div class="q-mb-lg ">
                  <div class="text-white field-name">
                    Оценка
                  </div>
                  <q-rating
                    v-model="feedback.rate"
                    size="2em"
                    color="grey"
                    color-selected="warning"
                    icon="img:statics/star-gray.svg"
                    icon-selected="img:statics/star.svg"
                    @click="changeFeedbackVar"
                  />
                </div>
                <div class="q-mb-lg">
                  <div class="text-white q-mb-sm">
                    Имя
                  </div>
                  <q-input dark outlined
                           square
                           color="grey-3"
                           dense v-model="feedback.Name">
                  </q-input>
                </div>

                <div class="q-mb-lg">
                  <div class="text-white q-mb-sm">
                    Телефон / email
                  </div>
                  <q-input dark outlined dense
                           square
                           color="grey-3"
                           v-model="feedback.Phone">
                  </q-input>
                </div>

                <div class="q-mb-lg">
                  <div class="text-white q-mb-sm">
                    Ваш отзыв
                  </div>
                  <q-input
                    v-model="feedback.text"
                    dark
                    square
                    placeholder="Напишите, что Вам понравилось"
                    color="grey-3"
                    outlined
                    dense
                    type="textarea"
                  />
                </div>
                <div class="q-pb-md ">
                  <q-btn color="red" label="Отправить" class='text-uppercase q-btn_my_red col-sm-12 col-xs-12'
                         @click="saveFeed">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" class="q-ml-sm"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.269457 11.1147C0.269457 11.474 0.560656 11.7652 0.919469 11.7648L19.7277 11.7647L16.211 15.2814C15.9555 15.5369 15.9555 15.9517 16.211 16.2072C16.4666 16.4628 16.8814 16.4628 17.1369 16.2072L21.7665 11.5777C21.8892 11.455 21.96 11.2888 21.96 11.1147C21.96 10.9406 21.8892 10.7744 21.7665 10.6518L17.1369 6.02217C16.8813 5.7666 16.4665 5.76664 16.211 6.02217C15.9555 6.27769 15.9555 6.69254 16.211 6.94806L19.7277 10.4647L0.919469 10.4647C0.560194 10.4647 0.268996 10.7559 0.269457 11.1147Z"
                        fill="white"/>
                    </svg>
                  </q-btn>
                </div>
              </div>
            </div>
            <div v-if="isOpenOtherFeedback === true" class="">
              <div class="col-12 row justify-end">
                <q-btn flat style="color: #FFFFFF" @click='changeFeedbackVar'
                       icon-right="close"/>
              </div>
              <div class="column justify-center">
                <img class="q-pb-xl" src="../assets/feedbackLogo.svg">
                <div class="text-white name-feedback">
                  <div class="row items-end text-center justify-center wrap q-mb-lg">
                    <div>Видим, что&nbsp;<br>
                      тебе у нас&nbsp;<br>
                      понравилось
                    </div>
                    <div class="q-ml-xs my-red">:)</div>
                  </div>
                </div>
                <div class="text-white text-center field-name q-mb-xl justify-center row">
                  <div>Расскажи об этом всему миру &nbsp;<br>
                    на одной из этих площадок!
                  </div>
                </div>
                <img @click="clickHandle('google')" class="q-mb-md" src="../assets/feedbackGoogle.svg">
                <img @click="clickHandle('flamp')" class="q-mb-md" src="../assets/feedbackFlamp.svg">
                <img @click="clickHandle('tripAd')" class="q-mb-md" src="../assets/feedbackTrip.svg">
                <img @click="clickHandle('yandex')" class="q-mb-md" src="../assets/feedbackYandex.svg">
                <div @click="changeFeedbackVar"
                     class="cursor-pointer q-btn_my_black no-border text-white justify-center row">
                  <img class="q-mr-lg" src="../assets/returnArrow.svg">
                  <div>оставить отзыв на сайте</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xs-12 column text-white content-centers justify-between" v-else>
          <div class="col-8 column justify-center">
            <div class="text-center">
              <q-img
                src="/statics/logo.svg"
                spinner-color="white"
                img-class="q-mx-xl q-mt-n2"
                style="width: 200px; height: 200px;"
                contain
              />
            </div>
            <div class="text-center text-uppercase lspacing25 text-20 my-mbold">
              <div>Ваш отзыв</div>
              <div>отправлен</div>
            </div>
            <div class="text-center q-py-md">
              Спасибо Вам, что помогаете<br>
              нам стать лучше!
            </div>
          </div>
          <div class="col-2 column justify-end items-center">
            <div class="q-pb-xl">
              <q-btn outline color="white" class='text-uppercase q-btn_my_black'
                     @click="thanks = !thanks">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" class="q-ml-sm left_arraow"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.269457 11.1147C0.269457 11.474 0.560656 11.7652 0.919469 11.7648L19.7277 11.7647L16.211 15.2814C15.9555 15.5369 15.9555 15.9517 16.211 16.2072C16.4666 16.4628 16.8814 16.4628 17.1369 16.2072L21.7665 11.5777C21.8892 11.455 21.96 11.2888 21.96 11.1147C21.96 10.9406 21.8892 10.7744 21.7665 10.6518L17.1369 6.02217C16.8813 5.7666 16.4665 5.76664 16.211 6.02217C15.9555 6.27769 15.9555 6.69254 16.211 6.94806L19.7277 10.4647L0.919469 10.4647C0.560194 10.4647 0.268996 10.7559 0.269457 11.1147Z"
                    fill="white"/>
                </svg>
                <div class="q-pl-md">НАЗАД</div>
              </q-btn>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-8 feed_b row flex-center  feedback-box" v-if="showFeed">
          <div class="full-width column  justify-center items-center content-center">
            <q-space/>
            <div class="col text-white text-36 my-black text-center">
              МЫ ЛЮБИМ <br>
              СВОИХ ГОСТЕЙ
            </div>
            <div class="col text-white text-center see-feedback-name q-pb-lg">
              Оставь нам отзыв ПЛИИИИЗ!<br>
              Нам важно это!

            </div>
            <div class="col">
              <q-btn outline color="white" class='text-uppercase q-btn_my_black' label="ЧИТАТЬ ОТЗЫВЫ"
                     @click="toShowFeed">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" class="q-ml-sm"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.269457 11.1147C0.269457 11.474 0.560656 11.7652 0.919469 11.7648L19.7277 11.7647L16.211 15.2814C15.9555 15.5369 15.9555 15.9517 16.211 16.2072C16.4666 16.4628 16.8814 16.4628 17.1369 16.2072L21.7665 11.5777C21.8892 11.455 21.96 11.2888 21.96 11.1147C21.96 10.9406 21.8892 10.7744 21.7665 10.6518L17.1369 6.02217C16.8813 5.7666 16.4665 5.76664 16.211 6.02217C15.9555 6.27769 15.9555 6.69254 16.211 6.94806L19.7277 10.4647L0.919469 10.4647C0.560194 10.4647 0.268996 10.7559 0.269457 11.1147Z"
                    fill="white"/>
                </svg>
              </q-btn>
              <div class="q-mt-md block-hide-mob">
                <q-btn color="red" class=' text-uppercase q-btn_my_red'
                       @click="writeFeedback">
                  <div class="text-10">Оставить отзыв</div>
                </q-btn>
              </div>
            </div>
            <q-space/>
          </div>

        </div>
        <div v-else class="col-lg-8 col-8  row flex-center  feedback-items"
             :style="`height:${updateHeight}`"
             :class="feedClass">
          <q-scroll-area style="height: 100%; width: 100%;" class="q-ml-lg">

            <template v-for="item in feedbacks">
              <q-separator class="q-mt-md" dark/>
              <feedback-item :feedback="item"></feedback-item>

            </template>
          </q-scroll-area>

        </div>
      </div>
    </div>
    <div class="text-white basket-header-fixed row block-hide-mob col-12 absolute-top q-px-md q-pt-lg cursor-pointer"
         v-if="!showFeed"
         @click="showFeed = !showFeed">
      <div class="row items-center col-3">
        <img class="q-pl-xs q-mr-sm" src="../assets/toExitMob.svg">
        <div class="return-to-order-button">назад</div>
      </div>
    </div>

  </q-page>
</template>

<script>
import feedbackItem from '../components/feedback/feedback-item'
import {mapMutations, mapState} from 'vuex';
import headerPage from '../components/header-page'

const axios = require('axios').default;
export default {
  name: "feedback",
  components: {
    feedbackItem,
    headerPage
  },
  meta: {
    title: `Отзывы Гриль Баров Антрекот Иркутск Ангарск`,
    meta: {
      description: {
        name: 'description',
        content: 'Отзывы Гриль-бар Антрекот в иркутске рад приветствовать своих гостей. На сайте вы сможете ознакомиться с меню ресторана Антрекот посмотреть интерьеры шашлыкбара Антрекот в Иркутске и узнать об акциях кафе атрекот в иркутске'
      },
      keywords: {
        name: 'keywords',
        content: 'Гриль-бар Антрекот Иркутск меню, интерьер, акции, кафе, шашлыкбар, шашлык, ресторан, стильный интерьер, подача блюд, грильбар, грильная'
      },
      equiv: {'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8'}
    },
    noscript: {
      default: 'В вашем браузере отключен JavaScript. Без него вы не сможете открыть наш сайт. Но вы всегда можете позвонить нам 50-61-70'
    }
  },
  preFetch({store, currentRoute, previousRoute, redirect, ssrContext}) {
    return store.dispatch('common/getFeedbacks')
  },
  created() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.updateWidth);
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.updateWidth);
  },
  data: function () {
    return {
      tab: 1,
      width: null,
      text: null,
      ratingModel: null,
      showFeed: true,
      isShowFeedbackForm: true,
      feedClass: '',
      thanks: false,
      isOpenOtherFeedback: false,
      feedback: {
        Name: null,
        ftext: null,
        rate: 0,
        contact: null,
        restaurant: null,
        date: new Date(),
        answer: '',
        active: false
      },
      restaurantLinks: [
        {
          id: 1,
          name: 'Карла Маркса',
          google: 'https://www.google.ru/maps/place/%D0%93%D1%80%D0%B8%D0%BB%D1%8C-%D0%B1%D0%B0%D1%80+%D0%90%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82/@52.2830922,104.2837124,17z/data=!3m1!4b1!4m10!1m2!2m1!1z0LDQvdGC0YDQtdC60L7Rgg!3m6!1s0x0:0xf8e6056d222a75e5!8m2!3d52.2831692!4d104.2860076!9m1!1b1?hl=ru',
          flamp: 'https://irkutsk.flamp.ru/firm/antrekot_gril_bar-70000001007452897#reviews',
          tripAd: 'https://www.tripadvisor.ru/Restaurant_Review-g298527-d7906415-Reviews-Antrekot_Grill_Bar-Irkutsk_Irkutsk_Oblast_Siberian_District.html',
          yandex: 'https://yandex.ru/maps/org/antrekot/24178590063/?ll=104.258398%2C52.273927&mode=search&sll=104.280660%2C52.286387&sspn=0.493011%2C0.172016&text=%D0%90%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82&z=14',
        },
        {
          id: 2,
          name: 'Модный Квартал',
          google: 'https://www.google.ru/maps/place/%D0%93%D1%80%D0%B8%D0%BB%D1%8C-%D0%B1%D0%B0%D1%80+%D0%90%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82/@52.273123,104.2884496,17z/data=!3m1!4b1!4m10!1m2!2m1!1z0LDQvdGC0YDQtdC60L7Rgg!3m6!1s0x0:0xc72267924b9f3301!8m2!3d52.2731203!4d104.2906365!9m1!1b1?hl=ru',
          flamp: 'https://irkutsk.flamp.ru/firm/antrekot_gril_bar-70000001019411678#reviews',
          tripAd: 'https://www.tripadvisor.ru/Restaurant_Review-g298527-d9716999-Reviews-Antrekot-Irkutsk_Irkutsk_Oblast_Siberian_District.html',
          yandex: 'https://yandex.ru/maps/org/antrekot/1809672268/?ll=104.258398%2C52.273927&mode=search&sll=104.280660%2C52.286387&sspn=0.493011%2C0.172016&text=%D0%90%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82&z=14',
        },
        {
          id: 3,
          name: 'Сильвер молл',
          google: 'https://www.google.ru/maps/place/%D0%93%D1%80%D0%B8%D0%BB%D1%8C-%D0%B1%D0%B0%D1%80+%D0%90%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82/@52.2660575,104.2239485,17z/data=!3m1!4b1!4m10!1m2!2m1!1z0LDQvdGC0YDQtdC60L7Rgg!3m6!1s0x0:0x337d531bef57a9b8!8m2!3d52.2660575!4d104.2261372!9m1!1b1?hl=ru',
          flamp: 'https://irkutsk.flamp.ru/firm/antrekot_gril_bar-70000001025918827#reviews',
          tripAd: 'https://www.tripadvisor.ru/Restaurant_Review-g298527-d12901204-Reviews-Antrekot-Irkutsk_Irkutsk_Oblast_Siberian_District.html',
          yandex: 'https://yandex.ru/maps/org/antrekot/177570716262/?ll=104.258398%2C52.273927&mode=search&sll=104.280660%2C52.286387&sspn=0.493011%2C0.172016&text=%D0%90%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82&z=14',
        },
        {
          id: 4,
          name: 'Ангарск',
          google: 'https://www.google.ru/maps/place/%D0%93%D1%80%D0%B8%D0%BB%D1%8C-%D0%B1%D0%B0%D1%80+%D0%90%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82/@52.5040934,103.840233,17z/data=!3m1!4b1!4m10!1m2!2m1!1z0LDQvdGC0YDQtdC60L7Rgg!3m6!1s0x0:0x21f330e0a5210c6!8m2!3d52.5040934!4d103.8424217!9m1!1b1?hl=ru',
          flamp: 'https://irkutsk.flamp.ru/firm/antrekot_gril_bar-70000001028630613#reviews',
          tripAd: 'https://www.tripadvisor.ru/Restaurant_Review-g2373836-d15791963-Reviews-Antrekot-Angarsk_Irkutsk_Oblast_Siberian_District.html#REVIEWS',
          yandex: 'https://yandex.ru/maps/org/antrekot/184698671336/?ll=103.905933%2C52.494717&mode=search&sctx=ZAAAAAgBEAAaKAoSCedSXFX2EVpAEfF%2FR1SoJEpAEhIJS2z9%2F3%2BN3z8RGZB%2BMZsExj8oCkD4V0gBVc3MzD5YAGoCcnVwAJ0BzcxMPaABAKgBAL0BmvGXPcIBBuihmIewBQ%3D%3D&sll=103.905933%2C52.494717&sspn=0.264198%2C0.091745&text=%D0%90%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82&z=12',
        },
        {
          id: 5,
          name: 'Яркомолл',
          google: 'https://www.google.ru/maps/search/%D0%B0%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82/@52.2640642,104.2498569,13z?hl=ru',
          flamp: 'https://irkutsk.flamp.ru/firm/antrekot_gril_bar-70000001040523461#reviews',
          tripAd: 'https://www.tripadvisor.ru/Restaurant_Review-g298527-d20867442-Reviews-Antrekot-Irkutsk_Irkutsk_Oblast_Siberian_District.html',
          yandex: 'https://yandex.ru/maps/org/antrekot/113072509041/?ll=104.292527%2C52.267233&mode=search&sctx=ZAAAAAgBEAAaKAoSCedSXFX2EVpAEfF%2FR1SoJEpAEhIJS2z9%2F3%2BN3z8RGZB%2BMZsExj8oCkDTzQZIAVXNzMw%2BWABqAnJ1cACdAc3MTD2gAQCoAQC9AZrxlz3CAQvM0PXeBvGglp2lAw%3D%3D&sll=104.292527%2C52.267233&sspn=0.025732%2C0.008982&text=%D0%90%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82&z=16',
        },
      ]
    }
  },
  methods: {
    changeFeedbackVar() {
      if (this.feedback.rate >= 4) {
        this.isOpenOtherFeedback = !this.isOpenOtherFeedback;
      }
    },
    clickHandle(resource) {
      const resultName = this.restaurantLinks.filter(
        (item) => item.name === this.feedback.restaurant,
      );
      let link;
      if (resource === 'google') {
        link = resultName.map(el => el.google);
      } else if (resource === 'flamp') {
        link = resultName.map(el => el.flamp);
      } else if (resource === 'tripAd') {
        link = resultName.map(el => el.tripAd);
      } else if (resource === 'yandex') {
        link = resultName.map(el => el.yandex);
      }
      window.open(link, '_blank');
    },
    updateHeight() {
      this.height = window.innerHeight;
    },
    updateWidth() {
      this.width = window.innerWidth;
    },
    showFeedbackForm() {
      this.isShowFeedbackForm = !this.isShowFeedbackForm;
    },
    toShowFeed() {
      if (this.width > 1024) {
        this.showFeed = !this.showFeed;
        this.feedClass = '';
      } else {
        this.showFeed = !this.showFeed;
        this.feedClass = 'position-class';
      }
    },
    writeFeedback() {
      this.showFeed = !this.showFeed;
      this.feedClass = 'block-hide-desc';
    },
    saveFeed() {
      this.thanks = true
      this.feedback.rate = "_" + this.feedback.rate
      this.loading = true
      axios.post(`${process.env.API_LINK}/otzyvies`,
        this.feedback
      )
        .then((res) => {
          console.log()
          this.feedback.rate = this.feedback.rate.substr(1, 1)
          this.thanks = true
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
    ...mapState('common', ['feedbacks']),
    setRestarauntName() {
      let restarauntName = [];
      for (let i = 0; i < this.restaurantLinks.length; i += 1) {
        restarauntName.push(this.restaurantLinks[i].name);
      }
      return restarauntName;
    }
  },
}
</script>

<style scoped>

.field-name {
  font-size: 16px;
  line-height: 22px;
  font-family: mregular;
  letter-spacing: 0.1em;
}

.see-feedback-name {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

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
  font-family: mbold;
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  letter-spacing: 0.25em;
  text-transform: uppercase;
  padding-bottom: 12px;
}

.overflow_scr {
  overflow: scroll;
}

.left_arraow {
  transform: rotate(180deg);
}

.active-line {
  background-image: url("../assets/activeMenuLine.png");
  background-position: bottom;
  height: 3px;
  width: 220px;
}

.name-feedback {
  font-family: 'mbold';
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

.my-red {
  color: #E84437
}

.feedback-box {
  position: relative;
}

.block-hide-mob {
  display: none;
}

.position-class {
  position: relative;
}

.block-hide-desc {
  display: flex;
}

@media (max-width: 1024px) {
  .position-class {
    position: absolute;
  }

  .block-hide-desc {
    display: none;
  }

  .block-hide-mob {
    display: flex;
  }

  .feedback-box {
    display: none;
  }

  .feedback-items {
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background: black;
  }

  .field-name {
    font-size: 12px;
    line-height: 15px;
  }

}
@media (max-width: 600px) {
.q-btn_my_black{
   margin-top: 15px;
  border: 1px;
  font-size: 14px;
}
}
</style>
