<template >
    <q-page class="" >
        <div class="row tl_padding_page q-px-none" >

            <div class="col-auto-md" >
                <header-page name_page="Заказ Доставки" ></header-page >
            </div >

            <div class="col-md col-12" >
                <q-tabs
                        v-model="tab"
                        dense
                        narrow-indicator
                        class="text-white bg-black"
                >
                    <q-tab :name="item.id"
                           :key="index"
                           class="my-mbold"
                           :label="item.name" v-for="(item, index) in categories" />
                </q-tabs >
            </div >

        </div >
        <div class="h-100 full-width" >
            <q-tab-panels v-model="tab" animated class="bg-black" >
                <q-tab-panel :name="item.id" class="q-px-none " :key="`tab${item.id}`"
                             v-for="(item, index) in categories" >
                    <div class="text-h6 text-white q-pb-xl" >
                        <div :key="product.id" v-for="product in getCategoryProduts(item.id)"
                             class="row items-center justify-between" >
                            <div class="col-md-4 col-6 q-px-md" >{{ product.name }}</div >
                            <div class="col-md-4 mobile-hide text-body2" >{{ makedescr(product.description) }}</div >
                            <div class="col-md-2 col-2" >{{ product.price }} р</div >
                            <div class="col-md-2 col-4" >
                                <q-btn :outline="!isAddedToBasket(product.name)"
                                       :color="{'white' : isAddedToBasket(product.name)}"
                                       @click="proxyAddProductToBasket(product)"
                                       :class="{'active_card_contact2' : isAddedToBasket(product.name)}"
                                       class='text-uppercase q-btn_my' :label="getAddbasketButtonType(product.name)" />
                            </div >
                        </div >
                    </div >
                </q-tab-panel >
            </q-tab-panels >
            <div class="basket-btn row justify-center" >

                <div class="column items-center" >
                    <q-btn color="deep-orange" glossy
                           ref="basket"
                           @click="dialog = true" >
                        <div class="q-mx-xs" >Корзина</div >
                        <span v-if="orderProducts.length > 0" > {{ orderProducts.length}}</span >
                    </q-btn >
                    <div class="text-white q-pt-sm" v-if="totalSum < 600" >минимальная сумма 600р</div >
                </div >
            </div >
            <q-dialog
                    v-model="dialog"
                    transition-show="slide-up"
                    transition-hide="slide-down"
            >
                <q-card class="bg-white basket" >

                    <q-card-section class="active_card_contact2 row" >
                        <div class="text-h6" >Корзина</div >
                        <q-space />
                        <q-btn dense flat icon="close" v-close-popup >
                            <q-tooltip content-class="bg-white text-primary" >Close</q-tooltip >
                        </q-btn >
                    </q-card-section >
                    <q-card-section class="q-pt-none" v-if="thanks" >
                        <div class="text-center text-h3 q-py-xl" >
                            Спасибо за заказ. Скоро с вами свяжется оператор.
                        </div >
                    </q-card-section >
                    <q-card-section class="q-pt-none" v-if="!thanks" >
                        <div v-for="orderProductItem in orderProducts"
                             class="row justify-between items-center q-py-xs" >
                            <div class="col-6 text-bold" >
                                {{orderProductItem.name}}
                            </div >

                            <div class="col-3 text-center" >
                                {{orderProductItem.count}} шт
                            </div >
                            <div class="col-2 text-right" >
                                {{orderProductItem.price}}
                            </div >
                            <div class="col-1 text-right" >
                                <q-btn flat style="color: #FF0080" label=""
                                       @click="removeProductToBasket(orderProductItem)" >
                                    <img src="~assets/close.svg" alt="" >
                                </q-btn >

                            </div >
                        </div >
                        <div class="row justify-end q-py-md items-center" >
                            <div class='col-grow' ></div >
                            <div class="q-px-md" >итого</div >
                            <div class="text-h6" >
                                {{ totalSum }}
                            </div >
                        </div >
                        <div >
                            <div class="q-py-sm" >
                                <q-input outlined dense
                                         :value="order.phone"
                                         label="телефон"
                                         fill-mask
                                         mask="+7 (###) ###-##-##"
                                         @input="setPhone" >
                                </q-input >
                            </div >
                            <div >
                                <div class="text-subtitle2" >Укажите город</div >
                                <q-radio :value="order.department"
                                         @input="setDepartment"
                                         val="1"
                                         label="Иркутск"
                                         color="red" />
                                <q-radio :value="order.department"
                                         @input="setDepartment"
                                         val="2"
                                         label="Ангарск"
                                         color="red" />
                            </div >
                            <div class="q-py-sm" >
                                <q-input
                                        label="адрес"
                                        :value="order.address"
                                        hint="Пока мы, к сожалению, не доставляем в ленинский район и за пределы города"
                                        @input="setAddress"
                                        outlined dense >
                                </q-input >
                                <div class="q-px-md" >
                                    <a href="https://yandex.ru/maps/63/irkutsk/?ll=104.298892%2C52.268341&mode=usermaps&source=constructorLink&um=constructor%3A24615acd192d44e1bccd1e6fcd678bd4beb8228ce9403a1a1888ab3e470fc25f&z=11" >
                                        зона доставки
                                    </a >
                                </div >
                            </div >
                            <div class="q-py-sm" >
                                <q-checkbox :value="order.early"
                                            @input="setEarly"
                                            label="Как можно раньше" />
                            </div >
                            <div class="q-py-sm" >
                                <q-input
                                        label="время"
                                        :value="order.time"
                                        mask="##:##"
                                        hint="доставка в среднем занимает 1,5 часа"
                                        fill-mask
                                        @input="setTime"
                                        outlined dense >
                                </q-input >
                            </div >
                            <div class="q-py-sm" >
                                <q-input
                                        label="Комментарий"
                                        :value="order.comment"
                                        hint=""
                                        @input="setComment"
                                        outlined dense >
                                </q-input >
                            </div >
                        </div >
                        <div class="row q-py-lg" >
                            <q-space />
                            <q-btn color="deep-orange"
                                   glossy
                                   @click="sendOrder()"
                            >
                                <div class="row items-center" >
                                    <div >
                                        <q-circular-progress
                                                indeterminate
                                                v-if="loading"
                                                size="20px"
                                                color="white"
                                                class="q-mr-md"
                                        />
                                    </div >
                                    <div >
                                        Отправить заказ
                                    </div >
                                    <div >
                                        <q-circular-progress
                                                indeterminate
                                                size="20px"
                                                v-if="loading"
                                                color="white"
                                                class="q-ml-md"
                                        />
                                    </div >
                                </div >
                            </q-btn >
                            <q-space />
                        </div >
                    </q-card-section >
                </q-card >
            </q-dialog >
        </div >

    </q-page >
