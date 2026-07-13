// 1. Student Result Management System
let students = [
    { id: 101, name: "Shyam", marks: 89 },
    { id: 102, name: "Rahul", marks: 76 },
    { id: 103, name: "Amit", marks: 92 }
];

let newStudent = {
    id: 104,
    name: "Priya",
    marks: 95
};

students.push(newStudent);

console.log(students);
console.log("Total Students:", students.length);

// Output:
// [
//   { id: 101, name: 'Shyam', marks: 89 },
//   { id: 102, name: 'Rahul', marks: 76 },
//   { id: 103, name: 'Amit', marks: 92 },
//   { id: 104, name: 'Priya', marks: 95 }
// ]
// Total Students: 4
