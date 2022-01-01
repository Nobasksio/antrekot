<template>
  <q-page class="">
    <div class="row tl_padding_page q-px-none">
      <div class="col-auto-md">
        <header-page name_page="Заказ Доставки"></header-page>
      </div>
      <div class="mobile-hide">
        <div class="row justify-around items-center q-pl-md-xl">
          <img src="statics/icons/balloon.svg" alt="" class="ballon">
          <q-btn outline
                 color="white"
                 type="a"
                 target="_blank"
                 :href="mapLink"
                 class='text-uppercase q-btn_my' label="Зона доставки"/>

        </div>
      </div>
      <div class="mobile-only col-12 column justify-center items-center q-pb-md">
        <div class="row justify-around items-center q-pl-md-xl">
          <img src="statics/icons/balloon.svg" class="ballon" alt="">
          <q-btn outline
                 color="white"
                 type="a"
                 target="_blank"
                 :href="mapLink"
                 class='text-uppercase q-btn_my' label="Зона доставки"/>
        </div>
      </div>


    </div>
    <div class="col-md col-12">

      <!--<div class="row " >-->
      <!--<div class="text-white bg-black"-->
      <!--v-for="(item, index) in categoriesMenu" @click="tab = item.id" >-->
      <!--{{item.Name}}-->
      <!--</div >-->
      <!--</div >-->
      <q-tabs
        v-model="tab"
        dense
        narrow-indicator
        class="text-white bg-black"
      >
        <q-tab name="000name"
               class="my-mbold"
               label="Бизнес-Ланч"
        />
        <q-tab :name="item.id"
               :key="item.Name"
               class="my-mbold"
               :label="item.Name" v-for="(item, index) in sortCategories(categoriesMenu)"/>

      </q-tabs>
    </div>
    <q-banner inline-actions class="text-white bg-red" v-show="!isWorkTime">
      Сейчас мы не работаем. Доставка работает с 11:00 до 23:00.
    </q-banner>
    <!--      <q-banner inline-actions class="text-white bg-red" >-->
    <!--        <div v-show="!isWorkTime">Доставка работает только с 11:00 до 23:00.</div>-->
    <!--        БЕДА! В Иркутске пропала вода! Доставка в Иркутске не работает с 20.05 с 21:00 до 22.05 10:00. Sorry :(<br>-->
    <!--        В Ангарске всё в порядке.-->
    <!--      </q-banner >-->
    <div class="h-100 full-width">
      <q-tab-panels v-model="tab" animated class="bg-black">
        <q-tab-panel name="000name" class="q-px-none">
          <div class="text-h6 text-white q-pb-xl">
            <div class="q-px-lg text-caption">
              Бизнес-ланч с 12:00 до 16:00 (ПН-ПТ) <br>
              Салат, Суп и Горячее + Эклер в подарок всего за {{ lunchPrice }} рублей!<br>

            </div>
            <div class="q-pa-md">
              <q-stepper
                v-model="step"
                ref="stepper"
                active-color="deep-orange"
                done-color="secondary"
                animated
                vertical
              >
                <q-step
                  :name="1"
                  title="Выберете салаты"
                  icon="img:statics/salad-icon.svg"
                  active-icon="img:statics/salad-icon.svg"
                  done-icon="img:statics/salad-icon.svg"
                  done-color="deep-orange"
                  :done="step > 1"
                >
                  <div class="row radioImgRow">
                    <div
                      v-for="(item, index) of salads"
                      :key="index"
                      class="col-md radioImg"
                    >
                      <label>
                        <div class="row">
                          <div class="col-auto">
                            <input type="radio" v-model="saladStep"
                                   :value="item.name"/>
                            <img :src="require(`../assets/${item.image}`)" height="139"
                                 width="139">
                          </div>
                          <div class="col radioWrapText">
                            <span class="itemName">{{ item.name }}</span>
                            <p class="itemText">{{ item.consist }}</p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <q-stepper-navigation>
                    <q-btn @click="step = 2" color="white"
                           class="q-pl-lg q-pr-lg q-pt-sm q-pb-sm text-bold" size="10px" outline
                           label="Продолжить"/>
                  </q-stepper-navigation>
                </q-step>

                <q-step
                  :name="2"
                  title="Выберете суп"
                  icon="img:statics/soup-icon.svg"
                  active-icon="img:statics/soup-icon.svg"
                  done-icon="img:statics/soup-icon.svg"
                  done-color="deep-orange"
                  :done="step > 2"
                >
                  <div class="row radioImgRow">
                    <div
                      v-for="(item, index) of soups"
                      :key="index"
                      class="col-md radioImg"
                    >
                      <label>
                        <div class="row">
                          <div class="col-auto">
                            <input type="radio" v-model="soupStep" :value="item.name"/>
                            <img :src="require(`../assets/${item.image}`)" height="139"
                                 width="139">
                          </div>
                          <div class="col radioWrapText">
                            <span class="itemName">{{ item.name }}</span>
                            <p class="itemText">{{ item.consist }}</p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <q-stepper-navigation>
                    <q-btn @click="step = 3" color="white"
                           class="q-pl-lg q-pr-lg q-pt-sm q-pb-sm text-bold" size="10px" outline
                           label="Продолжить"/>
                    <q-btn flat @click="step = 1" color="white" label="Назад" class="q-ml-sm"/>
                  </q-stepper-navigation>
                </q-step>

                <q-step
                  :name="3"
                  title="Выберете горячее"
                  icon="img:statics/hotter-icon.svg"
                  active-icon="img:statics/hotter-icon.svg"
                  done-icon="img:statics/hotter-icon.svg"
                  done-color="deep-orange"
                  :done="step > 3"
                >
                  <div class="row radioImgRow">
                    <div
                      v-for="(item, index) of hotter"
                      :key="index"
                      class="col-md radioImg"
                    >
                      <label>
                        <div class="row">
                          <div class="col-auto">
                            <input type="radio" v-model="hotterStep"
                                   :value="item.name"/>
                            <img :src="require(`../assets/${item.image}`)" height="139"
                                 width="139">
                          </div>
                          <div class="col radioWrapText">
                            <span class="itemName">{{ item.name }}</span>
                            <p class="itemText">{{ item.consist }}</p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <q-stepper-navigation>
                    <q-btn @click="step = 4" color="white"
                           class="q-pl-lg q-pr-lg q-pt-sm q-pb-sm text-bold" size="10px" outline
                           label="Продолжить"/>
                    <q-btn flat @click="step = 2" color="white" label="Назад" class="q-ml-sm"/>
                  </q-stepper-navigation>
                </q-step>

                <q-step
                  :name="4"
                  title="Итог"
                  icon="img:statics/basket-icon.svg"
                  active-icon="img:statics/basket-icon.svg"
                >
                  <div class="row">
                    <div class="col">
                      <p class="text-white" style="font-size: 16px">Вы выбрали следующие
                        блюда:</p>
                    </div>
                  </div>
                  <div class="row items-center">
                    <div class="col-auto"><img
                      :src="require(`../assets/${salads.filter(item => item.name === saladStep)[0].image}`)"
                      width="80" alt=""></div>
                    <div class="col q-ml-md">{{
                        salads.filter(item => item.name === saladStep)[0].name
                      }}
                    </div>
                  </div>
                  <div class="row items-center">
                    <div class="col-auto"><img
                      :src="require(`../assets/${soups.filter(item => item.name === soupStep)[0].image}`)"
                      width="80" alt=""></div>
                    <div class="col q-ml-md">{{ soups.filter(item => item.name === soupStep)[0].name }}
                    </div>
                  </div>
                  <div class="row items-center">
                    <div class="col-auto"><img
                      :src="require(`../assets/${hotter.filter(item => item.name === hotterStep)[0].image}`)"
                      width="80" alt=""></div>
                    <div class="col q-ml-md">{{
                        hotter.filter(item => item.name === hotterStep)[0].name
                      }}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col"><p class="text-white" style="font-size: 16px">+ <strong>Подарок:</strong>
                      пакетик чая и эклер</p></div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <q-btn
                        color="deep-orange"
                        @click="proxyAddProductToBasket(getBusinessLunch)"
                        :label="getAddbasketButtonType(getBusinessLunch.name)"/>
                      <q-btn flat @click="step = 1" color="white" label="Собрать ещё один"
                             class="q-ml-sm"/>
                    </div>
                  </div>
                </q-step>
              </q-stepper>
            </div>
          </div>
        </q-tab-panel>
        <q-tab-panel :name="categoryItem.id" class="q-px-none q-pb-xl" :key="`tab${categoryItem.id}`"
                     v-for="(categoryItem, index) in sortCategories(categoriesMenu)">
          <div v-if="categoryItem.id == 19" class="q-pa-md text-white text-h6">
            Привет, дорогой наш друг!
            Мы сделали за тебя уже половину работы, тебе же остаётся пройти вторую половину и
            приготовить
            для себя, друзей и близких стейки, бургеры и наборы шашлыков, которые приедут к тебе в
            полуфабрикатах, а тебе останется только приготовить твой шедевр кулинарного мастерства.
          </div>
          <div class="category-name-desktop mobile-hide">
            {{ categoryItem.Name }}
          </div>
          <div class="category-name-mobile desktop-hide">
            {{ categoryItem.Name }}
          </div>
          <div class="text-h6 q-pb-xl">
            <div class="row q-col-gutter-xl q-px-lg content-center">
              <catalog-item :key="product.id"
                            :productItem="product"
                            :action="proxyAddProductToBasket"
                            :isAddedToBasket="isAddedToBasket"
                            :getAddbasketButtonType="getAddbasketButtonType"
                            v-for="product in sortProducts(categoryItem.products)">
              </catalog-item>
            </div>

            <!--<div :key="product.id" v-for="product in item.products"-->
            <!--class="row items-center justify-between" >-->
            <!--<div class="col-md-4 col-sm-4 col-6 q-px-md" >{{ product.name }}</div >-->
            <!--<div class="col-md-4 col-sm-5 mobile-hide text-body2 q-pl-sm q-pr-sm" >{{ makedescr(product.description) }}</div >-->
            <!--<div class="col-md-2 col-sm-1 col-2" >{{ product.price }} р</div >-->
            <!--<div class="col-md-2 col-sm-2 col-4" >-->
            <!--<q-btn :outline="!isAddedToBasket(product.name)"-->
            <!--:color="{'white' : isAddedToBasket(product.name)}"-->
            <!--@click="proxyAddProductToBasket(product)"-->
            <!--:class="{'active_card_contact2' : isAddedToBasket(product.name)}"-->
            <!--class='text-uppercase q-btn_my' :label="getAddbasketButtonType(product.name)" />-->
            <!--</div >-->
            <!--</div >-->
          </div>

        </q-tab-panel>

      </q-tab-panels>
      <div class="basket-btn row justify-center">

        <div class="column items-center">
          <q-btn color="deep-orange" glossy
                 ref="basket"
                 @click="dialog = true">
            <div class="q-mx-xs">Корзина</div>
            <span v-if="orderProducts.length > 0"> {{ orderProducts.length }}</span>
          </q-btn>
          <div class="text-white q-pt-sm" v-if="totalSum < 600">минимальная сумма от 600 ₽</div>
        </div>
      </div>
      <q-dialog
        v-model="dialog"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="bg-white basket">

          <q-card-section class="active_card_contact2 row">
            <div class="text-h6">Корзина</div>
            <q-space/>
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-card-section>
          <q-card-section class="q-pt-none" v-if="thanks">
            <div class="text-center text-h3 q-py-xl">
              Спасибо за заказ
            </div>
            <div class="text-center">
              В ближайшее время мы перезвоним тебе для подтверждения заказа!
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none" v-if="!thanks">
            <div v-for="orderProductItem in orderProducts"
                 class="row justify-between items-center q-py-xs">
              <div class="col-6 text-bold">
                {{ orderProductItem.name }}
              </div>

              <div class="col-3 text-center">
                {{ orderProductItem.count }} шт
              </div>
              <div class="col-2 text-right">
                {{ orderProductItem.price }}
              </div>
              <div class="col-1 text-right">
                <q-btn flat style="color: #FF0080" label=""
                       @click="removeProductToBasket(orderProductItem)">
                  <img src="~assets/close.svg" alt="">
                </q-btn>

              </div>
            </div>
            <div class="row justify-end q-py-md items-center">
              <div class='col-grow'></div>
              <div class="q-px-md">итого</div>
              <div class="text-h6">
                {{ totalSum }}
              </div>
            </div>
            <div>
              <div class="q-mt-md q-mb-md">
                <q-input outlined dense
                         :value="order.name"
                         label="Имя"
                         @input="setName">
                </q-input>
              </div>
              <div class="q-mt-md q-mb-md">
                <q-input outlined dense
                         :value="order.forks"
                         label="Кол-во приборов"
                         @input="setForks">
                </q-input>
              </div>
              <div class="q-py-sm">
                <q-input outlined dense
                         :value="order.phone"
                         label="телефон"
                         fill-mask
                         mask="+7 (###) ###-##-##"
                         @input="setPhone">
                </q-input>
              </div>
              <div>
                <div class="text-subtitle2">Укажите тип оплаты</div>
                <q-radio :value="order.payment"
                         @input="setPayment"
                         val="1"
                         label="Наличные"
                         color="red"/>
                <q-radio :value="order.payment"
                         @input="setPayment"
                         val="2"
                         label="Карта"
                         color="red"/>
              </div>
              <div>
                <div class="text-subtitle2">Город</div>
                <q-radio :value="order.department"
                         @input="setDepartment"
                         val="IRK"
                         label="Иркутск"
                         color="red"/>
<!--                <q-radio :value="order.department"-->
<!--                         @input="setDepartment"-->
<!--                         val="ANG"-->
<!--                         label="Ангарск"-->
<!--                         color="red"/>-->
              </div>
              <div class="q-py-sm">
                <q-input
                  label="адрес"
                  :value="order.address"
                  :hint="order.department === 'IRK' ? 'К сожалению, мы не доставляем в Ленинский р-он и за пределы города.' : ''"
                  @input="setAddress"
                  outlined dense>
                </q-input>
                <div class="q-px-md q-pt-md">
                  <a :href="mapLink">
                    зона доставки
                  </a>
                  <div class="hint-dzone">
                    от 17.12.20
                  </div>
                </div>
              </div>
              <div class="q-py-sm">
                <q-checkbox :value="order.early"
                            @input="setEarly"
                            label="Как можно раньше"/>
              </div>
              <div class="q-py-sm">
                <q-input
                  label="время"
                  :value="order.time"
                  mask="##:##"
                  :hint="order.department === 'IRK' ? 'Доставка в среднем занимает 1,5 часа. Доставка ежедневно с 11:00 до 23:00' : 'Доставка среднем занимает 1,5 часа. Доставка В Ангарске работает ежедневно с 12:00 до 23:00'"
                  fill-mask
                  @input="setTime"
                  outlined dense>
                </q-input>
              </div>
              <div class="q-py-sm">
                <q-input
                  label="Комментарий"
                  :value="order.comment"
                  hint=""
                  @input="setComment"
                  outlined dense>
                </q-input>
              </div>
              <div class="q-py-sm">
                <q-input
                  label="Промокод"
                  :value="order.promocode"
                  hint=""
                  @input="setPromocode"
                  outlined dense>
                </q-input>
              </div>
            </div>
            <!--                        <div class="text-center text-h4 q-py-md" >-->
            <!--                            МЫ НЕ БУДЕМ ПЕРЕЗВАНИВАТЬ!-->
            <!--                        </div >-->
            <!--                        <div class="text-center" >-->
            <!--                            и привезем все вовремя, если ты заполнил поля корректно.-->
            <!--                        </div >-->
            <div class="row q-py-lg">
              <q-space/>
              <q-btn color="deep-orange"
                     glossy
                     @click="sendOrder()"
              >
                <div class="row items-center">
                  <div>
                    <q-circular-progress
                      indeterminate
                      v-if="loading"
                      size="20px"
                      color="white"
                      class="q-mr-md"
                    />
                  </div>
                  <div>
                    Отправить заказ
                  </div>
                  <div>
                    <q-circular-progress
                      indeterminate
                      size="20px"
                      v-if="loading"
                      color="white"
                      class="q-ml-md"
                    />
                  </div>
                </div>
              </q-btn>
              <q-space/>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import headerPage from '../components/header-page'
import {mapState, mapMutations, mapGetters} from 'vuex';

import {Catalog} from '../assets/catalog';
import CatalogItem from "../components/order/CatalogItem";

const axios = require('axios').default;
var _ = require('lodash');

export default {
  name: "order2",
  components: {
    CatalogItem,
    headerPage
  },
  data() {
    return {
      mapLink: 'https://yandex.ru/maps/-/CCUEnLAO0A',
      thanks: false,
      lunchPrice: 355,
      nowDate: new Date(),
      dialog: false,
      loading: false,
      maximizedToggle: true,
      isAlreadyShowReBull: false,
      newSortCategories: [],
      step: 1,
      tab: 1,
      costume: false,

      saladStep: 'Винегрет с килькой (140гр)',
      soupStep: 'Щи (220гр)',
      hotterStep: 'Бифштекс с пюре (240гр)',

      salads: [
        {
          name: 'Винегрет с килькой (140гр)',
          image: 'vinegret_s_kilkoi.jpg',
          consist: 'пряная килька, свёлка, маринованный огурец, картофель, капуста, морковь, зелёный горошек'
        },
        {
          name: 'Салат с печёной бужениной (140гр)',
          image: 'salat_s_pechenoy_buzh.jpg',
          consist: 'буженина, свёкла, свежий огурец, печёный картофель, лист салата, соус Айоле'
        },
        {
          name: 'Салат с кальмаром гриль (140гр)',
          image: 'salat_s_kalmarom.jpg',
          consist: 'кальмар, шампиньоны, томаты черри, морковь, пекинская капуста, сельдерей, лист салата, соус Имбирный'
        },
        {
          name: 'Цезарь с цыплёнком (140гр)',
          image: 'salat_cesar.jpg',
          consist: 'курица, лист салата, гренки, томаты черри, сыр, соус Цезарь'
        }
      ],
      soups: [
        {
          name: 'Щи (220гр)',
          image: 'sup_she.jpg',
          consist: 'курица, квашеная капуста, морковь, лук, шампиньоны, болгарский перец, укроп, сметана'
        },
        {
          name: 'Крем-суп с брокколи (220гр)',
          image: 'krem_sup_brokkoli.jpg',
          consist: 'брокколи, сливки, картофель, укропное масло, хрустящий Крутон с соусом Песто'
        },
        {
          name: 'Суп гуляш (220гр)',
          image: 'sup_gulash.jpg',
          consist: 'говядина, картофель, болгарский перец, морковь, сельдерей, лук, кинза, сметана'
        },
        {
          name: 'Уха (220гр)',
          image: 'sup_uha.jpg',
          consist: 'сайра, картофель, морковь, лук, зелёный лук'
        }
      ],
      hotter: [
        {
          name: 'Бифштекс с пюре (240гр)',
          image: 'beefshteks.jpg',
          consist: 'бифштекс из говядины, картофельное пюре, салат Коул Слоу, пита, микрозелень'
        },
        {
          name: 'Цыплёнок по-азиатски с гречей (240гр)',
          image: 'kurica_s_grezhey.jpg',
          consist: 'курица в соусе Кимчи, гречка с шампиньонами, лук, салат Коул Слоу, пита, микрозелень'
        },
        {
          name: 'Тилапия в белом вине (240гр)',
          image: 'tilapiya_s_ovoshami.jpg',
          consist: 'тилапия в белом вине, цукини, томаты черри, сельдерей, микрозелень'
        },
        {
          name: 'Птитим с курицей и грибами (240гр)',
          image: 'pasta_pritim.jpg',
          consist: 'паста птитим, курица, шампиноьны, сыр, сливочный соус, лук, микрозелень'
        }
      ],
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
      'setPromocode'
    ]),
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
    sendOrder() {
      this.loading = true;
      yaCounter27721593.reachGoal('order');
      axios.post('https://repairs.rest38.ru/api/antrekot',
        {
          order: this.order,
          products: this.orderProducts
        }
      )
        .then((res) => {
          this.thanks = true
          this.loading = false;
        })
        .catch((error) => {

          this.loading = false
          this.error = true
        });

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
    getBusinessLunch() {
      return {
        name: `${this.saladStep}, ${this.soupStep}, ${this.hotterStep}`,
        sortIndex: 500,
        description: '',
        price: this.lunchPrice,
        category_id: 14
      }
    },
  },
  // preFetch({store, currentRoute, previousRoute, redirect, ssrContext}) {
  //     store.dispatch('common/getOrderMenu')
  // },
  mounted() {
    this.$store.dispatch('common/getOrderMenu').then(() => {
      if (this.categoriesMenu[0] !== undefined) {
        this.tab = this.categoriesMenu[0].id;
      }
    })

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
  }
}
</script>

<style scoped>
.basket-btn {
  position: fixed;
  bottom: 20px;
  width: 100%;
}

@media (max-width: 600px) {
  .basket {
    width: 100%;
  }

  .q-btn_my {
    margin-top: 0px;
    margin-left: 0px;
    font-size: 10px;
    padding: 7px 0px;
    border: 3px solid #FFFFFF;
    border-radius: 0px;
    letter-spacing: 0.25em;
    font-family: 'mbold';
  }

}

@media (min-width: 601px) {
  .basket {
    min-width: 100%;
  }

  .q-btn_my {
    margin-top: 0px;
    margin-left: 0px;
    font-size: 10px;
    padding: 7px 0px;
    border: 3px solid #FFFFFF;
    border-radius: 0px;
    letter-spacing: 0.25em;
    font-family: 'mbold';
  }
}

.active_card_contact2 {
  background: linear-gradient(180deg, #970E00 0%, #E84437 100%);
}

.radioImg img {
  border: 1px solid #333333;
}

.radioImg label input:checked + img {
  border: 1px solid white;
}

.radioImg label input {
  visibility: hidden;
  position: absolute;
}

.radioWrapText {
  padding: 5px 20px;
}

.radioWrapText .itemName {
  font-weight: bold;
  font-size: 18px;
}

.radioWrapText .itemText {
  font-size: 16px;
  line-height: 20px;
  color: #828282;
}

.q-stepper {
  background: transparent;
}

.category-name-desktop {
  font-family: 'lumios';
  font-size: 84px;

  color: #FFFFFF;

  padding: 0px 7px 7px 20px;
}

.category-name-mobile {
  font-family: 'lumios';
  font-size: 36px;

  color: #FFFFFF;

  padding: 0px 7px 7px 20px;
}

.ballon {

  padding: 10px 20px 10px 10px;
}

.hint-dzone {
  font-size: 11px;
  color: grey;
}

</style>
