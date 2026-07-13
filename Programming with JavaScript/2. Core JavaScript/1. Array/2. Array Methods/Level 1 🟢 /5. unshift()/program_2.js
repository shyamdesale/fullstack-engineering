let cart = ["Mouse", "Keyboard", "Headphones"];

console.log("Before:", cart);

cart.unshift("Laptop");

console.log("After:", cart);
console.log("Items in Cart:", cart.length);

// Before: [ 'Mouse', 'Keyboard', 'Headphones' ]
// After: [ 'Laptop', 'Mouse', 'Keyboard', 'Headphones' ]
// Items in Cart: 4