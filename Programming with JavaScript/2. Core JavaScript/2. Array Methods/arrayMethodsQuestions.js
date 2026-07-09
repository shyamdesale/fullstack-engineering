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