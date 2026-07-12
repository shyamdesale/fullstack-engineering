// Method - 1: Using shift() and unshift()

// Question:
// Transform the initial array into the target array using array methods.
//
// Initial Array: ["January", "July", "March", "August"]
// Target Array : ["July", "June", "March", "August"]

let startMonth = ["January", "July", "March", "August"];

console.log("Initial Array:", startMonth);

// Remove the first two elements
startMonth.shift();
startMonth.shift();

// Add the required elements at the beginning
startMonth.unshift("June");
startMonth.unshift("July");

console.log("Updated Array:", startMonth);
console.log("Total Months:", startMonth.length);

// Output:
// Initial Array: [ 'January', 'July', 'March', 'August' ]
// Updated Array: [ 'July', 'June', 'March', 'August' ]
// Total Months: 4

// ----------------------------------------------------------------

// Method - 2: Using splice()

// Initial array
let startingMonth = ["January", "July", "March", "August"];

// Print the original array
console.log("Initial Array:", startingMonth);

// splice(startIndex, deleteCount, item1, item2)
//
// startIndex = 0  → Start from index 0
// deleteCount = 2 → Remove 2 elements ("January" and "July")
// "July", "June"  → Insert these elements at the same position

startingMonth.splice(0, 2, "July", "June");

// Print the updated array
console.log("Updated Array:", startingMonth);

// Print the total number of elements
console.log("Total Months:", startingMonth.length);

/*
Output:
Initial Array: [ 'January', 'July', 'March', 'August' ]
Updated Array: [ 'July', 'June', 'March', 'August' ]
Total Months: 4
*/

// splice() format: splice(startIndex, deleteCount, item1, item2, ...)

// --------------------------------------------------------------------------

// Question:
// Return the index of the "JavaScript" element after reversing the array.


// Create an array of programming languages
let languages = ["sql", "C", "JavaScript", "Python", "Java", "C++"];

// Display the original array
console.log("Initial Array:", languages);

// Reverse the order of all elements in the array
languages.reverse();

// Display the reversed array
console.log("Reversed Array:", languages);

// Find the index of the "JavaScript" element in the reversed array
console.log("index of 'JavaScript' :" , languages.indexOf("JavaScript"));

// console.log(languages.reverse().indexOf("JavaScript")); // 2 ------- Direct method to find the index of "JavaScript" after reversing the array

/*
Output:
Initial Array: [ 'sql', 'C', 'JavaScript', 'Python', 'Java', 'C++' ]
Reversed Array: [ 'C++', 'Java', 'Python', 'JavaScript', 'C', 'sql' ]
Index of 'JavaScript': 3
*/

/*
reverse() - Reverses the order of elements in the original array.

array.reverse();


indexOf(element) - Returns the index of the first matching element.
Returns -1 if the element is not found.

array.indexOf(element);
*/