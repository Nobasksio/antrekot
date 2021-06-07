<template >
<div>
  <div v-if="windowWidth < 1024">
  <menu></menu>
  <promotions></promotions>
  <interior></interior>
  <feedback></feedback>
  <contact></contact>
  </div>
</div>
</template >

<script >

import headerPage from '../components/header-page'
import Promotions from "./promotions";
import Interior from "./interior";
import Feedback from "./feedback";
import Contact from "./contact";

export default {
  name: "AllPagesMobile",

  components: {
    Contact,
    Feedback,
    Interior,
    Promotions,
    headerPage,
  },
  data() {
    return {
      windowWidth: null,
    }
  },
  methods: {
    setWindowWidth() {
      this.windowWidth = window.innerWidth;
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener('resize', this.setWindowWidth);
      this.slideHeight();
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.setWindowWidth);
  },
};

</script >

<style scoped lang="scss">

</style >
