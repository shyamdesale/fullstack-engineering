let transactions = [
    { id: 101, amount: 500 },
    { id: 102, amount: 1200 },
    { id: 103, amount: 850 },
    { id: 104, amount: 3000 },
    { id: 105, amount: 700 },
    { id: 106, amount: 1500 }
];

let recentTransactions = transactions.slice(-3);

console.log("Recent Transactions:");
console.table(recentTransactions);

// Recent Transactions:
// ┌─────────┬───────┬────────┐
// │ (index) │  id   │ amount │
// ├─────────┼───────┼────────┤
// │    0    │  104  │  3000  │
// │    1    │  105  │  700   │
// │    2    │  106  │  1500  │
// └─────────┴───────┴────────┘