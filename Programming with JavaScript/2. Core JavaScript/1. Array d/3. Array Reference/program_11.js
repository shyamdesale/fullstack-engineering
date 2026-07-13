// concat() Copy
let arr1 = [10, 20];

let arr2 = [].concat(arr1);

arr2.push(30);

console.log(arr1);
console.log(arr2);

// [10, 20]
// [10, 20, 30]

// Concept: concat() can create a copy.