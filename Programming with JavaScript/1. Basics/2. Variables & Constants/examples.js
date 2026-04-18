/*
========================================
Variables and Constants Examples
========================================
*/

// Example 1: Using var
var name = "Shyam";
console.log(name);

// Output
// Shyam



// Example 2: Using let
let age = 21;
console.log(age);

// Output
// 21



// Example 3: Using const
const pi = 3.14159;
console.log(pi);

// Output
// 3.14159



// Example 4: Changing variable value
let score = 50;
score = 75;
console.log(score);

// Output
// 75



// Example 5: Multiple variables
let a = 5;
let b = 3;
let sum = a + b;

console.log(sum);

// Output
// 8



// Example 6: Declaring multiple variables in one line
let x = 10, y = 20, z = 30;
console.log(x, y, z);

// Output
// 10 20 30



// Example 7: Variable naming rules
let firstName = "Rohit";
let _salary = 50000;
let $bonus = 5000;

console.log(firstName);
console.log(_salary);
console.log($bonus);


// Output
// Rohit
// 50000
// 5000



// Example 8: Const object modification
const person = {
  name: "Amit",
  age: 22
};

person.age = 23;

console.log(person);

// Output
// { name: 'Amit', age: 23 }



// Example 9: Const array modification
const numbers = [1,2,3];
numbers.push(4);

console.log(numbers);

// Output
// [1,2,3,4]



// Example 10: Undefined variable
let value;
console.log(value);

// Output
// undefined