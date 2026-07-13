// 3. Copy Using Spread Operator

let arr1 = [10, 20, 30];

let arr2 = [...arr1];

arr2[0] = 999;

console.log(arr1);
console.log(arr2);

// [10, 20, 30]
// [999, 20, 30]

// Concept
    // Spread operator new array banata hai.
    // Original array change nahi hota.