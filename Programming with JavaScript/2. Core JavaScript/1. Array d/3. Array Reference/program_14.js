// Deep Copy using structuredClone()
let arr1 = [[1,2],[3,4]];

let arr2 = structuredClone(arr1);

arr2[0][0] = 999;

console.log(arr1);
console.log(arr2);

// [[1, 2], [3, 4]]
// [[999, 2], [3, 4]]

// Concept: Complete independent copy.