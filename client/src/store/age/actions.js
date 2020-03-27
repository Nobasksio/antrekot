const axios = require('axios').default;

export function setOld (context) {
    context.commit('setOld')

}

export function setYoung (context) {
    context.commit('setYoung')
}



