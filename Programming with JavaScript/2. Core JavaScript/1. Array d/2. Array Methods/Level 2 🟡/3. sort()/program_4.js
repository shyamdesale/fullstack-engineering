let students = [
    { name: "Shyam", marks: 89 },
    { name: "Rahul", marks: 76 },
    { name: "Amit", marks: 95 },
    { name: "Priya", marks: 82 }
];

console.log("Before Sorting:");
console.table(students);

students.sort((a, b) => b.marks - a.marks);

console.log("After Sorting (Highest Marks First):");
console.table(students);

// Before Sorting:
// ┌─────────┬──────────┬───────┐
// │ (index) │   name   │ marks │
// ├─────────┼──────────┼───────┤
// │    0    │ 'Shyam'  │  89   │
// │    1    │ 'Rahul'  │  76   │
// │    2    │ 'Amit'   │  95   │
// │    3    │ 'Priya'  │  82   │
// └─────────┴──────────┴───────┘

// After Sorting (Highest Marks First):
// ┌─────────┬──────────┬───────┐
// │ (index) │   name   │ marks │
// ├─────────┼──────────┼───────┤
// │    0    │ 'Amit'   │  95   │
// │    1    │ 'Shyam'  │  89   │
// │    2    │ 'Priya'  │  82   │
// │    3    │ 'Rahul'  │  76   │
// └─────────┴──────────┴───────┘