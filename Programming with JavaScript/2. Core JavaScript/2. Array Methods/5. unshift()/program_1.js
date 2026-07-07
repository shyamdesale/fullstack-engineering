// Definition: 
// unshift() array ke start (first) me ek ya ek se zyada elements add karta hai aur new length return karta hai.

let students = ["Rahul", "Amit", "Priya"];

console.log("Before:", students);

students.unshift("Shyam");

console.log("After:", students);
console.log("Total Students:", students.length);

// Before: [ 'Rahul', 'Amit', 'Priya' ]
// After: [ 'Shyam', 'Rahul', 'Amit', 'Priya' ]
// Total Students: 4