let cart = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Headphones",
    "Speaker"
];

console.log("Before:");
console.table(cart);

let removedProducts = cart.splice(2, 3);

console.log("Removed Products:");
console.table(removedProducts);

console.log("Updated Cart:");
console.table(cart);

// Before:
// ┌─────────┬─────────────┐
// │ (index) │   Values    │
// ├─────────┼─────────────┤
// │    0    │   'Laptop'  │
// │    1    │   'Mouse'   │
// │    2    │ 'Keyboard'  │
// │    3    │  'Monitor'  │
// │    4    │ 'Headphones'│
// │    5    │  'Speaker'  │
// └─────────┴─────────────┘

// Removed Products:
// ┌─────────┬─────────────┐
// │ (index) │   Values    │
// ├─────────┼─────────────┤
// │    0    │ 'Keyboard'  │
// │    1    │  'Monitor'  │
// │    2    │ 'Headphones'│
// └─────────┴─────────────┘

// Updated Cart:
// ┌─────────┬─────────────┐
// │ (index) │   Values    │
// ├─────────┼─────────────┤
// │    0    │   'Laptop'  │
// │    1    │   'Mouse'   │
// │    2    │  'Speaker'  │
// └─────────┴─────────────┘