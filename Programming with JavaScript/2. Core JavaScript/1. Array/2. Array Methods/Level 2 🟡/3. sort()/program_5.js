let products = [
    { name: "Laptop", price: 65000 },
    { name: "Mouse", price: 700 },
    { name: "Keyboard", price: 1200 },
    { name: "Monitor", price: 15000 }
];

console.log("Before Sorting:");
console.table(products);

products.sort((a, b) => a.price - b.price);

console.log("After Sorting (Low to High Price):");
console.table(products);

// Before Sorting:
// ┌─────────┬─────────────┬───────┐
// │ (index) │    name     │ price │
// ├─────────┼─────────────┼───────┤
// │    0    │  'Laptop'   │ 65000 │
// │    1    │   'Mouse'   │  700  │
// │    2    │ 'Keyboard'  │ 1200  │
// │    3    │  'Monitor'  │ 15000 │
// └─────────┴─────────────┴───────┘

// After Sorting (Low to High Price):
// ┌─────────┬─────────────┬───────┐
// │ (index) │    name     │ price │
// ├─────────┼─────────────┼───────┤
// │    0    │   'Mouse'   │  700  │
// │    1    │ 'Keyboard'  │ 1200  │
// │    2    │  'Monitor'  │ 15000 │
// │    3    │  'Laptop'   │ 65000 │
// └─────────┴─────────────┴───────┘