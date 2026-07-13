// Array.from() Copy

let arr1 = [1, 2, 3];

let arr2 = Array.from(arr1);

arr2[2] = 99;

console.log(arr1);
console.log(arr2);

// [1, 2, 3]
// [1, 2, 99]

// Concept: Another copying method.