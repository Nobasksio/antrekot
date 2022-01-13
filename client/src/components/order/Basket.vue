<template>
  <q-card class="basket ">
    <q-card-section class="absolute fit q-pt-none thanks-form" v-if="thanks">
      <div class="column thanks-box">
        <div class="text-center q-mb-lg">
          <q-img
            src="/statics/logo.png"
            spinner-color="white"
            img-class="q-mx-sm "
            :ratio="16/9"
            style="width: 185px; height: 91px;"
            contain
          />
        </div >
        <div class="q-ml-lg text-white name-feedback q-mb-lg">
          <div class="row items-end text-center justify-center wrap ">
            <div>ВАШ ЗАКАЗ&nbsp;<br>
              УСПЕШНО&nbsp;<br>
              ОФОРМЛЕН
            </div>
            <div class="q-ml-xs my-red">:)</div>
          </div>
        </div>
        <div class="text-white text-center field-name q-mb-xl justify-center row">
          <div>В течение 5 минут с Вами&nbsp;<br>
            свяжется наш оператор
          </div>
        </div>
        <div class="text-center">
          <q-btn color="red" label="Вернуться к каталогу" class='text-uppercase q-btn_my_red col-sm-12 col-xs-12'
                 v-close-popup
                 @click="returnToOrder">

          </q-btn>
        </div>
      </div>
    </q-card-section>
    <div class="basket-page col-12 row q-pl-xs">
      <div class="row col-12 justify-between">
        <div class="row col-6 col-sm-12 col-xs-12 items-start cursor-pointer ">
          <q-img
            v-close-popup
            src="/statics/logo.png"
            spinner-color="white"
            img-class="q-mr-lg q-mb-lg"
            :ratio="16/9"
            style="width: 120px"
            contain
            class="block-hide-desc"
          />
          <img v-close-popup src="../../assets/toExit.svg" class="block-hide-desc">
          <div v-close-popup class="text-white basket-header-fixed row block-hide-mob col-12  q-px-md q-pt-md">
            <div class="row items-center col-3">
              <img class=" q-mr-sm" src="../../assets/toExitMob.svg">
              <div class="return-to-order-button">назад</div>
            </div>
            <div class="col"></div>
            <div class="col-4 basket-name my-mbold text-h6">КОРЗИНА</div>
            <div class="col"></div>
            <q-separator class="q-mt-md" dark/>

          </div>

          <div class="col q-mt-sm q-pl-lg block-hide-desc">
            <header-page v-close-popup name_page="КОРЗИНА"></header-page>
          </div>
          <div class=" row сol-6 items-start block-hide-desc ">
            <img src="statics/icons/balloon.svg" alt="" class="q-mt-xs">
            <q-btn outline
                   color="white"
                   :ripple="{ color: 'red' }"
                   @click="showMap"
                   class='text-uppercase q-btn_my '>
              <div class="q-px-xl">ЗОНА ДОСТАВКИ</div>
            </q-btn>
            <q-dialog v-model="isShowMap">
              <q-card class="relative-position">
                <div>
                </div>
                <div
                  v-if="loadMap === true"
                  style="position:relative;overflow:hidden;">
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

      <div class="row col-12 basket-box">
        <div class=" col-md-3 col-sm-12 ">
          <div class="row col-12 justify-center justify-xs-start ">
            <div class="text-white bg-black items-center menu-button  q-mb-lg">ОФОРМЛЕНИЕ ЗАКАЗА</div>
          </div>
          <div class="q-mb-md q-mt-md">
            <div class="q-mb-sm name-field mregular">Имя</div>
            <q-input dense
                     square
                     dark outlined
                     color="grey-3"
                     placeholder="Введите имя"
                     :value="order.name"
                     @input="setName">
            </q-input>
          </div>
          <div class="q-my-md">
            <div class="q-mb-sm name-field mregular">Телефон</div>
            <q-input dense
                     square
                     dark outlined
                     color="grey-3"
                     :value="order.phone"
                     fill-mask
                     mask="+7 (###) ###-##-##"
                     @input="setPhone">
            </q-input>
          </div>
          <div class="q-my-md name-field mregular">
            <div class="row justify-between">
              <div class="col-5 q-mb-sm ">Адрес</div>
              <div class="col-7 cursor-pointer">
                <div class="row justify-end" @click="showMap">
                  <img src="../../assets/basketBaloon.svg">
                  <div class="q-ml-xs delivery-zone">Зона доставки</div>
                </div>
              </div>
            </div>
            <q-input
              dark
              square
              color="grey-3"
              placeholder="Пример: ул. Пушкина, д.34"
              :value="order.address"
              @input="setAddress"
              outlined dense>
            </q-input>
            <div class="basket-hint q-mt-sm">Пока мы, к сожалению, не доставляем в ленинский район и за пределы города
            </div>
            <div class="q-my-md">
              <div class="q-mb-sm name-field2 mregular">Квартира</div>
              <q-input dense
                       square
                       placeholder="215"
                       dark outlined
                       color="grey-3"
                       fill-mask>
              </q-input>
            </div>
          </div>

          <!--        <div>-->
          <!--          <div class="text-subtitle2">Укажите тип оплаты</div>-->
          <!--          <q-radio :value="order.payment"-->
          <!--                   @input="setPayment"-->
          <!--                   val="1"-->
          <!--                   label="Наличные"-->
          <!--                   color="red"/>-->
          <!--          <q-radio :value="order.payment"-->
          <!--                   @input="setPayment"-->
          <!--                   val="2"-->
          <!--                   label="Карта"-->
          <!--                   color="red"/>-->
          <!--        </div>-->
          <!--        <div>-->
          <!--          <div class="text-subtitle2">Город</div>-->
          <!--          <q-radio :value="order.department"-->
          <!--                   @input="setDepartment"-->
          <!--                   val="IRK"-->
          <!--                   label="Иркутск"-->
          <!--                   color="red"/>-->
          <!--          <q-radio :value="order.department"-->
          <!--                   @input="setDepartment"-->
          <!--                   val="ANG"-->
          <!--                   label="Ангарск"-->
          <!--                   color="red"/>-->
          <!--        </div>-->


          <div class="q-my-md">
            <div class="q-mb-sm name-field2 mregular">Время доставки</div>
            <div class="row">
              <q-input dense
                       square
                       color="grey-3"
                       class="col-3"
                       dark outlined
                       :value="order.time"
                       mask="##:##"
                       fill-mask
                       @input="setTime">
              </q-input>
              <div class=" name-field mregular col-9">
                <q-checkbox :value="order.early"
                            @input="setEarly"
                            color="red"
                            dark
                            label="Как можно раньше"/>
              </div>
            </div>
            <div class="basket-hint q-mt-sm">Доставка в среднем занимает 1,5 часа</div>

          </div>
          <div class="q-my-md">
            <div class="q-mb-sm name-field2 mregular">Комментарий</div>
            <q-input dense
                     square
                     autogrow
                     dark outlined
                     color="grey-3"
                     placeholder="Укажите, есть ли домофон и т.д."
                     :value="order.comment"
                     type="textarea"
                     @input="setComment"
                     outlined dense>
            </q-input>
          </div>
          <div class="q-my-md">
            <div class=" q-mb-sm name-field2 mregular">Промокод</div>
            <q-input dense
                     square
                     dark outlined
                     :value="order.promocode"
                     color="grey-3"
                     @input="setPromocode"
                     outlined dense>
            </q-input>
          </div>


          <div class="row q-py-lg col-12">
            <q-btn color=""
                   class="full-width my-mbold order-button basket-item"
                   @click="sendOrder()"
            >
              <div class="row items-center">
                <div>
                  ОФОРМИТЬ ЗАКАЗ
                </div>
              </div>
            </q-btn>

          </div>
        </div>
        <div class="col-md-1 col-sm-0"></div>
        <div class=" col-md-8 col-sm-12">
          <div class="row col-12 justify-between items-center block-hide-desc wrap">
            <div class="row col-6 no-wrap">
              <div class="q-mb-md text-white bg-black items-center menu-button q-mr-sm">
                <nobr>У ВАС В ЗАКАЗЕ</nobr>
              </div>
              <div class="text-red bg-black items-center menu-button">
                <nobr>{{ getNumberOfPosition }}</nobr>
              </div>
            </div>
            <div class="q-pb-md text-center delivery-text col-6 ">
              <nobr>Минимальная сумма заказа 500 рублей</nobr>
            </div>
          </div>
          <q-scroll-area
            v-if="orderProducts[0]"
            class="product-item-box q-mt-sm-xl q-mt-xs-xl "
            :thumb-style="thumbStyle">
            <div class="q-pt-none" v-if="!thanks">
              <div v-for="orderProductItem in orderProducts"
                   class="row justify-between q-py-xs ">
                <div v-if="orderProductItem.photo" class="col-2 photo-box">
                  <img class="photo" :src="`${api_link}${orderProductItem.photo[0].url}`">
                </div>
                <div class="col-2 photo-box" v-else>
                  <img class="photo" :src="`${api_link}/uploads/48b79047b5504bcb80eb927ca1bfe5c6.png`">
                </div>
                <div class="col-10 row text-center items-center mobile-column-direct q-pl-sm-sm q-pl-xs-sm">
                  <div class="col-6 col-sm-12 col-xs-12 text-white name-dish row q-mb-sm-sm q-mb-xs-sm">
                    <div>{{ orderProductItem.name }}&nbsp;</div>
                    <div class="mregular weight-item">({{ orderProductItem.weight }}гр.)</div>
                  </div>

                  <div class="col-6 col-sm-12 col-xs-12  row text-center items-center  ">
                    <div class="col-6 row text-center items-center">
                      <img src="../../assets/removeProduct.svg" class="cursor-pointer"
                           @click="removeOneProduct(orderProductItem)">
                      <div class="name-field2 q-mx-sm">{{ orderProductItem.count }}</div>
                      <img src="../../assets/addProduct.svg" class="cursor-pointer" @click="action(orderProductItem)">
                    </div>
                    <div class="col-3 price">
                      {{ orderProductItem.price }}₽
                    </div>
                    <div class="col-3 text-right">
                      <q-btn flat style="color: #FF0080" label=""
                             @click="removeProductToBasket(orderProductItem)">
                        <img src="~assets/close.svg" alt="">
                      </q-btn>

                    </div>
                  </div>
                </div>
                <q-separator dark/>
              </div>

            </div>
          </q-scroll-area>
          <div v-else class="q-mt-xl">
            <div class="name-field text-16 q-mt-xl q-mb-xl">Ваша корзина пуста</div>
          </div>
          <div class="text-white basket-sum-item my-bold q-mt-xl q-mb-sm-xl q-mb-xs-xl q-mb-md-none">
            Сумма заказа:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ totalSum }} ₽
          </div>
        </div>
      </div>
    </div>

  </q-card>
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex";
import HeaderPage from "../header-page";

