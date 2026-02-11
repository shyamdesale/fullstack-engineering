// 10. Advanced Boolean Logic Example

let age = 22;
let hasLicense = true;
let hasHelmet = false;

let canRide = age >= 18 && hasLicense && hasHelmet;

if (canRide) {
  console.log("You can ride");
} else {
  console.log("Not allowed to ride");
}
