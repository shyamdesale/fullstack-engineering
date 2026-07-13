let inventory = [
    "In Stock",
    "Out of Stock",
    "Low Stock",
    "Out of Stock",
    "In Stock",
    "Low Stock"
];

console.log("Before Update:");
console.table(inventory);

inventory.fill("In Stock", 1, 5);

console.log("After Update:");
console.table(inventory);

// Before Update:
// ┌─────────┬───────────────┐
// │ (index) │     Values    │
// ├─────────┼───────────────┤
// │    0    │  'In Stock'   │
// │    1    │ 'Out of Stock'│
// │    2    │  'Low Stock'  │
// │    3    │ 'Out of Stock'│
// │    4    │  'In Stock'   │
// │    5    │  'Low Stock'  │
// └─────────┴───────────────┘

// After Update:
// ┌─────────┬───────────────┐
// │ (index) │     Values    │
// ├─────────┼───────────────┤
// │    0    │  'In Stock'   │
// │    1    │  'In Stock'   │
// │    2    │  'In Stock'   │
// │    3    │  'In Stock'   │
// │    4    │  'In Stock'   │
// │    5    │  'Low Stock'  │
// └─────────┴───────────────┘