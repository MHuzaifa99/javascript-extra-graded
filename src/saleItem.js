var saleList = [];

exports.addSaleItem = (obj) => {
    saleList.push(obj)
}

exports.getSaleItem = () =>{
    return saleList
}
exports.emptysaleList = () =>{
    saleList = []
}