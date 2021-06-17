<template >
    <div class="answer q-py-none q-pl-md" v-if="answer.length > 0">
        <div class="my-red bold name-feedback">
            Менеджер Антрекот
        </div>
        <div class="body-2 text-feedback">
            {{answer}}

        </div>
    </div>
</template >

<script >
    export default {
        name: "feedback-answer",
        props:['answer']
    }
</script >

<style scoped >
    .answer{
        border-left: 3px solid #E84437;
    }
    .my-red{
        color:#E84437
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

</style >
