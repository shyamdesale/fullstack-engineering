const numbers = [10, 20, 10, 30, 20, 40, 50, 40];

const unique = [];

for (let i = 0; i < numbers.length; i++) {
    if (!unique.includes(numbers[i])) {
        unique.push(numbers[i]);
    }
}

console.log("Original:", numbers);
console.log("Unique:", unique);

// Output:
// Original: [ 10, 20, 10, 30, 20, 40, 50, 40 ]
// Unique: [ 10, 20, 30, 40, 50 ]