<template >
    <div class="q-px-lg text-white">
        <div class="q-pt-lg row justify-between text-white">
            <div class="q-py-md col-auto">
                <div class='row justify-start' >
                    <div class="bold q-py-none col">{{feedback.Name}}</div>
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
                    <div class="caption grey--text lighten-1 q-py-none col-auto">
                        <div class="pt-1" v-if="feedback.bar"> {{feedback.bar.Name}}</div>
                    </div>
                </div>
            </div>
            <q-space></q-space>
            <div class="col-auto bold grey--text lighten-1 self-center q-py-none q-px-md">
                <div>{{ feedback.date.substr(0,10) }}</div>
            </div>

        </div>
        <div class="row q-pb-md">
            <div class="col body-2">
                {{feedback.ftext}}
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

</style >