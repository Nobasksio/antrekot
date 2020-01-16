import createPersistedState from 'vuex-persistedstate';

import Vue from 'vue'
import Vuex from 'vuex'

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

export default function (/* { ssrContext } */) {
    const Store = new Vuex.Store({
        modules: {
            age,
            common
        },

        plugins:[
            createPersistedState({
                key: 'age',
                paths:['age','common']
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


    return Store
}
