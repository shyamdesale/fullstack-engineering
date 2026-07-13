// Definition: 
// fill() array ke ek ya saare elements ko ek hi value se replace karta hai. Ye original array ko modify karta hai.

let numbers = [10, 20, 30, 40, 50];

console.log("Before:", numbers);

numbers.fill(0);

console.log("After:", numbers);

// Before:
// [10, 20, 30, 40, 50]

// After:
// [0, 0, 0, 0, 0]