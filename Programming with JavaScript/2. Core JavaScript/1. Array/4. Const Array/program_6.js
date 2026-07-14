const numbers = [10, 20, 10, 30, 20, 10];

const frequency = {};

for (let i = 0; i < numbers.length; i++) {

    if (frequency[numbers[i]]) {
        frequency[numbers[i]]++;
    } else {
        frequency[numbers[i]] = 1;
    }

}

console.log(frequency);

// Output:
// { '10': 3, '20': 2, '30': 1 }