let tasks = [
    "Requirement Analysis",
    "Database Design",
    "Testing"
];

console.log("Before:");
console.table(tasks);

tasks.splice(
    2,
    0,
    "Frontend Development",
    "Backend Development"
);

console.log("Updated Tasks:");
console.table(tasks);

// Before:
// ┌─────────┬───────────────────────┐
// │ (index) │        Values         │
// ├─────────┼───────────────────────┤
// │    0    │ 'Requirement Analysis'│
// │    1    │   'Database Design'   │
// │    2    │       'Testing'       │
// └─────────┴───────────────────────┘

// Updated Tasks:
// ┌─────────┬───────────────────────────────┐
// │ (index) │            Values             │
// ├─────────┼───────────────────────────────┤
// │    0    │     'Requirement Analysis'    │
// │    1    │       'Database Design'       │
// │    2    │   'Frontend Development'      │
// │    3    │   'Backend Development'       │
// │    4    │           'Testing'           │
// └─────────┴───────────────────────────────┘