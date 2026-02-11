const users = [
  {name:"A", age:20},
  {name:"B", age:17},
  {name:"C", age:25}
];

const adults = users
  .filter(u => u.age >= 18)
  .map(u => u.name);

console.log(adults);
