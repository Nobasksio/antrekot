<template>
  <q-page-container>
    <div class="mobile-only">
      <menu-page></menu-page>
      <promotions></promotions>
      <interior></interior>
      <feedback></feedback>
      <contact></contact>
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
