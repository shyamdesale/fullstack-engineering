/*
========================================
JavaScript Operators Examples
========================================
*/


// Arithmetic Operators

// Example 1: Addition
let a = 10;
let b = 5;

console.log(a + b);
// Output: 15



// Example 2: Subtraction
console.log(a - b);
// Output: 5



// Example 3: Multiplication
console.log(a * b);
// Output: 50



// Example 4: Division
console.log(a / b);
// Output: 2



// Example 5: Modulus
console.log(a % b);
// Output: 0



// Example 6: Exponent
console.log(a ** b);
// Output: 100000



// Increment Operators

// Example 7: Post Increment
let x = 5;
console.log(x++); 
console.log(x);

/*
Output
5
6
*/



// Example 8: Pre Increment
let y = 5;
console.log(++y);
// Output: 6



// Decrement Operators

// Example 9
let z = 10;
console.log(z--);
console.log(z);

/*
Output
10
9
*/



// Assignment Operators

// Example 10
let score = 10;

score += 5;

console.log(score);

// Output
// 15



// Example 11
let value = 20;

value *= 2;

console.log(value);

// Output
// 40



// Comparison Operators

// Example 12
console.log(10 == "10");
// Output: true



// Example 13
console.log(10 === "10");
// Output: false



// Example 14
console.log(5 > 3);
// Output: true



// Example 15
console.log(5 < 3);
// Output: false



// Logical Operators

// Example 16
let isAdult = true;
let hasLicense = true;

console.log(isAdult && hasLicense);

// Output
// true



// Example 17
console.log(true || false);

// Output
// true



// Example 18
console.log(!true);

// Output
// false



// Ternary Operator

// Example 19
let age = 18;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

// Output
// Adult