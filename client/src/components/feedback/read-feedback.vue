<template >
    <template v-for="item in show_fedbacks">
        <feedback-item :feedback="item"></feedback-item >
        <v-divider class="d-block d-md-none"></v-divider>
    </template>
</template >

<script >
    export default {
        name: "read-feedback"
    }
</script >

<style scoped >

</style >