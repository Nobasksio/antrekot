
const axios = require('axios').default;

export async function getAll (context) {

    return await axios.get(`${process.env.API_LINK}/obshhie-nastrojkis/1`).then((res)=>{
        context.commit('updateAge',{data:res.data})
    })

}


export async function getMenu (context) {


    return await axios.get(`${process.env.API_LINK}/menu-links?isActive=true`).then((res)=>{
        context.commit('setMenu',{data:res.data})
    })

}

export async function getOrderMenu (context) {

    await axios.get(`${process.env.API_LINK}/categories?is_active=true`).then((res)=>{
        context.commit('setCategoriesMenu',res.data)
    })



}



export async function getPromotions (context) {

    try {

        return await axios.get(`${process.env.API_LINK}/akcziis?isActive=true`).then((res) => {
            context.commit('setPromotions', {data: res.data})
        })

    } catch (e) {
        console.log(e);
    }

}

export async function getRestaurant (context) {

    return await axios.get(`${process.env.API_LINK}/restoranies`).then((res)=>{
        context.commit('setRestaurants',{data:res.data})
    })

}

export async function getFeedbacks (context) {

    return await axios.get(`${process.env.API_LINK}/otzyvies?active=true`).then((res)=>{
        context.commit('setFeedbacks',{data:res.data})
    })

}

