// Definition: 
// concat() do ya usse zyada arrays ko merge (combine) karta hai aur new array return karta hai. Original arrays change nahi hote.

let classA = ["Shyam", "Rahul"];
let classB = ["Amit", "Priya"];

let allStudents = classA.concat(classB);

console.log("Class A:", classA);
console.log("Class B:", classB);
console.log("All Students:", allStudents);

// Class A: [ 'Shyam', 'Rahul' ]
// Class B: [ 'Amit', 'Priya' ]
// All Students: [ 'Shyam', 'Rahul', 'Amit', 'Priya' ]