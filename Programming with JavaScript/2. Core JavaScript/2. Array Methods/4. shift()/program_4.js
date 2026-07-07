// 1. Customer Service Queue (FIFO)
let customerQueue = [
    { token: 101, name: "Shyam" },
    { token: 102, name: "Rahul" },
    { token: 103, name: "Amit" },
    { token: 104, name: "Priya" }
];

console.log("Waiting Customers:");
console.table(customerQueue);

let servedCustomer = customerQueue.shift();

console.log("Served Customer:");
console.log(servedCustomer);

console.log("Remaining Queue:");
console.table(customerQueue);

// Output:
// Waiting Customers:
// ┌─────────┬───────┬────────┐
// │ (index) │ token │  name  │
// ├─────────┼───────┼────────┤
// │    0    │  101  │ 'Shyam'│
// │    1    │  102  │ 'Rahul'│
// │    2    │  103  │ 'Amit' │
// │    3    │  104  │ 'Priya'│
// └─────────┴───────┴────────┘
// Served Customer:
// { token: 101, name: 'Shyam' }
// Remaining Queue:
// ┌─────────┬───────┬────────┐
// │ (index) │ token │  name  │
// ├─────────┼───────┼────────┤
// │    0    │  102  │ 'Rahul'│
// │    1    │  103  │ 'Amit' │
// │    2    │  104  │ 'Priya'│
// └─────────┴───────┴────────┘