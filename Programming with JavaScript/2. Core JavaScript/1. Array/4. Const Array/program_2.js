const numbers = [10, 20, 30];

numbers.push(40);
console.log(numbers);
// Output:
// [ 10, 20, 30, 40 ]

numbers.pop();
console.log(numbers);
// Output:
// [ 10, 20, 30 ]

numbers.unshift(5);
// Output:
console.log(numbers);
// [ 5, 10, 20, 30 ]

numbers.shift();
console.log(numbers);
// Output:
// [ 10, 20, 30 ]