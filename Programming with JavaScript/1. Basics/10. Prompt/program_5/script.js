let weight = Number(prompt("Enter Weight (kg)"));
let height = Number(prompt("Enter Height (meter)"));

let bmi = weight / (height * height);

alert(
`BMI Report

Weight : ${weight} kg

Height : ${height} m

BMI : ${bmi.toFixed(2)}`
);