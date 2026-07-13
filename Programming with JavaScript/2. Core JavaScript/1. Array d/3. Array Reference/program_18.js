// Copy Using Loop
let arr1 = [10,20,30];
let arr2 = [];

for(let i=0;i<arr1.length;i++){
    arr2[i]=arr1[i];
}

arr2[0]=999;

console.log(arr1);
console.log(arr2);

// [10, 20, 30]
// [999, 20, 30]

// Concept: Manual copying.