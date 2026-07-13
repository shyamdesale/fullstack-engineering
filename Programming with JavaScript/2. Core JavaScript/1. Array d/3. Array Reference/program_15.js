// Function Parameter Reference
function update(arr) {
    arr[0] = 100;
}

let numbers = [1,2,3];

update(numbers);

console.log(numbers);

// [100, 2, 3]

// Concept: Arrays are passed by reference (more precisely, the reference is passed by value).