/*
========================================
Switch Statement Examples
========================================
*/

// Example 1
let day = 2;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
}



// Example 2
let fruit = "apple";

switch(fruit){
    case "apple":
        console.log("Red fruit");
        break;
    case "banana":
        console.log("Yellow fruit");
        break;
}



// Example 3
let role = "admin";

switch(role){
    case "admin":
        console.log("Full access");
        break;
    case "user":
        console.log("Limited access");
        break;
}



// Example 4
let grade = "B";

switch(grade){
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
}



// Example 5
let month = 4;

switch(month){
    case 1:
    case 2:
    case 3:
        console.log("Quarter 1");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Quarter 2");
}