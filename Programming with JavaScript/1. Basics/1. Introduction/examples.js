/*
========================================
JavaScript Introduction Examples
========================================
*/

// Example 1: Basic console output
console.log("Hello, JavaScript!");
// Output:
// Hello, JavaScript!


// Example 2: Multiple console statements
console.log("Welcome to JS Learning");
console.log("This is a basic example");
// Output:
// Welcome to JS Learning
// This is a basic example


// Example 3: Console with numbers
console.log(10 + 5);
// Output:
// 15


// Example 4: Console with variables
let message = "JavaScript is powerful";
console.log(message);
// Output:
// JavaScript is powerful


// Example 5: Console formatting
console.log("Name:", "Shyam");
console.log("Age:", 21);
// Output:
// Name: Shyam
// Age: 21


// Example 6: Using console.warn
console.warn("This is a warning message");
// Output:
// Warning message (yellow in console)


// Example 7: Using console.error
console.error("Something went wrong");
// Output:
// Error message (red in console)


// Example 8: Using console.table
const student = {
  name: "Rahul",
  age: 20,
  branch: "CSE"
};

console.table(student);
/*
Output:
(index) | Values
name    | Rahul
age     | 20
branch  | CSE
*/


// Example 9: console.group
console.group("Student Details");
console.log("Name: Aman");
console.log("Age: 21");
console.log("Course: BTech");
console.groupEnd();
