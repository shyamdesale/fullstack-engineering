let tasks = [
    "Wake Up",
    "Exercise",
    "Study JavaScript",
    "Complete Assignment"
];

console.log("Before:", tasks);

let completedTask = tasks.shift();

console.log("Completed Task:", completedTask);
console.log("Remaining Tasks:", tasks);
console.log("Pending Tasks:", tasks.length);

// Before: [
//   'Wake Up',
//   'Exercise',
//   'Study JavaScript',
//   'Complete Assignment'
// ]

// Completed Task: Wake Up

// Remaining Tasks: [
//   'Exercise',
//   'Study JavaScript',
//   'Complete Assignment'
// ]

// Pending Tasks: 3