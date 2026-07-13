// 1. Same Array Reference

let arr1 = [10, 20, 30];

let arr2 = arr1;

arr2[0] = 100;

console.log("arr1 =", arr1);
console.log("arr2 =", arr2);

// arr1 = [100, 20, 30]
// arr2 = [100, 20, 30]

// Concept
    // arr2 = arr1 copy nahi banata.
    // Dono same array ko point karte hain.
    // Memory Reference samajhne ka sabse important example.