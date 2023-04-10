var cartItem = [];

exports.myCart = () => {
    return cartItem
}

exports.emptyCart = () =>{
    cartItem = []
}
exports.addItemInCart = (obj) => {
    obj.totalPrice = obj.quantity * obj.price
    cartItem.push(obj)
}

exports.totalPrice = () => {
    let totalPrice = 0;
    for (let i of cartItem) {
        totalPrice = totalPrice + i.totalPrice
    }
    return totalPrice;
}

exports.quantityUpdate = (obj) => {
    return cartItem.map(item => {
        if (item.id == obj.id) {
            item.quantity = obj.quantity
            return item
        }
    })[0]
}