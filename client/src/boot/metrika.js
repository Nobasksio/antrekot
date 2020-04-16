import VueYandexMetrika from 'vue-yandex-metrika'

export default ({ app, router, Vue }) => {
    Vue.use(VueYandexMetrika, {
        id: 27721593,
        router: router,
        env: 'production'
    })
}
