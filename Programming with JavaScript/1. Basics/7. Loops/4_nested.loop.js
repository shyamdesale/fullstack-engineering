/*
========================================
NESTED LOOP PROFESSIONAL EXAMPLES
========================================
*/


// Example 1: Multiplication grid

for(let i=1;i<=5;i++){

    for(let j=1;j<=5;j++){

        console.log(i + " x " + j + " = " + (i*j));

    }

}

/*
Output (partial)
1 x 1 = 1
1 x 2 = 2
...
5 x 5 = 25
*/



// Example 2: Matrix printing

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let i=0;i<matrix.length;i++){

    for(let j=0;j<matrix[i].length;j++){

        console.log(matrix[i][j]);

    }

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
*/



// Example 3: Addition table

for(let i=1;i<=3;i++){

    for(let j=1;j<=3;j++){

        console.log(i + " + " + j + " = " + (i+j));

    }

}



/*
Output
1 + 1 = 2
1 + 2 = 3
...
3 + 3 = 6
*/



// Example 4: Pair combinations

let arr = [1,2,3];

for(let i=0;i<arr.length;i++){

    for(let j=0;j<arr.length;j++){

        console.log(arr[i], arr[j]);

    }

}

/*
Output
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
*/



// Example 5: Searching in 2D array

let grid = [
    [10,20],
    [30,40]
];

for(let i=0;i<grid.length;i++){

    for(let j=0;j<grid[i].length;j++){

        if(grid[i][j] === 30){

            console.log("Found at", i, j);

        }

    }

}

/*
Output
Found at 1 0
*/