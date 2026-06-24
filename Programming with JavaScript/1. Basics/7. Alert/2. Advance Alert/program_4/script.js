let score = 0;

let q1 = prompt("Capital of India?");

if(q1.toLowerCase() === "delhi"){
    score++;
}

let q2 = prompt("2 + 2 = ?");

if(q2 == 4){
    score++;
}

let q3 = prompt("HTML stands for?");

if(q3.toLowerCase().includes("hyper")){
    score++;
}

alert("Final Score = " + score + "/3");