/*
========================================
PARAMETERS & RETURN VALUES
========================================
*/


// Example 1: Default parameter

function greet(name="Guest"){

    console.log("Hello", name);

}

greet();
greet("Shyam");

/*
Output
Hello Guest
Hello Shyam
*/



// Example 2: Multiple parameters

function area(length,width){

    return length*width;

}

console.log(area(10,5));

/*
Output
50
*/



// Example 3: Return boolean

function isAdult(age){

    return age>=18;

}

console.log(isAdult(20));

/*
Output
true
*/



// Example 4: Rest parameter

function sum(...numbers){

    let total=0;

    for(let i=0;i<numbers.length;i++){
        total+=numbers[i];
    }

    return total;

}

console.log(sum(5,10,15,20));

/*
Output
50
*/



// Example 5: Function returning object

function createUser(name,age){

    return {
        name:name,
        age:age
    };

}

console.log(createUser("Rahul",21));

/*
Output
{ name: 'Rahul', age: 21 }
*/



// Example 6: Returning array

function generateNumbers(n){

    let arr=[];

    for(let i=1;i<=n;i++){
        arr.push(i);
    }

    return arr;

}

console.log(generateNumbers(5));

/*
Output
[1,2,3,4,5]
*/