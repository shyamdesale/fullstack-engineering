// Definition: 
// shift() array ke first (start) se ek element remove karta hai aur removed element return karta hai.

let students = ["Shyam", "Rahul", "Amit", "Priya"];

console.log("Before:", students);

let removedStudent = students.shift();

console.log("Removed Student:", removedStudent);
console.log("After:", students);
console.log("Total Students:", students.length);


// Before: [ 'Shyam', 'Rahul', 'Amit', 'Priya' ]
// Removed Student: Shyam
// After: [ 'Rahul', 'Amit', 'Priya' ]
// Total Students: 3