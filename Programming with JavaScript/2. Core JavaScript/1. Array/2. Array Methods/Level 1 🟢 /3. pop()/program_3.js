let marks = [85, 90, 78, 95];

console.log("Before:", marks);

let lastMark = marks.pop();

console.log("Removed Mark:", lastMark);
console.log("Remaining Marks:", marks);
console.log("Total Marks:", marks.length);

// Before: [ 85, 90, 78, 95 ]
// Removed Mark: 95
// Remaining Marks: [ 85, 90, 78 ]
// Total Marks: 3