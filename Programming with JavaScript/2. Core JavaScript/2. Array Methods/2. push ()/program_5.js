// 2. E-Commerce Shopping Cart

let cart = [];

function addToCart(id, name, price, quantity) {
    cart.push({
        productId: id,
        productName: name,
        productPrice: price,
        quantity: quantity
    });
}

addToCart(101, "Laptop", 65000, 1);
addToCart(102, "Mouse", 700, 2);
addToCart(103, "Keyboard", 1200, 1);

console.log(cart);
console.log("Total Products:", cart.length);


// Output:
// [
//   { productId: 101, productName: 'Laptop', productPrice: 65000, quantity: 1 },
//   { productId: 102, productName: 'Mouse', productPrice: 700, quantity: 2 },
//   { productId: 103, productName: 'Keyboard', productPrice: 1200, quantity: 1 }
// ]
// Total Products: 3    
