/*
========================================
DO WHILE LOOP PROFESSIONAL EXAMPLES
========================================
*/


// Example 1: Print numbers 1–10

let i = 1;

do {
    console.log(i);
    i++;
} while(i <= 10);

/*
Output
1
2
3
4
5
6
7
8
9
10
*/



// Example 2: Reverse counting

let n = 10;

do{
    console.log(n);
    n--;
}while(n >= 1);

/*
Output
10
9
8
...
1
*/



// Example 3: Multiplication table

let num = 4;
let j = 1;

do{
    console.log(num + " x " + j + " = " + (num*j));
    j++;
}while(j <= 10);

/*
Output
4 x 1 = 4
4 x 2 = 8
...
4 x 10 = 40
*/



// Example 4: Sum of numbers

let sum = 0;
let k = 1;

do{
    sum += k;
    k++;
}while(k <= 10);

console.log("Sum =", sum);

/*
Output
Sum = 55
*/



// Example 5: Factorial

let number = 5;
let fact = 1;
let x = 1;

do{
    fact *= x;
    x++;
}while(x <= number);

console.log("Factorial =", fact);

/*
Output
Factorial = 120
*/



// Example 6: Sum of digits

let value = 1234;
let total = 0;

do{
    total += value % 10;
    value = Math.floor(value / 10);
}while(value > 0);

console.log(total);

/*
Output
10
*/



// Example 7: Count digits

let number2 = 56789;
let digits = 0;

do{
    digits++;
    number2 = Math.floor(number2 / 10);
}while(number2 > 0);

console.log(digits);

/*
Output
5
*/



// Example 8: Fibonacci

let a = 0;
let b = 1;
let c;
let count = 1;

do{

    console.log(a);

    c = a + b;
    a = b;
    b = c;

    count++;

}while(count <= 10);

/*
Output
0
1
1
2
3
5
8
13
21
34
*/