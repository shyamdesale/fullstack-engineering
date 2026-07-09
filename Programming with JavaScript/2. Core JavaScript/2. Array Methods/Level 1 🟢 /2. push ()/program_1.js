// Definition: 
// push() array ke end (last) me ek ya ek se zyada elements add karta hai aur new length return karta hai.

let students = ["Shyam", "Rahul", "Amit"];

console.log("Before:", students);

students.push("Priya");

console.log("After:", students);
console.log("Total Students:", students.length);


// Before: [ 'Shyam', 'Rahul', 'Amit' ]
// After: [ 'Shyam', 'Rahul', 'Amit', 'Priya' ]
// Total Students: 4