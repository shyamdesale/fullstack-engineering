/*
========================================
REAL WORLD FUNCTION EXAMPLES
========================================
*/


// Example 1: Shopping cart total

function cartTotal(items){

    let total=0;

    for(let i=0;i<items.length;i++){
        total+=items[i];
    }

    return total;

}

console.log(cartTotal([500,200,300]));

/*
Output
1000
*/



// Example 2: Student grading

function grade(marks){

    if(marks>=90) return "A";
    if(marks>=75) return "B";
    if(marks>=60) return "C";

    return "Fail";

}

console.log(grade(82));

/*
Output
B
*/



// Example 3: Password validation

function validatePassword(password){

    return password.length>=8;

}

console.log(validatePassword("abc12345"));

/*
Output
true
*/



// Example 4: Product search

function searchProduct(products,target){

    for(let i=0;i<products.length;i++){

        if(products[i]===target){
            return "Product Found";
        }

    }

    return "Not Found";

}

console.log(searchProduct(["Laptop","Phone","Tablet"],"Phone"));

/*
Output
Product Found
*/



// Example 5: Bank balance check

function withdraw(balance,amount){

    if(balance>=amount){

        balance-=amount;
        return balance;

    }

    return "Insufficient balance";

}

console.log(withdraw(5000,2000));

/*
Output
3000
*/