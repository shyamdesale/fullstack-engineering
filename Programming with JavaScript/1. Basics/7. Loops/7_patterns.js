/*
========================================
STAR & NUMBER PATTERNS
========================================
*/


// Example 1: Square pattern

for(let i=1;i<=5;i++){

    let row = "";

    for(let j=1;j<=5;j++){
        row += "* ";
    }

    console.log(row);

}

/*
Output
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
*/



// Example 2: Right triangle

for(let i=1;i<=5;i++){

    let row = "";

    for(let j=1;j<=i;j++){
        row += "* ";
    }

    console.log(row);

}

/*
Output
*
* *
* * *
* * * *
* * * * *
*/



// Example 3: Inverted triangle

for(let i=5;i>=1;i--){

    let row = "";

    for(let j=1;j<=i;j++){
        row += "* ";
    }

    console.log(row);

}

/*
Output
* * * * *
* * * *
* * *
* *
*
*/



// Example 4: Number triangle

for(let i=1;i<=5;i++){

    let row = "";

    for(let j=1;j<=i;j++){
        row += j + " ";
    }

    console.log(row);

}

/*
Output
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/



// Example 5: Pyramid

let rows = 5;

for(let i=1;i<=rows;i++){

    let row = "";

    for(let s=1;s<=rows-i;s++){
        row += " ";
    }

    for(let j=1;j<=2*i-1;j++){
        row += "*";
    }

    console.log(row);

}

/*
Output
    *
   ***
  *****
 *******
*********
*/