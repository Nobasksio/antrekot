<template>
  <q-page class="container column">
    <div class="column  items-start q-mb-lg">

      <div class="col-auto-md items-center">
        <header-page :name_page="sobaka"></header-page>
      </div>
      <div class="col-md-8 col-12 row text-white items-center q-pl-sm-xl q-pl-md-none">
        <div class="sobaka-name  text-white zag">
          ГОЛОСУЙ ЗА НАС<br>
          ПОДДЕРЖИ НАС
        </div>
      </div>

    </div>
    <div class="column q-pa-xl text-white ">
      <div class="column q-pa-xl col-6">
      <div class="q-mb-xl">
        <q-btn color=""
               class="full-width my-mbold choose-button "
               @click="goToSobaka('http://best-restaurant.irk.sobaka.ru/vote/people/143467')"
        >
          <div class="row items-center">
            <div class="column">
              <div>НОМИНАЦИЯ:</div>
              <div>ЛУЧШАЯ РЕСТОРАННАЯ КОМАНДА</div>
            </div>
          </div>
        </q-btn>

      </div>
      <div class="row col-12   q-mb-lg q-mt-lg">
        <div class="col q-pr-md">
          <q-btn color=""
                 class="full-width my-mbold choose-button"
                 @click="goToSobaka('http://best-restaurant.irk.sobaka.ru/vote/project/143465')"
          >
            <div class="row items-center">
              <div>
                Номинация: <br>
                Лучший ресторан
                на каждый день
              </div>
            </div>
          </q-btn>

        </div>
        <div class="col q-pl-md">
          <q-btn color=""
                 class="full-width my-mbold choose-button "
                 @click="goToSobaka('http://best-restaurant.irk.sobaka.ru/vote/people/143553')"
          >
            <div class="row items-center">
              <div>
                Номинация: <br>
                Лучший официант<br>
              </div>
            </div>
          </q-btn>

        </div>
      </div>
      <div class="row">
        <div class="col q-pr-md">
          <q-btn color=""
                 class="full-width my-mbold choose-button "
                 @click="goToSobaka('http://best-restaurant.irk.sobaka.ru/vote/people/143552')"
          >
            <div class="row items-center">
              <div>
                Номинация: <br>
                Лучший шеф-повар<br>
              </div>
            </div>
          </q-btn>

        </div>
        <div class="col q-pl-md">
          <q-btn color=""
                 class="full-width my-mbold choose-button"
                 @click="goToSobaka('http://best-restaurant.irk.sobaka.ru/vote/food/143466')"
          >
            <div class="row items-center">
              <div>
                Номинация: <br>
                Лучшее мясо<br>
              </div>
            </div>
          </q-btn>

        </div>
      </div>
    </div>
    </div>
  </q-page>
</template>

<script>
import {mapState} from 'vuex';

import headerPage from '../components/header-page'

export default {
  name: "sobaka",
  preFetch({store, currentRoute, previousRoute, redirect, ssrContext}) {
    return store.dispatch('common/getMenu')
  },
  components: {
    headerPage,
  },
  meta: {
    title: `Меню Гриль Баров Антрекот Иркутск Ангарск`,
    meta: {
      description: {
        name: 'description',
        content: 'Меню Гриль-бар Антрекот в иркутске рад приветствовать своих гостей. На сайте вы сможете ознакомиться с меню ресторана Антрекот посмотреть интерьеры шашлыкбара Антрекот в Иркутске и узнать об акциях кафе атрекот в иркутске'
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
  data: function () {
    return {
      sobaka: 'ПРЕМИЯ "СОБАКА" ',
    }
  },
  methods: {
    goToSobaka(link) {
      console.log(link);
      window.open(link);
    }
  },
  computed: {},
  mounted() {
  }
}
</script>

<style scoped lang="scss">

.choose-button {
  font-size: 24px;
  padding: 25px;
  background-color: #E84437;
}

.sobaka-name {
  font-size: 24px;
  font-family: mbold;
  text-transform: uppercase;
  letter-spacing: 0.25em;
}


</style>
