let languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

let hasPython = languages.includes("Python");

console.log("Languages:", languages);
console.log("Python Available?", hasPython);

if (!hasPython) {
    console.log("Python is not available in the array.");
}

// Languages: [ 'HTML', 'CSS', 'JavaScript', 'React' ]
// Python Available? false
// Python is not available in the array.