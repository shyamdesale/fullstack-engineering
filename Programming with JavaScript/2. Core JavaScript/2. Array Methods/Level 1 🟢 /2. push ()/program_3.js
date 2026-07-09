let marks = [85, 90, 78];

console.log("Before:", marks);

marks.push(95);

console.log("After:", marks);
console.log("Latest Mark:", marks[marks.length - 1]);


// Before: [ 85, 90, 78 ]
// After: [ 85, 90, 78, 95 ]
// Latest Mark: 95