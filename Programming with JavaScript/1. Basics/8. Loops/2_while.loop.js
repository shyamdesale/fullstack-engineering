/*
========================================
WHILE LOOP PROFESSIONAL EXAMPLES
========================================
*/


// Example 1: Print numbers 1–10

let i = 1;

while(i <= 10){
    console.log(i);
    i++;
}



/*
Output
1
2
...
10
*/



// Example 2: Sum of numbers

let sum = 0;
let num = 1;

while(num <= 10){
    sum += num;
    num++;
}

console.log(sum);

/*
Output
55
*/



// Example 3: Reverse numbers

let n = 10;

while(n >= 1){
    console.log(n);
    n--;
}



/*
Output
10
9
8
...
1
*/



// Example 4: Multiplication table

let table = 7;
let j = 1;

while(j <= 10){
    console.log(table + " x " + j + " = " + (table*j));
    j++;
}



/*
Output
7 x 1 = 7
...
7 x 10 = 70
*/



// Example 5: Factorial

let number = 5;
let fact = 1;
let k = 1;

while(k <= number){
    fact *= k;
    k++;
}

console.log(fact);

/*
Output
120
*/



// Example 6: Sum of digits

let value = 1234;
let total = 0;

while(value > 0){

    total += value % 10;
    value = Math.floor(value / 10);

}

console.log(total);

/*
Output
10
*/



// Example 7: Count digits

let number2 = 56789;
let digits = 0;

while(number2 > 0){
    digits++;
    number2 = Math.floor(number2 / 10);
}

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

while(count <= 10){

    console.log(a);

    c = a + b;
    a = b;
    b = c;

    count++;
}



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