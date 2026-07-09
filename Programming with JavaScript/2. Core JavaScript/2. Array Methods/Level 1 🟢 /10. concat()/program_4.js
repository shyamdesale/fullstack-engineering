// 1. Merge Product Categories (E-Commerce)
let electronics = [
    { id: 101, name: "Laptop" },
    { id: 102, name: "Mouse" }
];

let accessories = [
    { id: 201, name: "Keyboard" },
    { id: 202, name: "Headphones" }
];

let allProducts = electronics.concat(accessories);

console.table(allProducts);

console.log("Total Products:", allProducts.length);

// Output:
// ┌─────────┬─────┬────────────┐
// │ (index) │ id  │    name    │
// ├─────────┼─────┼────────────┤
// │    0    │ 101 │  'Laptop'  │
// │    1    │ 102 │   'Mouse'  │
// │    2    │ 201 │ 'Keyboard' │
// │    3    │ 202 │'Headphones'│
// └─────────┴─────┴────────────┘
// Total Products: 4   