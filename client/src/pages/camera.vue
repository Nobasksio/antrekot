<template >
    <q-page class="" style="height: 1px">
        <div class="row tl_padding_page" >

            <header-page name_page="Трансляция"></header-page>

        </div>
        <div class="text-center">
            <iframe width='100%' height='480' src='https://rtsp.me/embed/ztb9HEGE/' frameborder='0' allowfullscreen></iframe>

        </div>
    </q-page>

</template >

<script >
    import headerPage from '../components/header-page'
    export default {
        name: "camera",
        components: {
            headerPage,
        },
    }
</script >

<style scoped >

    .text-h4 {
        font-family: mblack;
    }
    .zag {
        margin-bottom: -38px;
        z-index: 100;
        position: relative;
        margin-left: 70px;
    }

    .tag {
        font-size: 56px;
        color: #282828;
        font-family: mblack;
        z-index: 20;
        position: relative;

    }
</style >