<template>
  <q-page class="">
    <div class="container">
      <div class="row q-px-none q-mt-sm-md q-mt-xs-md">
        <div class="col-md-9 col-xs-12  col-sm-12 row justify-md-start justify-sm-center justify-xs-center">
          <div class="col-auto-md block-hide-desc q-mt-md">
            <header-page name_page="ДОСТАВКА"></header-page>
          </div>
          <div class="q-ml-md-md  block-hide-desc-delivery">
            <div class="row items-center no-wrap ">
              <img src="statics/icons/balloon.svg" alt="" class="ballon">
              <q-btn outline
                     color="white"
                     type="a"
                     :ripple="{ color: 'red' }"
                     @click="showMap"
                     class='text-uppercase q-btn_my'>
                <div class="q-px-xl ">
                  <nobr>ЗОНА ДОСТАВКИ</nobr>
                </div>
              </q-btn>

              <q-dialog v-model="isShowMap">
                <q-card>
                  <!--                <q-spinner-ball-->
                  <!--                  color="red"-->
                  <!--                  size="10em"-->
                  <!--                  :thickness="5"-->
                  <!--                />-->
                  <div style="position:relative;overflow:hidden;">
                    <iframe src="https://yandex.ru/map-widget/v1/-/CCUaFBgVpC" width="560" height="400" frameborder="1"
                            allowfullscreen="true" style="position:relative;"></iframe>
                    <q-card-actions align="right">
                      <q-btn class="my-bold" flat label="закрыть" color="red" v-close-popup/>
                    </q-card-actions>
                  </div>

                </q-card>
              </q-dialog>
            </div>
          </div>

        </div>
        <q-separator dark class="block-hide-mob"/>

        <div class="basket-btn col-3 row justify-end block-hide-desc"
             :class="{'fixed q-mt-sm q-mr-xl q-pr-xl': mobileMenuScrollOffset === true}">
          <div class=" row justify-center">

            <div class="column items-center">
              <q-btn
                :class="{'order-button': orderProducts.length > 0}"
                ref="basket"
                no-caps
                unelevated
                @click="dialog = true">
                <div class="q-mr-xs my-mbold basket-item">КОРЗИНА</div>
                <img src="~assets/basketImage.svg" class="q-px-sm">
                <span class="q-ml-xs" v-if="orderProducts.length > 0"> x {{ getNumberOfPosition }}</span>
              </q-btn>
            </div>
          </div>
        </div>
        <div class="col-12 categories-field q-mb-md block-hide-desc">
          КАТЕГОРИИ

        </div>


      </div>
      <div v-if="mobileMenuScrollOffset === true" class="sticky-header block-hide-desc">
        <div class="row justify-start items-center ">
          <div class="row justify-around items-center q-my-sm ">
            <img src="statics/icons/balloon.svg" class="ballon" alt="">
            <q-btn outline
                   color="white"
                   :ripple="{ color: 'red' }"
                   type="a"
                   @click="showMap"
                   class='text-uppercase q-btn_my'>
              <div class="q-px-xl">ЗОНА ДОСТАВКИ</div>
            </q-btn>
          </div>
          <div class=" row text-white bg-black items-center menu-button q-ml-xl q-my-sm"
               @click="hideCategory"
               v-if="activeCategory">
            {{ activeCategory.Name }}
            <img src="~assets/arrowdown.png" v-if="isHideCategory === true" class="q-ml-sm">
            <img src="~assets/arrowUp.png" v-if="isHideCategory === false" class="q-ml-sm">
          </div>
        </div>
      </div>
      <div class="block-hide-mob">
        <div class="fixed-top inline-block mobile-order-header ">
          <div class="row items-center ">
            <div class="col-1 basket-btn ">
              <q-btn
                ref="basket"
                no-caps
                unelevated
                class="q-px-none"
                @click="dialog = true">
                <div class="relative-position">
                  <img src="~assets/basketMobile.svg" v-if="orderProducts.length === 0">
                  <img src="~assets/basketMobileFull.svg" v-if="orderProducts.length > 0">
                  <span class="number-in-basket" v-if="orderProducts.length > 0"> {{ getNumberOfPosition }}</span>
                </div>
              </q-btn>

            </div>
            <div class="col"></div>
            <div class="col-7 row justify-center text-white bg-black items-center menu-button"
                 @click="hideCategory"
                 v-if="activeCategory">
              {{ activeCategory.Name }}
              <img src="~assets/arrowdown.png" v-if="isHideCategory === true" class="q-ml-sm ">
              <img src="~assets/arrowUp.png" v-if="isHideCategory === false" class="q-ml-sm ">
            </div>
            <div class="col"></div>
            <div class="col-1"></div>
          </div>
        </div>
      </div>
      <!--<div class="row " >-->
      <!--<div class="text-white bg-black"-->
      <!--v-for="(item, index) in categoriesMenu" @click="tab = item.id" >-->
      <!--{{item.Name}}-->
      <!--</div >-->
      <!--</div >-->

      <div class="block-hide-desc col-md-8 col-12 row text-white bg-black items-start  mobile-menu-scroll"
           v-if="isHideCategory === false">
        <!--             id="mobile-menu-scroll">-->
        <div class="q-pr-lg menu-button  q-mt-md q-mb-sm"
             :id="item.id"
             v-for="item in pasteBusinnesLunch"
             @scroll="scroll"
             @click="chooseCategory(item)">
          {{ item.Name }}
          <div class="col-12"
               :class="{
              'active-line active-category': activeCategory === item,
              '': activeCategory !== item,
            }"></div>
        </div>
      </div>


      <div class="row col-12 q-my-md items-start mobile-menu-scroll " v-if="isHideCategory === false">
        <img @click="undo"
             class="cursor-pointer arrow q-mt-xs q-mr-sm  block-hide-mob" src="../assets/undoArrow.png">

        <div class="overflow-auto col block-hide-mob row items-baseline flex-md-block no-wrap menu-button"
             v-if="isHideCategory === false"
             id="mobile-menu-scroll"
             :style="{left: `${scrollMobileOffset}px`}">
          <div class="q-pr-lg menu-button "
               :id="item.id"
               v-for="item in pasteBusinnesLunch"
               @scroll="scroll"
               @click="chooseCategory(item)">
            <nobr>{{ item.Name }}</nobr>
            <div class="col-12"
                 :class="{
              'active-line active-category': activeCategory === item,
              '': activeCategory !== item,
            }"></div>
          </div>
        </div>
        <img @click="next"
             class=" cursor-pointer q-ml-sm q-mt-xs next-arrow block-hide-mob arrow " src="../assets/undoArrow.png">
      </div>
      <div class=" q-mt-xs-lg a-mt-md-none q-ml-md-md delivery-zones-button block-hide-mob col-12 justify-center">
        <div class="row items-center no-wrap ">
          <img src="statics/icons/balloon.svg" alt="" class="ballon">
          <q-btn outline
                 color="white"
                 type="a"
                 :ripple="{ color: 'red' }"
                 @click="showMap"
                 class='text-uppercase q-btn_my'>
            <div class="q-px-xl ">
              <nobr>ЗОНА ДОСТАВКИ</nobr>
            </div>
          </q-btn>

          <q-dialog v-model="isShowMap">
            <q-card>
              <!--                <q-spinner-ball-->
              <!--                  color="red"-->
              <!--                  size="10em"-->
              <!--                  :thickness="5"-->
              <!--                />-->
              <div style="position:relative;overflow:hidden;">
                <iframe src="https://yandex.ru/map-widget/v1/-/CCUaFBgVpC" width="560" height="400" frameborder="1"
                        allowfullscreen="true" style="position:relative;"></iframe>
                <q-card-actions align="right">
                  <q-btn class="my-bold" flat label="закрыть" color="red" v-close-popup/>
                </q-card-actions>
              </div>

            </q-card>
          </q-dialog>
        </div>
      </div>

      <div class="col-12 block-hide-mob text-grey mregular q-my-sm justify-sm-center text-12">
        Пока мы, к сожалению, не доставляем в ленинский район и за пределы города.
      </div>
      <!--            <q-tabs-->
      <!--                    v-model="tab"-->
      <!--                    dense-->
      <!--                    narrow-indicator-->
      <!--                    class="text-white bg-black"-->
      <!--            >-->
      <!--                <q-tab name="000name"-->
      <!--                       class="my-mbold"-->
      <!--                       label="Бизнес-Ланч"-->
      <!--                />-->
      <!--                <q-tab :name="item.id"-->
      <!--                       :key="item.Name"-->
      <!--                       class="my-mbold"-->
      <!--                       :label="item.Name" v-for="(item, index) in categoriesMenu" />-->

      <!--            </q-tabs >-->

      <q-banner inline-actions class="text-white bg-red" v-show="!isWorkTime">
        Сейчас мы не работаем. Доставка работает с 11:00 до 23:00.
      </q-banner>
      <!--      <q-banner inline-actions class="text-white bg-red" >-->
      <!--        <div v-show="!isWorkTime">Доставка работает только с 11:00 до 23:00.</div>-->
      <!--        БЕДА! В Иркутске пропала вода! Доставка в Иркутске не работает с 20.05 с 21:00 до 22.05 10:00. Sorry :(<br>-->
      <!--        В Ангарске всё в порядке.-->
      <!--      </q-banner >-->


      <div class="q-px-none q-pb-md" :key="categoryItem.id"
           v-for="categoryItem in pasteBusinnesLunch">
        <div v-if="categoryItem.id == 19" class="q-pa-md text-white text-h6">
          Привет, дорогой наш друг!
          Мы сделали за тебя уже половину работы, тебе же остаётся пройти вторую половину и
          приготовить
          для себя, друзей и близких стейки, бургеры и наборы шашлыков, которые приедут к тебе в
          полуфабрикатах, а тебе останется только приготовить твой шедевр кулинарного мастерства.
        </div>
        <div class="category-name-desktop category-name"
             :id="categoryItem.Name">
          {{ categoryItem.Name }}
        </div>
        <div class="text-h6 q-pb-lg">
          <div class="row content-center">
            <catalog-item :key="product.id"
                          :productItem="product"
                          :action="proxyAddProductToBasket"
                          :isAddedToBasket="isAddedToBasket"
                          :getAddbasketButtonType="getAddbasketButtonType"
                          v-for="product in sortProducts(categoryItem.products)">
            </catalog-item>
            <div v-if="categoryItem.id === 10">
              <business-lunch></business-lunch>
            </div>
          </div>
        </div>
      </div>
      <q-dialog
        v-model="dialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
        class="basket"
      >

        <Basket
          :action="proxyAddProductToBasket"
          :loading="loading"
          ></Basket>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import {dom, scroll} from 'quasar';

import headerPage from '../components/header-page'
import {mapState, mapMutations, mapGetters} from 'vuex';

const {getScrollTarget, setScrollPosition} = scroll;

import {Catalog} from '../assets/catalog';
import CatalogItem from "../components/order/CatalogItem";
import Basket from "../components/order/Basket";
import BusinessLunch from "../components/order/BusinessLunch";

const axios = require('axios').default;
var _ = require('lodash');

export default {
  name: "order2",
  components: {
    BusinessLunch,
    Basket,
    CatalogItem,
    headerPage
  },
  data() {
    return {
      mapLink: 'https://yandex.ru/maps/-/CCUEnLAO0A',
      lunchPrice: 355,
      nowDate: new Date(),
      dialog: false,
      loading: false,
      maximizedToggle: true,
      isAlreadyShowReBull: false,
      step: 1,
      tab: 1,
      costume: false,
      activeCategory: null,
      scrollMobileOffset: 0,
      mobileMenuScrollOffset: null,
      isHideCategory: false,
      basketButtonColor: '#000',
      isShowMap: false,
      windowWidth: null,

      products: [],
      categories: [],

    }
  },
  methods: {
    ...mapMutations('common', ['addProductToBasket',
      'removeProductToBasket',
      'setPhone',
      'setDepartment',
      'setAddress',
      'setTime',
      'setEarly',
      'setComment',
      'setPayment',
      'setCostume',
      'setName',
      'setForks',
      'setBusinessLunch',
      'setPromocode',
    ]),
    showMap() {
      this.isShowMap = !this.isShowMap;
    },
    chooseCategory(item) {
      this.activeCategory = item;
      const scrollTop = window.pageYOffset;
      if (scrollTop !== 0) {
        const el = document.getElementById(item.Name);
        const scrollTarget = getScrollTarget(el);
        setScrollPosition(scrollTarget, el.offsetTop - 200, 100);
      } else {
        window.scrollTo({
          top: 1,
        });
      }
    },
    hideCategory() {
      this.isHideCategory = !this.isHideCategory;
    },
    scroll() {
      const scrollTop = window.pageYOffset;
      const categories = document.getElementsByClassName(
        'category-name',
      );
      for (let i = 0; i < categories.length; i += 1) {
        const id = this.pasteBusinnesLunch[i];
        const categoryArea = document.getElementById(
          this.pasteBusinnesLunch[i].Name,
        );
        if (
          categories[i].offsetTop <= scrollTop + 300
          && categories[i].offsetTop + categoryArea.offsetHeight
          > scrollTop + 180
          && scrollTop !== 0
        ) {
          this.activeCategory = id;
          const activeCategoryClass = document.getElementsByClassName(
            'active-category',
          );
          if (activeCategoryClass[1]) {
            this.scrollMobileOffset = activeCategoryClass[1].offsetLeft;
            const el = document.getElementById(
              'mobile-menu-scroll',
            );
            el.scrollLeft = this.scrollMobileOffset - 15;
          }
        }
      }
      if (scrollTop > 100) {
        this.mobileMenuScrollOffset = true;
      } else {
        this.mobileMenuScrollOffset = false;
        this.isHideCategory = false;
      }
    },
    next() {
      const el = document.getElementById(
        'mobile-menu-scroll',
      );
      el.scrollLeft += this.scrollMobileOffset + 250;
    },
    undo() {
      const el = document.getElementById(
        'mobile-menu-scroll',
      );
      el.scrollLeft -= this.scrollMobileOffset - 250;
    },
    showNotif() {
      this.$q.notify({
        message: `<div class="row items-center">
                                <div class="col-4">
                                <img src="statics/rb.jpg" alt="" style="max-height: 100px">
                                </div>
                                <div class="col-8">Успеть все, пока все дома?<br>Ура Вы получаете Баночку редбула в подарок за заказ больше 800 руб!</div>
                                </div>
                                `,
        html: true,
        actions: [
          {
            label: 'Ок', color: 'red', handler: () => { /* ... */
            }
          }
        ]
      })
    },
    getAddbasketButtonType(nameProduct) {
      let buttonName = 'в корзину'

      let productsArr = this.orderProducts.filter(item => item.name === nameProduct)

      if (productsArr.length > 0) {
        buttonName = `в корзине ${productsArr[0].count}`
      }
      return buttonName
    },
    isAddedToBasket(nameProduct) {
      let isAdded = false


      let productsArr = this.orderProducts.filter(item => item.name === nameProduct)

      if (productsArr.length > 0) {
        isAdded = true
      }
      return isAdded
    },
    proxyAddProductToBasket(product) {
      this.$refs.basket.$el.classList.add('pulse')
      this.addProductToBasket(product);
      this.$forceUpdate();
    },
    getCategoryProduts(categoryId) {
      const products_l = this.products.filter(item => item.category_id === categoryId)

      return products_l;
    },
    makedescr(text) {
      if (text === null) return '';
      return text.split(",").join(", ");
    },
    clearLanch() {
    },
    sortProducts(products) {
      const mySort = (a, b) => {
        return a.sort_index - b.sort_index;
      }
      const newProducts = _.map(products, _.clone);
      return newProducts.sort(mySort)
    },
    sortCategories(categoriesMenu) {
      const sort = (a, b) => {
        return a.sort_index - b.sort_index;
      }
      const newCategories = _.map(categoriesMenu, _.clone);
      this.newSortCategories =  newCategories;
      return newCategories.sort(sort);
    },
  },
  computed: {
    ...mapState('common', ['order', 'orderProducts', 'orderMenu', 'categoriesMenu']),
    ...mapGetters('common', ['totalSum']),
    getNumberOfPosition() {
      let productCount = 0;
      for (let i = 0; i < this.orderProducts.length; i += 1) {
        productCount += this.orderProducts[i].count;
      }
      return productCount;
    },
    showLanch() {
      const nowDate = new Date();
      if (nowDate.getHours() < 11) return false;
      if (nowDate.getHours() > 16) return false;

      return true

    },
    isWorkTime() {
      const nowDate = new Date();
      if (nowDate.getHours() > 23) return false;
      if (nowDate.getHours() < 11) return false;

      return true

    },
    nowHour() {
      const nowDate = new Date();
      return nowDate.getHours();
    },
    pasteBusinnesLunch() {
      const sort = (a, b) => {
        return a.sort_index - b.sort_index;
      }
      const newCategories = [...this.categoriesMenu];
      newCategories.splice(5, 0, {Name: 'Бизнес ланч', id: 10, sort_index: 5})
      return newCategories.sort(sort);

    },
  },
  // preFetch({store, currentRoute, previousRoute, redirect, ssrContext}) {
  //     store.dispatch('common/getOrderMenu')
  // },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.$store.dispatch('common/getOrderMenu').then(() => {
      if (this.categoriesMenu[0] !== undefined) {
        this.activeCategory = this.categoriesMenu.find((item) => item.sort_index === 1);
      }
    });
    window.scrollTo(0, 1);
  },
  watch: {
    // totalSum(newValue) {
    //     const giftProduct = {
    //         name: 'Red Bull в подарок',
    //         sortIndex: 500,
    //         description: '',
    //         price: 0,
    //         category_id: 13
    //     };
    //     if (newValue > 800 && !this.isAlreadyShowReBull) {
    //         this.isAlreadyShowReBull = true;
    //         this.showNotif();
    //         this.proxyAddProductToBasket(giftProduct)
    //     }
    //     if (newValue < 800 && this.isAlreadyShowReBull) {
    //         this.isAlreadyShowReBull = false;
    //         this.removeProductToBasket(giftProduct)
    //     }
    // }
  },
  created() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.scroll);
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.scroll);
  },
};
</script>

