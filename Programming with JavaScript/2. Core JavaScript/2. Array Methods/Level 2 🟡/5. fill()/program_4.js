let seats = [
    "Booked",
    "Booked",
    "Available",
    "Booked",
    "Booked",
    "Available"
];

console.log("Before Reset:");
console.table(seats);

seats.fill("Available");

console.log("After Reset:");
console.table(seats);


// Before Reset:
// ┌─────────┬───────────┐
// │ (index) │   Value   │
// ├─────────┼───────────┤
// │    0    │ 'Booked'  │
// │    1    │ 'Booked'  │
// │    2    │'Available'│
// │    3    │ 'Booked'  │
// │    4    │ 'Booked'  │
// │    5    │'Available'│
// └─────────┴───────────┘

// After Reset:
// ┌─────────┬───────────┐
// │ (index) │   Value   │
// ├─────────┼───────────┤
// │    0    │'Available'│
// │    1    │'Available'│
// │    2    │'Available'│
// │    3    │'Available'│
// │    4    │'Available'│
// │    5    │'Available'│
// └─────────┴───────────┘