<template>
  <div class="row col-12 q-mb-md-xl q-mb-xs-lg">
    <div class="col-auto-md justify-center items-center content-center block-hide-desc antrekot-box">
      <div class="text-h4 text-white zag ">
        {{ name_page }}
      </div>
      <div class="tag col">
        #ANTRKT
      </div>
    </div>
    <div class="col-12 justify-start items-center content-center block-hide-mob row ">
      <div class="col-auto text-h4 text-white   ">
        {{ name_page }}
      </div>
      <div class=" q-ml-sm red_line col-grow">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-page",
  props: ['name_page']
}
</script>

<style scoped>
.antrekot-box {
  margin-left: -30px;
}

.text-h4 {
  font-family: mblack;
  font-size: 36px;
  line-height: 20px;
}

.zag {
  margin-left: 30px;
  margin-bottom: -38px;
  z-index: 100;
  position: relative;

}

.tag {
  font-size: 56px;
  color: #282828;
  font-family: mblack;
  z-index: 20;
  position: relative;

}
.block-hide-desc {
  display: block;
}

.block-hide-mob {
  display: none;
}

.red_line {
  border-bottom: 1px solid red;
}
@media (max-width: 1024px) {
  .antrekot-box {
    margin-left: 0;
  }
  .tag {
    display: none;

  }
  .block-hide-desc {
    display: none;
  }

  .block-hide-mob {
    display: flex;
  }
  .zag {
    margin-left:0px;
    margin-bottom: 0px;

  }
  .text-h4 {
    font-size: 24px;
  }
}
</style>
