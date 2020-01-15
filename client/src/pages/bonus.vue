<template >
    <q-page class="" >
        <div class="row tl_padding_page" >

            <div class="col-auto justify-center items-center content-center " >
                <div class="text-h4 text-white zag text-center" >
                    Бонусы
                </div >
                <div class="tag col" >
                    #ANTRKT
                </div >
            </div >
            <div class="col" >
              
            </div >

        </div >
        <div class="h-100" >
          ds
        </div >

    </q-page >
</template >

<script >
    export default {
        name: "bonus",
        data: function () {
            return {
                tab: 1,
                menus: [
                    {
                        name: 'ОСНОВНОЕ', id: 1
                    },
                    {
                        name: 'БАРНОЕ', id: 2
                    },
                    {
                        name: 'ДЕТСКОЕ', id: 3
                    },
                    {
                        name: 'КОМБО-ОБЕД', id: 4
                    }
                ]
            }
        }
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

    .tag {
        font-size: 56px;
        color: #282828;
        font-family: mblack;
        z-index: 20;
        position: relative;

    }

    .h-100 {
        height: 400px;
    }

</style >