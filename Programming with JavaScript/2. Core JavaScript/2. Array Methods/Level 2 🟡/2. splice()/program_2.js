let cart = [
    "Laptop",
    "Keyboard",
    "Headphones"
];

console.log("Before:", cart);

cart.splice(1, 0, "Mouse");

console.log("After:", cart);

// Before:
// [ 'Laptop', 'Keyboard', 'Headphones' ]

// After:
// [ 'Laptop', 'Mouse', 'Keyboard', 'Headphones' ]