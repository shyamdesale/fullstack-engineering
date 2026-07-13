let transactions = [
    { id: 101, amount: 500 },
    { id: 102, amount: 1200 },
    { id: 103, amount: 850 },
    { id: 104, amount: 3000 }
];

console.log("All Transactions:");
console.table(transactions);

let latestTransaction = transactions.at(-1);

console.log("Latest Transaction:");
console.log(latestTransaction);

// All Transactions:
// ┌─────────┬───────┬────────┐
// │ (index) │  id   │ amount │
// ├─────────┼───────┼────────┤
// │    0    │  101  │  500   │
// │    1    │  102  │  1200  │
// │    2    │  103  │  850   │
// │    3    │  104  │  3000  │
// └─────────┴───────┴────────┘

// Latest Transaction:
// { id: 104, amount: 3000 }