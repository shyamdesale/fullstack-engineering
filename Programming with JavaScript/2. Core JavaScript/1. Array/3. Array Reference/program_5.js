// 5. Nested Array (Shallow Copy Problem)
let arr1 = [[1, 2], [3, 4]];

let arr2 = [...arr1];

arr2[0][0] = 100;

console.log(arr1);
console.log(arr2);

// [[100, 2], [3, 4]]
// [[100, 2], [3, 4]]

// Concept
    // Spread operator sirf first level copy karta hai.
    // Inner arrays same reference share karti hain.
    // Isko Shallow Copy kehte hain.