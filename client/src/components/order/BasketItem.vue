<template>
  <q-card class="basket">
    <div class="basket-page col-12 row">
      <div class="row col-12 justify-between">
        <div class="row col-6 items-start cursor-pointer "  v-close-popup>
          <q-img
            src="/statics/logo.svg"
            spinner-color="white"
            img-class="q-mr-lg "
            :ratio="16/9"
            style="width: 100px; height: 40px;"
            contain
          />
          <img src="../../assets/toExit.svg">
          <div class="col q-pl-lg ">
            <header-page name_page="КОРЗИНА"></header-page>
          </div>
        </div>
        <div class=" row сol-6 items-start">
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
                              <q-spinner-ball
                                class="absolute-center z-spinner"
                                color="red"
                                size="10em"
                                :thickness="5"
                              />
              </div>
              <div
                v-if="loadMap === true"
                style="position:relative;overflow:hidden;">
                <iframe src="https://yandex.ru/map-widget/v1/-/CCUaFBgVpC" width="560" height="400" frameborder="1"
                        allowfullscreen="true" style="position:relative;"></iframe>
                <q-card-actions align="right">
                  <q-btn class="my-bold" flat label="закрыть" color="red" v-close-popup />
                </q-card-actions>
              </div>

            </q-card>
          </q-dialog>

        </div>
      </div>
      <!--    <q-card-section class="active_card_contact2 row">-->
      <!--      <div class="text-h6">Корзина</div>-->
      <!--      <q-space/>-->
      <q-btn dense flat icon="close" v-close-popup>
        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
      </q-btn>
      <div class="row col-12">
        <div class=" col-3">
          <div class="row col-12 justify-center">
            <div class="text-white bg-black items-center menu-button">ОФОРМЛЕНИЕ ЗАКАЗА</div>
          </div>
          <div class="q-my-md">
            <div class="q-mb-sm name-field mregular">Имя</div>
            <q-input dense
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
                     dark outlined
                     color="grey-3"
                     :value="order.phone"
                     fill-mask
                     mask="+7 (###) ###-##-##"
                     @input="setPhone">
            </q-input>
          </div>
          <div class="q-my-md name-field mregular">
            <div class="row">
              <div class="col-5 q-mb-sm ">Адрес</div>
              <div class="col-7 cursor-pointer">
                <div class="row">
                  <img src="../../assets/basketBaloon.svg">
                  <div class="q-ml-xs">Зона доставки</div>
                </div>
              </div>
            </div>
            <q-input
              dark
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
                            label="Как можно раньше"/>
              </div>
            </div>
            <div class="basket-hint q-mt-sm">Доставка в среднем занимает 1,5 часа</div>

          </div>
          <div class="q-my-md">
            <div class="q-mb-sm name-field2 mregular">Комментарий</div>
            <q-input dense
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
        <div class="col-1"></div>
        <div class=" col-8">
          <div class="row col-12 justify-between items-center">
            <div class="row col-6 no-wrap">
              <div class="q-mb-md text-white bg-black items-center menu-button q-mr-sm">У ВАС В ЗАКАЗЕ</div>
              <div class="text-red bg-black items-center menu-button"> {{ getNumberOfPosition }}</div>
            </div>
            <div class="text-center basket-hint col-6">Минимальная сумма заказа 500 рублей</div>
          </div>
          <q-scroll-area
            class=""
            :thumb-style="thumbStyle"
            style="height: 83%; max-width: 98%;">
            <q-card-section class="q-pt-none" v-if="thanks">
              <div class="text-end text-h3 q-py-xl">
                Спасибо за заказ
              </div>
              <div class="text-center">
                В ближайшее время мы перезвоним тебе для подтверждения заказа!
              </div>
            </q-card-section>
            <div class="q-pt-none" v-if="!thanks">
              <div v-for="orderProductItem in orderProducts"
                   class="row justify-between items-center q-py-xs">
                <div v-if="orderProductItem.photo[0] !== undefined" class="col-2 photo-box">
                  <img class="photo" :src="`${api_link}${orderProductItem.photo[0].url}`">
                </div>
                <div class="col-6 text-white name-dish row">
                  <div>{{ orderProductItem.name }}</div>
                  <div class="mregular weight-item q-ml-sm">({{ orderProductItem.weight }}гр.)</div>
                </div>

                <div class="col-2 row text-center items-center">
                  <img src="../../assets/removeProduct.svg" class="cursor-pointer" @click="removeOneProduct(orderProductItem)">
                  <div class="name-field2 q-mx-sm">{{ orderProductItem.count }}</div>
                  <img src="../../assets/addProduct.svg" class="cursor-pointer" @click="action(orderProductItem)">
                </div>
                <div class="col-1 price">
                  {{ orderProductItem.price }}₽
                </div>
                <div class="col-1 text-right">
                  <q-btn flat style="color: #FF0080" label=""
                         @click="action(orderProductItem)">
                    <img src="~assets/close.svg" alt="">
                  </q-btn>

                </div>
              </div>

            </div>
          </q-scroll-area>
          <div class="text-white basket-sum-item my-bold q-mt-xl">
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

export default {
  name: "BasketItem",
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

  },
  mounted() {
  }
}

</script>

<style>
.z-spinner {
  z-index: 999999;
}

.basket {
    background-color: black;
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
  line-height: 17px;
  letter-spacing: 0.1em;
}

.name-field2 {
  color: white;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.1em;
}

.basket-hint {
  font-size: 12px;
  color: #8D8D8D;
  line-height: 15px;
  font-weight: 400;
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
}

.q-btn_my {
  margin-top: 0;
  border: 1px solid #FFFFFF;
  font-weight: bold;
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

</style>
