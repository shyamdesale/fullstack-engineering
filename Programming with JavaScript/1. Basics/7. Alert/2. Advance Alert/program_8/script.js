let food = Number(prompt("Food Expense"));
let travel = Number(prompt("Travel Expense"));
let shopping = Number(prompt("Shopping Expense"));

let total = food + travel + shopping;

alert(
`Monthly Expense

Food : ₹${food}

Travel : ₹${travel}

Shopping : ₹${shopping}

Total : ₹${total}`
);