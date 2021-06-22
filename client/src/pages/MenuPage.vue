<template>
  <div class="container">
    <div class="row  items-start ">

      <div class="items-center col-12 ">
        <header-page name_page="МЕНЮ"></header-page>
      </div>
      <div class="row col-12 items-start q-mb-lg">
        <img @click="undo"
          class="cursor-pointer arrow q-mr-sm q-pt-xs block-hide-mob" src="../assets/undoArrow.png">
        <div class="col ">
          <div
            id="horizontal-scroll"
            :style="{left: `${scrollMobileOffset}px`}"
            class="overflow-auto col-md-8 col-12 row text-white bg-black items-start q-pl-md-none no-wrap-xs no-wrap-sm wrap-md">
            <div class=" q-pr-md menu-button  q-mr-sm "
                 v-for="(item, index) in menus" :key="item.id" v-show="mayMenu(isOld,item.old)"
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
             class=" cursor-pointer q-ml-sm q-pt-xs next-arrow block-hide-mob arrow " src="../assets/undoArrow.png">
      </div>
    </div>
    <div class="h-100">
      <div v-if="activeMenu !== null"
           class="for-iframe" v-html="activeMenu.code"></div>
    </div>

  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';
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
    ...mapState('age', ['isOld']),
    ...mapMutations('common', ['setMenu']),
    setActiveMenu() {
      let computedActiveMenu;
      computedActiveMenu = this.menus[0];
      return computedActiveMenu;
    },
  },
  mounted() {
    this.$store.dispatch('common/getMenu').then(() => {
    if (this.menus[0] !== undefined) {
      [this.activeMenu] = this.menus;
    }
    });
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
  .container {
    height: 900px;
  }
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
  .menu-button {
    font-size: 14px;
    line-height: 17px;
  }
  .arrow {
    //height: 15px;
    box-sizing: content-box;
  }
  .next-arrow {
    transform: scale(-1, 1);
  }
}

</style>
