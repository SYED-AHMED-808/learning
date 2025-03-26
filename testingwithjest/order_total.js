const orderTotal = (order) => {
    return order.items.reduce((prev, curr) => 
        curr.price * (curr.quantiy || 1) + prev,0  )
}

module.exports = orderTotal