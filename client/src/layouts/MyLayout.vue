<template >
  <q-layout view="lHh LpR lFf" >
    <check-page v-if="!check" ></check-page >
    <q-drawer show-if-above
              v-model="left"
              side="left"
              content-class="menu_drawer"
              :width="263"

              :breakpoint="1300"
    >

      <div class="column justify-between fit ofsc" >
        <div class="col-auto column justify-between" >
          <div class="col row reverse" >
            <div class="col-auto " >
              <q-btn flat style="color: #FFFFFF" @click='left = !left' label="" class="q-pa-sm"
                     icon-right="close" />
            </div >
          </div >
          <div class=" colrow" >
            <div class="col-12 q-mb-md" >
              <router-link to="/" >
                <q-img
                  src="/statics/logo.svg"
                  spinner-color="white"
                  img-class="q-mx-xl q-mt-n2 "
                  :ratio="16/9"
                  style="max-width: 400px; height: 100px;"
                  contain

                />
              </router-link >
            </div >
          </div >

        </div >
        <div class="col-auto menu_padding" >
          <q-list dense padding
                  class="rounded-borders text-white my-black text-uppercase " >
            <q-item
              :class="{'area': item.name == 'Доставка' }"
              clickable v-ripple :key='key' :to="item.link" v-for="(item, key) in menu" >
              <q-item-section class="q-pl-lg item-menu" >
                <div >
                  <span class="test">{{item.name}}</span >
                </div >
              </q-item-section >
            </q-item >
          </q-list >
          <!--<q-btn outline color="white" type="a"-->
          <!--href='https://docs.google.com/forms/d/e/1FAIpQLSezX3g-AbKCiT-MCl_YIB5ZTYWKWu7m0SNLDjPhdFEAQIZ4gA/viewform'-->
          <!--class='text-uppercase q-btn_my' label="Вакансии" />-->
        </div >
        <div class="col-auto q-pb-xl" >
          <div class="row justify-center items-stretch" >
            <div class="col-auto self-center" >
              <q-btn flat rounded style="color: #FFFFFF" label=""
                     type="a" href="https://www.instagram.com/antrekotbar/"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg" >
                  <path d="M14.2419 0H4.80464C2.15525 0 0 2.15525 0 4.80464V14.2419C0 16.8916 2.15525 19.0465 4.80464 19.0465H14.2419C16.8916 19.0465 19.0465 16.8916 19.0465 14.2419V4.80464C19.0465 2.15525 16.8916 0 14.2419 0ZM16.974 14.2419C16.974 15.7484 15.7483 16.974 14.2419 16.974H4.80464C3.29849 16.974 2.07286 15.7484 2.07286 14.2419V4.80464C2.07286 3.29849 3.29849 2.07286 4.80464 2.07286H14.2419C15.7483 2.07286 16.974 3.29841 16.974 4.80464V14.2419Z"
                        fill="white" />
                  <path d="M13.9672 5.0789C13.2668 5.0789 12.6973 4.50929 12.6973 3.80918C12.6973 3.10898 13.2668 2.53937 13.9672 2.53937C14.6673 2.53937 15.2368 3.10898 15.2368 3.80918C15.2368 4.50929 14.6673 5.0789 13.9672 5.0789Z"
                        fill="white" />
                  <path d="M9.52315 5.07916C7.07287 5.07916 5.0791 7.07293 5.0791 9.52321C5.0791 11.9738 7.07287 13.9675 9.52315 13.9675C11.9737 13.9675 13.9675 11.9738 13.9675 9.52321C13.9675 7.073 11.9737 5.07916 9.52315 5.07916ZM9.52315 12.09C8.10862 12.09 6.95672 10.9384 6.95672 9.52328C6.95672 8.10875 8.10862 6.9574 9.52315 6.9574C10.9382 6.9574 12.0893 8.10875 12.0893 9.52328C12.0893 10.9383 10.9382 12.09 9.52315 12.09Z"
                        fill="white" />
                </svg >
              </q-btn >
            </div >


            <div class="col-auto  self-center" >
              <q-btn flat rounded style="color: #FFFFFF" label=""
                     type="a" href="https://vk.com/antrekotbar"
              >
                <svg width="22" height="13" viewBox="0 0 22 13" fill="none"
                     xmlns="http://www.w3.org/2000/svg" >
                  <path d="M4.17333 8.94022C5.02274 10.1417 5.99841 11.2044 7.25918 11.956C8.68681 12.8079 10.224 13.065 11.8449 12.9867C12.6024 12.9487 12.8302 12.7426 12.865 11.9545C12.8885 11.4147 12.9483 10.8763 13.2027 10.3914C13.4529 9.91547 13.8326 9.82556 14.2702 10.1217C14.4884 10.271 14.672 10.4583 14.8457 10.6585C15.2723 11.1449 15.6854 11.6483 16.1274 12.1187C16.6832 12.7094 17.3422 13.0575 18.1692 12.9866L21.3732 12.988C21.8888 12.9516 22.157 12.2914 21.861 11.6888C21.6524 11.2682 21.3788 10.8937 21.0895 10.5307C20.4348 9.70925 19.6633 9.00964 18.9339 8.26657C18.2763 7.59634 18.2346 7.2073 18.7627 6.43375C19.3409 5.58888 19.9608 4.77784 20.5433 3.93741C21.0867 3.15234 21.6443 2.36843 21.9289 1.42956C22.1112 0.830288 21.95 0.566093 21.3635 0.46021C21.2621 0.442782 21.1564 0.442782 21.0536 0.442782L17.5674 0.438333C17.1379 0.43126 16.9016 0.627055 16.75 1.02462C16.5443 1.56184 16.333 2.09876 16.0881 2.61556C15.5352 3.79113 14.9163 4.92726 14.0492 5.88807C13.8574 6.09984 13.6446 6.36848 13.3251 6.25815C12.9262 6.10582 12.8081 5.41809 12.8148 5.18591L12.812 0.984226C12.7344 0.384954 12.6063 0.11631 12.0352 0H8.41415C7.93196 0 7.68857 0.196159 7.42988 0.51089C7.28258 0.69407 7.23663 0.811475 7.54267 0.872437C8.14295 0.9913 8.4835 1.39777 8.57248 2.02643C8.71586 3.03216 8.70594 4.04199 8.62262 5.05071C8.59915 5.34532 8.55041 5.63846 8.43901 5.91418C8.26392 6.34814 7.98036 6.43543 7.60923 6.16831C7.27441 5.92752 7.03814 5.588 6.80578 5.24687C5.93716 3.96505 5.24504 2.58369 4.67926 1.13211C4.5166 0.712666 4.23444 0.458897 3.80918 0.451459C2.76373 0.43403 1.71723 0.431405 0.67031 0.452917C0.0422299 0.464439 -0.145643 0.783983 0.111652 1.38027C1.25006 4.02594 2.51796 6.59768 4.17333 8.94022Z"
                        fill="white" />
                </svg >
              </q-btn >
            </div >

            <!--<div class="col-auto self-center" >-->
            <!--<q-btn flat rounded style="color: #FFFFFF" label=""-->
            <!--type="a" href="https://vk.com/antrekotbar"-->
            <!--&gt;-->
            <!--<svg width="9" height="19" viewBox="0 0 9 19" fill="none"-->
            <!--xmlns="http://www.w3.org/2000/svg" >-->
            <!--<path d="M1.94511 19H5.94074V9.49475H8.62208C8.62208 9.49475 8.87333 7.961 8.99571 6.28375H5.95629V4.0964C5.95629 3.76972 6.39151 3.33061 6.82275 3.33061H9V0H6.039C1.84672 0 1.94504 3.20177 1.94504 3.67991V6.29503H0V9.49361H1.94504V19H1.94511Z"-->
            <!--fill="white" />-->
            <!--</svg >-->
            <!--</q-btn >-->
            <!--</div >-->
          </div >
        </div >
      </div >

    </q-drawer >

    <q-drawer
      side="right"
      v-model="right"
      v-if="width < 600"
      content-class="menu_drawer"
      :width="263"
    >
      <div class="column justify-between fit ofsc" >
        <div class="col-auto column justify-between" >
          <div class="col row reverse" >
            <div class="col-auto " >
              <q-btn flat style="color: #FFFFFF" @click='right = !right' label="" class="q-pa-sm"
                     icon-right="close" />
            </div >
          </div >
          <div class=" colrow" >
            <div class="col-12 q-mb-md" >
              <router-link to="/" >
                <q-img
                  src="/statics/logo.svg"
                  spinner-color="white"
                  img-class="q-mx-xl q-mt-n2 "
                  :ratio="16/9"
                  style="max-width: 400px; height: 100px;"
                  contain

                />
              </router-link >
            </div >
          </div >

        </div >
        <div class="col-auto menu_padding" >
          <q-list dense padding class="rounded-borders text-white my-black text-uppercase " >
            <q-item clickable v-ripple
                    :class="{'area': item.name == 'Доставка' }"
                    :key='key' :to="item.link" v-for="(item, key) in menu" >
              <q-item-section class="q-pl-lg item-menu" >
                <div >
                  <span class="test" >{{item.name}}</span >
                </div >
              </q-item-section >
            </q-item >
          </q-list >
          <!--<q-btn outline color="white" type="a"-->
          <!--href='https://docs.google.com/forms/d/e/1FAIpQLSezX3g-AbKCiT-MCl_YIB5ZTYWKWu7m0SNLDjPhdFEAQIZ4gA/viewform'-->
          <!--class='text-uppercase q-btn_my' label="Вакансии" />-->
        </div >
        <div class="col-auto q-pb-xl" >
          <div class="row justify-center items-stretch" >
            <div class="col-auto self-center" >
              <q-btn flat rounded style="color: #FFFFFF" label=""
                     type="a" href="https://www.instagram.com/antrekotbar/"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg" >
                  <path d="M14.2419 0H4.80464C2.15525 0 0 2.15525 0 4.80464V14.2419C0 16.8916 2.15525 19.0465 4.80464 19.0465H14.2419C16.8916 19.0465 19.0465 16.8916 19.0465 14.2419V4.80464C19.0465 2.15525 16.8916 0 14.2419 0ZM16.974 14.2419C16.974 15.7484 15.7483 16.974 14.2419 16.974H4.80464C3.29849 16.974 2.07286 15.7484 2.07286 14.2419V4.80464C2.07286 3.29849 3.29849 2.07286 4.80464 2.07286H14.2419C15.7483 2.07286 16.974 3.29841 16.974 4.80464V14.2419Z"
                        fill="white" />
                  <path d="M13.9672 5.0789C13.2668 5.0789 12.6973 4.50929 12.6973 3.80918C12.6973 3.10898 13.2668 2.53937 13.9672 2.53937C14.6673 2.53937 15.2368 3.10898 15.2368 3.80918C15.2368 4.50929 14.6673 5.0789 13.9672 5.0789Z"
                        fill="white" />
                  <path d="M9.52315 5.07916C7.07287 5.07916 5.0791 7.07293 5.0791 9.52321C5.0791 11.9738 7.07287 13.9675 9.52315 13.9675C11.9737 13.9675 13.9675 11.9738 13.9675 9.52321C13.9675 7.073 11.9737 5.07916 9.52315 5.07916ZM9.52315 12.09C8.10862 12.09 6.95672 10.9384 6.95672 9.52328C6.95672 8.10875 8.10862 6.9574 9.52315 6.9574C10.9382 6.9574 12.0893 8.10875 12.0893 9.52328C12.0893 10.9383 10.9382 12.09 9.52315 12.09Z"
                        fill="white" />
                </svg >
              </q-btn >
            </div >


            <div class="col-auto  self-center" >
              <q-btn flat rounded style="color: #FFFFFF" label=""
                     type="a" href="https://vk.com/antrekotbar"
              >
                <svg width="22" height="13" viewBox="0 0 22 13" fill="none"
                     xmlns="http://www.w3.org/2000/svg" >
                  <path d="M4.17333 8.94022C5.02274 10.1417 5.99841 11.2044 7.25918 11.956C8.68681 12.8079 10.224 13.065 11.8449 12.9867C12.6024 12.9487 12.8302 12.7426 12.865 11.9545C12.8885 11.4147 12.9483 10.8763 13.2027 10.3914C13.4529 9.91547 13.8326 9.82556 14.2702 10.1217C14.4884 10.271 14.672 10.4583 14.8457 10.6585C15.2723 11.1449 15.6854 11.6483 16.1274 12.1187C16.6832 12.7094 17.3422 13.0575 18.1692 12.9866L21.3732 12.988C21.8888 12.9516 22.157 12.2914 21.861 11.6888C21.6524 11.2682 21.3788 10.8937 21.0895 10.5307C20.4348 9.70925 19.6633 9.00964 18.9339 8.26657C18.2763 7.59634 18.2346 7.2073 18.7627 6.43375C19.3409 5.58888 19.9608 4.77784 20.5433 3.93741C21.0867 3.15234 21.6443 2.36843 21.9289 1.42956C22.1112 0.830288 21.95 0.566093 21.3635 0.46021C21.2621 0.442782 21.1564 0.442782 21.0536 0.442782L17.5674 0.438333C17.1379 0.43126 16.9016 0.627055 16.75 1.02462C16.5443 1.56184 16.333 2.09876 16.0881 2.61556C15.5352 3.79113 14.9163 4.92726 14.0492 5.88807C13.8574 6.09984 13.6446 6.36848 13.3251 6.25815C12.9262 6.10582 12.8081 5.41809 12.8148 5.18591L12.812 0.984226C12.7344 0.384954 12.6063 0.11631 12.0352 0H8.41415C7.93196 0 7.68857 0.196159 7.42988 0.51089C7.28258 0.69407 7.23663 0.811475 7.54267 0.872437C8.14295 0.9913 8.4835 1.39777 8.57248 2.02643C8.71586 3.03216 8.70594 4.04199 8.62262 5.05071C8.59915 5.34532 8.55041 5.63846 8.43901 5.91418C8.26392 6.34814 7.98036 6.43543 7.60923 6.16831C7.27441 5.92752 7.03814 5.588 6.80578 5.24687C5.93716 3.96505 5.24504 2.58369 4.67926 1.13211C4.5166 0.712666 4.23444 0.458897 3.80918 0.451459C2.76373 0.43403 1.71723 0.431405 0.67031 0.452917C0.0422299 0.464439 -0.145643 0.783983 0.111652 1.38027C1.25006 4.02594 2.51796 6.59768 4.17333 8.94022Z"
                        fill="white" />
                </svg >
              </q-btn >
            </div >

            <!--<div class="col-auto self-center" >-->
            <!--<q-btn flat rounded style="color: #FFFFFF" label=""-->
            <!--type="a" href="https://vk.com/antrekotbar"-->
            <!--&gt;-->
            <!--<svg width="9" height="19" viewBox="0 0 9 19" fill="none"-->
            <!--xmlns="http://www.w3.org/2000/svg" >-->
            <!--<path d="M1.94511 19H5.94074V9.49475H8.62208C8.62208 9.49475 8.87333 7.961 8.99571 6.28375H5.95629V4.0964C5.95629 3.76972 6.39151 3.33061 6.82275 3.33061H9V0H6.039C1.84672 0 1.94504 3.20177 1.94504 3.67991V6.29503H0V9.49361H1.94504V19H1.94511Z"-->
            <!--fill="white" />-->
            <!--</svg >-->
            <!--</q-btn >-->
            <!--</div >-->
          </div >
        </div >
      </div >

    </q-drawer>

    <q-page-container class="" >
      <div class="blk_burger flex-column mobile-hide" v-if='!left && width >599'>
        <q-btn flat style="color: #FFFFFF"  @click='left = !left' label="" class="burger-button"
        >
          <div class="q-px-sm q-py-md" >
            <svg width="29" height="15" viewBox="0 0 29 15" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path d="M28.0938 2.06255H0.906303C0.406034 2.06255 7.82013e-05 1.65652 7.82013e-05 1.15632C7.82013e-05 0.656049 0.406109 0.250092 0.906303 0.250092H28.0938C28.594 0.250092 29 0.656124 29 1.15632C29 1.65652 28.594 2.06255 28.0938 2.06255Z"
                    fill="white" />
              <path d="M0.906303 6.59381H28.0938C28.594 6.59381 29 6.99984 29 7.50003C29 8.00023 28.594 8.40626 28.0938 8.40626H0.906303C0.406034 8.40626 7.82013e-05 8.00023 7.82013e-05 7.50003C7.82013e-05 6.99984 0.406034 6.59381 0.906303 6.59381Z"
                    fill="white" />
              <path d="M0.906298 12.9376H19.0313C19.5315 12.9376 19.9375 13.3436 19.9375 13.8438C19.9375 14.3441 19.5315 14.75 19.0313 14.75H0.906298C0.406029 14.75 7.24792e-05 14.344 7.24792e-05 13.8438C-3.8147e-06 13.3435 0.406029 12.9376 0.906298 12.9376Z"
                    fill="white" />
            </svg >
          </div >
        </q-btn >
        <div class="column justify-center">
