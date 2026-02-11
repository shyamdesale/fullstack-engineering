// 9. Shop Discount System

let amount = 1200;
let isMember = true;

let discount = amount > 1000 && isMember;

if (discount) {
  console.log("Discount applied");
} else {
  console.log("No discount");
}
