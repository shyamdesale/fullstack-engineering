// Object inside Array
let arr1 = [
    {name:"Ram"},
    {name:"Shyam"}
];

let arr2 = [...arr1];

arr2[0].name = "Krishna";

console.log(arr1);
console.log(arr2);

// [{name:"Krishna"}, {name:"Shyam"}]
// [{name:"Krishna"}, {name:"Shyam"}]

// Concept: Objects are still shared (shallow copy).