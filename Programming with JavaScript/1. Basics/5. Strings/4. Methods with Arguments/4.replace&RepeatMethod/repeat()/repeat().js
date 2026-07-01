// 1. Repeat Welcome Message
let message = "Welcome ";

let output = message.repeat(3);

console.log(output);



// 2. Decorative Line
let line = "=";

let border = line.repeat(30);

console.log(border);



// 3. Password Mask
// example: "secret123" => "*********"
let password = "secret123";

let maskedPassword = password.replace(password, "*".repeat(password.length));

console.log(maskedPassword);

// example: "*" => "*********"
let star = "*";

let passwordMask = star.repeat(8);

console.log(passwordMask);




// 4. Loading Animation
let dot = ".";

let loading = dot.repeat(5);

console.log("Loading" + loading);



// 5. Receipt Separator
let dash = "-";

let separator = dash.repeat(40);

console.log(separator);




// =====================================================
// Password Mask
// =====================================================

let passworD = prompt("Enter Password");

let passwordmask = "*".repeat(passworD.length);

alert(
`Login Details

Password : ${passwordmask}`
);




// =====================================================
// OTP Placeholder
// =====================================================

let otpLength = Number(prompt("Enter OTP Length"));

let otpBox = "_ ".repeat(otpLength);

alert(
`OTP Placeholder

${otpBox}`
);



// =====================================================
// Invoice Border
// =====================================================

let bordeR = "=".repeat(50);

alert(
`${bordeR}

INVOICE

${bordeR}`
);




// =====================================================
// Progress Indicator
// =====================================================

let completed = Number(prompt("Completed Steps"));

let progress = "#".repeat(completed);

alert(
`Progress

${progress}`
);




// =====================================================
// Temporary User ID
// =====================================================

let userId = prompt("Enter User ID");

let tempId = "TEMP-".repeat(2) + userId;

alert(
`User Details

Temporary ID : ${tempId}`
);