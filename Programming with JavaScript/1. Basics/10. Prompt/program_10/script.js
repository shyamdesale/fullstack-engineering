const principal = Number(prompt("Principal Amount"));
const rate = Number(prompt("Rate (%)"));
const time = Number(prompt("Time (Years)"));

if (
    Number.isNaN(principal) ||
    Number.isNaN(rate) ||
    Number.isNaN(time)
) {

    alert("Invalid Input");

}
else {

    const simpleInterest = (principal * rate * time) / 100;

    alert(
`Interest Report

Principal : ₹${principal}

Rate : ${rate}%

Time : ${time} Years

Simple Interest : ₹${simpleInterest}`
    );

}