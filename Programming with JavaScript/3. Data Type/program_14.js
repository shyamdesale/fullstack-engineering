//  14. Real-world Example

const users = [
  {id:1, name:"A", age:20},
  {id:2, name:"B", age:25},
  {id:3, name:"C", age:30}
];

// get names of users age > 21
const result = users
  .filter(u => u.age > 21)
  .map(u => u.name);

console.log(result);
