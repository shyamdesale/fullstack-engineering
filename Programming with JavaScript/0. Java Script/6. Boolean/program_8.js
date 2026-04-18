// 8. Website Form Validation

let username = "shyam";
let password = "pass123";

let validUser = username.length >= 3;
let validPass = password.length >= 6;

if (validUser && validPass) {
  console.log("Form valid");
} else {
  console.log("Invalid input");
}
