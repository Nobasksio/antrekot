<template>

  <div class="col-2 text-white my-mbold blk_big_screen card_contact"
       v-if="width > 1200"
       :class="{ 'card_contact_active': choosenRest.id == restaurant.id}"
       @click='setChoosenRest(restaurant)'>
    <div class="q-pb-md lspacing25 text-uppercase name-box name-field">
      <span v-html="brakeName(restaurant.Name)"> </span>
    </div>
    <div class="red-delimeter ">

    </div>
    <div class="dop_contact_info">
      <div class="row q-pb-sm q-pt-xl lspacing10 content-stretch items-center">
        <div class="col-2">
          <div class="my-baloon-icon">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.49953 0C5.10468 0 2.34277 2.7619 2.34277 6.15672C2.34277 10.3698 7.85247 16.5548 8.08705 16.8161C8.30738 17.0615 8.69207 17.0611 8.91201 16.8161C9.14659 16.5548 14.6563 10.3698 14.6563 6.15672C14.6562 2.7619 11.8943 0 8.49953 0ZM8.49953 15.5965C6.64523 13.3938 3.45149 9.04825 3.45149 6.15679C3.45149 3.37324 5.71601 1.10872 8.49953 1.10872C11.283 1.10872 13.5476 3.37324 13.5476 6.15676C13.5475 9.04835 10.3543 13.3931 8.49953 15.5965Z"
                fill="white"/>
              <path
                d="M8.49993 3.05913C6.7919 3.05913 5.40234 4.44871 5.40234 6.15675C5.40234 7.86478 6.79193 9.25436 8.49993 9.25436C10.2079 9.25436 11.5975 7.86478 11.5975 6.15675C11.5975 4.44871 10.2079 3.05913 8.49993 3.05913ZM8.49993 8.14565C7.40323 8.14565 6.51106 7.25345 6.51106 6.15675C6.51106 5.06005 7.40326 4.16785 8.49993 4.16785C9.5966 4.16785 10.4888 5.06005 10.4888 6.15675C10.4888 7.25345 9.5966 8.14565 8.49993 8.14565Z"
                fill="white"/>
            </svg>
          </div>
        </div>
        <div class="col-10 text-14">
          {{ restaurant.Address }}
        </div>
      </div>
      <div class="q-pb-xl lspacing10">
        <a :href="`tel:${cleanPhone(restaurant.Phone)}`" class="phone_class lspacing10 name-field">
          {{ restaurant.Phone }}
        </a>
      </div>
      <div class="mregular text-12 q-mb-md">
        Режим работы
      </div>
      <div class=" text-14">
        <span v-html="restaurant.Work_time"></span>
      </div>
    </div>
  </div>

  <div class="col-12 text-white my-mbold blk_md_screen card_contact relative-position"
       v-else
       :class="{ 'card_contact_active': choosenRest.id == restaurant.id}"
       @click='setChoosenRest(restaurant)'
  >
    <div class=""
         :class="{ 'interior-square absolute-right': choosenRest.id == restaurant.id}"></div>
    <div class="q-pb-md lspacing25 text-uppercase name-field">
      {{ restaurant.Name }}
      <div class="active-line ">

      </div>
    </div>

    <div class="dop_contact_info">
      <div class="row q-pb-sm q-pt-xl lspacing10 content-stretch items-center">
        <div class="col-2">
          <div class="my-baloon-icon">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.49953 0C5.10468 0 2.34277 2.7619 2.34277 6.15672C2.34277 10.3698 7.85247 16.5548 8.08705 16.8161C8.30738 17.0615 8.69207 17.0611 8.91201 16.8161C9.14659 16.5548 14.6563 10.3698 14.6563 6.15672C14.6562 2.7619 11.8943 0 8.49953 0ZM8.49953 15.5965C6.64523 13.3938 3.45149 9.04825 3.45149 6.15679C3.45149 3.37324 5.71601 1.10872 8.49953 1.10872C11.283 1.10872 13.5476 3.37324 13.5476 6.15676C13.5475 9.04835 10.3543 13.3931 8.49953 15.5965Z"
                fill="white"/>
              <path
                d="M8.49993 3.05913C6.7919 3.05913 5.40234 4.44871 5.40234 6.15675C5.40234 7.86478 6.79193 9.25436 8.49993 9.25436C10.2079 9.25436 11.5975 7.86478 11.5975 6.15675C11.5975 4.44871 10.2079 3.05913 8.49993 3.05913ZM8.49993 8.14565C7.40323 8.14565 6.51106 7.25345 6.51106 6.15675C6.51106 5.06005 7.40326 4.16785 8.49993 4.16785C9.5966 4.16785 10.4888 5.06005 10.4888 6.15675C10.4888 7.25345 9.5966 8.14565 8.49993 8.14565Z"
                fill="white"/>
            </svg>
          </div>
        </div>
        <div class="col-10 text-14">
          {{ restaurant.Address }}
        </div>
      </div>
      <div class="q-pb-xl lspacing10">
        <a :href="`tel:${cleanPhone(restaurant.Phone)}`" class="phone_class lspacing10 name-field">
          {{ restaurant.Phone }}
        </a>
      </div>
      <div class="mregular text-12 q-mb-md">
        Режим работы
      </div>
      <div class=" text-14 lspacing10">
        <span v-html="restaurant.Work_time"></span>
      </div>
    </div>
  </div>


