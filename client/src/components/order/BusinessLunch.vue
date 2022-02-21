<template>
  <div class="text-white">
    <!--    <q-tab-panels v-model="tab" animated class="bg-black">-->
    <!--      <q-tab-panel name="000name" class="q-px-none">-->
    <div class="text-white q-pb-xl">
      <div class="business-lunch-text mregular">
        <!--        Бизнес-ланч с 12:00 до 16:00 (ПН-ПТ) <br>-->
        Бизнес-ланч действителен каждый будний день с 12:00 до 16:00.<br>
        Собери свой бизнес ланч (суп, салат и горячее) за {{ lunchPrice }} рублей.<br>
        <!--        Салат, Суп и Горячее + Эклер в подарок всего за {{ lunchPrice }} рублей!<br>-->
        <b>+ Подарок: </b> булочка "ШУ"
      </div>
      <div class="">
        <q-stepper
          header-class="menu-button"
          v-model="step"
          ref="stepper"
          active-color="deep-orange"
          done-color="secondary"
          animated
          vertical
          class="full-width q-mt-md"
          dark
        >
          <q-step
            :name="1"
            title="ВЫБЕРИТЕ САЛАТЫ"
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
                class="col-6 col-sm-12 col-xs-12 radioImg"
              >
                <label>
                  <div class="row q-mb-sm">
                    <div class="">
                      <input type="radio" v-model="saladStep"
                             :value="item.name"/>
                      <img :src="require(`../../assets/${item.image}`)" height="139"
                           width="139">
                    </div>
                    <div class="col radioWrapText">
                      <div class="row q-mb-sm">
                        <div class="itemName my-bold">{{ item.name }}</div>
                        <div class="itemWeight">&nbsp;{{ item.weight }}</div>
                      </div>
                      <div class="itemText">{{ item.consist }}</div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <q-stepper-navigation>
              <q-btn @click="step = 2" color="white"
                     class="next-step-button q-pl-lg q-pr-lg q-pt-sm q-pb-sm text-bold q-btn_my_black" outline
                     label="Продолжить"/>
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="2"
            title="ВЫБЕРИТЕ СУПЫ"
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
                class="col-6 col-sm-12  col-xs-12 radioImg"
              >
                <label>
                  <div class="row q-mb-sm">
                    <div class="">
                      <input type="radio" v-model="soupStep"
                             :value="item.name"/>
                      <img :src="require(`../../assets/${item.image}`)" height="139"
                           width="139">
                    </div>
                    <div class="col radioWrapText">
                      <div class="row q-mb-sm">
                        <div class="itemName my-bold">{{ item.name }}</div>
                        <div class="itemWeight">&nbsp;{{ item.weight }}</div>
                      </div>
                      <div class="itemText">{{ item.consist }}</div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <q-stepper-navigation>
              <q-btn @click="step = 3" color="white"
                     class="next-step-button q-pl-lg q-pr-lg q-pt-sm q-pb-sm text-bold q-btn_my_black" outline
                     label="Продолжить"/>
              <q-btn flat @click="step = 1" color="white" label="Назад" class="q-ml-lg next-step-button "/>
            </q-stepper-navigation>
          </q-step>
          <q-step
            :name="3"
            title="ВЫБЕРИТЕ ГОРЯЧЕЕ"
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
                class="col-6 col-sm-12 col-xs-12 radioImg"
              >
                <label>
                  <div class="row q-mb-sm">
                    <div class="">
                      <input type="radio" v-model="hotterStep"
                             :value="item.name"/>
                      <img :src="require(`../../assets/${item.image}`)" height="139"
                           width="139">
                    </div>
                    <div class="col radioWrapText">
                      <div class="row q-mb-sm">
                        <div class="itemName my-bold">{{ item.name }}</div>
                        <div class="itemWeight">&nbsp;{{ item.weight }}</div>
                      </div>
                      <div class="itemText">{{ item.consist }}</div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <q-stepper-navigation>
              <q-btn @click="step = 4" color="white"
                     class="next-step-button q-pl-lg q-pr-lg q-pt-sm q-pb-sm text-bold q-btn_my_black" outline
                     label="Продолжить"/>
              <q-btn flat @click="step = 2" color="white" label="Назад" class="q-ml-lg next-step-button "/>
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="4"
            title="ИТОГ"
            icon="img:statics/basket-icon.svg"
            active-icon="img:statics/basket-icon.svg"
          >
            <div class="row">
              <div class="col">
                <p class="mregular" style="font-size: 16px">Вы выбрали следующие
                  блюда:</p>
              </div>
            </div>
            <div class="row">
              <div class="row items-center col-6 col-sm-12 col-xs-12">
                <div class="col-auto "><img
                  :src="require(`../../assets/${salads.filter(item => item.name === saladStep)[0].image}`)"
                  width="80" alt=""></div>
                <div class="q-ml-md itemName my-bold">{{
                    salads.filter(item => item.name === saladStep)[0].name
                  }}
                </div>
                <div class="itemWeight">&nbsp;{{ salads.filter(item => item.name === saladStep)[0].weight }}</div>
              </div>
              <div class="row items-center col-6 col-sm-12 col-xs-12">
                <div class="col-auto"><img
                  :src="require(`../../assets/${soups.filter(item => item.name === soupStep)[0].image}`)"
                  width="80" alt=""></div>
                <div class="q-ml-md itemName my-bold">{{ soups.filter(item => item.name === soupStep)[0].name }}
                </div>
                <div class="itemWeight">&nbsp;{{ soups.filter(item => item.name === soupStep)[0].weight }}</div>
              </div>
              <div class="row items-center col-md-6 col-xs-12">
                <div class="col-auto"><img
                  :src="require(`../../assets/${hotter.filter(item => item.name === hotterStep)[0].image}`)"
                  width="80" alt=""></div>
                <div class="q-ml-md itemName my-bold">{{
                    hotter.filter(item => item.name === hotterStep)[0].name
                  }}
                </div>
                <div class="itemWeight ">&nbsp;{{ hotter.filter(item => item.name === hotterStep)[0].weight }}</div>
              </div>
              <div class="row items-center col-md-6 col-xs-12">
                <div>
                  <div class="business-lunch-text mregular">
                    <b>+ Подарок: </b> эклер
                  </div>
                </div>
              </div>
            </div>
            <div class="row q-mt-xl">
              <div class="">
                <q-btn
                  class="my-mbold order-button basket-item"
                  @click="proxyAddProductToBasket(getBusinessLunch)"
                  :label="getAddbasketButtonType(getBusinessLunch.name)"/>
                <q-btn flat @click="step = 2" color="white" label="Назад" class="q-ml-lg next-step-button "/>
              </div>
            </div>
          </q-step>
        </q-stepper>
      </div>
    </div>
    <div>
    <!--      </q-tab-panel>-->
    <!--      &lt;!&ndash;                <q-tab-panel :name="categoryItem.id" class="q-px-none q-pb-xl" :key="`tab${categoryItem.id}`"&ndash;&gt;-->
    <!--      &lt;!&ndash;                             v-for="(categoryItem, index) in categoriesMenu" >&ndash;&gt;-->
    <!--      &lt;!&ndash;                    <div v-if="categoryItem.id == 19" class="q-pa-md text-white text-h6" >&ndash;&gt;-->
    <!--      &lt;!&ndash;                        Привет, дорогой наш друг!&ndash;&gt;-->
    <!--      &lt;!&ndash;                        Мы сделали за тебя уже половину работы, тебе же остаётся пройти вторую половину и&ndash;&gt;-->
    <!--      &lt;!&ndash;                        приготовить&ndash;&gt;-->
    <!--      &lt;!&ndash;                        для себя, друзей и близких стейки, бургеры и наборы шашлыков, которые приедут к тебе в&ndash;&gt;-->
    <!--      &lt;!&ndash;                        полуфабрикатах, а тебе останется только приготовить твой шедевр кулинарного мастерства.&ndash;&gt;-->
    <!--      &lt;!&ndash;                    </div >&ndash;&gt;-->
    <!--      &lt;!&ndash;                    <div class="category-name-desktop mobile-hide" >&ndash;&gt;-->
    <!--      &lt;!&ndash;                        {{categoryItem.Name}}&ndash;&gt;-->
    <!--      &lt;!&ndash;                    </div >&ndash;&gt;-->
    <!--      &lt;!&ndash;                    <div class="category-name-mobile desktop-hide" >&ndash;&gt;-->
    <!--      &lt;!&ndash;                        {{categoryItem.Name}}&ndash;&gt;-->
    <!--      &lt;!&ndash;                    </div >&ndash;&gt;-->
    <!--      &lt;!&ndash;                    <div class="text-h6 q-pb-xl" >&ndash;&gt;-->
    <!--      &lt;!&ndash;                        <div class="row q-col-gutter-xl q-px-lg content-center" >&ndash;&gt;-->
    <!--      &lt;!&ndash;                            <catalog-item :key="product.id"&ndash;&gt;-->
    <!--      &lt;!&ndash;                                          :productItem="product"&ndash;&gt;-->
    <!--      &lt;!&ndash;                                          :action="proxyAddProductToBasket"&ndash;&gt;-->
    <!--      &lt;!&ndash;                                          :isAddedToBasket="isAddedToBasket"&ndash;&gt;-->
    <!--      &lt;!&ndash;                                          :getAddbasketButtonType="getAddbasketButtonType"&ndash;&gt;-->
    <!--      &lt;!&ndash;                                          v-for="product in sortProducts(categoryItem.products)" >&ndash;&gt;-->
    <!--      &lt;!&ndash;                            </catalog-item >&ndash;&gt;-->
    <!--      &lt;!&ndash;                        </div >&ndash;&gt;-->

    <!--      &lt;!&ndash;                        &lt;!&ndash;<div :key="product.id" v-for="product in item.products"&ndash;&gt;&ndash;&gt;-->
    <!--      &lt;!&ndash;                        &lt;!&ndash;class="row items-center justify-between" >&ndash;&gt;&ndash;&gt;-->
    <!--      &lt;!&ndash;                        &lt;!&ndash;<div class="col-md-4 col-sm-4 col-6 q-px-md" >{{ product.name }}</div >&ndash;&gt;&ndash;&gt;-->
    <!--      &lt;!&ndash;                        &lt;!&ndash;<div class="col-md-4 col-sm-5 mobile-hide text-body2 q-pl-sm q-pr-sm" >{{ makedescr(product.description) }}</div >&ndash;&gt;&ndash;&gt;-->
    <!--      &lt;!&ndash;                        &lt;!&ndash;<div class="col-md-2 col-sm-1 col-2" >{{ product.price }} р</div >&ndash;&gt;&ndash;&gt;-->
    <!--      &lt;!&ndash;                        &lt;!&ndash;<div class="col-md-2 col-sm-2 col-4" >&ndash;&gt;&ndash;&gt;-->
    <!--      &lt;!&ndash;                        &lt;!&ndash;<q-btn :outline="!isAddedToBasket(product.name)"&ndash;&gt;&ndash;&gt;-->
    <!--      &lt;!&ndash;                        &lt;!&ndash;:color="{'white' : isAddedToBasket(product.name)}"&ndash;&gt;&ndash;&gt;-->
    <!--      &lt;!&ndash;                        &lt;!&ndash;@click="proxyAddProductToBasket(product)"&ndash;&gt;&ndash;&gt;-->
    <!--      &lt;!&ndash;                        &lt;!&ndash;:class="{'active_card_contact2' : isAddedToBasket(product.name)}"&ndash;&gt;&ndash;&gt;-->
    <!--      &lt;!&ndash;                        &lt;!&ndash;class='text-uppercase q-btn_my' :label="getAddbasketButtonType(product.name)" />&ndash;&gt;&ndash;&gt;-->
    <!--      &lt;!&ndash;                        &lt;!&ndash;</div >&ndash;&gt;&ndash;&gt;-->
    <!--      &lt;!&ndash;                        &lt;!&ndash;</div >&ndash;&gt;&ndash;&gt;-->
    <!--      &lt;!&ndash;                    </div >&ndash;&gt;-->

    <!--      &lt;!&ndash;                </q-tab-panel >&ndash;&gt;-->

    <!--    </q-tab-panels>-->
  </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'BusinessLunch',
  data() {
    return {
      step: 1,
      tab: 1,
      lunchPrice: 415,
      saladStep: 'Цезарь с цыпленком',
      soupStep: 'Куриный суп',
      hotterStep: 'Картопляник с салатом из огурца и сметаны',

      salads: [
        {
          name: 'Цезарь с цыпленком',
          weight: '(140гр)',
          image: 'cesar_s_cipoy.jpg',
          consist: 'куриное филе, сухарики, сыр, соус цезарь, черри, салат айсберг, капуста пекинская'
        },
        {
          name: 'Мимоза',
          weight: '(140гр)',
          image: 'mimoza.jpg',
          consist: 'бсайра, картофель, морковь, лук, майонез, яйцо, зелёный горошек, микрозелень'
        },
        {
          name: 'Азиатский',
          weight: '(140гр)',
          image: 'aziatskii.jpg',
          consist: 'морковь, перец болгарский, курица, грибы древесные, сельдерей, ростки сои, кунжут, кинза, лук красный, капуста пекинская, соус кимчи'
        },
        {
          name: 'Овощной домашний со сметаной',
          weight: '(140гр)',
          image: 'ovoschnoy.jpg',
          consist: 'помидор, огурец, капуста пекинская, укроп, базилик, сметана, масло оливковое, перец молотый'
        }
      ],
      soups: [
        {
          name: 'Куриный суп',
          weight: '(220гр)',
          image: 'kurinii.jpg',
          consist: 'перец болгарский, лук, цукини, лапша, курица, укроп '
        },
        {
          name: 'Гороховый с копченостями',
          weight: '(220гр)',
          image: 'gorohovii.jpg',
          consist: 'cухарики, укроп'
        },
        {
          name: 'Морковный пюре',
          weight: '(220гр)',
          image: 'morkovnii.jpg',
          consist: 'морковь, сливки, сметана'
        },
        {
          name: 'Том кха с курицей',
          weight: '(220гр)',
          image: 'tom_kha.jpg',
          consist: 'курица, черри, грибы древесные, сливки, кинза, рис отварной'
        }
      ],
      hotter: [
        {
          name: 'Картопляник с салатом из огурца и сметаны',
          weight: '(250гр)',
          image: 'kiartoplyannik.jpg',
          consist: 'картофель, фарш, огурец, укроп, сметана'
        },
        {
          name: 'Цыпленок гриль с рисом и овощами КИМ ЧИ',
          weight: '(250гр)',
          image: 'cipa_na_grile.jpg',
          consist: 'курица, соус азиатский, пита маленькая, рис, перец болгарский, сельдерей, морковь, соус кимчи '
        },
        {
          name: 'Птитим с индейкой, беконом, сливочным соусом',
          weight: '(220гр)',
          image: 'ptitim.jpg',
          consist: 'паста птитим, индейка, бекон, лук, чеснок, сливки, соус песто, базилик'
        },
        {
          name: 'Бифштекс с питой и  картофельным пюре и овощами Ким Чи',
          weight: '(250гр)',
          image: 'bif.jpg',
          consist: 'котлета, картофельное пюре, пита маленькая, масло укропное, перец болгарский, сельдерей, морковь, соус кимчи '
        }
      ],
    }
  },
  methods: {
    ...mapMutations('common', ['addProductToBasket',
      'removeProductToBasket',
      'setBusinessLunch',
      'setPromocode'
    ]),
    proxyAddProductToBasket(product) {
      this.addProductToBasket(product);
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
  },
  computed: {
    ...mapState('common', ['order', 'orderProducts', 'orderMenu', 'categoriesMenu']),
    getBusinessLunch() {
      return {
        name: `${this.saladStep}, ${this.soupStep}, ${this.hotterStep}`,
        sortIndex: 500,
        description: '',
        price: this.lunchPrice,
        category_id: 10,
        weight: 600,
      }
    },
  },
}