</template >

<script >
    import headerPage from '../components/header-page'
    import {mapState, mapMutations, mapGetters} from 'vuex';

    const axios = require('axios').default;

    export default {
        name: "order",
        components: {
            headerPage
        },
        data() {
            return {
                thanks: false,
                dialog: false,
                loading: false,
                maximizedToggle: true,
                tab: 1,

                categories: [
                    {
                        id: 1,
                        name: 'Шашлыки и кебабы',
                        sortIndex: 500
                    },
                    {
                        id: 2,
                        name: 'Блюда на гриле',
                        sortIndex: 500
                    },
                    {
                        id: 3,
                        name: 'Стейки',
                        sortIndex: 500
                    },
                    {
                        id: 4,
                        name: 'Гарниры',
                        sortIndex: 500
                    },
                    {
                        id: 5,
                        name: 'Салаты',
                        sortIndex: 500
                    },
                    {
                        id: 6,
                        name: 'Супы',
                        sortIndex: 500
                    },
                    {
                        id: 7,
                        name: 'Брускетты',
                        sortIndex: 500
                    },
                    {
                        id: 8,
                        name: 'Горячее',
                        sortIndex: 500
                    },
                    {
                        id: 9,
                        name: 'Блюда на компанию',
                        sortIndex: 500
                    },
                    {
                        id: 10,
                        name: 'Street food',
                        sortIndex: 500
                    },
                    {
                        id: 11,
                        name: 'Wok-лапша',
                        sortIndex: 500
                    },
                    {
                        id: 12,
                        name: 'Закуски',
                        sortIndex: 500
                    },
                    {
                        id: 13,
                        name: 'Напитки',
                        sortIndex: 500
                    }
                ],
                products: [
                    {
                        name: 'Кока-кола 0,5',
                        sortIndex: 500,
                        description: '',
                        price: 95,
                        category_id: 13
                    },
                    {
                        name: 'Спрайт 0,5',
                        sortIndex: 500,
                        description: '',
                        price: 95,
                        category_id: 13
                    },
                    {
                        name: 'Швепс 0,5',
                        sortIndex: 500,
                        description: '',
                        price: 95,
                        category_id: 13
                    },
                    {
                        name: 'напиток Байкал 0,33',
                        sortIndex: 500,
                        description: '',
                        price: 80,
                        category_id: 13
                    },
                    {
                        name: 'Вода Байкальская 0,5',
                        sortIndex: 500,
                        description: '',
                        price: 50,
                        category_id: 13
                    },
                    {
                        name: 'Вода глубинная Байкал 475',
                        sortIndex: 500,
                        description: '',
                        price: 75,
                        categorid: 13
                    },
                    {
                        name: 'Шашлык из свинины',
                        sortIndex: 500,
                        description: '',
                        price: 295,
                        category_id: 1
                    },
                    {
                        name: 'Шашлык из курицы',
                        sortIndex: 500,
                        description: '',
                        price: 255,
                        category_id: 1
                    },
                    {
                        name: 'Шашлык из индейки',
                        sortIndex: 500,
                        description: '',
                        price: 315,
                        category_id: 1
                    },
                    {
                        name: 'Шашлык из телятины',
                        sortIndex: 500,
                        description: '',
                        price: 470,
                        category_id: 1
                    },
                    {
                        name: 'Кебабы',
                        sortIndex: 500,
                        description: '',
                        price: 315,
                        category_id: 1
                    },
                    {
                        name: 'Томагавк',
                        sortIndex: 500,
                        description: 'из свинины с томатным соусом',
                        price: 455,
                        category_id: 2
                    },
                    {
                        name: 'Стейк из свиной шеи',
                        sortIndex: 500,
                        description: 'с соусом барбекю',
                        price: 425,
                        category_id: 2
                    },
                    {
                        name: 'Бифштекс из говядины',
                        sortIndex: 500,
                        description: 'с соусом барбекю и яйцом пашот',
                        price: 315,
                        category_id: 2
                    },
                    {
                        name: 'Бифштекс из ягнёнка',
                        sortIndex: 500,
                        description: 'с соусом барбекю и яйцом пашот',
                        price: 395,
                        category_id: 2
                    },
                    {
                        name: 'Индейка гриль',
                        sortIndex: 500,
                        description: 'с томатным соусом',
                        price: 375,
                        category_id: 2
                    },
                    {
                        name: 'Стейк из капусты',
                        sortIndex: 500,
                        description: 'с ореховым соусом и укропным маслом',
                        price: 185,
                        category_id: 2
                    },
                    {
                        name: 'Стейк из сёмги',
                        sortIndex: 500,
                        description: 'с соусом Айоли',
                        price: 650,
                        category_id: 2
                    },
                    {
                        name: 'Кальмар на гриле',
                        sortIndex: 500,
                        description: 'с соусом песто',
                        price: 345,
                        category_id: 2
                    },
                    {
                        name: 'Фирменный антрекот',
                        sortIndex: 500,
                        description: 'спинная часть на ребре',
                        price: 895,
                        category_id: 3
                    },
                    {
                        name: 'Филей прайм',
                        sortIndex: 500,
                        description: 'верхняя часть бедра',
                        price: 895,
                        category_id: 3
                    },
                    {
                        name: 'Андер блейд',
                        sortIndex: 500,
                        description: 'внутренняя часть лопатки',
                        price: 795,
                        category_id: 3
                    },
                    {
                        name: 'Мачете',
                        sortIndex: 500,
                        description: 'нижняя брюшная часть',
                        price: 795,
                        category_id: 3
                    },
                    {
                        name: 'Топ-Сайд',
                        sortIndex: 500,
                        description: 'задняя верхняя часть',
                        price: 695,
                        category_id: 3
                    },
                    {
                        name: 'овощи гриль',
                        sortIndex: 500,
                        description: 'цукини, болгарский перец, помидор',
                        price: 100,
                        category_id: 4
                    },
                    {
                        name: 'картофель с грибами',
                        sortIndex: 500,
                        description: 'картофель,грибы,сливочный соус',
                        price: 100,
                        category_id: 4
                    },
                    {
                        name: 'картофельное пюре с беконом',
                        sortIndex: 500,
                        description: 'картофель,бекон,сливочный соус',
                        price: 100,
                        category_id: 4
                    },
                    {
                        name: 'Айдахо',
                        sortIndex: 500,
                        description: 'жареные картофельные дольки',
                        price: 100,
                        category_id: 4
                    },
                    {
                        name: 'Булгур',
                        sortIndex: 500,
                        description: 'крупа пшеницы с вялеными томатами',
                        price: 100,
                        category_id: 4
                    },
                    {
                        name: 'Печёный картофель',
                        sortIndex: 500,
                        description: 'картофель,сливочное масло,укроп',
                        price: 100,
                        category_id: 4
                    },
                    {
                        name: 'Цветная капуста',
                        sortIndex: 500,
                        description: 'капуста цветная в сырно-сливочном соусе',
                        price: 100,
                        category_id: 4
                    },
                    {
                        name: 'Сельдь под шубой',
                        sortIndex: 500,
                        description: 'сельдь,картофель,свёкла,морковь,жареный лук,укропное масло,соус Айоли',
                        price: 125,
                        category_id: 5
                    },
                    {
                        name: 'Оливье с говядиной и курицей',
                        sortIndex: 500,
                        description: 'куриное филе,говядина,свежий огурец,маринованный огурец,яйцо,сыр,зелёный горошек,зелёный лук,соус Айоли',
                        price: 175,
                        category_id: 5
                    },
                    {
                        name: 'Гнездо глухаря',
                        sortIndex: 500,
                        description: 'куриное филе,картофель пай,яйцо,свежий огурец,маринованный огурец,сыр,лук,соус Вайт,укроп',
                        price: 135,
                        category_id: 5
                    },
                    {
                        name: 'Салат с ростбифом',
                        sortIndex: 500,
                        description: 'ростбиф,болгарский перец,вяленые томаты,лист салата,руккола,кунжут,соус Восточный',
                        price: 235,
                        category_id: 5
                    },
                    {
                        name: 'Салат с беконом и грибами',
                        sortIndex: 500,
                        description: 'бекон,грибы,яйцо,лист салата,руккола,оливковое масло,винный уксус,укропное масло',
                        price: 185,
                        category_id: 5
                    },
                    {
                        name: 'Салат с бужениной',
                        sortIndex: 500,
                        description: 'буженина,свежий огурец,лист салата,руккола,соус Вайт,укропное масло',
                        price: 215,
                        category_id: 5
                    },
                    {
                        name: 'Салат с сёмгой и апельсиновым соусом',
                        sortIndex: 500,
                        description: 'сёмга,свежий огурец,томаты,черри,лист салата,руккола,апельсиновый соус,стружка миндаля',
                        price: 235,
                        category_id: 5
                    },
                    {
                        name: 'Салат с тунцом и картофелем',
                        sortIndex: 500,
                        description: 'тунец,печёный картофель,картофель пай,яйцо,томаты черри,лист салата,руккола,соус Цезарь,укропное масло',
                        price: 215,
                        category_id: 5
                    },
                    {
                        name: 'Салат с томатами и сыром Халуми',
                        sortIndex: 500,
                        description: 'жареный сыр Халуми,томаты черри,руккола,укропное масло',
                        price: 205,
                        category_id: 5
                    },
                    {
                        name: 'Салат Греческий',
                        sortIndex: 500,
                        description: 'свежий огурец,томаты черри,маслины,болгарский перец,лист салата,руккола,лук,сыр Фета,соус Песто',
                        price: 115,
                        category_id: 5
                    },
                    {
                        name: 'Цезарь с курицей',
                        sortIndex: 500,
                        description: 'куриное филе,лист салата,гренки,томаты черри,сыр,соус Цезарь',
                        price: 175,
                        category_id: 5
                    },
                    {
                        name: 'Цезарь с сёмгой',
                        sortIndex: 500,
                        description: 'сёмга,лист салата,гренки,томаты черри,сыр,соус Цезарь',
                        price: 235,
                        category_id: 5
                    },
                    {
                        name: 'Суп с копчёным ребром',
                        sortIndex: 500,
                        description: 'свиное ребро,картофель,морковь,сельдерей,стручковая фасоль,чили перец,Дижонская горчица,кориандр,зеленый лук',
                        price: 175,
                        category_id: 6
                    },
                    {
                        name: 'Куриный суп',
                        sortIndex: 500,
                        description: 'курица,пшеничная лапша,морковь,лук,сельдерей,яйцо,укроп',
                        price: 115,
                        category_id: 6
                    },
                    {
                        name: 'Сливочный суп с сёмгой',
                        sortIndex: 500,
                        description: 'сёмга,кальмар,томаты черри,сельдерей,зеленый лук,морковь,сливки,укропное масло',
                        price: 185,
                        category_id: 6
                    },
                    {
                        name: 'Грибной суп-пюре',
                        sortIndex: 500,
                        description: 'грибы,картофель,сливки,морковь,укропное масло,гренки',
                        price: 155,
                        category_id: 6
                    },
                    {
                        name: 'Борщ с гарликами',
                        sortIndex: 500,
                        description: 'говядина,свёкла,картофель,капуста,морковь,зелёный лук,укроп,сметана,гарлики с чесноком',
                        price: 165,
                        category_id: 6
                    },
                    {
                        name: 'Жгучий Том-Ям',
                        sortIndex: 500,
                        description: 'креветки,курица,томаты черри,грибы,лук,чили перец,кинза,перечная паста,лайм',
                        price: 195,
                        category_id: 6
                    },
                    {
                        name: 'Сырный суп-пюре',
                        sortIndex: 500,
                        description: 'сыр,сливки,грибы,укропное масло,гренки',
                        price: 155,
                        category_id: 6
                    },
                    {
                        name: 'Солянка',
                        sortIndex: 500,
                        description: 'говядина,буженина,копчёности,картофель,морковь,маринованые огурцы,маслины,лук,укроп,сметана,лимон',
                        price: 175,
                        category_id: 6
                    },
                    {
                        name: 'С салом и горчицей',
                        sortIndex: 500,
                        description: '',
                        price: 115,
                        category_id: 7
                    },
                    {
                        name: 'С тартаром из говядины',
                        sortIndex: 500,
                        description: '',
                        price: 155,
                        category_id: 7
                    },
                    {
                        name: 'С картофелем и сельдью',
                        sortIndex: 500,
                        description: '',
                        price: 115,
                        category_id: 7
                    },
                    {
                        name: 'С ростбифом, печёной свёклой и сыром Фета ',
                        sortIndex: 500,
                        description: '',
                        price: 155,
                        category_id: 7
                    },
                    {
                        name: 'С авокадо и рикоттой ',
                        sortIndex: 500,
                        description: '',
                        price: 125,
                        category_id: 7
                    },
                    {
                        name: 'С куриным паштетом и абрикосовым джемом ',
                        sortIndex: 500,
                        description: '',
                        price: 135,
                        category_id: 7
                    },
                    {
                        name: 'С креветками и овощной смесью ',
                        sortIndex: 500,
                        description: '',
                        price: 145,
                        category_id: 7
                    },
                    {
                        name: 'С сыром Халуми и томатами ',
                        sortIndex: 500,
                        description: '',
                        price: 135,
                        category_id: 7
                    },
                    {
                        name: 'С сёмгой и овощной икрой ',
                        sortIndex: 500,
                        description: '',
                        price: 145,
                        category_id: 7
                    },
                    {
                        name: 'Куриная грудка ',
                        sortIndex: 500,
                        description: '',
                        price: 345,
                        category_id: 8
                    },
                    {
                        name: 'Куриный шницель',
                        sortIndex: 500,
                        description: '',
                        price: 325,
                        category_id: 8
                    },
                    {
                        name: 'Рёбра Джек Дэниелс',
                        sortIndex: 500,
                        description: '',
                        price: 385,
                        category_id: 8
                    },
                    {
                        name: 'Медальоны из свинины',
                        sortIndex: 500,
                        description: '',
                        price: 345,
                        category_id: 8
                    },
                    {
                        name: 'Охотничьи колбаски',
                        sortIndex: 500,
                        description: '',
                        price: 335,
                        category_id: 8
                    },
                    {
                        name: 'Бефстроганов',
                        sortIndex: 500,
                        description: '',
                        price: 355,
                        category_id: 8
                    },
                    // {
                    //     name: 'Лазанья',
                    //     sortIndex: 500,
                    //     description: '',
                    //     price: 285,
                    //     category_id: 8
                    // },
                    {
                        name: 'Копчёная форель',
                        sortIndex: 500,
                        description: '',
                        price: 345,
                        category_id: 8
                    },
                    {
                        name: 'Норвежская скумбрия',
                        sortIndex: 500,
                        description: '',
                        price: 325,
                        category_id: 8
                    },
                    {
                        name: 'Печёный картофель с ростбифом и луковым мёдом',
                        sortIndex: 500,
                        description: '',
                        price: 255,
                        category_id: 8
                    },
                    {
                        name: 'Печёный картофель с сёмгой и гуакамоле',
                        sortIndex: 500,
                        description: '',
                        price: 265,
                        category_id: 8
                    },
                    {
                        name: 'Печёный картофель с Беконом и сыром Моцарелла',
                        sortIndex: 500,
                        description: '',
                        price: 225,
                        category_id: 8
                    },
                    {
                        name: 'Маленькое ассорти из шашлыков на 2-3 человека',
                        sortIndex: 500,
                        description: '',
                        price: 950,
                        category_id: 9
                    },
                    {
                        name: 'Большое ассорти из шашлыков на 5-6 человек',
                        sortIndex: 500,
                        description: '',
                        price: 2100,
                        category_id: 9
                    },
                    {
                        name: 'Мясное ассорти на 8-9 человек',
                        sortIndex: 500,
                        description: '',
                        price: 2850,
                        category_id: 9
                    },
                    {
                        name: 'Куринное ассорти на 4-5 человек',
                        sortIndex: 500,
                        description: '',
                        price: 1650,
                        category_id: 9
                    },
                    {
                        name: 'Двойной бургер',
                        sortIndex: 500,
                        description: '',
                        price: 425,
                        category_id: 10
                    },
                    {
                        name: 'Моцарелла бургер',
                        sortIndex: 500,
                        description: '',
                        price: 235,
                        category_id: 10
                    },
                    {
                        name: 'Сибирский бургер',
                        sortIndex: 500,
                        description: '',
                        price: 385,
                        category_id: 10
                    },
                    {
                        name: 'Чизбургер',
                        sortIndex: 500,
                        description: '',
                        price: 255,
                        category_id: 10
                    },
                    {
                        name: 'Куриный бургер',
                        sortIndex: 500,
                        description: '',
                        price: 225,
                        category_id: 10
                    },
                    {
                        name: 'Шаурма со свининой',
                        sortIndex: 500,
                        description: '',
                        price: 265,
                        category_id: 10
                    },
                    {
                        name: 'Шаурма с курицей',
                        sortIndex: 500,
                        description: '',
                        price: 245,
                        category_id: 10
                    },
                    {
                        name: 'Wok со свининой',
                        sortIndex: 500,
                        description: '',
                        price: 255,
                        category_id: 11
                    },
                    {
                        name: 'Wok с курицей',
                        sortIndex: 500,
                        description: '',
                        price: 245,
                        category_id: 11
                    },
                    {
                        name: 'Wok с говядиной',
                        sortIndex: 500,
                        description: '',
                        price: 285,
                        category_id: 11
                    },
                    {
                        name: 'Wok с морепродуктами',
                        sortIndex: 500,
                        description: '',
                        price: 295,
                        category_id: 11
                    },
                    {
                        name: 'Wok с овощами',
                        sortIndex: 500,
                        description: '',
                        price: 215,
                        category_id: 11
                    },
                    {
                        name: 'Корндог',
                        sortIndex: 500,
                        description: '',
                        price: 155,
                        category_id: 12
                    },
                    {
                        name: 'Наггетсы из индейки',
                        sortIndex: 500,
                        description: '',
                        price: 185,
                        category_id: 12
                    },
                    {
                        name: 'Фирменные картофельные чипсы',
                        sortIndex: 500,
                        description: '',
                        price: 95,
                        category_id: 12
                    },
                    {
                        name: 'Гарлики',
                        sortIndex: 500,
                        description: '',
                        price: 95,
                        category_id: 12
                    },
                    {
                        name: 'Острый арахис',
                        sortIndex: 500,
                        description: '',
                        price: 95,
                        category_id: 12
                    },
                    {
                        name: 'Картошка фри',
                        sortIndex: 500,
                        description: '',
                        price: 95,
                        category_id: 12
                    },
                    {
                        name: 'Сухарики Том-Ям',
                        sortIndex: 500,
                        description: '',
                        price: 95,
                        category_id: 12
                    },
                    {
                        name: 'Креветки в кляре с соусом Том-Ям',
                        sortIndex: 500,
                        description: '',
                        price: 245,
                        category_id: 12
                    },
                    {
                        name: 'Фиш&Чипс с соусом Айоли',
                        sortIndex: 500,
                        description: '',
                        price: 195,
                        category_id: 12
                    },
                    {
                        name: 'Щупальца кальмара',
                        sortIndex: 500,
                        description: '',
                        price: 265,
                        category_id: 12
                    },
                    {
                        name: 'Кальмар в кляре',
                        sortIndex: 500,
                        description: '',
                        price: 145,
                        category_id: 12
                    },
                    {
                        name: 'Шампиньоны фри',
                        sortIndex: 500,
                        description: '',
                        price: 145,
                        category_id: 12
                    },
                    {
                        name: 'Пикантная цветная капуста',
                        sortIndex: 500,
                        description: '',
                        price: 115,
                        category_id: 12
                    },
                    {
                        name: 'Кукуруза гриль',
                        sortIndex: 500,
                        description: '',
                        price: 95,
                        category_id: 12
                    },
                    {
                        name: 'Картофель в беконе с соусом Барбекю',
                        sortIndex: 500,
                        description: '',
                        price: 155,
                        category_id: 12
                    },
                    {
                        name: 'Куриные крылья Барбекю',
                        sortIndex: 500,
                        description: '',
                        price: 255,
                        category_id: 12
                    },
                    {
                        name: 'Сырные трубочки с брусничным соусом',
                        sortIndex: 500,
                        description: '',
                        price: 245,
                        category_id: 12
                    },
                    {
                        name: 'Сыр Халуми с вялеными томатами',
                        sortIndex: 500,
                        description: '',
                        price: 295,
                        category_id: 12
                    },
                    {
                        name: 'Маленькая пивная тарелка',
                        sortIndex: 500,
                        description: '',
                        price: 315,
                        category_id: 12
                    },
                    {
                        name: 'Большая пивная тарелка',
                        sortIndex: 500,
                        description: '',
                        price: 485,
                        category_id: 12
                    }
                ]
            }
        },
        methods: {
            ...mapMutations('common', ['addProductToBasket',
                'removeProductToBasket',
                'setPhone',
                'setAddress',
                'setTime',
                'setEarly',
                'setComment',
                'setDepartment'
            ]),
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
                return text.split(",").join(", ");
            },
            sendOrder() {
                this.loading = true;
                yaCounter27721593.reachGoal('order');
                axios.post('http://repairs.rest38.ru/api/antrekot',
                    {
                        order: this.order,
                        products: this.orderProducts
                    }
                )
                    .then((res) => {
                        this.thanks = true
                        this.loading = false;
                        console.log(res)
                    })
                    .catch((error) => {

                        this.loading = false
                        this.error = true
                    });

            }
        },
        computed: {
            ...mapState('common', ['order', 'orderProducts']),
            ...mapGetters('common', ['totalSum'])
        }
    }
</script >

<style scoped >
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
    }

    .active_card_contact2 {
        background: linear-gradient(180deg, #970E00 0%, #E84437 100%);
    }


</style >
