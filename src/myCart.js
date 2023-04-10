const _ = require('lodash');
const { getSaleItem } = require('./saleItem');
var cartItem = [];

exports.myCart = () => {
    return cartItem
}

exports.emptyCart = () =>{
    cartItem = []
}
exports.addItemInCart = (obj) => {
    const saleItem = getSaleItem();
    if(saleItem.length != 0 ){
    saleItem.map(item => {
        if(item.id == obj.id){
            discount = (item.quantity * item.price)*10/100
            item.totalPrice = (item.quantity * item.price) - discount
            item.sale = true
            cartItem.push(item)
        }else{
            obj.totalPrice = obj.quantity * obj.price
            cartItem.push(obj)
        }
    })}
    else{
        obj.totalPrice = obj.quantity * obj.price
        cartItem.push(obj)
    }
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

exports.removeItem = (id) =>{
    _.remove(cartItem, (item) =>{
        return item.id == id
    })
}