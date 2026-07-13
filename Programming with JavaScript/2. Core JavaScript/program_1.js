let car1 = ["audi", "bmw", "mercedes"];
let car2 = car1;
console.log(car1 === car2); // true

let film1 = ["inception", "interstellar", "tenet"];
let film2 = ["inception", "interstellar", "tenet"];
console.log(film1 === film2); // false

car1.push("tesla");
console.log(car2); // ["audi", "bmw", "mercedes", "tesla"]

car1.shift();
console.log(car2); // ["bmw", "mercedes", "tesla"]