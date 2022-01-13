<template>
  <q-page class="container">
    <div class="row  items-start q-mb-lg">

      <div class="col-auto-md items-center">
        <header-page name_page="МЕНЮ"></header-page>
      </div>
      <div class="col-md-8 col-12 row text-white bg-black items-center q-pl-sm-xl q-pl-md-none">
        <div class="q-pr-lg menu-button q-mt-sm q-ml-sm"
             v-for="(item, index) in menus" v-show="mayMenu(isOld,item.old)"
             @click="chooseMenu(item)"
             :class="{
              'active': activeMenu === item,
              '': activeMenu !== item,
            }">
          {{ item.name }}
          <div class="col-12"
               :class="{
              'active-line': activeMenu === item,
              '': activeMenu !== item,
            }"></div>
        </div>
      </div>

      <!--            <div class="col-md-12 col-12 column" >-->
      <!--                <q-tabs-->
      <!--                        v-model="tab"-->
      <!--                        dense-->
      <!--                        narrow-indicator-->
      <!--                        class="text-white bg-black q-px-lg wrap"-->
      <!--                >-->
      <!--                    <q-tab :name="item.id"-->
      <!--                           :key="index"-->
      <!--                           v-show="mayMenu(isOld,item.old)"-->
      <!--                           class="my-mbold"-->
      <!--                           :label="item.name" v-for="(item, index) in menus" />-->
      <!--                </q-tabs >-->
      <!--            </div >-->

    </div>
    <div class="h-100">
      <div v-if="activeMenu !== null"
           class="for-iframe" v-html="activeMenu.code"></div>
    </div>
    <!--            <q-tab-panels v-model="tab" animated class="bg-black" >-->
    <!--                <q-tab-panel :name="item.id" v-show="mayMenu(isOld,item.old)" class="q-px-none" :key="`tab${item.id}`"-->
    <!--                             v-for="(item, index) in menus" >-->
    <!--                    <div class="text-h6" >-->
    <!--                        <div style="text-align:center;" v-html="item.code" >-->
    <!--                        </div >-->
    <!--                    </div >-->
    <!--                </q-tab-panel >-->
    <!--            </q-tab-panels >-->


  </q-page>
</template>

<script>
import {mapState} from 'vuex';

import headerPage from '../components/header-page'

export default {
  name: "menu",
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
      tab: 1,
      activeMenu: null,
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


.h-100 {
  height: 400px;
}

</style>