</script>

<style>

.menu-button {
  cursor: pointer;
  font-size: 16px;
  font-family: mbold;
  text-transform: uppercase;
  letter-spacing: 0.25em;
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
  padding: 0px 20px;
}

.itemName {
  font-weight: bold;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.1em;
}

.itemWeight {
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
  letter-spacing: 0.125em;
}

.radioWrapText .itemText {
  font-size: 16px;
  line-height: 20px;
  color: #828282;
  letter-spacing: 0.08em;
}

.q-stepper {
  background: transparent;
}

.next-step-button {
  font-size: 10px;
  letter-spacing: 0.25em;
  font-family: 'mbold';
}

.business-lunch-text {
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.125em;
}

.order-button {
  background-color: #E84437;
  height: 45px;
}

@media (max-width: 1024px) {
  .itemName {
    font-family: 'mbold';
    font-size: 12px;
    line-height: 15px;
  }

  .itemWeight {
    font-size: 12px;
    line-height: 15px;
    font-weight: normal;
    letter-spacing: 0.125em;
  }
  .radioWrapText .itemText {
    font-size: 12px;
    line-height: 15px;
  }
  .business-lunch-text {
    font-size: 14px;
    line-height: 21px;
  }
  .next-step-button {
    border: 1px;
  }

}

</style>
