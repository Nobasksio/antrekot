<template>
  <q-page class="container">
    <div class="row  items-start q-mb-lg">

      <div class="items-center col-12 ">
        <header-page name_page="МЕНЮ"></header-page>
      </div>
      <div class="row col-12 items-start">
        <img @click="undo"
          class="cursor-pointer arrow q-mr-xs col-auto block-hide-mob" src="../assets/undo.svg">
        <div class="col q-mb-lg ">
          <div
            id="horizontal-scroll"
            :style="{left: `${scrollMobileOffset}px`}"
            class="overflow-auto col-md-8 col-12 row text-white bg-black items-center q-pl-md-none no-wrap-xs no-wrap-sm wrap-md">
            <div class=" q-pr-lg menu-button q-mt-sm q-mr-sm o"
                 v-for="(item, index) in menus" v-show="mayMenu(isOld,item.old)"
                 @click="chooseMenu(item)"
                 :class="{
              'active': activeMenu === item,
              '': activeMenu !== item,
            }">
              <nobr>{{ item.name }}</nobr>
              <div class="col-12"
                   :class="{
              'active-line': activeMenu === item,
              '': activeMenu !== item,
            }"></div>
            </div>
          </div>

        </div>
        <img @click="next"
             class=" cursor-pointer q-ml-xs next-arrow block-hide-mob arrow col-auto" src="../assets/next.svg">
      </div>
    </div>
    <div class="h-100">
      <div v-if="activeMenu !== null"
           class="for-iframe" v-html="activeMenu.code"></div>
    </div>

  </q-page>
</template>

<script>
import {mapState} from 'vuex';
const {getScrollTarget, setScrollPosition} = scroll;

import headerPage from '../components/header-page'
import {scroll} from "quasar";

export default {
  name: 'MenuPage',
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
        content: 'Меню Гриль-бар Антрекот в иркутске рад приветствовать своих гостей. На сайте вы сможете ознакомиться с меню ресторана Антрекот посмотреть интерьеры шашлыкбара Антрекот в Иркутске и узнать об акциях кафе атрекот в иркутске',
      },
      keywords: {
        name: 'keywords',
        content: 'Гриль-бар Антрекот Иркутск меню, интерьер, акции, кафе, шашлыкбар, шашлык, ресторан, стильный интерьер, подача блюд, грильбар, грильная',
      },
      equiv: {'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8'},
    },
    noscript: {
      default: 'В вашем браузере отключен JavaScript. Без него вы не сможете открыть наш сайт. Но вы всегда можете позвонить нам 50-61-70',
    },
  },
  data: function () {
    return {
      tab: 1,
      activeMenu: null,
      scrollMobileOffset: 0,
    }
  },
  methods: {
    mayMenu: function (isOld, menuOld) {
      if (isOld) return true
      else if (menuOld === true) return false
      else return true
    },
    chooseMenu(item) {
      this.activeMenu = item;
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
    ...mapState('common', ['menus']),
    ...mapState('age', ['isOld'])
  },
  mounted() {
    if (this.menus[0] !== undefined) {
      [this.activeMenu] = this.menus;
    }
  }
}
</script>

<style scoped lang="scss">

.menu-button {
  cursor: pointer;
  font-size: 16px;
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

.block-hide-desc {
  display: flex;
}

.block-hide-mob {
  display: none;
}


.h-100 {
  height: 400px;
}

@media (max-width: 1024px) {
  .block-hide-desc {
    display: none;
  }
  .block-hide-mob {
    display: block;
  }
  .next-button {

  }
  ::-webkit-scrollbar {
    background: transparent;
  }
  .arrow {
    //height: 15px;
  }
  .next-arrow {
    transform: scale(-1, 1);
  }
}

</style>
