// Definition: 
// splice() array me add, remove, ya replace elements karta hai. Ye original array ko modify karta hai.

let students = [
    "Shyam",
    "Rahul",
    "Amit",
    "Priya"
];

console.log("Before:", students);

let removedStudent = students.splice(1, 1);

console.log("Removed Student:", removedStudent);
console.log("After:", students);

// Before:
// [ 'Shyam', 'Rahul', 'Amit', 'Priya' ]

// Removed Student:
// [ 'Rahul' ]

// After:
// [ 'Shyam', 'Amit', 'Priya' ]