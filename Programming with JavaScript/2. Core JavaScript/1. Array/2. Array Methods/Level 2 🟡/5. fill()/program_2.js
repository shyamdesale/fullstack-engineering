let seats = [
    "Booked",
    "Booked",
    "Available",
    "Booked"
];

console.log("Before:", seats);

seats.fill("Available");

console.log("After:", seats);

// Before:
// [
//   'Booked',
//   'Booked',
//   'Available',
//   'Booked'
// ]

// After:
// [
//   'Available',
//   'Available',
//   'Available',
//   'Available'
// ]