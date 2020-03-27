<template >
    <q-expansion-item
            expand-separator
            :label="restaurant.Name"
            class="text-white active_card_contact q-px-md q-pt-md text-uppercase"
    >
        <q-card class="" >

            <q-card-section class="q-pt-none" >
                <div class="red-delimeter" >
                </div >
                <div class="row q-pb-sm q-pt-md lspacing10 content-stretch items-center text-typical" >
                    <div class="col-cuto" >
                        <div class="my-baloon-icon" >
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" >
                                <path d="M8.49953 0C5.10468 0 2.34277 2.7619 2.34277 6.15672C2.34277 10.3698 7.85247 16.5548 8.08705 16.8161C8.30738 17.0615 8.69207 17.0611 8.91201 16.8161C9.14659 16.5548 14.6563 10.3698 14.6563 6.15672C14.6562 2.7619 11.8943 0 8.49953 0ZM8.49953 15.5965C6.64523 13.3938 3.45149 9.04825 3.45149 6.15679C3.45149 3.37324 5.71601 1.10872 8.49953 1.10872C11.283 1.10872 13.5476 3.37324 13.5476 6.15676C13.5475 9.04835 10.3543 13.3931 8.49953 15.5965Z"
                                      fill="white" />
                                <path d="M8.49993 3.05913C6.7919 3.05913 5.40234 4.44871 5.40234 6.15675C5.40234 7.86478 6.79193 9.25436 8.49993 9.25436C10.2079 9.25436 11.5975 7.86478 11.5975 6.15675C11.5975 4.44871 10.2079 3.05913 8.49993 3.05913ZM8.49993 8.14565C7.40323 8.14565 6.51106 7.25345 6.51106 6.15675C6.51106 5.06005 7.40326 4.16785 8.49993 4.16785C9.5966 4.16785 10.4888 5.06005 10.4888 6.15675C10.4888 7.25345 9.5966 8.14565 8.49993 8.14565Z"
                                      fill="white" />
                            </svg >
                        </div >
                    </div >
                    <div class="col-10 text-12" >
                        {{restaurant.Address}}
                    </div >
                </div >
                <div class="q-pb-md lspacing10" >
                    <a :href="`tel:${cleanPhone(restaurant.Phone)}`" class="phone_class">
                        {{restaurant.Phone}}
                    </a>
                </div >
                <div class="mregular text-12 text-typical" >
                    Режим работы
                </div >
                <div class="text-typical" >
                    <span v-html="restaurant.Work_time" ></span >
                </div >
                <div class="text-center q-py-lg" >
                    <q-btn outline color="white"
                           class='text-uppercase q-btn_my_black'
                           label="Показать на карте"
                           @click="open('bottom')" >
                    </q-btn >
                </div >
            </q-card-section >
        </q-card >
        <q-dialog v-model="dialog" :position="position" >
            <q-card style="width: 100%" class="bg-white" >

                <q-card-section class="text-white active_card_contact2 q-pt-md text-uppercase q-px-none" >
                    <div class="map_mobile">
                        <yandex-map class="yandex-map"
                                    :controls="[]"
                                    zoom="16"
                                    :coords="[restaurant.latitude, restaurant.longitude]" >
                            <ymap-marker
                                    :marker-id="restaurant.id"
                                    :hint-content="restaurant.Name"
                                    :icon="{color: 'red'}"
                                    :coords="[restaurant.latitude,restaurant.longitude]"
                            ></ymap-marker >
                        </yandex-map >
                    </div>
                    <div class="q-px-lg q-pt-lg lspacing25 my-mbold">
                        <div class="">
                            {{restaurant.Name}}
                        </div >
                        <div class="red-delimeter" >

                        </div >
                        <div class="row q-pb-sm q-pt-md lspacing10 content-stretch items-center text-typical" >
                            <div class="col-cuto" >
                                <div class="my-baloon-icon" >
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M8.49953 0C5.10468 0 2.34277 2.7619 2.34277 6.15672C2.34277 10.3698 7.85247 16.5548 8.08705 16.8161C8.30738 17.0615 8.69207 17.0611 8.91201 16.8161C9.14659 16.5548 14.6563 10.3698 14.6563 6.15672C14.6562 2.7619 11.8943 0 8.49953 0ZM8.49953 15.5965C6.64523 13.3938 3.45149 9.04825 3.45149 6.15679C3.45149 3.37324 5.71601 1.10872 8.49953 1.10872C11.283 1.10872 13.5476 3.37324 13.5476 6.15676C13.5475 9.04835 10.3543 13.3931 8.49953 15.5965Z"
                                              fill="white" />
                                        <path d="M8.49993 3.05913C6.7919 3.05913 5.40234 4.44871 5.40234 6.15675C5.40234 7.86478 6.79193 9.25436 8.49993 9.25436C10.2079 9.25436 11.5975 7.86478 11.5975 6.15675C11.5975 4.44871 10.2079 3.05913 8.49993 3.05913ZM8.49993 8.14565C7.40323 8.14565 6.51106 7.25345 6.51106 6.15675C6.51106 5.06005 7.40326 4.16785 8.49993 4.16785C9.5966 4.16785 10.4888 5.06005 10.4888 6.15675C10.4888 7.25345 9.5966 8.14565 8.49993 8.14565Z"
                                              fill="white" />
                                    </svg >
                                </div >
                            </div >
                            <div class="col-10 text-12" >
                                {{restaurant.Address}}
                            </div >
                        </div >
                        <div class="q-pb-md lspacing10" >
                            {{restaurant.Phone}}
                        </div >
                        <div class="mregular text-12 text-typical" >
                            Режим работы
                        </div >
                        <div class="text-typical" >
                            <span v-html="restaurant.Work_time" ></span >
                        </div >
                        <div class="text-center q-py-lg" >
                            <q-btn outline color="white"
                                   class='text-uppercase q-btn_my_black'
                                   label="Назад"
                                   @click="dialog = false" >
                            </q-btn >
                        </div >
                    </div >
                </q-card-section >
            </q-card >
        </q-dialog >
    </q-expansion-item >
</template >

<script >
    import {yandexMap, ymapMarker} from 'vue-yandex-maps'
    export default {
        name: "contact-item-mobile",
        props: ['restaurant'],
        components: {yandexMap, ymapMarker},
        data() {
            return {
                dialog: false,
                position: 'top'
            }
        },
        methods: {
            open(position) {
                this.position = position
                this.dialog = true
            },
            cleanPhone(dirty_phone){

                return dirty_phone.replace(/\D/,'')
            },
        }

    }
</script >

<style scoped >
    .my-baloon-icon {
        padding-top: 3px;
        margin-right: 15px;
    }
    .map_mobile{
        height: 300px;

        background: #fff;
    }
    .yandex-map {
        height: 100%;
    }
    .phone_class{
        text-decoration: none;
        color:#fff;
    }
</style >