/*
========================================
BREAK & CONTINUE PROFESSIONAL EXAMPLES
========================================
*/


// Example 1: break when number found

let numbers = [3,7,2,9,12,5];
let target = 9;

for(let i=0;i<numbers.length;i++){

    if(numbers[i] === target){
        console.log("Found at index:", i);
        break;
    }

}

/*
Output
Found at index: 3
*/



// Example 2: stop loop at specific value

for(let i=1;i<=10;i++){

    if(i === 6){
        break;
    }

    console.log(i);

}

/*
Output
1
2
3
4
5
*/



// Example 3: skip even numbers

for(let i=1;i<=10;i++){

    if(i % 2 === 0){
        continue;
    }

    console.log(i);

}

/*
Output
1
3
5
7
9
*/



// Example 4: skip multiples of 3

for(let i=1;i<=15;i++){

    if(i % 3 === 0){
        continue;
    }

    console.log(i);

}



/*
Output
1
2
4
5
7
8
10
11
13
14
*/



// Example 5: search user in list

let users = ["Aman","Rahul","Priya","Shyam"];
let search = "Priya";

for(let i=0;i<users.length;i++){

    if(users[i] === search){
        console.log("User found");
        break;
    }

}



/*
Output
User found
*/



// Example 6: first negative number

let data = [5,10,8,-3,7];

for(let i=0;i<data.length;i++){

    if(data[i] < 0){
        console.log("Negative:", data[i]);
        break;
    }

}



/*
Output
Negative: -3
*/



// Example 7: skip invalid data

let values = [10,-5,20,-8,30];

for(let i=0;i<values.length;i++){

    if(values[i] < 0){
        continue;
    }

    console.log(values[i]);

}

/*
Output
10
20
30
*/



// Example 8: break nested search

let matrix = [
    [2,4],
    [6,8]
];

let found = false;

for(let i=0;i<matrix.length;i++){

    for(let j=0;j<matrix[i].length;j++){

        if(matrix[i][j] === 6){

            console.log("Found at:", i, j);
            found = true;
            break;

        }

    }

    if(found){
        break;
    }

}



/*
Output
Found at: 1 0
*/