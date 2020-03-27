

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
