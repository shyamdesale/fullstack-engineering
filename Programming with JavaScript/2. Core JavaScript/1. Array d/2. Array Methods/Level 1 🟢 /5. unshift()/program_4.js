// 1. Emergency Patient Queue (Hospital)
let patientQueue = [
    { token: 102, name: "Rahul", condition: "Fever" },
    { token: 103, name: "Amit", condition: "Cold" },
    { token: 104, name: "Priya", condition: "Headache" }
];

console.table(patientQueue);

let emergencyPatient = {
    token: 101,
    name: "Shyam",
    condition: "Heart Attack"
};

patientQueue.unshift(emergencyPatient);

console.log("Updated Patient Queue:");
console.table(patientQueue);

// Output:
// Before:
// ┌─────────┬────────┬───────┬─────────────┐
// │ (index) │ token  │ name  │  condition  │
// ├─────────┼────────┼───────┼─────────────┤
// │    0    │  102   │ Rahul │    Fever    │
// │    1    │  103   │ Amit  │     Cold    │
// │    2    │  104   │ Priya │ Headache    │
// └─────────┴────────┴───────┴─────────────┘
//
// After:
// ┌─────────┬────────┬───────┬───────────────────┐
// │ (index) │ token  │ name  │     condition     │
// ├─────────┼────────┼───────┼───────────────────┤
// │    0    │  101   │ Shyam │   Heart Attack    │
// │    1    │  102   │ Rahul │       Fever       │
// │    2    │  103   │ Amit  │        Cold       │
// │    3    │  104   │ Priya │     Headache      │
// └─────────┴────────┴───────┴───────────────────┘ 