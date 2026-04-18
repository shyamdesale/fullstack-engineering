// Program 1 — Time window checker (&&, ||, !)
let currentTime = 10;

let inOfficeHours = currentTime > 9 && currentTime < 17;
let outsideOffice = currentTime < 9 || currentTime > 17;

console.log("In office hours:", inOfficeHours);
console.log("Outside office:", outsideOffice);
console.log("Not in office:", !inOfficeHours);


// Program 2 — Login system (strict equality + AND)
let username = "admin";
let password = "1234";

let userOk = username === "admin";
let passOk = password === "1234";

if (userOk && passOk) {
  console.log("Login success");
} else {
  console.log("Login failed");
}


// Program 3 — Even seats problem (modulus)
let guests = 22;
let tables = 5;

let remainder = guests % tables;

console.log("Guests without seats:", remainder);


// Program 4 — Equality vs strict equality
let a = 5;
let b = "5";

console.log(a == b);   // true
console.log(a === b);  // false
console.log(a != b);   // false
console.log(a !== b);  // true


// Program 5 — Coercion with +
console.log(1 + "2");      // "12"
console.log("10" + 5);     // "105"
console.log(10 + 5);       // 15

// Program 6 — Using += for numbers
let overtime = 1;

overtime += 2;
overtime += 3;
overtime += 1;

console.log("Total overtime:", overtime);


// Program 7 — Using += for strings
let story = "";

story += "Once";
story += " upon";
story += " a";
story += " time";

console.log(story);


// Program 8 — Operator precedence
let result1 = 1 + 2 * 3;
let result2 = (1 + 2) * 3;

console.log(result1); // 7
console.log(result2); // 9


// Program 9 — Associativity trap
console.log(5 > 4 > 3);


// Program 10 — Real combined example
let amount = 1200;
let isMember = true;
let day = "Sunday";

let discount =
  (amount > 1000 && isMember) || day === "Sunday";

console.log("Discount available:", discount);
