let marks = [85, 90, 78, 95, 88];

console.log("Before:", marks);

marks.fill(100, 1, 4);

console.log("After:", marks);

// Before:
// [85, 90, 78, 95, 88]

// After:
// [85, 100, 100, 100, 88]