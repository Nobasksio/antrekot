<template >
    <q-layout view="lHh LpR lFf" class="check">
        <q-page class="column main_b justify-between items-center " >
            <div class="col logo-check">
                <q-img
                        src="/statics/logo.svg"
                        spinner-color="white"
                        img-class="q-mx-xl q-mt-n2"
                        style="width: 300px; height: 200px;"
                        contain
                />
            </div>
            <div class="col " >

                <div class="col text-white lspacing25 mregular text-uppercase text-center" >
                    Доступ на не цензурированный веб-сайт <br> разрешен только лицам старше 18 лет
                </div >
                <div class="col my-black text-center q18" >
                    Вам уже есть <span class="text-red" >18</span>?
                </div >
                <div class="col flex justify-center" >
                    <q-btn outline color="white"
                           @click="setYoung"
                           class='text-uppercase q-btn_my_black q-mr-md' label="Нет" >
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" class="q-ml-sm"
                             xmlns="http://www.w3.org/2000/svg" >
                            <path d="M0.269457 11.1147C0.269457 11.474 0.560656 11.7652 0.919469 11.7648L19.7277 11.7647L16.211 15.2814C15.9555 15.5369 15.9555 15.9517 16.211 16.2072C16.4666 16.4628 16.8814 16.4628 17.1369 16.2072L21.7665 11.5777C21.8892 11.455 21.96 11.2888 21.96 11.1147C21.96 10.9406 21.8892 10.7744 21.7665 10.6518L17.1369 6.02217C16.8813 5.7666 16.4665 5.76664 16.211 6.02217C15.9555 6.27769 15.9555 6.69254 16.211 6.94806L19.7277 10.4647L0.919469 10.4647C0.560194 10.4647 0.268996 10.7559 0.269457 11.1147Z"
                                  fill="white" />
                        </svg >
                    </q-btn >
                    <q-btn outline color="white"
                           @click="setOld"
                           class='text-uppercase q-btn_my_black' label="Да" >
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" class="q-ml-sm"
                             xmlns="http://www.w3.org/2000/svg" >
                            <path d="M0.269457 11.1147C0.269457 11.474 0.560656 11.7652 0.919469 11.7648L19.7277 11.7647L16.211 15.2814C15.9555 15.5369 15.9555 15.9517 16.211 16.2072C16.4666 16.4628 16.8814 16.4628 17.1369 16.2072L21.7665 11.5777C21.8892 11.455 21.96 11.2888 21.96 11.1147C21.96 10.9406 21.8892 10.7744 21.7665 10.6518L17.1369 6.02217C16.8813 5.7666 16.4665 5.76664 16.211 6.02217C15.9555 6.27769 15.9555 6.69254 16.211 6.94806L19.7277 10.4647L0.919469 10.4647C0.560194 10.4647 0.268996 10.7559 0.269457 11.1147Z"
                                  fill="white" />
                        </svg >
                    </q-btn >
                </div >

            </div >
            <div class="col text-white lspacing25 mregular text-uppercase text-center flex">
                <div class="self-end q-pb-md">
                Я ПОДТВЕРЖДАЮ, ЧТО МНЕ ИСПОЛНИЛОСЬ 18 ИЛИ БОЛЕЕ ЛЕТ
                </div>
            </div>
        </q-page >
    </q-layout >
</template >

<script >
    import { mapState, mapActions } from 'vuex';
    export default {
        name: "check-page",
        methods:{
            ...mapActions('age',['setOld','setYoung'])
        },
        computed:{
            ...mapState('age',['check','isOld'])
        }
    }
</script >

<style scoped >

    .main_b {
        background: url(/statics/check.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        z-index: 101;
    }
    .logo-check{
        height: 100px;
    }
    .q18{
        color:#ffffff;
        font-size: 36px;
        line-height: 44px;
        /* identical to box height */
        text-align: center;
        text-transform: uppercase;
        padding: 20px 0px;
    }
</style >