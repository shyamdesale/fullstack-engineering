// 2. E-Commerce Order Processing

let orders = [
    { id: 101, customer: "Shyam", amount: 2500 },
    { id: 102, customer: "Rahul", amount: 1800 },
    { id: 103, customer: "Amit", amount: 3200 }
];

console.log("Pending Orders:", orders);

let processedOrder = orders.pop();

console.log("Processed Order:", processedOrder);
console.log("Remaining Orders:", orders);


// Processed Order:
// { id: 103, customer: 'Amit', amount: 3200 }

// Remaining Orders:
// [
//   { id: 101, customer: 'Shyam', amount: 2500 },
//   { id: 102, customer: 'Rahul', amount: 1800 }
// ]