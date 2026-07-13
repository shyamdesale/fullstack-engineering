// slice() Copy
let arr1 = [5, 10, 15];

let arr2 = arr1.slice();

arr2.push(20);

console.log(arr1);
console.log(arr2);

// [5, 10, 15]
// [5, 10, 15, 20]

// Concept: Copy without reference.