<!--          <q-img-->
<!--            src="/statics/logo.svg"-->
<!--            spinner-color="white"-->
<!--            img-class="q-mx-sm "-->
<!--            :ratio="16/9"-->
<!--            style="width: 100px; height: 40px;"-->
<!--            contain-->
<!--          />-->
        </div >
      </div >
      <div class="burger-blk-mobile row justify-center  items-center desktop-hide" v-if='!right'>

<!--        <q-img-->
<!--          src="/statics/logo.svg"-->
<!--          spinner-color="white"-->
<!--          img-class="q-mx-sm"-->
<!--          :ratio="16/9"-->
<!--          style="width: 100px; height: 40px;"-->
<!--          contain-->
<!--        />-->

        <q-btn flat style="color: #FFFFFF"  @click='right = !right' label="" class="burger-button-left mirrorX"
        >
          <div class="q-px-sm q-py-md" >
            <svg width="29" height="15" viewBox="0 0 29 15" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path d="M28.0938 2.06255H0.906303C0.406034 2.06255 7.82013e-05 1.65652 7.82013e-05 1.15632C7.82013e-05 0.656049 0.406109 0.250092 0.906303 0.250092H28.0938C28.594 0.250092 29 0.656124 29 1.15632C29 1.65652 28.594 2.06255 28.0938 2.06255Z"
                    fill="white" />
              <path d="M0.906303 6.59381H28.0938C28.594 6.59381 29 6.99984 29 7.50003C29 8.00023 28.594 8.40626 28.0938 8.40626H0.906303C0.406034 8.40626 7.82013e-05 8.00023 7.82013e-05 7.50003C7.82013e-05 6.99984 0.406034 6.59381 0.906303 6.59381Z"
                    fill="white" />
              <path d="M0.906298 12.9376H19.0313C19.5315 12.9376 19.9375 13.3436 19.9375 13.8438C19.9375 14.3441 19.5315 14.75 19.0313 14.75H0.906298C0.406029 14.75 7.24792e-05 14.344 7.24792e-05 13.8438C-3.8147e-06 13.3435 0.406029 12.9376 0.906298 12.9376Z"
                    fill="white" />
            </svg >
          </div >
        </q-btn >

      </div >
      <router-view />
    </q-page-container >
  </q-layout >
