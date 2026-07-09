let employees = [
    { id: 101, name: "Shyam", salary: 50000 },
    { id: 102, name: "Rahul", salary: 70000 },
    { id: 103, name: "Amit", salary: 45000 },
    { id: 104, name: "Priya", salary: 90000 }
];

console.log("Before Sorting:");
console.table(employees);

employees.sort((a, b) => b.salary - a.salary);

console.log("After Sorting (Highest Salary First):");
console.table(employees);

// Before Sorting:
// ┌─────────┬───────┬────────┬────────┐
// │ (index) │  id   │ name   │ salary │
// ├─────────┼───────┼────────┼────────┤
// │    0    │  101  │ 'Shyam'│ 50000  │
// │    1    │  102  │ 'Rahul'│ 70000  │
// │    2    │  103  │ 'Amit' │ 45000  │
// │    3    │  104  │ 'Priya'│ 90000  │
// └─────────┴───────┴────────┴────────┘

// After Sorting (Highest Salary First):
// ┌─────────┬───────┬────────┬────────┐
// │ (index) │  id   │ name   │ salary │
// ├─────────┼───────┼────────┼────────┤
// │    0    │  104  │ 'Priya'│ 90000  │
// │    1    │  102  │ 'Rahul'│ 70000  │
// │    2    │  101  │ 'Shyam'│ 50000  │
// │    3    │  103  │ 'Amit' │ 45000  │
// └─────────┴───────┴────────┴────────┘