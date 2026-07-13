// Function Copy
function update(arr) {
    let copy = [...arr];
    copy[0] = 500;

    console.log(copy);
}

let numbers = [1,2,3];

update(numbers);

console.log(numbers);

// [500, 2, 3]
// [1, 2, 3]

// Concept: Original remains unchanged.