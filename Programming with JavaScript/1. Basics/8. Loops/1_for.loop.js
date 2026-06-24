/*
========================================
FOR LOOP PROFESSIONAL EXAMPLES
========================================
*/


// Example 1: Print numbers 1–10
for(let i = 1; i <= 10; i++){
    console.log(i);
}

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



// Example 2: Sum of first 10 numbers
let sum = 0;

for(let i = 1; i <= 10; i++){
    sum += i;
}

console.log("Sum =", sum);

/*
Output
Sum = 55
*/



// Example 3: Multiplication table
let number = 5;

for(let i = 1; i <= 10; i++){
    console.log(number + " x " + i + " = " + (number*i));
}

/*
Output
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
*/



// Example 4: Reverse counting
for(let i = 10; i >= 1; i--){
    console.log(i);
}



/*
Output
10
9
8
...
1
*/



// Example 5: Even numbers
for(let i = 2; i <= 20; i += 2){
    console.log(i);
}

/*
Output
2
4
6
...
20
*/



// Example 6: Odd numbers
for(let i = 1; i <= 20; i += 2){
    console.log(i);
}



/*
Output
1
3
5
...
19
*/



// Example 7: Factorial
let n = 5;
let fact = 1;

for(let i = 1; i <= n; i++){
    fact *= i;
}

console.log("Factorial =", fact);

/*
Output
Factorial = 120
*/



// Example 8: Count digits
let num = 12345;
let count = 0;

for(; num > 0; num = Math.floor(num/10)){
    count++;
}

console.log(count);

/*
Output
5
*/



// Example 9: Power calculation
let base = 2;
let power = 5;

let result = 1;

for(let i=1;i<=power;i++){
    result *= base;
}

console.log(result);

/*
Output
32
*/



// Example 10: Print characters of string

let str = "JavaScript";

for(let i=0;i<str.length;i++){
    console.log(str[i]);
}



/*
Output
J
a
v
a
S
c
r
i
p
t
*/