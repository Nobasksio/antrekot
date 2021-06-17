<template >
    <div class="text-white col-12">
        <div class="q-pt-lg row justify-between text-white">
            <div class="q-py-md col-auto">
                <div class='row col-12 justify-start' >
                    <div class="bold text-white name-feedback q-py-none col">{{feedback.Name}}</div>
                    <div class="q-py-none col-auto  q-px-md">
                        <q-rating readonly
                                  size="1.5em"
                                  color="grey"
                                  color-selected="warning"
                                  icon="img:statics/star-gray.svg"
                                  icon-selected="img:statics/star.svg"
                                  v-model="(feedback.rate).substr(1,1)"
                        >

                        </q-rating>
                    </div>
                    <div class="caption restaraunt-feedback grey-text lighten-1 q-py-none col">
                        <div class="pt-1" v-if="feedback.restaurant">Бар {{feedback.restaurant.Name}}</div>
                    </div>
                </div>
            </div>
            <q-space></q-space>
            <div class="col-auto grey--text name-feedback lighten-1 self-center q-py-none q-px-md">
                <div>{{ feedback.date.substr(0,10) }}</div>
            </div>

        </div>
        <div class="row q-pb-md">
            <div class="col body-2 text-feedback mregular">
                {{feedback.text}}
            </div>
        </div>
        <feedback-answer :answer="feedback.answer">

        </feedback-answer>
    </div>

</template >

<script >
    import feedbackAnswer from './feedback-answer'

    export default {
        name: "feedback-item",
        components:{
            feedbackAnswer
        },
        props:['feedback'],
        data(){
            return {

            }
        },

    }
</script >

<style scoped >
    .body-2{
        line-height: 18px;
    }

    .name-feedback {
      font-family: 'mbold';
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.1em;
    }

    .text-feedback {
      font-family: 'mregular';
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      font-style: normal;
      letter-spacing: 0.125em;
    }

    .restaraunt-feedback {
      color: #504C4C;
    }
</style >
