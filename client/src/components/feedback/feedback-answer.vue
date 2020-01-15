<template >
    <div class="answer q-py-none q-pl-md " v-if="answer.length > 0">
        <div class="my-red bold">
            Менеджер Sushi-Studio
        </div>
        <div class="body-2">
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
    .body-2{
        line-height: 18px;
    }
</style >