// 2. Order Processing System
let orders = [
    { orderId: 1001, product: "Laptop", amount: 65000 },
    { orderId: 1002, product: "Mouse", amount: 700 },
    { orderId: 1003, product: "Keyboard", amount: 1200 }
];

console.log("Pending Orders:");
console.table(orders);

let processedOrder = orders.shift();

console.log("Processed Order:");
console.log(processedOrder);

console.log("Remaining Orders:");
console.table(orders);

// Output:
// Pending Orders:
// ┌─────────┬───────────┬───────────┬────────┐
// │ (index) │ orderId   │ product   │ amount │
// ├─────────┼───────────┼───────────┼────────┤
// │    0    │   1001    │ 'Laptop'  │ 65000  │
// │    1    │   1002    │ 'Mouse'   │  700   │
// │    2    │   1003    │ 'Keyboard'│ 1200   │
// └─────────┴───────────┴───────────┴────────┘
// Processed Order:
// { orderId: 1001, product: 'Laptop', amount: 65000 }
// Remaining Orders:
// ┌─────────┬───────────┬───────────┬────────┐
// │ (index) │ orderId   │ product   │ amount │
// ├─────────┼───────────┼───────────┼────────┤
// │    0    │   1002    │ 'Mouse'   │  700   │
// │    1    │   1003    │ 'Keyboard'│ 1200   │
// └─────────┴───────────┴───────────┴────────┘ 