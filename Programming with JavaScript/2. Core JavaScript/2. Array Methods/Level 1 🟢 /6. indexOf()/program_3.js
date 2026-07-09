let languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

let languageIndex = languages.indexOf("Python");

console.log("Languages:", languages);
console.log("Python Index:", languageIndex);

if (languageIndex === -1) {
    console.log("Python is not available in the array.");
}


// Languages: [ 'HTML', 'CSS', 'JavaScript', 'React' ]
// Python Index: -1
// Python is not available in the array.