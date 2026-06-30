// Example of using the trim() method to remove whitespace from both ends of a string

let str = "   Hello, World!   ";
console.log(str.trim()); // Output: "Hello, World!"

// =====================================================
// 0. Remove Extra Spaces From Name
// =====================================================

let favGame = prompt("Enter Your Favorite Game");

favGame = favGame.trim();

alert(
`User Favorite Game

${favGame}`
);


// =====================================================
// 1. Remove Extra Spaces From Name
// =====================================================

let fullName = prompt("Enter Your Name");

fullName = fullName.trim();

alert(
`User Details

Name : ${fullName}`
);



// =====================================================
// 2. Username Validation
// =====================================================

let userName = prompt("Enter Username");

userName = userName.trim();

if (userName === "admin") {
    alert("Username Matched");
}
else {
    alert("Invalid Username");
}



// =====================================================
// 3. Login System With trim()
// =====================================================

let username = prompt("Username");
let password = prompt("Password");

username = username.trim();
password = password.trim();

if (
    username === "admin" &&
    password === "1234"
) {
    alert("Login Successful");
}
else {
    alert("Access Denied");
}



// =====================================================
// 4. Feedback Validation
// =====================================================

let feedback = prompt("Enter Your Feedback");

feedback = feedback.trim();

if (feedback === "") {
    alert("Feedback Cannot Be Empty");
}
else {
    alert(
`Feedback Submitted

Message : ${feedback}`
    );
}



// =====================================================
// 5. Email Validation
// =====================================================

let email = prompt("Enter Your Email");

email = email.trim();

if (
    email === ""
) {
    alert("Email Is Required");
}
else if (
    email.includes("@")
) {
    alert("Valid Email");
}
else {
    alert("Invalid Email");
}