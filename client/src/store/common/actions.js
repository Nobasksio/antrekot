
const axios = require('axios').default;

export async function getAll (context) {

    await axios.get(`${process.env.API_LINK}/obshhie-nastrojkis/1`).then((res)=>{
        context.commit('updateAge',{data:res.data})
    })

}


export async function getMenu (context) {


    await axios.get(`${process.env.API_LINK}/menu-links?isActive=true`).then((res)=>{
        context.commit('setMenu',{data:res.data})
    })

}


export async function getPromotions (context) {

    await axios.get(`${process.env.API_LINK}/akcziis?isActive=true`).then((res)=>{
        context.commit('setPromotions',{data:res.data})
    })

}

export async function getRestaurant (context) {

    await axios.get(`${process.env.API_LINK}/restoranies`).then((res)=>{
        context.commit('setRestaurants',{data:res.data})
    })

}

export async function getFeedbacks (context) {

    await axios.get(`${process.env.API_LINK}/otzyvies?active=true`).then((res)=>{
        context.commit('setFeedbacks',{data:res.data})
    })

}

