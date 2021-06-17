<template>
  <q-page class="container" style="height: 1px">
    <div class="row tl_padding_page">


        <header-page name_page="ИНТЕРЬЕР"></header-page>

      <div class="col-md-auto col-12">
        <div class="row block-hide-mob q-mb-md">
          <div class="col-auto">
            <div class="col-7 row justify-start  text-white bg-black items-start menu-button"
                 @click="showInterior">
              {{ activeInterior.short_name }}
              <div class="active-line block-hide-mob"></div>
            </div>
          </div>
          <div class="col-3 ">
            <img src="../assets/arrowdown.png" v-if="isShowInterior === true" class="q-ml-sm q-mt-sm-sm q-mt-xs-sm">
            <img src="../assets/arrowUp.png" v-if="isShowInterior === false" class="q-ml-sm q-mt-sm-sm q-mt-xs-sm">

          </div>
        </div>
        <div class="col-md-8 col-12 " v-if="isShowInterior === true">
          <div class="row-md column-xs text-white bg-black items-center-md q-mb-lg">

            <div class="menu-button q-mt-sm q-mr-lg row "
                 v-for="(item, index) in restaurants"
                 @click="chooseInterior(item)">
              <div class=""
                   :class="{
              'red-point col-1': activeInterior === item,
              'col-1': activeInterior !== item,
            }"></div>
              {{ item.short_name }}
              <div class="col-12 interior-class"
                   :class="{
              'active-line': activeInterior === item,
              '': activeInterior !== item,
            }"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="col-7 row justify-start  text-white bg-black items-start photo-field block-hide-mob"
         v-if="isShowInterior === false">ФОТО
    </div>

    <interior-courusel :slideCount="slideCount" :key="activeInterior.id"
                       :restaurant="activeInterior"></interior-courusel>
  </q-page>
</template>

<script>

import {mapState} from 'vuex';

import interiorCourusel from '../components/interior/interior-courusel'
import headerPage from '../components/header-page'

export default {
  name: "interior",
  components: {
    interiorCourusel,
    headerPage
  },
  meta: {
    title: `Интерьеры Гриль Баров Антрекот Иркутск Ангарск`,
    meta: {
      description: {
        name: 'description',
        content: 'Интерьеры Гриль-бар Антрекот в иркутске рад приветствовать своих гостей. На сайте вы сможете ознакомиться с меню ресторана Антрекот посмотреть интерьеры шашлыкбара Антрекот в Иркутске и узнать об акциях кафе атрекот в иркутске'
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
    try {
      return store.dispatch('common/getRestaurant')
    } catch (e) {
      console.log(e);
    }

  },
  data: function () {
    return {
      tab: 1,
      activeInterior: null,
      isShowInterior: true,
      scrollMobileOffset: 0,
    }
  },
  methods: {
    chooseInterior(item) {
      this.activeInterior = item;
    },
    showInterior() {
      this.isShowInterior = !this.isShowInterior;
    },
    next() {
      const el = document.getElementById(
        'horizontal-scroll',
      );
      el.scrollLeft -= this.scrollMobileOffset - 250;
    },
    undo() {
      const el = document.getElementById(
        'horizontal-scroll',
      );
      el.scrollLeft -= this.scrollMobileOffset + 250;
    }

  },
  computed: {
    ...mapState('common', ['restaurants']),
    slideCount() {
      let count = 0;
      if (this.isShowInterior === true) {
        count = 2;
      } else {
        count = 6;
      }
      return count;
    }

  },
  mounted() {
    if (this.restaurants[0] !== undefined) {
      [this.activeInterior] = this.restaurants;
    }
  },
}
</script>

<style scoped>
.interior-class.red-point {
  display: none;
}

.menu-button {
  cursor: pointer;
  font-size: 14px;
  line-height: 17px;
  font-family: mbold;
  text-transform: uppercase;
  letter-spacing: 0.25em;
}

.active-line {
  background-image: url("../assets/activeMenuLine.png");
  background-position: bottom;
  height: 3px;
  width: 100%
}

.red-point {
  background-image: url("../assets/redPoint.svg");
  background-position: left;
  background-repeat: no-repeat;
}

.h-100 {
  height: 400px;
}

.block-hide-desc {
  display: flex;
}

.block-hide-mob {
  display: none;
}

@media (max-width: 1024px) {
  .block-hide-desc {
    display: none;
  }

  .block-hide-mob {
    display: flex;
  }

  .interior-class.active-line {
    display: none;
  }

  .interior-class.red-point {
    display: block;
  }

  .photo-field {
    font-size: 12px;
    line-height: 15px;
    font-family: mbold;
    text-transform: uppercase;
    letter-spacing: 0.25em;
  }

  ::-webkit-scrollbar {
    background: transparent;
  }

  .arrow {
  }

  .next-arrow {
    transform: scale(-1, 1);
  }

}

</style>
