const orderTotal = require("./order_total");

it("works",()=>{
    expect(1).toBe(1);
})

it("Quantity",()=> {
    expect(orderTotal({quantity: 2})).toBe(20)
})

it("Quantity Not Specified",() => {
    expect(orderTotal()).toBe(0)
})