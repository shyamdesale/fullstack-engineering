let basicSalary = Number(prompt("Enter Basic Salary"));
let bonus = Number(prompt("Enter Bonus"));
let deduction = Number(prompt("Enter Deduction"));

let finalSalary = basicSalary + bonus - deduction;

alert(
`Salary Details

Basic Salary : ₹${basicSalary}

Bonus : ₹${bonus}

Deduction : ₹${deduction}

Final Salary : ₹${finalSalary}`
);