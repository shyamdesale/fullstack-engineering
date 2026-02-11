//  1. Assignment Operators

var x = 5;  // assigns 5 to x
var y = 10; // assigns 10 to y

x += 2;  // same as x = x + 2
y -= 3;  // same as y = y - 3
x *= 4;  // same as x = x * 4
y /= 2;  // same as y = y / 2


//  2. Arithmetic Operators

console.log(2 + 2); // 4
console.log(2 + 3 + 10); // 15
console.log(20 - 18); // 2
console.log(2 * 3); // 6
console.log(8 / 1); // 8


//  3. Comparison Operators

console.log(3 > 2); // true
console.log(2 > 3); // false
console.log(10 == 10); // true


//  4. Logical Operators

var A = 7;
console.log(A > 5 && A < 10); // true, both conditions true
console.log(A > 5 || A > 10); // true, at least one condition true
console.log(!(A > 5));        // false, NOT inverts it



// Perform basic arithmetic operations and log results
console.log(4 + 3); // Adds 4 and 3, prints 7
console.log(4 - 3); // Subtracts 3 from 4, prints 1
console.log(4 * 3); // Multiplies 4 by 3, prints 12
console.log(4 / 3); // Divides 4 by 3, prints 1.3333333333333333

// Declare variables a and b
let a; // a is declared but not assigned, default value is undefined
let b; // b is declared but not assigned, default value is undefined

// Assign 5 to b, then assign b's value to a, and log the result
console.log(a = b = 5); 
// Step-by-step:
// b = 5 → assign 5 to