

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

export function addProductToBasket(state, product) {
  let index = state.orderProducts.findIndex(item => item.name === product.name)

  if (index !== -1){

    const searchElem = {...state.orderProducts[index]};
    searchElem.count += 1;
    const oldStateOrderProduct = [...state.orderProducts];
    oldStateOrderProduct.splice(index, 1, searchElem);

    state.orderProducts = oldStateOrderProduct;

  } else {
    product.count = 1
    state.orderProducts.push(product)
  }
}

export function removeProductToBasket(state, product) {
  state.orderProducts = state.orderProducts.filter(item => item.name !== product.name)
}

export function removeOneProduct(state, product) {
  const index = state.orderProducts.findIndex((item) => item.id === product.id);
  if (state.orderProducts[index].count > 1) {
    const newProductState = [...state.orderProducts];
    newProductState[index].count -= 1;
    state.orderProducts = [...newProductState];
  } else {
    // eslint-disable-next-line max-len
    state.orderProducts = state.orderProducts.filter((item) => item.id !== product.id);
  }
}

export function setPhone(state, phone) {
  state.order.phone = phone;
}

export function setEmptyOrderProducts(state) {
  state.orderProducts = [];
}

export function setDepartment(state, department) {
  state.order.department = department
}
export function setPayment(state, payment) {
    state.order.payment = payment
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

export function setCostume (state, isCostume) {
  state.order.isCostume = isCostume
}

export function setName (state, name) {
  state.order.name = name
}

export function setOrderMenu (state, orderMenu) {
    state.orderMenu = [...orderMenu]
}

export function setCategoriesMenu (state, categoriesMenu) {
    state.categoriesMenu = [...categoriesMenu]
}

export function setForks(state, forks) {
  state.order.forks = forks
}

export function setPromocode(state, promocode ) {
  state.order.promocode = promocode
}