</template >

<script >
import {mapState} from 'vuex';
import checkPage from 'pages/check-page.vue';
import headerPage from '../components/header-page';

import VueScrollTo from 'vue-scrollto';
export default {
  components: {
    checkPage,
    headerPage
  },
  created() {
    if ( typeof window !== 'undefined') {
      window.addEventListener('resize', this.updateWidth);
    }
  },
  mounted(){
    this.width = window.innerWidth
  },
  data() {
    return {
      width:null,
      activePoint: 'null',
      left: false,
      right:false,
      menu: [
        {name: 'Меню', link: '/menu'},
        {name: 'Акции', link: '/promotions'},
        // {name: 'Бонусы', link: '/bonus'},
        {name: 'Контакты', link: '/contact'},
        {name: 'Отзывы', link: '/feedback'},
        {name: 'Интерьер', link: '/interior'},
        {name: 'Доставка', link: '/order'},
        // {name: 'Вакансия', link: '/vacancy'}
      ]
    }
  },
  computed: {
    ...mapState('age', ['check', 'isOld'])
  }
}
</script >
<style scope >
.menu_drawer {
  background: linear-gradient(180deg, #970E00 0%, #E84437 100%);
  overflow: auto;
}
.ofsc {
  min-height: 690px;
  overflow: auto;
}
.item-menu {
  font-size: 24px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.q-btn_my {
  margin-top: 20px;
  margin-left: 40px;
  font-size: 10px;
  padding: 7px 0px;
  border: 3px solid #FFFFFF;
  border-radius: 0px;
  letter-spacing: 0.25em;
  font-family: 'mbold';
}
.blk_burger {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  z-index: 1000;
  flex-direction: row;
  justify-content: center;
}
.burger-blk-mobile{
  position: fixed;
  width: 45px;
  height: 70px;
  top: 0;
  right: 0;
  z-index: 1000;
}
.burger-button-left{
  position: absolute;
  width: 70px;
  height: 70px;
  top: 0;
  right: 0;
  z-index: 1000;
}
.burger-button {
  width: 70px;
  height: 70px;
  top: 0;
  left: 0;
  z-index: 1000;
}
.mirrorX { transform: scale(-1, 1); }
.menu_padding {
  padding-bottom: 70px;
}
.pulsate-css {
  animation: pulsate 1s ease-out;
  animation-iteration-count: infinite;
  opacity: 0.0;
  /* you dont need the stuff below, but its what I used to create the loading circle */
  border: 3px solid #999;
  border-radius: 30px;
  height: 18px;
  width: 18px;
  position: relative;
  display: inline-block;
  margin-top: 20px;
  text-align: center;
}
.opacityPulse-css {
  animation: opacityPulse 2s ease-out;
  animation-iteration-count: infinite;
  opacity: 1;
}
a.area:not(.q-router-link--exact-active) {
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  animation: blur .75s ease-out infinite;
  text-shadow: 0px 0px 1px #fff, 0px 0px 2px #fff;
}
@keyframes blur {
  from {
    text-shadow:0px 0px 1px #fff,
    0px 0px 1px #fff,
    0px 0px 2px #fff,
    0px 0px 2px #fff,
    0px 0px 2px #fff,
    0px 0px 2px #fff,
    0px 0px 2px #fff,
    0px 0px 2px #fff,
    0px 0px 10px #fff,
    0px 0px 10px #fff,
    0px 0px 10px #7B96B8,
    0px 0px 15px #7B96B8,
    0px 5px 15px #7B96B8,
    0px 5px 15px #7B96B8,
    0px 5px 15px #7B96B8,
    0px 5px 15px #7B96B8,
    0px -10px 15px #7B96B8,
    0px -10px 15px #7B96B8;
  }
}
::-webkit-scrollbar {
  background: transparent;
}

</style >
