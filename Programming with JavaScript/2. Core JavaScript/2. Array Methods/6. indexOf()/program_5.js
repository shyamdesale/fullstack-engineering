// 2. E-Commerce Product Search
let products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Headphones"
];

let searchProduct = "Monitor";

let productIndex = products.indexOf(searchProduct);

if (productIndex !== -1) {
    console.log(`${searchProduct} found.`);
    console.log(`Product Position: ${productIndex}`);
} else {
    console.log("Product not available.");
}


// Output:
// Monitor found.