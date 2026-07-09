let languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

console.log("Before:", languages);

languages.splice(2, 1, "TypeScript");

console.log("After:", languages);

// Before:
// [ 'HTML', 'CSS', 'JavaScript', 'React' ]

// After:
// [ 'HTML', 'CSS', 'TypeScript', 'React' ]