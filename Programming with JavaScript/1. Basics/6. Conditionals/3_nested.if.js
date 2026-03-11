/*
========================================
Nested IF Examples
========================================
*/

// Example 1
let age = 20;
let hasLicense = true;

if(age >= 18){
    if(hasLicense){
        console.log("You can drive");
    }
}



// Example 2
let username = "admin";
let password = "1234";

if(username === "admin"){
    if(password === "1234"){
        console.log("Login success");
    }
}



// Example 3
let marks = 85;

if(marks >= 35){
    if(marks >= 75){
        console.log("Distinction");
    }
}



// Example 4
let balance = 2000;
let withdraw = 1000;

if(balance >= withdraw){
    if(withdraw > 0){
        console.log("Withdrawal successful");
    }
}



// Example 5
let userRole = "admin";

if(userRole === "admin"){
    if(true){
        console.log("Full access granted");
    }
}