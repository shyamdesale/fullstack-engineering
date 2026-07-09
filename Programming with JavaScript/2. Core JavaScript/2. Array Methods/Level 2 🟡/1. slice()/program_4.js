let products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Headphones",
    "Speaker",
    "Printer",
    "Webcam"
];

let currentPage = 2;
let itemsPerPage = 3;

let startIndex = (currentPage - 1) * itemsPerPage;
let endIndex = startIndex + itemsPerPage;

let currentPageProducts = products.slice(startIndex, endIndex);

console.log("Current Page Products:");
console.table(currentPageProducts);


// Current Page Products:
// ┌─────────┬─────────────┐
// │ (index) │   Values    │
// ├─────────┼─────────────┤
// │    0    │  'Monitor'  │
// │    1    │ 'Headphones'│
// │    2    │  'Speaker'  │
// └─────────┴─────────────┘