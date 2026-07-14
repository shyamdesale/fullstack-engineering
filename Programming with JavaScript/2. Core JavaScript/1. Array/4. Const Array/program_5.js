const numbers = [45, 78, 12, 99, 65, 88];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        secondLargest = largest;
        largest = numbers[i];
    } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
        secondLargest = numbers[i];
    }

}

console.log("Largest =", largest);
console.log("Second Largest =", secondLargest);

// Output:
// Largest = 99
// Second Largest = 88