let { myCart, addItemInCart, totalPrice, quantityUpdate, emptyCart } = require('./src/myCart')

test('Cart should be empty', () => {
    // Arrang
    const assert = [];
    // Act
    const result = myCart();
    // Assert
    expect(result).toEqual(assert)
})

test('add an item in a cart', () => {
    // Arrang
    const obj = {
        id: 1,
        name: "handbags",
        quantity: 2,
        price: 500,
    }
    addItemInCart(obj)
    const assert = 1000
    // Act
    const result = totalPrice();
    // Assert
    expect(result).toBe(assert)
})

test('already added item`s quantity change', () => {
    // Arrang
    const obj = {
        id: 1,
        quantity: 4
    };
    const assert = {
        id: 1,
        name: "handbags",
        price: 500,
        quantity: 4,
        totalPrice: 1000
    }
    // Act
    const result = quantityUpdate(obj)
    // Assert
    expect(result).toEqual(assert)
})

test("List of itemized of cart", () => {
    // Arrang
    emptyCart()
    const obj = {
        id: 1,
        name: "handbags",
        quantity: 4,
        price: 500,
    }
    addItemInCart(obj)

    const assert = new Array(
        {
            id: 1,
            name: "handbags",
            price: 500,
            quantity: 4,
            totalPrice: 2000,
        })
    // Act
    const result = myCart()
    // Assert
    expect(result).toEqual(assert)
})

test('remove item from cart', () =>{
    // Arrange
    emptyCart()
    const arrObj =[
        {
            id: 1,
            name: "handbags",
            quantity: 1,
            price: 500,
        },{
            id: 2,
            name: "watch",
            quantity: 2,
            price: 500,
        }
    ]
    for(let i of arrObj){
        addItemInCart(i)
    }
    const id = 1
    const assert = [{
        id: 2,
        name: "watch",
        quantity: 2,
        price: 500,
        totalPrice: 1000
    }]
    // Act
    removeItem(id)
    const result = myCart()
    // Assert
    expect(result).toEqual(assert)

})