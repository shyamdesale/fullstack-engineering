//  7. Functions + Types

function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;


function total(...nums) {
  return nums.reduce((a,b)=>a+b,0);
}