const axios = require('axios').default;
var _ = require('lodash');

export default {
  name: "Basket",
  components: {HeaderPage},
  props: {
    action: {
      type: Function,
    },
  },
  data() {
    return {
      isShowMap: false,
      api_link: process.env.API_LINK,
      loadMap: false,
      thanks: false,
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#E84437',
        width: '5px',
        opacity: 0.75
      }
    }
  },
  computed: {
    ...mapState('common', ['order', 'orderProducts', 'orderMenu', 'categoriesMenu']),
    ...mapGetters('common', ['totalSum']),
    getNumberOfPosition() {
      let stringProductCount = '';
      let productCount = 0;
      for (let i = 0; i < this.orderProducts.length; i += 1) {
        productCount += this.orderProducts[i].count;
      }
      let lastSign = String(productCount).slice(-1);
      if (productCount >= 5 && productCount < 20) {
        stringProductCount = `${productCount} позиций`;
      } else {
        if ((lastSign > 5 && lastSign < 9) || lastSign === '0') {
          stringProductCount = `${productCount} позиций`;
        } else if (lastSign === '1') {
          stringProductCount = `${productCount} позиция`;
        } else {
          stringProductCount = `${productCount} позиции`;
        }
      }
      return stringProductCount;
    }
  },
  methods: {
    ...mapMutations('common', ['addProductToBasket',
      'removeProductToBasket',
      'removeOneProduct',
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
    showMap() {
      this.isShowMap = !this.isShowMap;
      setTimeout(this.loadMap = true, 2000);
    },
    returnToOrder() {
      this.thanks != this.thanks;

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

  },
  mounted() {
  }
}

</script>

<style>
.delivery-zone {
  background-image: url("../../assets/dottedLine.svg");
  background-repeat: no-repeat;
  background-position: bottom;
}

.z-spinner {
  z-index: 999999;
}

.basket {
  background-color: black;
}

.basket-box {
  display: flex;
  flex-direction: row;
}

.basket-page {
  margin: 35px auto;
  max-width: 1222px;
  background-color: black;
}

.menu-button {
  font-size: 16px;
  font-family: mbold;
  text-transform: uppercase;
  letter-spacing: 0.25em;
}

.name-field {
  color: white;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.1em;
  font-weight: 400;
  font-family: mregular;
}

.name-field2 {
  color: white;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.1em;
  font-weight: 400;
}

.basket-hint {
  font-size: 12px;
  color: #8D8D8D;
  line-height: 15px;
  font-weight: 400;
  letter-spacing: 0.08em;
}

.delivery-text {
  font-size: 16px;
  color: #8D8D8D;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.08em;
}

.order-button {
  background-color: #E84437;
  height: 45px;
}

.basket-item {
  font-size: 10px;
  line-height: 12px;
  font-weight: bold;
  letter-spacing: 0.25em;
}

.basket-sum-item {
  font-size: 22px;
  line-height: 27px;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.q-btn_my {
  margin-top: 0;
  border: 1px solid #FFFFFF;
  font-weight: bold;
}

.product-item-box {
  height: 83%;
  max-width: 98%;

}

.name-dish {
  font-family: 'mbold';
  font-size: 18px;
  line-height: 22px;
  padding: 0 7px;
}

.photo-box {
  object-fit: cover;

}

.return-to-order-button {
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.1em;
}

.photo {
  height: auto;
  width: 100%;
}

.weight-item {
  font-style: italic;
  color: #828282;
}

.price {
  font-family: 'mbold';
  color: #fff;
  font-size: 20px;
  line-height: 24px;
}

.block-hide-desc {
  display: flex;
}

.block-hide-mob {
  display: none;
}

.mobile-column-direct {
  display: flex;
  flex-direction: row;
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
.field-name {
  font-family: 'mregular';
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
}
.q-btn_my_red {

  font-size: 12px;
  padding: 10px 10px;

  border-radius: 0px;
  letter-spacing: 0.25em;
  font-family: 'mbold';
  background: #E84437 !important;
}
.thanks-form {
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
}
.thanks-box {
  margin: 15% 0;
}

@media (max-width: 1024px) {
  .thanks-box {
    margin: 60% 0;
  }

  .basket-name {
    font-size: 14px;
    line-height: 17px;
  }

  .basket-header-fixed {
    position: fixed;
    top: 0;
    right: 0;
    height: 49px;
    background: black;
    z-index: 2;
  }

  .mobile-column-direct {
    flex-direction: column;
    align-items: start;
  }

  .product-item-box {
    height: 300px;
  }

  .block-hide-desc {
    display: none;
  }

  .block-hide-mob {
    display: flex;
  }

  .basket-page {
    margin: 0 18px 20px 18px;
  }

  .basket-box {
    display: flex;
    flex-direction: column-reverse;
  }

  .name-dish {
    font-size: 12px;
    line-height: 15px;
  }

  .price {
    font-size: 12px;
    line-height: 15px;
  }

  .basket-sum-item {
    font-size: 18px;
    line-height: 22px;
  }

  .menu-button {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.25em;
  }

  .name-field {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.1em;
  }

}

</style>