<style scoped>

.sticky-header {
  position: sticky;
  top: 0;
  background-color: black;
  z-index: 6;
}

.menu-button {
  cursor: pointer;
  font-size: 16px;
  font-family: mbold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.categories-field {
  text-transform: uppercase;
  font-family: mbold;
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;

}

.basket {
  min-width: 100%;
}

.q-btn_my {
  margin-top: 0px;
  margin-left: 0px;
  font-size: 10px;
  padding: 7px 0px;
  border: 1px solid #FFFFFF;
  border-radius: 0px;
  letter-spacing: 0.25em;
  font-family: 'mbold';
}

.active_card_contact2 {
  background: linear-gradient(180deg, #970E00 0%, #E84437 100%);
}


.category-name-desktop {
  font-family: 'lumios';
  font-size: 84px;

  color: #FFFFFF;

  padding: 0px 7px 7px 0;
}

.ballon {

  padding: 10px 20px 10px 0px;
}

.hint-dzone {
  font-size: 11px;
  color: grey;
}

.mobile-menu-scroll {
  position: sticky;
  top: 55px;
  color: white;
  z-index: 5;
  background-color: black;
}

.active-line {
  background-image: url("../assets/activeMenuLine.png");
  background-position: bottom;
  height: 3px;
  width: 100%
}

.basket-btn {
  z-index: 7;
  top: 0;
  right: 0;

}

.order-button {
  background-color: #E84437;
  color: #FFFFFF;
}

.basket-item {
  font-size: 10px;
  line-height: 12px;
  font-weight: bold;
  letter-spacing: 0.25em;
  color: #FFFFFF;
}

.block-hide-desc {
  display: flex;
}

.block-hide-desc-delivery {
  display: block;
}

.block-hide-mob {
  display: none;
}

@media (max-width: 1024px) {
  .block-hide-desc-delivery {
    display: none;
  }

  .mobile-menu-scroll {
    top: 60px;
  }

  .mobile-order-header {
    background-color: black;
    padding: 16px 4px 10px 4px;
    z-index: 8;
  }

  .category-name-desktop {
    font-family: 'lumios';
    font-size: 36px;

    color: #FFFFFF;

    padding: 0px 7px 7px 0;
  }

  .basket {
    width: 100%;
  }

  .basket-btn {
    z-index: 7;
    left: 0;
    top: 0;

  }

  .block-hide-desc {
    display: none;
  }

  .block-hide-mob {
    display: flex;
  }

  .mobile-menu-scroll {
    margin: 0 -9px;
    overflow-x: scroll;
    z-index: 2002;
  }

  .number-in-basket {
    position: absolute;
    right: 7px;
    top: 7px;
    z-index: 8;
    font-size: 10px;
    line-height: 14px;
    color: white;
  }

  .menu-button {
    font-size: 14px;
  }
  ::-webkit-scrollbar {
    height: 2px;
  }

  .arrow {
  }

  .next-arrow {
    transform: scale(-1, 1);
  }
}

</style>
