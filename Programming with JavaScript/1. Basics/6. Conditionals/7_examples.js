/*
========================================
Real World Conditional Examples
========================================
*/


// Example 1: ATM Withdrawal
let balance = 5000;
let withdraw = 2000;

if(balance >= withdraw){
    console.log("Withdrawal Successful");
}else{
    console.log("Insufficient Balance");
}



// Example 2: Login System
let username = "admin";
let password = "1234";

if(username === "admin" && password === "1234"){
    console.log("Login successful");
}else{
    console.log("Invalid credentials");
}



// Example 3: Discount system
let purchase = 1200;

if(purchase >= 1000){
    console.log("10% Discount applied");
}else{
    console.log("No discount");
}



// Example 4: Traffic light
let signal = "red";

if(signal === "red"){
    console.log("Stop");
}
else if(signal === "yellow"){
    console.log("Ready");
}
else{
    console.log("Go");
}



// Example 5: Student result
let marks = 92;

if(marks >= 90){
    console.log("Topper");
}
else if(marks >= 60){
    console.log("Pass");
}
else{
    console.log("Fail");
}