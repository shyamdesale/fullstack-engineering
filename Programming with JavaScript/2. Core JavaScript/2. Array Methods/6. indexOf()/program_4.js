// 1. Student Enrollment Verification
let enrolledStudents = [
    "Shyam",
    "Rahul",
    "Amit",
    "Priya",
    "Sneha"
];

let searchStudent = "Amit";

let index = enrolledStudents.indexOf(searchStudent);

if (index !== -1) {
    console.log(`${searchStudent} is enrolled.`);
    console.log(`Roll Position: ${index + 1}`);
} else {
    console.log(`${searchStudent} is not enrolled.`);
}

// Output:
// Amit is enrolled.
// Roll Position: 3