// Definition: 
// slice() array ka ek portion (part) copy karta hai aur new array return karta hai. Original array modify nahi hota.

let students = [
    "Shyam",
    "Rahul",
    "Amit",
    "Priya",
    "Sneha"
];

let selectedStudents = students.slice(1, 4);

console.log("Original Students:", students);
console.log("Selected Students:", selectedStudents);

// Original Students:
// [ 'Shyam', 'Rahul', 'Amit', 'Priya', 'Sneha' ]

// Selected Students:
// [ 'Rahul', 'Amit', 'Priya' ]