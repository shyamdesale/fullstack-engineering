// 2. Student Attendance Report
let morningBatch = [
    "Shyam",
    "Rahul",
    "Amit"
];

let eveningBatch = [
    "Priya",
    "Sneha",
    "Rohan"
];

let allStudents = morningBatch.concat(eveningBatch);

console.log("Combined Student List:");
console.table(allStudents);

console.log("Total Students:", allStudents.length);

// Combined Student List:
// ┌─────────┬─────────┐
// │ (index) │ Values  │
// ├─────────┼─────────┤
// │    0    │ 'Shyam' │
// │    1    │ 'Rahul' │
// │    2    │ 'Amit'  │
// │    3    │ 'Priya' │
// │    4    │ 'Sneha' │
// │    5    │ 'Rohan' │
// └─────────┴─────────┘
// Total Students: 6