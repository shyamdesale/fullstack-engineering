let tasks = [
    "Study JavaScript",
    "Complete Assignment",
    "Go to Gym"
];

console.log("Before:", tasks);

tasks.unshift("Wake Up");

console.log("After:", tasks);
console.log("Pending Tasks:", tasks.length);

// Before: [
//   'Study JavaScript',
//   'Complete Assignment',
//   'Go to Gym'
// ]

// After: [
//   'Wake Up',
//   'Study JavaScript',
//   'Complete Assignment',
//   'Go to Gym'
// ]

// Pending Tasks: 4