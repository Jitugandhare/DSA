// Calculate Total Orders Per Customer
// Given an array of customer data with total order values for each customer, 
// calculate the total order value for each customer and add a field showing the number of orders.


const orders = [
    { "customerId": "C105", "totalOrderValue": 500, "ordersCount": 5 },
    { "customerId": "C102", "totalOrderValue": 1200, "ordersCount": 10 },
    { "customerId": "C103", "totalOrderValue": 2000, "ordersCount": 8 },
    { "customerId": "C107", "totalOrderValue": 1500, "ordersCount": 7 }
]

let ans = orders.map((i)=>{
    let orderValue=Number(i.totalOrderValue)/Number(i.ordersCount);
    return orderValue
})

orders[orderValue]=ans;


console.log(orders)

