<template>
  <q-layout view="lHh LpR lFf" class="check relative-position">
    <q-page class="column main_b justify-between items-center position-relative">
      <div class="col logo-check">
        <q-img
          src="/statics/logo.svg"
          spinner-color="white"
          img-class="q-mx-xl q-mt-n2"
          style="width: 300px; height: 200px;"
          contain
        />
      </div>
      <div class="col ">

        <div class="col text-white lspacing25 mregular text-uppercase text-center">
          Доступ на не цензурированный веб-сайт<br> разрешен только лицам старше 18 лет
        </div>
        <div class="col my-black text-center q18">
          Вам уже есть <span class="text-red">18</span>?
        </div>
        <div class="col flex justify-center">
          <q-btn outline color="white"
                 @click="setOld"
                 class='text-uppercase q-btn_my_black' label="Да">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" class="q-ml-sm"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.269457 11.1147C0.269457 11.474 0.560656 11.7652 0.919469 11.7648L19.7277 11.7647L16.211 15.2814C15.9555 15.5369 15.9555 15.9517 16.211 16.2072C16.4666 16.4628 16.8814 16.4628 17.1369 16.2072L21.7665 11.5777C21.8892 11.455 21.96 11.2888 21.96 11.1147C21.96 10.9406 21.8892 10.7744 21.7665 10.6518L17.1369 6.02217C16.8813 5.7666 16.4665 5.76664 16.211 6.02217C15.9555 6.27769 15.9555 6.69254 16.211 6.94806L19.7277 10.4647L0.919469 10.4647C0.560194 10.4647 0.268996 10.7559 0.269457 11.1147Z"
                fill="white"/>
            </svg>
          </q-btn>
          <q-btn outline color="white"
                 @click="setYoung"
                 class='text-uppercase q-btn_my_black q-ml-md' label="Нет">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" class="q-ml-sm"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.269457 11.1147C0.269457 11.474 0.560656 11.7652 0.919469 11.7648L19.7277 11.7647L16.211 15.2814C15.9555 15.5369 15.9555 15.9517 16.211 16.2072C16.4666 16.4628 16.8814 16.4628 17.1369 16.2072L21.7665 11.5777C21.8892 11.455 21.96 11.2888 21.96 11.1147C21.96 10.9406 21.8892 10.7744 21.7665 10.6518L17.1369 6.02217C16.8813 5.7666 16.4665 5.76664 16.211 6.02217C15.9555 6.27769 15.9555 6.69254 16.211 6.94806L19.7277 10.4647L0.919469 10.4647C0.560194 10.4647 0.268996 10.7559 0.269457 11.1147Z"
                fill="white"/>
            </svg>
          </q-btn>
        </div>

      </div>
      <div class="col text-white lspacing25 mregular text-uppercase text-center flex">

        <div class="self-end q-pb-md">
          Я ПОДТВЕРЖДАЮ, ЧТО МНЕ ИСПОЛНИЛОСЬ 18 ИЛИ БОЛЕЕ ЛЕТ
        </div>
      </div>
      <div class="row justify-center items-stretch absolute-right">
        <div class="column justify-center social-box">
          <div class="col-auto self-center q-mb-lg">
            <q-btn flat rounded style="color: #FFFFFF" label=""
                   type="a" href="https://www.instagram.com/antrekotbar/"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.2419 0H4.80464C2.15525 0 0 2.15525 0 4.80464V14.2419C0 16.8916 2.15525 19.0465 4.80464 19.0465H14.2419C16.8916 19.0465 19.0465 16.8916 19.0465 14.2419V4.80464C19.0465 2.15525 16.8916 0 14.2419 0ZM16.974 14.2419C16.974 15.7484 15.7483 16.974 14.2419 16.974H4.80464C3.29849 16.974 2.07286 15.7484 2.07286 14.2419V4.80464C2.07286 3.29849 3.29849 2.07286 4.80464 2.07286H14.2419C15.7483 2.07286 16.974 3.29841 16.974 4.80464V14.2419Z"
                  fill="white"/>
                <path
                  d="M13.9672 5.0789C13.2668 5.0789 12.6973 4.50929 12.6973 3.80918C12.6973 3.10898 13.2668 2.53937 13.9672 2.53937C14.6673 2.53937 15.2368 3.10898 15.2368 3.80918C15.2368 4.50929 14.6673 5.0789 13.9672 5.0789Z"
                  fill="white"/>
                <path
                  d="M9.52315 5.07916C7.07287 5.07916 5.0791 7.07293 5.0791 9.52321C5.0791 11.9738 7.07287 13.9675 9.52315 13.9675C11.9737 13.9675 13.9675 11.9738 13.9675 9.52321C13.9675 7.073 11.9737 5.07916 9.52315 5.07916ZM9.52315 12.09C8.10862 12.09 6.95672 10.9384 6.95672 9.52328C6.95672 8.10875 8.10862 6.9574 9.52315 6.9574C10.9382 6.9574 12.0893 8.10875 12.0893 9.52328C12.0893 10.9383 10.9382 12.09 9.52315 12.09Z"
                  fill="white"/>
              </svg>
            </q-btn>
          </div>


          <div class="col-auto  self-center">
            <q-btn flat rounded style="color: #FFFFFF" label=""
                   type="a" href="https://vk.com/antrekotbar"
            >
              <svg width="22" height="13" viewBox="0 0 22 13" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.17333 8.94022C5.02274 10.1417 5.99841 11.2044 7.25918 11.956C8.68681 12.8079 10.224 13.065 11.8449 12.9867C12.6024 12.9487 12.8302 12.7426 12.865 11.9545C12.8885 11.4147 12.9483 10.8763 13.2027 10.3914C13.4529 9.91547 13.8326 9.82556 14.2702 10.1217C14.4884 10.271 14.672 10.4583 14.8457 10.6585C15.2723 11.1449 15.6854 11.6483 16.1274 12.1187C16.6832 12.7094 17.3422 13.0575 18.1692 12.9866L21.3732 12.988C21.8888 12.9516 22.157 12.2914 21.861 11.6888C21.6524 11.2682 21.3788 10.8937 21.0895 10.5307C20.4348 9.70925 19.6633 9.00964 18.9339 8.26657C18.2763 7.59634 18.2346 7.2073 18.7627 6.43375C19.3409 5.58888 19.9608 4.77784 20.5433 3.93741C21.0867 3.15234 21.6443 2.36843 21.9289 1.42956C22.1112 0.830288 21.95 0.566093 21.3635 0.46021C21.2621 0.442782 21.1564 0.442782 21.0536 0.442782L17.5674 0.438333C17.1379 0.43126 16.9016 0.627055 16.75 1.02462C16.5443 1.56184 16.333 2.09876 16.0881 2.61556C15.5352 3.79113 14.9163 4.92726 14.0492 5.88807C13.8574 6.09984 13.6446 6.36848 13.3251 6.25815C12.9262 6.10582 12.8081 5.41809 12.8148 5.18591L12.812 0.984226C12.7344 0.384954 12.6063 0.11631 12.0352 0H8.41415C7.93196 0 7.68857 0.196159 7.42988 0.51089C7.28258 0.69407 7.23663 0.811475 7.54267 0.872437C8.14295 0.9913 8.4835 1.39777 8.57248 2.02643C8.71586 3.03216 8.70594 4.04199 8.62262 5.05071C8.59915 5.34532 8.55041 5.63846 8.43901 5.91418C8.26392 6.34814 7.98036 6.43543 7.60923 6.16831C7.27441 5.92752 7.03814 5.588 6.80578 5.24687C5.93716 3.96505 5.24504 2.58369 4.67926 1.13211C4.5166 0.712666 4.23444 0.458897 3.80918 0.451459C2.76373 0.43403 1.71723 0.431405 0.67031 0.452917C0.0422299 0.464439 -0.145643 0.783983 0.111652 1.38027C1.25006 4.02594 2.51796 6.59768 4.17333 8.94022Z"
                  fill="white"/>
              </svg>
            </q-btn>
          </div>
        </div>
      </div>
    </q-page>

  </q-layout>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  name: "check-page",
  methods: {
    ...mapActions('age', ['setOld', 'setYoung'])
  },
  computed: {
    ...mapState('age', ['check', 'isOld'])
  }
}
</script>

<style scoped>
.social-box {
  margin-right: 98px;
}

.main_b {
  background: url(/statics/check2.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: 101;
}

.logo-check {
  height: 100px;
}

.q18 {
  color: #ffffff;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height */
  text-align: center;
  text-transform: uppercase;
  padding: 20px 0px;
}
</style>
