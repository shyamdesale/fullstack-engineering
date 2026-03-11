//  6. Advanced Array Methods

const nums = [1,2,3,4,5];

// map
const doubled = nums.map(n => n * 2);

// filter
const even = nums.filter(n => n % 2 === 0);

// reduce
const sum = nums.reduce((a,b) => a + b, 0);

console.log(doubled, even, sum);
