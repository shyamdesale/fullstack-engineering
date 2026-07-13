// Same Reference
let arr1 = [10, 20, 30];
let arr2 = arr1;

arr2[1] = 200;

console.log(arr1);
console.log(arr2);

// [10, 200, 30]
// [10, 200, 30]

// Concept: Same memory reference.