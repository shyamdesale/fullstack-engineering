let password = "Abc@1234";

if (password.length < 6) {
    console.log("Weak password");
} else if (password.length >= 6 && password.length < 10) {
    console.log("Medium password");
} else {
    console.log("Strong password");
}