/*
========================================
JavaScript Data Types Examples
========================================
*/

// Example 1: Number
let age = 21;
console.log(age);
// Output: 21



// Example 2: Floating Number
let price = 99.99;
console.log(price);
// Output: 99.99



// Example 3: String
let name = "Shyam";
console.log(name);
// Output: Shyam



// Example 4: Boolean
let isLoggedIn = true;
console.log(isLoggedIn);
// Output: true



// Example 5: Undefined
let data;
console.log(data);
// Output: undefined



// Example 6: Null
let emptyValue = null;
console.log(emptyValue);
// Output: null



// Example 7: Object
let student = {
  name: "Rahul",
  age: 20,
  branch: "CSE"
};

console.log(student);
// Output: { name: 'Rahul', age: 20, branch: 'CSE' }



// Example 8: Array
let numbers = [10,20,30];
console.log(numbers);
// Output: [10,20,30]



// Example 9: typeof operator
let score = 100;
console.log(typeof score);
// Output: number



// Example 10: typeof string
let city = "Mumbai";
console.log(typeof city);
// Output: string



// Example 11: typeof boolean
let isActive = false;
console.log(typeof isActive);
// Output: boolean



// Example 12: typeof array
let arr = [1,2,3];
console.log(typeof arr);
// Output: object (important JS behavior)



// Example 13: typeof null
console.log(typeof null);
// Output: object (JavaScript bug)



// Example 14: BigInt
let bigNumber = 12345678901234567890n;
console.log(bigNumber);
// Output: 12345678901234567890n



// Example 15: Symbol
let sym = Symbol("id");
console.log(sym);
// Output: Symbol(id)



// Example 16: Dynamic typing
let value = 10;
console.log(typeof value);

value = "JavaScript";

console.log(typeof value);

/*
Output:
number
string
*/



// Example 17: Nested Object
let user = {
  name: "Aman",
  address: {
    city: "Delhi",
    pincode: 110001
  }
};

console.log(user.address.city);
// Output: Delhi



// Example 18: Array of objects
let users = [
  {name: "Ravi", age: 21},
  {name: "Priya", age: 22}
];

console.log(users[1].name);
// Output: Priya