//  9. Map & Set

const map = new Map();

map.set("name", "Shyam");
map.set(1, "number key");

console.log(map.get("name"));


const set = new Set([1,2,3,3,4]);
set.add(5);
console.log(set.has(3));
