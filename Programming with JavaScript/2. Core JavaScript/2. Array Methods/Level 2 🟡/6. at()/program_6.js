let employees = [
    { id: 101, name: "Shyam" },
    { id: 102, name: "Rahul" },
    { id: 103, name: "Amit" },
    { id: 104, name: "Priya" }
];

console.log("Employee List:");
console.table(employees);

console.log("First Employee:");
console.log(employees.at(0));

console.log("Last Employee:");
console.log(employees.at(-1));

// Employee List:
// ┌─────────┬───────┬────────┐
// │ (index) │  id   │ name   │
// ├─────────┼───────┼────────┤
// │    0    │  101  │ 'Shyam'│
// │    1    │  102  │ 'Rahul'│
// │    2    │  103  │ 'Amit' │
// │    3    │  104  │ 'Priya'│
// └─────────┴───────┴────────┘

// First Employee:
// { id: 101, name: 'Shyam' }

// Last Employee:
// { id: 104, name: 'Priya' }