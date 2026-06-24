/*
========================================
FUNCTION DECLARATION EXAMPLES
========================================
*/


// Example 1: Basic function

function greet(){

    console.log("Hello World");

}

greet();

/*
Output
Hello World
*/



// Example 2: Function with parameters

function add(a,b){

    console.log(a + b);

}

add(5,3);

/*
Output
8
*/



// Example 3: Function returning value

function multiply(a,b){

    return a*b;

}

let result = multiply(4,6);

console.log(result);

/*
Output
24
*/



// Example 4: Square number

function square(num){

    return num*num;

}

console.log(square(5));

/*
Output
25
*/



// Example 5: Even or odd

function checkEven(num){

    if(num%2===0){

        console.log("Even");

    }else{

        console.log("Odd");

    }

}

checkEven(7);

/*
Output
Odd
*/



// Example 6: Factorial

function factorial(n){

    let fact = 1;

    for(let i=1;i<=n;i++){

        fact *= i;

    }

    return fact;

}

console.log(factorial(5));

/*
Output
120
*/



// Example 7: Maximum of two numbers

function max(a,b){

    if(a>b){
        return a;
    }

    return b;

}

console.log(max(10,25));

/*
Output
25
*/



// Example 8: String length

function lengthOfString(str){

    return str.length;

}

console.log(lengthOfString("JavaScript"));

/*
Output
10
*/



// Example 9: Reverse string

function reverseString(str){

    let reversed = "";

    for(let i=str.length-1;i>=0;i--){

        reversed += str[i];

    }

    return reversed;

}

console.log(reverseString("hello"));

/*
Output
olleh
*/



// Example 10: Average of numbers

function average(a,b,c){

    return (a+b+c)/3;

}

console.log(average(10,20,30));

/*
Output
20
*/