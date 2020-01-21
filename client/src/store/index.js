import createPersistedState from 'vuex-persistedstate';

import Vue from 'vue'
import Vuex from 'vuex'
import * as Cookies from "js-cookie";

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

import age from './age'
import common from './common'

export default async function ({ ssrContext }) {
    const Store = new Vuex.Store({
        modules: {
            age,
            common
        },

        plugins:[
            createPersistedState({
                storage:{
                    getItem: key => Cookies.get(key),
                    // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
                    setItem: (key, value) =>
                        Cookies.set(key, value, { expires: 3, secure: true }),
                    removeItem: key => Cookies.remove(key)
                },
            })
        ],
        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEV
    })

    if (process.env.DEV && module.hot) {
        module.hot.accept(['./age'], () => {
            const newAge = require('./age').default
            Store.hotUpdate({modules: {age: newAge}})
        })
    }


    return await Store
}
