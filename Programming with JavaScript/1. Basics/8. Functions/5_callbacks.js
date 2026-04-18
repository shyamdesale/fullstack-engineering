/*
========================================
CALLBACK FUNCTION EXAMPLES
========================================
*/


// Example 1: Simple callback

function greet(name,callback){

    console.log("Hello",name);
    callback();

}

function finish(){

    console.log("Greeting complete");

}

greet("Shyam",finish);

/*
Output
Hello Shyam
Greeting complete
*/



// Example 2: Calculation callback

function calculate(a,b,operation){

    return operation(a,b);

}

function add(x,y){

    return x+y;

}

console.log(calculate(5,3,add));

/*
Output
8
*/



// Example 3: Callback with arrow function

function process(num,callback){

    return callback(num);

}

let result = process(5,n=>n*n);

console.log(result);

/*
Output
25
*/



// Example 4: Array processing

function processArray(arr,callback){

    for(let i=0;i<arr.length;i++){
        callback(arr[i]);
    }

}

processArray([1,2,3],n=>console.log(n*2));

/*
Output
2
4
6
*/



// Example 5: Async style simulation

function login(username,callback){

    console.log("Checking user:",username);

    callback();

}

login("admin",()=>console.log("Login successful"));

/*
Output
Checking user: admin
Login successful
*/