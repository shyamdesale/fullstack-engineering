let cart = ["Laptop", "Mouse", "Keyboard", "Headphones"];

console.log("Before:", cart);

let removedItem = cart.pop();

console.log("Removed Item:", removedItem);
console.log("After:", cart);
console.log("Items in Cart:", cart.length);

// Before: [ 'Laptop', 'Mouse', 'Keyboard', 'Headphones' ]
// Removed Item: Headphones
// After: [ 'Laptop', 'Mouse', 'Keyboard' ]
// Items in Cart: 3