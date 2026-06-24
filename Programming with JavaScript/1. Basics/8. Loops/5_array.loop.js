/*
========================================
ARRAY LOOP PROFESSIONAL EXAMPLES
========================================
*/


// Example 1: Print array elements

let numbers = [10,20,30,40,50];

for(let i=0;i<numbers.length;i++){

    console.log(numbers[i]);

}

/*
Output
10
20
30
40
50
*/



// Example 2: Sum of array

let arr = [5,10,15,20];
let sum = 0;

for(let i=0;i<arr.length;i++){

    sum += arr[i];

}

console.log("Sum =", sum);

/*
Output
Sum = 50
*/



// Example 3: Find maximum

let values = [10,50,30,90,40];

let max = values[0];

for(let i=1;i<values.length;i++){

    if(values[i] > max){

        max = values[i];

    }

}

console.log("Max =", max);

/*
Output
Max = 90
*/



// Example 4: Count even numbers

let nums = [1,2,3,4,5,6,7,8];

let count = 0;

for(let i=0;i<nums.length;i++){

    if(nums[i] % 2 === 0){

        count++;

    }

}

console.log("Even count =", count);

/*
Output
Even count = 4
*/



// Example 5: Search element

let data = [5,9,12,7,3];

let target = 12;
let found = false;

for(let i=0;i<data.length;i++){

    if(data[i] === target){

        found = true;

    }

}

console.log(found);

/*
Output
true
*/