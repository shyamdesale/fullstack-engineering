let englishMarks = Number(prompt("English Marks"));
let mathsMarks = Number(prompt("Maths Marks"));
let scienceMarks = Number(prompt("Science Marks"));

let totalMarks = englishMarks + mathsMarks + scienceMarks;

let percentage = totalMarks / 3;

alert(
`Result

English : ${englishMarks}

Maths : ${mathsMarks}

Science : ${scienceMarks}

Percentage : ${percentage}%`
);