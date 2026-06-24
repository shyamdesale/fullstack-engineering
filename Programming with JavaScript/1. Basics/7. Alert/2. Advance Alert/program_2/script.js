let name = prompt("Enter Student Name");

let m1 = Number(prompt("Math Marks"));
let m2 = Number(prompt("Science Marks"));
let m3 = Number(prompt("English Marks"));

let total = m1+m2+m3;
let percentage = total/3;

let grade;

if(percentage >= 90){
    grade = "A+";
}
else if(percentage >= 75){
    grade = "A";
}
else if(percentage >= 60){
    grade = "B";
}
else{
    grade = "Fail";
}

alert(
`Student : ${name}

Total : ${total}

Percentage : ${percentage}

Grade : ${grade}`
);