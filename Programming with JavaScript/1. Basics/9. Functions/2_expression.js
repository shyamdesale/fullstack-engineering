/*
========================================
FUNCTION EXPRESSION EXAMPLES
========================================
*/


// Example 1

const greet = function(){

    console.log("Hello user");

};

greet();

/*
Output
Hello user
*/



// Example 2

const add = function(a,b){

    return a+b;

};

console.log(add(7,3));

/*
Output
10
*/



// Example 3

const square = function(num){

    return num*num;

};

console.log(square(6));

/*
Output
36
*/



// Example 4

const checkNumber = function(num){

    if(num>0){

        return "Positive";

    }

    return "Negative";

};

console.log(checkNumber(-5));

/*
Output
Negative
*/



// Example 5

const findMax = function(arr){

    let max = arr[0];

    for(let i=1;i<arr.length;i++){

        if(arr[i] > max){

            max = arr[i];

        }

    }

    return max;

};

console.log(findMax([10,45,23,99,56]));

/*
Output
99
*/



// Example 6

const countVowels = function(str){

    let count = 0;

    let vowels = "aeiou";

    for(let i=0;i<str.length;i++){

        if(vowels.includes(str[i].toLowerCase())){

            count++;

        }

    }

    return count;

};

console.log(countVowels("JavaScript"));

/*
Output
3
*/



// Example 7

const isPrime = function(num){

    for(let i=2;i<num;i++){

        if(num%i===0){
            return false;
        }

    }

    return true;

};

console.log(isPrime(7));

/*
Output
true
*/



// Example 8

const sumArray = function(arr){

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