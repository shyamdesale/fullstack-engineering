// Definition: 
// sort() array ke elements ko ascending order me sort karta hai. By default, ye strings (alphabetically) ke according sort karta hai aur original array ko modify karta hai.

let students = [
    "Shyam",
    "Rahul",
    "Amit",
    "Priya"
];

console.log("Before:", students);

students.sort();

console.log("After:", students);

// Before:
// [ 'Shyam', 'Rahul', 'Amit', 'Priya' ]

// After:
// [ 'Amit', 'Priya', 'Rahul', 'Shyam' ]