</template>

<script>
import {mapMutations, mapState} from 'vuex';


export default {
  name: "contact-item",
  props: ['restaurant'],
  created() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.updateWidth);
    }
  },
  mounted() {
    this.width = window.innerWidth
  },
  data() {
    return {
      width: null,
    }
  },
  methods: {
    ...mapMutations('common', ['setChoosenRest']),
    updateWidth() {
      this.width = window.innerWidth;
    },
    cleanPhone(dirty_phone) {

      return dirty_phone.replace(/\D/, '')
    },
    brakeName(name) {
      return name.replace(' ', '<br>')

    }
  },
  computed: {
    ...mapState('common', ['choosenRest'])
  }
}
</script>

<style scoped>
.active-line {
  background-image: url("../../assets/activeMenuLine.png");
  background-position: bottom;
  height: 3px;
  width: 100%
}

.interior-square {
  background-image: url("../../assets/interiorSqare.png");
  height: 58px;
  width: 29px;
  right: -28px;
  top: 40%;
  transform: scale(-1, 1);
}

.name-box {
  height: 75px;
  font-size: 16px;
}

.name-field {
  font-size: 16px;
  line-height: 20px;
}

@media (min-width: 1201px) {
  .card_contact {
    padding: 30px 20px;
  }

  .card_contact_active {
    background: linear-gradient(180deg, #970E00 0%, #E84437 100%);
    padding: 60px 3%;
    width: 20%;
    margin-top: -30px;
    position: relative;
    z-index: 100000000000;
  }

  .card_contact:hover {
    background: linear-gradient(180deg, #970E00 0%, #E84437 100%);
    padding: 60px 3%;
    margin-top: -30px;
    position: relative;
    z-index: 100000000000;
    width: 20%;
  }
}

.blk_big_screen {
  display: block;
}

.blk_md_screen {
  display: none;
}


@media (max-width: 1200px) {
  .dop_contact_info {
    display: none;
  }

  .blk_big_screen {
    display: none;
  }

  .blk_md_screen {
    display: block;
  }

  .card_contact {
    padding: 30px 20px;
  }

  .card_contact_active {
    background: linear-gradient(180deg, #970E00 0%, #E84437 100%);
    margin: 0 0px;
    position: relative;
    z-index: 1000;
    width: 100%;
  }

  .card_contact_active > .dop_contact_info {
    display: block;
  }

  .card_contact:hover {
    background: linear-gradient(180deg, #970E00 0%, #E84437 100%);
    margin: 0 0px;
    position: relative;
    z-index: 100000000000;
    width: 100%;
  }

  .card_contact:hover > .dop_contact_info {
    display: block;
  }

}

.phone_class {
  text-decoration: none;
  color: #fff;
  line-height: 17px;
}

</style>
