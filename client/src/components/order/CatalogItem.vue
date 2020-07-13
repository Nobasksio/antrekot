<template >
    <fragment >
        <div class="col-12 col-md-3 col-lg-3 column justify-between mobile-hide" >
            <div v-if="productItem.photo[0] !== undefined">
                <img :src="`${api_link}${productItem.photo[0].url}`" alt="" class="full-width" >
            </div >
            <div class="text-white name-dish" >
                {{productItem.name}}
            </div >
            <div class="name-discr" >
                {{productItem.description}}
            </div >
            <div class="delimeter-area row justify-between" >
                <div >
                    <q-btn :outline="!
                (productItem.name)"
                           :color="{'white' : isAddedToBasket(productItem.name)}"
                           @click="action(productItem)"
                           :class="{'active_card_contact2' : isAddedToBasket(productItem.name)}"
                           class='text-uppercase q-btn_my' :label="getAddbasketButtonType(productItem.name)" />
                </div >
                <div class="weight" >{{productItem.weight}} гр.</div >
                <div class="price" >{{productItem.price}} р.</div >
            </div >
        </div >
        <div class="desktop-hide col-12 row q-col-gutter-md">
            <div class="col-4" >
                <img v-if="productItem.photo[0] !== undefined"
                        :src="`${api_link}${productItem.photo[0].url}`" alt="" class="full-width" >
            </div >
            <div class="col-8 column">
                <div class="text-white name-dish" >
                    {{productItem.name}}
                    <span class="text-grey-7">({{productItem.weight}} гр)</span>
                </div >
                <div class="name-discr" >
                    {{productItem.description}}
                </div >
                <div class="row justify-between items-center">
                    <div class="price" >{{productItem.price}} р.</div >
                    <div >
                        <q-btn :outline="!
                (productItem.name)"
                               :color="{'white' : isAddedToBasket(productItem.name)}"
                               @click="action(productItem)"
                               :class="{'active_card_contact2' : isAddedToBasket(productItem.name)}"
                               class='text-uppercase q-btn_my' :label="getAddbasketButtonType(productItem.name)" />
                    </div >
                </div>
            </div>
        </div>
    </fragment >
</template >

<script >
    import { Fragment } from 'vue-fragment'
    export default {
        name: "CatalogItem",
        components: {
            Fragment,
        },
        props: {
            productItem: {
                type: Object
            },
            action: {
                type: Function,
            },
            isAddedToBasket: {
                type: Function,
            },
            getAddbasketButtonType: {
                type: Function,
            }
        },
        data() {
            return {
                api_link: process.env.API_LINK,
            }
        }
    }
</script >

<style scoped >


    .delimeter-area {
        align-items: center;
        border-bottom: 3px solid #333333;
        border-top: 3px solid #333333;
        padding: 10px 0;

    }

    .weight {
        font-family: 'mregular';
        font-size: 18px;
        line-height: 22px;
        color: #828282;
    }

    .price {
        font-family: 'mbold';
        color: #fff;
        font-size: 18px;
        line-height: 22px;
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

    @media (min-width: 601px) {
        .name-dish {
            font-family: 'mbold';
            font-size: 18px;
            line-height: 22px;
            padding: 21px 7px 7px 0;
        }

        .name-discr {
            font-family: 'mregular';
            font-size: 16px;
            line-height: 20px;
            color: #828282;
            padding: 7px 0;
        }
    }
    @media (max-width: 600px) {
        .name-dish {
            font-family: 'mbold';
            font-size: 12px;
            line-height: 15px;
            padding: 0px 7px 7px 0;
        }

        .name-discr {
            font-family: 'mregular';
            font-size: 12px;
            line-height: 15px;
            color: #a8a8a8;
            padding: 7px 0;
        }
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
</style >
