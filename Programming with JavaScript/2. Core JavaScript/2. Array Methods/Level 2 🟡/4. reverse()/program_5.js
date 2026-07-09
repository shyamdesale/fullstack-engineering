let transactions = [
    { id: 101, amount: 500 },
    { id: 102, amount: 1200 },
    { id: 103, amount: 850 },
    { id: 104, amount: 3000 }
];

console.log("Old Transactions:");
console.table(transactions);

transactions.reverse();

console.log("Latest Transactions:");
console.table(transactions);

// Old Transactions:
// ┌─────────┬───────┬────────┐
// │ (index) │  id   │ amount │
// ├─────────┼───────┼────────┤
// │    0    │  101  │  500   │
// │    1    │  102  │  1200  │
// │    2    │  103  │  850   │
// │    3    │  104  │  3000  │
// └─────────┴───────┴────────┘

// Latest Transactions:
// ┌─────────┬───────┬────────┐
// │ (index) │  id   │ amount │
// ├─────────┼───────┼────────┤
// │    0    │  104  │ 3000   │
// │    1    │  103  │ 850    │
// │    2    │  102  │ 1200   │
// │    3    │  101  │ 500    │
// └─────────┴───────┴────────┘