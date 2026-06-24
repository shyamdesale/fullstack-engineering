let name = prompt("Employee Name");

let basic = Number(prompt("Basic Salary"));

let hra = basic * 0.20;
let da = basic * 0.10;

let total = basic + hra + da;

alert(
`Employee : ${name}

Salary : ₹${total}`
);