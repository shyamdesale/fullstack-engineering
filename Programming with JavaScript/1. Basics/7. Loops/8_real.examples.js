/*
========================================
REAL WORLD LOOP EXAMPLES
========================================
*/


// Example 1: ATM withdrawal simulation

let balance = 5000;
let withdraw = [1000,1500,2000];

for(let i=0;i<withdraw.length;i++){

    if(balance >= withdraw[i]){

        balance -= withdraw[i];
        console.log("Withdraw:", withdraw[i]);

    }else{

        console.log("Insufficient balance");

    }

}

console.log("Remaining:", balance);



/*
Output
Withdraw: 1000
Withdraw: 1500
Withdraw: 2000
Remaining: 500
*/



// Example 2: Shopping cart total

let cart = [1200,450,300,150];

let total = 0;

for(let i=0;i<cart.length;i++){

    total += cart[i];

}

console.log("Total bill:", total);

/*
Output
Total bill: 2100
*/



// Example 3: Student average

let marks = [70,85,90,65,88];

let sum = 0;

for(let i=0;i<marks.length;i++){
    sum += marks[i];
}

let avg = sum / marks.length;

console.log("Average:", avg);

/*
Output
Average: 79.6
*/



// Example 4: Password attempts

let attempts = 0;
let maxAttempts = 3;

while(attempts < maxAttempts){

    console.log("Attempt", attempts+1);

    attempts++;

}

/*
Output
Attempt 1
Attempt 2
Attempt 3
*/



// Example 5: Product search

let products = ["Laptop","Phone","Tablet","Monitor"];

let item = "Phone";

for(let i=0;i<products.length;i++){

    if(products[i] === item){
        console.log("Product available");
    }

}

/*
Output
Product available
*/