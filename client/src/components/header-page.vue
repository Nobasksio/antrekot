<template >
    <div class="row col-12">
        <div class="col-auto-md justify-center items-center content-center desktop-only" >
            <div class="text-h4 text-white zag text-center" >
                {{ name_page }}
            </div >
            <div class="tag col" >
                #ANTRKT
            </div >
        </div >
        <div class="col-12 justify-start items-center content-center mobile-only row" >
            <div class="text-h4 text-white q-px-md q-py-lg " >
                {{name_page}}
            </div >
            <div class="red_line col">

            </div>
        </div >
    </div>
</template >

<script >
    export default {
        name: "header-page",
        props: ['name_page']
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

    }
    .zag_mob{
    }
    .tag {
        font-size: 56px;
        color: #282828;
        font-family: mblack;
        z-index: 20;
        position: relative;

    }
    .red_line{
        border-bottom: 1px solid red;
    }

</style >