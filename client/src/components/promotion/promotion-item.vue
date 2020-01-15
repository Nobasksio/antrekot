<template >
    <div class="col-12 col-md-6 q-pa-md" >


        <q-card class="my-card cursor-pointer" clickable v-ripple
                @click="medium = !medium" >
            <q-img
                    src="/statics/akc.jpg"
                    basic
            >
            </q-img >
        </q-card >
        <q-dialog
                v-model="medium"
        >
            <q-card style="width: 600px; max-width: 80vw;" class="bg-black text-white" >
                <q-img src="/statics/akc.jpg" />


                <q-card-section >
                    <div class=" mregular">
                        <div class="col text-h6 ellipsis q-py-lg" >Играй в кости</div >
                        <div >
                            <p >Каждый раз при оплате счёта, у тебя есть шанс выиграть один из подарков. </p >
                            <p > Выкинь три одинаковых
                                кубика и ты обязательно получишь свой приз.</p >
                            <p >У тебя есть возможность выиграть сертификат: на
                                шашлык, на бургер, на бокал пенного, на десерт и на кальян.</p >
                        </div >
                    </div >
                </q-card-section >

                <q-card-actions align="right" class="bg-black text-red" >
                    <q-btn flat label="OK" v-close-popup />
                </q-card-actions >
            </q-card >
        </q-dialog >

    </div >
</template >

<script >
    export default {
        name: "promotion-item",
        data() {
            return {
                medium: false,
            }
        },
        methods: {
            take() {
                console.log('1')
            }
        }
    }
</script >

<style scoped >

</style >