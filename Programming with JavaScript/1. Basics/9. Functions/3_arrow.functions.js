/*
========================================
ARROW FUNCTION PROFESSIONAL EXAMPLES
========================================
*/


// Example 1: Basic arrow function

const greet = () => {
    console.log("Hello JavaScript");
};

greet();

/*
Output
Hello JavaScript
*/



// Example 2: Arrow function with parameters

const add = (a,b) => {
    return a+b;
};

console.log(add(5,3));

/*
Output
8
*/



// Example 3: Short syntax

const multiply = (a,b) => a*b;

console.log(multiply(4,6));

/*
Output
24
*/



// Example 4: Square number

const square = n => n*n;

console.log(square(7));

/*
Output
49
*/



// Example 5: Check even

const isEven = n => n % 2 === 0;

console.log(isEven(8));

/*
Output
true
*/



// Example 6: Find max in array

const maxValue = arr => {

    let max = arr[0];

    for(let i=1;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    return max;

};

console.log(maxValue([10,50,30,90,40]));

/*
Output
90
*/



// Example 7: Sum array

const sumArray = arr => {

    let sum = 0;

    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }

    return sum;

};

console.log(sumArray([5,10,15]));

/*
Output
30
*/



// Example 8: Convert string to uppercase

const toUpper = str => str.toUpperCase();

console.log(toUpper("javascript"));

/*
Output
JAVASCRIPT
*/



// Example 9: Reverse string

const reverse = str => {

    let r = "";

    for(let i=str.length-1;i>=0;i--){
        r += str[i];
    }

    return r;

};

console.log(reverse("hello"));

/*
Output
olleh
*/



// Example 10: Average calculation

const average = (a,b,c) => (a+b+c)/3;

console.log(average(10,20,30));

/*
Output
20
*/