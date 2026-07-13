let employees = [
    { id: 101, name: "Shyam" },
    { id: 102, name: "Rahul" },
    { id: 103, name: "Amit" },
    { id: 104, name: "Priya" }
];

console.log("Before:");
console.table(employees);

let removedEmployee = employees.splice(
    1,
    1,
    { id: 105, name: "Sneha" }
);

console.log("Removed Employee:");
console.table(removedEmployee);

console.log("Updated Employee List:");
console.table(employees);

// Before:
// ┌─────────┬───────┬────────┐
// │ (index) │  id   │ name   │
// ├─────────┼───────┼────────┤
// │    0    │  101  │ 'Shyam'│
// │    1    │  102  │ 'Rahul'│
// │    2    │  103  │ 'Amit' │
// │    3    │  104  │ 'Priya'│
// └─────────┴───────┴────────┘

// Removed Employee:
// ┌─────────┬───────┬────────┐
// │ (index) │  id   │ name   │
// ├─────────┼───────┼────────┤
// │    0    │  102  │ 'Rahul'│
// └─────────┴───────┴────────┘

// Updated Employee List:
// ┌─────────┬───────┬────────┐
// │ (index) │  id   │ name   │
// ├─────────┼───────┼────────┤
// │    0    │  101  │ 'Shyam'│
// │    1    │  105  │ 'Sneha'│
// │    2    │  103  │ 'Amit' │
// │    3    │  104  │ 'Priya'│
// └─────────┴───────┴────────┘