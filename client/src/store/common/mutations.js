

export function updateAge (state,{data}) {

    state.mainPageInfo = {
        fst:data.first_string,
        sst:data.second_string,
        image:data.main_bg_img[0]
    };
}

export function setMenu (state,{data}) {

    state.menus = data;
}

export function setPromotions (state,{data}) {

    state.promotions = data;
}

export function setRestaurants (state,{data}) {

    state.restaurants = data;
}

export function setChoosenRest(state,restaurant) {
    state.choosenRest = restaurant
    if (restaurant.id == null){
        state.zoom = 13
    } else {
        state.zoom = 15
    }
}

export function setZoom(state,zoom) {
    state.zoom = zoom
}

export function setFeedbacks(state, {data}) {
    state.feedbacks = data
}

export function addProductToBasket(state,product) {
    let our_product = state.orderProducts.filter(item => item.name === product.name)

    if (our_product.length > 0){
        state.orderProducts.forEach((item,index) => {
            if (item.name === product.name){
                state.orderProducts[index].count++
            }
        })
    } else {
        product.count = 1
        state.orderProducts.push(product)
    }
}

export function removeProductToBasket(state, product) {
    state.orderProducts = state.orderProducts.filter(item => item.name !== product.name)
}

export function setPhone(state, phone) {
    state.order.phone = phone
}

export function setAddress(state, address) {
    state.order.address = address
}
export function setTime(state, time) {
    state.order.time = time
}

export function setComment(state, comment) {
    state.order.comment = comment
}
export function setEarly(state, early) {
    state.order.early = early
}
