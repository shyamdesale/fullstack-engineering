// 4. Login System

let enteredUser = "admin";
let enteredPass = "1234";

let correctUser = enteredUser === "admin";
let correctPass = enteredPass === "1234";

let loginSuccess = correctUser && correctPass;

if (loginSuccess) {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}
