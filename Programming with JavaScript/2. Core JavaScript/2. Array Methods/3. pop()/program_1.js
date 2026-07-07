// Definition: 
// pop() array ke last (end) se ek element remove karta hai aur removed element return karta hai.

let students = ["Shyam", "Rahul", "Amit", "Priya"];

console.log("Before:", students);

let removedStudent = students.pop();

console.log("Removed Student:", removedStudent);
console.log("After:", students);
console.log("Total Students:", students.length);

// Before: [ 'Shyam', 'Rahul', 'Amit', 'Priya' ]
// Removed Student: Priya
// After: [ 'Shyam', 'Rahul', 'Amit' ]
// Total Students: 3