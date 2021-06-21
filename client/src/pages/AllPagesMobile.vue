<template>
  <q-page-container >
    <div class="mobile-only q-px-md">
      <menu-page id="menu-page"></menu-page>
      <promotions id="promotions"></promotions>
      <interior id="interior"></interior>
      <feedback id="feedback"></feedback>
      <contact id="contact"></contact>
    </div>
  </q-page-container>
</template>

<script>

import Promotions from "./promotions";
import Interior from "./interior";
import Feedback from "./feedback";
import Contact from "./contact";
import MenuPage from "./MenuPage";

export default {
  name: 'AllPagesMobile',

  components: {
    MenuPage,
    Contact,
    Feedback,
    Interior,
    Promotions,
  },
  data() {
    return {
    }
  },
  methods: {
  },

};

</script>

<style scoped lang="scss">

</style>
