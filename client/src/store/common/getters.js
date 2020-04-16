/*
export function someGetter (state) {
}
*/
export function totalSum (state) {

    const summ = state.orderProducts.reduce((accumulator,item)=>{
        return accumulator + parseInt(item.price) * item.count
    }, 0)

    return summ
}
